'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  calculateAttendancePercentage,
  evaluateShortage,
  checkDuplicateSession,
  type AttendanceStatus,
} from '@/lib/domain/attendance';
import {
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Calendar,
  Save,
  ShieldCheck,
  AlertTriangle,
  History,
} from 'lucide-react';

export function AttendanceEngineView() {
  const {
    students,
    attendanceSessions,
    attendanceRecords,
    recordPeriodAttendance,
    currentUser,
  } = useAppState();

  const [selectedBatch, setSelectedBatch] = useState('CSE-S5');
  const [selectedCourse, setSelectedCourse] = useState({
    code: 'CST301',
    name: 'Formal Languages and Automata Theory',
  });
  const [sessionDate, setSessionDate] = useState('2026-10-25');
  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const [topicCovered, setTopicCovered] = useState('Context Free Grammars & Pushdown Automata');

  // Filter students enrolled in the selected batch
  const batchStudents = students.filter(s => s.batchId === selectedBatch && s.status === 'ACTIVE');

  // Local attendance marks for the session: studentId -> status
  const [marks, setMarks] = useState<Record<string, AttendanceStatus>>(() => {
    const initial: Record<string, AttendanceStatus> = {};
    batchStudents.forEach(s => {
      initial[s.id] = 'PRESENT';
    });
    return initial;
  });

  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const setStatus = (studentId: string, status: AttendanceStatus) => {
    setMarks(prev => ({ ...prev, [studentId]: status }));
  };

  const markAll = (status: AttendanceStatus) => {
    const updated: Record<string, AttendanceStatus> = {};
    batchStudents.forEach(s => {
      updated[s.id] = status;
    });
    setMarks(updated);
  };

  const handleSaveAttendance = () => {
    setFeedback(null);

    // Validate duplicate session first
    const dupCheck = checkDuplicateSession(attendanceSessions, {
      batchId: selectedBatch,
      date: sessionDate,
      period: selectedPeriod,
    });
    if (dupCheck.isDuplicate) {
      setFeedback({
        type: 'error',
        message: `Duplicate Conflict: Attendance for batch ${selectedBatch} on ${sessionDate} (Period ${selectedPeriod}) has already been recorded!`,
      });
      return;
    }

    const payload = {
      courseId: selectedCourse.code,
      courseName: selectedCourse.name,
      batchId: selectedBatch,
      date: sessionDate,
      period: selectedPeriod,
      topicCovered,
      records: batchStudents.map(s => ({
        studentId: s.id,
        status: marks[s.id] || 'PRESENT',
      })),
    };

    const res = recordPeriodAttendance(payload);
    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  // Check if current slot is already recorded
  const isCurrentlyRecorded = attendanceSessions.some(
    s => s.batchId === selectedBatch && s.date === sessionDate && s.period === selectedPeriod
  );

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-sky-400" />
            <span>KTU Compliant Period Attendance Engine</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Enforces APJ Abdul Kalam Technological University 75% attendance rule with instant duplicate period
            prevention and real-time condonation risk calculation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1.5 rounded-lg bg-sky-950/80 text-sky-300 border border-sky-800 font-medium">
            Authorized Marker: {currentUser.name}
          </span>
        </div>
      </div>

      {/* Session Configuration Card */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
          Class Session Setup
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block text-slate-400 mb-1 font-medium">Class / Batch</label>
            <select
              value={selectedBatch}
              onChange={e => {
                setSelectedBatch(e.target.value);
                // Reset marks for new batch
                const newBatch = students.filter(s => s.batchId === e.target.value && s.status === 'ACTIVE');
                const newMarks: Record<string, AttendanceStatus> = {};
                newBatch.forEach(s => (newMarks[s.id] = 'PRESENT'));
                setMarks(newMarks);
              }}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value="CSE-S5">CSE-S5 (Semester 5 Computer Science)</option>
              <option value="ECE-S5">ECE-S5 (Semester 5 Electronics)</option>
              <option value="ME-S5">ME-S5 (Semester 5 Mechanical)</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">Course Module</label>
            <select
              value={selectedCourse.code}
              onChange={e => {
                if (e.target.value === 'CST301') {
                  setSelectedCourse({ code: 'CST301', name: 'Formal Languages & Automata Theory' });
                } else if (e.target.value === 'CST303') {
                  setSelectedCourse({ code: 'CST303', name: 'Computer Networks' });
                } else {
                  setSelectedCourse({ code: 'ECT301', name: 'Digital Signal Processing' });
                }
              }}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value="CST301">CST301: Formal Languages & Automata</option>
              <option value="CST303">CST303: Computer Networks</option>
              <option value="ECT301">ECT301: Digital Signal Processing</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">Session Date</label>
            <input
              type="date"
              value={sessionDate}
              onChange={e => setSessionDate(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">Class Period (Slot)</label>
            <select
              value={selectedPeriod}
              onChange={e => setSelectedPeriod(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
            >
              <option value={1}>Period 1 (09:00 - 09:50 AM)</option>
              <option value={2}>Period 2 (09:50 - 10:40 AM)</option>
              <option value={3}>Period 3 (10:55 - 11:45 AM)</option>
              <option value={4}>Period 4 (11:45 - 12:35 PM)</option>
              <option value={5}>Period 5 (01:30 - 02:20 PM)</option>
              <option value={6}>Period 6 (02:20 - 03:10 PM)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-slate-400 mb-1 font-medium text-xs">Topic Covered Today</label>
          <input
            type="text"
            value={topicCovered}
            onChange={e => setTopicCovered(e.target.value)}
            placeholder="e.g. Regular expressions and pumping lemma for regular languages"
            className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-sky-500"
          />
        </div>

        {isCurrentlyRecorded && (
          <div className="p-3 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Notice: Period {selectedPeriod} on {sessionDate} for batch {selectedBatch} has already been logged.
              Submitting again will be blocked by duplicate session guard.
            </span>
          </div>
        )}
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
            feedback.type === 'success'
              ? 'bg-emerald-950 border border-emerald-800 text-emerald-300'
              : 'bg-rose-950 border border-rose-800 text-rose-300'
          }`}
        >
          {feedback.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Roster & Marking Area */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow">
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-bold text-white uppercase tracking-wider">
            Student Roster ({batchStudents.length} Enrolled)
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => markAll('PRESENT')}
              className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900 transition font-semibold"
            >
              Mark All Present
            </button>
            <button
              onClick={() => markAll('ABSENT')}
              className="px-2.5 py-1 rounded bg-rose-950 text-rose-400 border border-rose-800 hover:bg-rose-900 transition font-semibold"
            >
              Mark All Absent
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/50 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Reg ID</th>
                <th className="px-5 py-3.5">Student Name</th>
                <th className="px-5 py-3.5">Historical Attendance</th>
                <th className="px-5 py-3.5">Current Period Mark</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {batchStudents.map(student => {
                const currentRate = calculateAttendancePercentage(attendanceRecords, student.id);
                const shortage = evaluateShortage(currentRate);
                const currentStatus = marks[student.id] || 'PRESENT';

                return (
                  <tr key={student.id} className="hover:bg-slate-850/50 transition">
                    <td className="px-5 py-3 font-mono font-semibold text-sky-400">
                      {student.id}
                    </td>
                    <td className="px-5 py-3">
                      <div className="font-bold text-white">{student.name}</div>
                      <div className="text-[11px] text-slate-400">{student.email}</div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold ${
                            currentRate >= 75
                              ? 'text-emerald-400'
                              : currentRate >= 60
                              ? 'text-amber-400'
                              : 'text-rose-400'
                          }`}
                        >
                          {currentRate}%
                        </span>
                        {shortage.hasShortage && (
                          <span
                            className={`px-1.5 py-0.2 rounded text-[10px] font-semibold ${
                              shortage.severity === 'CRITICAL'
                                ? 'bg-rose-950 text-rose-400 border border-rose-800'
                                : 'bg-amber-950 text-amber-400 border border-amber-800'
                            }`}
                          >
                            {shortage.severity}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setStatus(student.id, 'PRESENT')}
                          className={`px-3 py-1 rounded text-xs font-semibold transition cursor-pointer ${
                            currentStatus === 'PRESENT'
                              ? 'bg-emerald-600 text-white shadow'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          P
                        </button>
                        <button
                          onClick={() => setStatus(student.id, 'ABSENT')}
                          className={`px-3 py-1 rounded text-xs font-semibold transition cursor-pointer ${
                            currentStatus === 'ABSENT'
                              ? 'bg-rose-600 text-white shadow'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          A
                        </button>
                        <button
                          onClick={() => setStatus(student.id, 'LATE')}
                          className={`px-3 py-1 rounded text-xs font-semibold transition cursor-pointer ${
                            currentStatus === 'LATE'
                              ? 'bg-amber-600 text-white shadow'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          Late
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Action Button Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={handleSaveAttendance}
            disabled={isCurrentlyRecorded}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-md ${
              isCurrentlyRecorded
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer shadow-sky-600/30'
            }`}
          >
            <Save className="w-4 h-4" />
            <span>Submit Period Attendance to Institutional Database</span>
          </button>
        </div>
      </div>
    </div>
  );
}
