'use client';

import React from 'react';
import { useAppState } from '@/lib/store/appState';
import { calculateAttendancePercentage, evaluateShortage } from '@/lib/domain/attendance';
import { StudentSelfServiceView } from './StudentSelfServiceView';
import {
  Users,
  Clock,
  Calendar,
  AlertTriangle,
  FileCheck2,
  TrendingUp,
  Award,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export function ImsDashboardView() {
  const {
    currentUser,
    students,
    staff,
    attendanceRecords,
    attendanceSessions,
    editorialStories,
    setImsActiveTab,
    auditLogs,
  } = useAppState();

  // If student role, immediately render student self service view
  if (currentUser.role === 'STUDENT') {
    return <StudentSelfServiceView />;
  }

  // Compute institutional metrics
  const activeStudents = students.filter(s => s.status === 'ACTIVE');
  const shortageStudents = activeStudents.filter(s => {
    const rate = calculateAttendancePercentage(attendanceRecords, s.id);
    return rate < 75;
  });

  const pendingStories = editorialStories.filter(s => s.state === 'IN_REVIEW');
  const publishedStories = editorialStories.filter(s => s.state === 'PUBLISHED');

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 border border-slate-800 p-6 sm:p-8 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950 text-sky-400 border border-sky-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>KTU Academic Term: Odd Semester 2026–2027</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Welcome, {currentUser.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Operating as <strong className="text-sky-300">{currentUser.role}</strong> for the College of
              Engineering Karunagappally. Manage student records, verify period attendance, resolve scheduling
              conflicts, and oversee editorial storytelling.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {(currentUser.role === 'ADMIN' || currentUser.role === 'FACULTY') && (
              <button
                onClick={() => setImsActiveTab('ATTENDANCE')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-md transition cursor-pointer"
              >
                <Clock className="w-4 h-4" />
                <span>Mark Attendance</span>
              </button>
            )}

            {(currentUser.role === 'ADMIN' || currentUser.role === 'EDITOR') && (
              <button
                onClick={() => setImsActiveTab('EDITORIAL')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Review Editorial Queue</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div
          onClick={() => setImsActiveTab('STUDENTS')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition cursor-pointer space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Active Students</span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">{activeStudents.length}</div>
          <div className="text-[11px] text-slate-400 flex items-center gap-1">
            <span>Enrolled in S5 batches</span>
            <ArrowRight className="w-3 h-3 text-sky-400" />
          </div>
        </div>

        <div
          onClick={() => setImsActiveTab('ATTENDANCE')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition cursor-pointer space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">KTU Shortage Alerts</span>
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
            {shortageStudents.length}
          </div>
          <div className="text-[11px] text-slate-400">Below 75% attendance rule</div>
        </div>

        <div
          onClick={() => setImsActiveTab('ATTENDANCE')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition cursor-pointer space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Attendance Sessions</span>
            <Clock className="w-4 h-4 text-teal-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-teal-400">
            {attendanceSessions.length}
          </div>
          <div className="text-[11px] text-slate-400">Class periods logged</div>
        </div>

        <div
          onClick={() => setImsActiveTab('EDITORIAL')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition cursor-pointer space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Editorial Queue</span>
            <FileCheck2 className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">
            {pendingStories.length}
          </div>
          <div className="text-[11px] text-slate-400">Awaiting clearance / review</div>
        </div>
      </div>

      {/* Two Column Layout: Shortage Advisory & Recent Audit Activities */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Attendance Watchlist */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>KTU Attendance Shortage Watchlist (&lt; 75%)</span>
            </h3>
            <button
              onClick={() => setImsActiveTab('ATTENDANCE')}
              className="text-xs text-sky-400 hover:underline font-semibold"
            >
              Open Engine
            </button>
          </div>

          <div className="space-y-3">
            {shortageStudents.length === 0 ? (
              <div className="text-xs text-emerald-400 py-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>All active students currently meet the 75% attendance threshold.</span>
              </div>
            ) : (
              shortageStudents.map(student => {
                const rate = calculateAttendancePercentage(attendanceRecords, student.id);
                const shortage = evaluateShortage(rate);
                return (
                  <div
                    key={student.id}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{student.name}</div>
                      <div className="text-[11px] text-slate-400">
                        {student.id} &bull; {student.batchId} &bull; Mentor: {student.mentorName}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-400 text-sm">{rate}%</div>
                      <span className="text-[10px] font-semibold text-rose-400 uppercase">
                        {shortage.severity}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Recent Audit Activities */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              <span>Recent Institutional Actions</span>
            </h3>
            {currentUser.role === 'ADMIN' && (
              <button
                onClick={() => setImsActiveTab('AUDIT')}
                className="text-xs text-sky-400 hover:underline font-semibold"
              >
                Full Audit Trail
              </button>
            )}
          </div>

          <div className="space-y-3">
            {auditLogs.slice(0, 4).map(log => (
              <div
                key={log.id}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1 text-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-amber-300 font-mono font-semibold">{log.action}</span>
                  <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <div className="text-slate-200">{log.details}</div>
                <div className="text-[10px] text-slate-500">
                  Actor: {log.actorName} ({log.actorRole})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
