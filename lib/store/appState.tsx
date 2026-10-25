'use client';

import React, { createContext, useContext, useState } from 'react';
import type { Role, UserSession } from '../domain/rbac';
import {
  INITIAL_USERS,
  INITIAL_DEPARTMENTS,
  INITIAL_STUDENTS,
  INITIAL_STAFF,
  INITIAL_TIMETABLE,
  INITIAL_ATTENDANCE_SESSIONS,
  INITIAL_ATTENDANCE_RECORDS,
  INITIAL_EDITORIAL_STORIES,
  INITIAL_OFFICIAL_CIRCULARS,
  INITIAL_AUDIT_LOGS,
  type DepartmentInfo,
  type StudentRecord,
  type StaffRecord,
  type AuditLogEntry,
} from '../data/seedData';
import type { AttendanceSession, AttendanceRecord } from '../domain/attendance';
import { checkDuplicateSession } from '../domain/attendance';
import type { TimetableEntry, TimetableConflict } from '../domain/timetable';
import { detectTimetableConflicts } from '../domain/timetable';
import type { EditorialItem, EditorialState } from '../domain/editorial';
import { canTransitionEditorialState, validatePublicationReadiness } from '../domain/editorial';

interface AppStateContextType {
  // Current user & role
  currentUser: UserSession;
  allUsers: UserSession[];
  setCurrentUserByRole: (role: Role) => void;
  activeView: 'PUBLIC' | 'IMS';
  setActiveView: (view: 'PUBLIC' | 'IMS') => void;
  imsActiveTab: 'DASHBOARD' | 'STUDENTS' | 'ATTENDANCE' | 'TIMETABLE' | 'EDITORIAL' | 'AUDIT';
  setImsActiveTab: (tab: 'DASHBOARD' | 'STUDENTS' | 'ATTENDANCE' | 'TIMETABLE' | 'EDITORIAL' | 'AUDIT') => void;

  // Data Collections
  departments: DepartmentInfo[];
  students: StudentRecord[];
  staff: StaffRecord[];
  timetable: TimetableEntry[];
  attendanceSessions: AttendanceSession[];
  attendanceRecords: AttendanceRecord[];
  editorialStories: EditorialItem[];
  circulars: typeof INITIAL_OFFICIAL_CIRCULARS;
  auditLogs: AuditLogEntry[];

  // Mutations
  addStudent: (student: Omit<StudentRecord, 'id'> & { id?: string }) => { success: boolean; message: string };
  archiveStudent: (studentId: string) => { success: boolean; message: string };
  recordPeriodAttendance: (sessionData: {
    courseId: string;
    courseName: string;
    batchId: string;
    date: string;
    period: number;
    topicCovered?: string;
    records: { studentId: string; status: 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED'; remarks?: string }[];
  }) => { success: boolean; message: string };
  addTimetableSlot: (entry: Omit<TimetableEntry, 'id'>) => {
    success: boolean;
    conflicts: TimetableConflict[];
    message: string;
  };
  transitionEditorial: (
    storyId: string,
    targetState: EditorialState
  ) => { success: boolean; errors?: string[]; message: string };
  createEditorialItem: (
    item: Omit<EditorialItem, 'id' | 'createdAt' | 'updatedAt' | 'state' | 'authorId' | 'authorName'>
  ) => { success: boolean; message: string };
  publishCircular: (circular: { title: string; category: string; content: string; isUrgent: boolean }) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [allUsers] = useState<UserSession[]>(INITIAL_USERS);
  const [currentUser, setCurrentUser] = useState<UserSession>(INITIAL_USERS[0]); // Default: Admin Dr. Smitha
  const [activeView, setActiveView] = useState<'PUBLIC' | 'IMS'>('PUBLIC');
  const [imsActiveTab, setImsActiveTab] = useState<
    'DASHBOARD' | 'STUDENTS' | 'ATTENDANCE' | 'TIMETABLE' | 'EDITORIAL' | 'AUDIT'
  >('DASHBOARD');

  const [departments] = useState<DepartmentInfo[]>(INITIAL_DEPARTMENTS);
  const [students, setStudents] = useState<StudentRecord[]>(INITIAL_STUDENTS);
  const [staff] = useState<StaffRecord[]>(INITIAL_STAFF);
  const [timetable, setTimetable] = useState<TimetableEntry[]>(INITIAL_TIMETABLE);
  const [attendanceSessions, setAttendanceSessions] = useState<AttendanceSession[]>(INITIAL_ATTENDANCE_SESSIONS);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>(INITIAL_ATTENDANCE_RECORDS);
  const [editorialStories, setEditorialStories] = useState<EditorialItem[]>(INITIAL_EDITORIAL_STORIES);
  const [circulars, setCirculars] = useState(INITIAL_OFFICIAL_CIRCULARS);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(INITIAL_AUDIT_LOGS);

  const logAudit = (action: string, entityType: string, entityId: string, details: string) => {
    const newEntry: AuditLogEntry = {
      id: `aud-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action,
      entityType,
      entityId,
      details,
    };
    setAuditLogs(prev => [newEntry, ...prev]);
  };

  const setCurrentUserByRole = (role: Role) => {
    const matched = allUsers.find(u => u.role === role) || allUsers[0];
    setCurrentUser(matched);
    // If student switched to IMS, ensure tab is DASHBOARD
    if (role === 'STUDENT' && imsActiveTab !== 'DASHBOARD') {
      setImsActiveTab('DASHBOARD');
    }
  };

  const addStudent = (studentData: Omit<StudentRecord, 'id'> & { id?: string }) => {
    if (currentUser.role !== 'ADMIN') {
      return { success: false, message: 'Forbidden: Only administrators can register student records.' };
    }
    const newId = studentData.id || `KNP23CS${Math.floor(100 + Math.random() * 900)}`;
    if (students.some(s => s.id === newId)) {
      return { success: false, message: `Registration ID ${newId} already exists in university database.` };
    }
    const newRecord: StudentRecord = {
      ...studentData,
      id: newId,
    };
    setStudents(prev => [newRecord, ...prev]);
    logAudit('CREATE_STUDENT', 'StudentRecord', newId, `Added student ${newRecord.name} (${newRecord.batchId})`);
    return { success: true, message: `Student ${newRecord.name} successfully registered with KTU ID ${newId}.` };
  };

  const archiveStudent = (studentId: string) => {
    if (currentUser.role !== 'ADMIN') {
      return { success: false, message: 'Forbidden: Only administrators can archive student records.' };
    }
    setStudents(prev =>
      prev.map(s => (s.id === studentId ? { ...s, status: s.status === 'ARCHIVED' ? 'ACTIVE' : 'ARCHIVED' } : s))
    );
    logAudit('TOGGLE_ARCHIVE_STUDENT', 'StudentRecord', studentId, `Toggled archive status for student ${studentId}.`);
    return { success: true, message: `Student ${studentId} status updated.` };
  };

  const recordPeriodAttendance = (sessionData: {
    courseId: string;
    courseName: string;
    batchId: string;
    date: string;
    period: number;
    topicCovered?: string;
    records: { studentId: string; status: 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED'; remarks?: string }[];
  }) => {
    // 1. Authorization check
    if (currentUser.role === 'STUDENT' || currentUser.role === 'EDITOR') {
      return { success: false, message: 'Forbidden: Current user lacks attendance recording permissions.' };
    }
    if (currentUser.role === 'FACULTY' && !currentUser.assignedBatchIds?.includes(sessionData.batchId)) {
      return {
        success: false,
        message: `Forbidden: You are not assigned to batch ${sessionData.batchId}.`,
      };
    }

    // 2. Collision / Duplicate period check
    const duplicateCheck = checkDuplicateSession(attendanceSessions, {
      batchId: sessionData.batchId,
      date: sessionData.date,
      period: sessionData.period,
    });
    if (duplicateCheck.isDuplicate) {
      return {
        success: false,
        message: `Duplicate Error: Attendance for batch ${sessionData.batchId} on ${sessionData.date} period ${sessionData.period} has already been logged.`,
      };
    }

    // 3. Create session & records
    const newSessionId = `sess-${Date.now()}`;
    const newSession: AttendanceSession = {
      id: newSessionId,
      courseId: sessionData.courseId,
      courseName: sessionData.courseName,
      batchId: sessionData.batchId,
      facultyId: currentUser.associatedId || currentUser.id,
      date: sessionData.date,
      period: sessionData.period,
      topicCovered: sessionData.topicCovered,
    };

    const newRecords: AttendanceRecord[] = sessionData.records.map((r, idx) => ({
      id: `rec-${Date.now()}-${idx}`,
      sessionId: newSessionId,
      studentId: r.studentId,
      status: r.status,
      remarks: r.remarks,
    }));

    setAttendanceSessions(prev => [newSession, ...prev]);
    setAttendanceRecords(prev => [...prev, ...newRecords]);

    const presentCount = sessionData.records.filter(r => r.status === 'PRESENT').length;
    logAudit(
      'RECORD_ATTENDANCE',
      'AttendanceSession',
      newSessionId,
      `Recorded period ${sessionData.period} attendance for ${sessionData.batchId} (${sessionData.courseId}). ${presentCount}/${sessionData.records.length} present.`
    );

    return {
      success: true,
      message: `Successfully logged attendance for ${sessionData.batchId} (Period ${sessionData.period}).`,
    };
  };

  const addTimetableSlot = (entryData: Omit<TimetableEntry, 'id'>) => {
    if (currentUser.role !== 'ADMIN') {
      return {
        success: false,
        conflicts: [],
        message: 'Forbidden: Only administrators can modify institutional timetables.',
      };
    }

    const proposed: TimetableEntry = {
      ...entryData,
      id: `tt-${Date.now()}`,
    };

    const conflicts = detectTimetableConflicts(timetable, proposed);
    if (conflicts.length > 0) {
      return {
        success: false,
        conflicts,
        message: `Scheduling Conflict: ${conflicts[0].message}`,
      };
    }

    setTimetable(prev => [...prev, proposed]);
    logAudit(
      'ADD_TIMETABLE_ENTRY',
      'TimetableEntry',
      proposed.id,
      `Scheduled ${proposed.courseCode} for ${proposed.batchId} on ${proposed.day} period ${proposed.period} (${proposed.roomNumber}).`
    );

    return {
      success: true,
      conflicts: [],
      message: `Successfully scheduled ${proposed.courseCode} for ${proposed.batchId}.`,
    };
  };

  const transitionEditorial = (storyId: string, targetState: EditorialState) => {
    const item = editorialStories.find(s => s.id === storyId);
    if (!item) {
      return { success: false, message: 'Story not found.' };
    }

    // 1. Role permission check
    const transitionCheck = canTransitionEditorialState(item.state, targetState, currentUser.role);
    if (!transitionCheck.allowed) {
      return { success: false, message: transitionCheck.reason || 'Unauthorized editorial transition.' };
    }

    // 2. Publication gatekeeper
    if (targetState === 'PUBLISHED') {
      const gateCheck = validatePublicationReadiness(item);
      if (!gateCheck.isReady) {
        return {
          success: false,
          errors: gateCheck.errors,
          message: `Cannot publish: Gatekeeper requirements failed (${gateCheck.errors.join('; ')}).`,
        };
      }
    }

    setEditorialStories(prev =>
      prev.map(s =>
        s.id === storyId
          ? {
              ...s,
              state: targetState,
              approvedBy: targetState === 'APPROVED' ? currentUser.name : s.approvedBy,
              publishedAt: targetState === 'PUBLISHED' ? new Date().toISOString() : s.publishedAt,
              updatedAt: new Date().toISOString(),
            }
          : s
      )
    );

    logAudit(
      'EDITORIAL_TRANSITION',
      'EditorialStory',
      storyId,
      `Transitioned story "${item.title}" from ${item.state} to ${targetState}.`
    );

    return { success: true, message: `Story status updated to ${targetState}.` };
  };

  const createEditorialItem = (
    itemData: Omit<EditorialItem, 'id' | 'createdAt' | 'updatedAt' | 'state' | 'authorId' | 'authorName'>
  ) => {
    if (currentUser.role === 'STUDENT') {
      return { success: false, message: 'Forbidden: Students cannot submit editorial items directly.' };
    }

    const newItem: EditorialItem = {
      ...itemData,
      id: `story-${Date.now()}`,
      state: currentUser.role === 'ADMIN' ? 'APPROVED' : 'DRAFT',
      authorId: currentUser.id,
      authorName: currentUser.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setEditorialStories(prev => [newItem, ...prev]);
    logAudit('CREATE_EDITORIAL_ITEM', 'EditorialStory', newItem.id, `Created editorial item: "${newItem.title}".`);

    return {
      success: true,
      message: `Editorial piece "${newItem.title}" created in ${newItem.state} state.`,
    };
  };

  const publishCircular = (data: { title: string; category: string; content: string; isUrgent: boolean }) => {
    if (currentUser.role !== 'ADMIN' && currentUser.role !== 'EDITOR') return;
    const newCirc = {
      id: `CIRC-2026-${Math.floor(200 + Math.random() * 800)}`,
      refNo: `CEK/PR/${new Date().getFullYear()}-${Math.floor(10 + Math.random() * 90)}`,
      title: data.title,
      date: new Date().toISOString().split('T')[0],
      category: data.category,
      isUrgent: data.isUrgent,
      content: data.content,
    };
    setCirculars(prev => [newCirc, ...prev]);
    logAudit('PUBLISH_CIRCULAR', 'Circular', newCirc.id, `Published circular: "${data.title}"`);
  };

  return (
    <AppStateContext.Provider
      value={{
        currentUser,
        allUsers,
        setCurrentUserByRole,
        activeView,
        setActiveView,
        imsActiveTab,
        setImsActiveTab,
        departments,
        students,
        staff,
        timetable,
        attendanceSessions,
        attendanceRecords,
        editorialStories,
        circulars,
        auditLogs,
        addStudent,
        archiveStudent,
        recordPeriodAttendance,
        addTimetableSlot,
        transitionEditorial,
        createEditorialItem,
        publishCircular,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
