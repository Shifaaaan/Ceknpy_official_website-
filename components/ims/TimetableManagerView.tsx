'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import type { DayOfWeek, TimetableEntry, TimetableConflict } from '@/lib/domain/timetable';
import {
  Calendar,
  Clock,
  Plus,
  AlertTriangle,
  CheckCircle,
  X,
  Building,
  User,
} from 'lucide-react';

export function TimetableManagerView() {
  const { timetable, addTimetableSlot, currentUser } = useAppState();
  const [selectedBatch, setSelectedBatch] = useState('CSE-S5');
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state
  const [formDay, setFormDay] = useState<DayOfWeek>('MONDAY');
  const [formPeriod, setFormPeriod] = useState<number>(1);
  const [formCourseCode, setFormCourseCode] = useState('CST301');
  const [formCourseName, setFormCourseName] = useState('Formal Languages & Automata');
  const [formBatch, setFormBatch] = useState('CSE-S5');
  const [formFacultyId, setFormFacultyId] = useState('FAC-CS-01');
  const [formFacultyName, setFormFacultyName] = useState('Prof. Deepa V');
  const [formRoom, setFormRoom] = useState('LH-101');

  const [feedback, setFeedback] = useState<{
    success: boolean;
    message: string;
    conflicts?: TimetableConflict[];
  } | null>(null);

  const days: DayOfWeek[] = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
  const periods = [1, 2, 3, 4, 5, 6];

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const res = addTimetableSlot({
      day: formDay,
      period: formPeriod,
      courseCode: formCourseCode,
      courseName: formCourseName,
      batchId: formBatch,
      facultyId: formFacultyId,
      facultyName: formFacultyName,
      roomNumber: formRoom,
    });

    if (res.success) {
      setFeedback({ success: true, message: res.message });
      setTimeout(() => {
        setShowAddModal(false);
        setFeedback(null);
      }, 1000);
    } else {
      setFeedback({
        success: false,
        message: res.message,
        conflicts: res.conflicts,
      });
    }
  };

  const isAdmin = currentUser.role === 'ADMIN';

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-400" />
            <span>Timetable Scheduling & Conflict Engine</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Automated conflict heuristics prevent teacher clashes, room double-booking, and batch overlaps.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedBatch}
            onChange={e => setSelectedBatch(e.target.value)}
            className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="CSE-S5">CSE-S5</option>
            <option value="ECE-S5">ECE-S5</option>
            <option value="ME-S5">ME-S5</option>
          </select>

          {isAdmin && (
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition cursor-pointer shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Schedule Class Slot</span>
            </button>
          )}
        </div>
      </div>

      {/* Timetable Grid View */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-4 py-3 w-28">Day / Period</th>
                {periods.map(p => (
                  <th key={p} className="px-4 py-3 min-w-[140px]">
                    Period {p}
                    <span className="block text-[10px] text-slate-500 normal-case">
                      {p === 1
                        ? '09:00 - 09:50'
                        : p === 2
                        ? '09:50 - 10:40'
                        : p === 3
                        ? '10:55 - 11:45'
                        : p === 4
                        ? '11:45 - 12:35'
                        : p === 5
                        ? '01:30 - 02:20'
                        : '02:20 - 03:10'}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {days.map(day => (
                <tr key={day} className="hover:bg-slate-850/30 transition">
                  <td className="px-4 py-4 font-bold text-white bg-slate-950/40 border-r border-slate-800/60">
                    {day}
                  </td>
                  {periods.map(p => {
                    const match = timetable.find(
                      t => t.batchId === selectedBatch && t.day === day && t.period === p
                    );

                    return (
                      <td key={p} className="px-4 py-3 align-top border-r border-slate-800/40">
                        {match ? (
                          <div className="p-2.5 rounded-lg bg-sky-950/60 border border-sky-800/70 space-y-1">
                            <div className="font-bold text-sky-300 text-xs">{match.courseCode}</div>
                            <div className="text-[11px] text-white line-clamp-1">{match.courseName}</div>
                            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                              <span>{match.facultyName}</span>
                              <span className="font-mono text-amber-400">{match.roomNumber}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="h-16 rounded border border-dashed border-slate-800/80 flex items-center justify-center text-slate-600 text-[11px]">
                            Free
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Slot Modal with Heuristic Conflict Feedback */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-sky-400" />
                <span>Schedule New Class Slot</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {feedback && (
              <div
                className={`p-4 rounded-xl text-xs font-semibold space-y-1 ${
                  feedback.success
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-rose-950 text-rose-300 border border-rose-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  {feedback.success ? (
                    <CheckCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{feedback.message}</span>
                </div>
                {feedback.conflicts && feedback.conflicts.length > 0 && (
                  <ul className="list-disc pl-5 pt-1 space-y-0.5 text-[11px] text-rose-200 font-normal">
                    {feedback.conflicts.map((c, idx) => (
                      <li key={idx}>{c.message}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            <form onSubmit={handleAddSlot} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Day of Week</label>
                  <select
                    value={formDay}
                    onChange={e => setFormDay(e.target.value as DayOfWeek)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    {days.map(d => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Period (Slot)</label>
                  <select
                    value={formPeriod}
                    onChange={e => setFormPeriod(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    {periods.map(p => (
                      <option key={p} value={p}>
                        Period {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Class Batch</label>
                  <select
                    value={formBatch}
                    onChange={e => setFormBatch(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="CSE-S5">CSE-S5</option>
                    <option value="ECE-S5">ECE-S5</option>
                    <option value="ME-S5">ME-S5</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Room / Lab Number</label>
                  <input
                    type="text"
                    required
                    value={formRoom}
                    onChange={e => setFormRoom(e.target.value)}
                    placeholder="e.g. LH-101 or CSE-LAB-1"
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Course Code</label>
                  <input
                    type="text"
                    required
                    value={formCourseCode}
                    onChange={e => setFormCourseCode(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Course Name</label>
                  <input
                    type="text"
                    required
                    value={formCourseName}
                    onChange={e => setFormCourseName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Faculty ID</label>
                  <input
                    type="text"
                    required
                    value={formFacultyId}
                    onChange={e => setFormFacultyId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Faculty Name</label>
                  <input
                    type="text"
                    required
                    value={formFacultyName}
                    onChange={e => setFormFacultyName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
                >
                  Validate & Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
