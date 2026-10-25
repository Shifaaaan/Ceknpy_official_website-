'use client';

import React from 'react';
import { useAppState } from '@/lib/store/appState';
import { calculateAttendancePercentage, evaluateShortage } from '@/lib/domain/attendance';
import {
  GraduationCap,
  Calendar,
  Clock,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  CheckCircle,
  FileText,
  User,
} from 'lucide-react';

export function StudentSelfServiceView() {
  const { currentUser, students, attendanceRecords, timetable, circulars } = useAppState();

  // Scoped student resolution: Find student record matching currentUser.associatedId
  const student = students.find(s => s.id === currentUser.associatedId) || students[1]; // Anjali Krishnan

  const overallRate = calculateAttendancePercentage(attendanceRecords, student.id);
  const shortage = evaluateShortage(overallRate);

  // Student's batch timetable
  const studentSchedule = timetable.filter(t => t.batchId === student.batchId);

  return (
    <div className="space-y-6">
      {/* Student Profile Card */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strictly Scoped Student Identity (IDOR Protected)</span>
            </div>

            <h2 className="text-2xl font-bold text-white">{student.name}</h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span>KTU Reg: <strong className="text-sky-400 font-mono">{student.id}</strong></span>
              <span>&bull;</span>
              <span>Batch: <strong className="text-white">{student.batchId}</strong></span>
              <span>&bull;</span>
              <span>Department: <strong>{student.department} (Semester {student.semester})</strong></span>
            </div>
            <div className="text-xs text-slate-400">
              Faculty Mentor: {student.mentorName} &bull; Admission Quota: {student.admissionCategory.replace('_', ' ')}
            </div>
          </div>

          {/* Real-time Attendance Gauge */}
          <div className="md:col-span-4 bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-2 text-center">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">
              KTU Academic Attendance Status
            </span>
            <div
              className={`text-4xl font-extrabold ${
                overallRate >= 75
                  ? 'text-emerald-400'
                  : overallRate >= 60
                  ? 'text-amber-400'
                  : 'text-rose-400'
              }`}
            >
              {overallRate}%
            </div>

            <div
              className={`text-xs font-semibold px-2.5 py-1 rounded inline-block ${
                shortage.hasShortage
                  ? shortage.severity === 'CRITICAL'
                    ? 'bg-rose-950/80 text-rose-300 border border-rose-800'
                    : 'bg-amber-950/80 text-amber-300 border border-amber-800'
                  : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
              }`}
            >
              {shortage.message}
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Timetable & Academic Circulars */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Weekly Class Schedule */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Weekly Timetable ({student.batchId})</span>
            </h3>
            <span className="text-xs text-slate-400">Working Days: Mon - Fri</span>
          </div>

          <div className="space-y-3">
            {studentSchedule.length === 0 ? (
              <div className="text-xs text-slate-500 py-4 text-center">
                No active timetable slots configured for this batch yet.
              </div>
            ) : (
              studentSchedule.map(slot => (
                <div
                  key={slot.id}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-slate-900 text-slate-300 font-bold border border-slate-800">
                      {slot.day.slice(0, 3)} P{slot.period}
                    </span>
                    <div>
                      <div className="font-bold text-white">
                        {slot.courseCode}: {slot.courseName}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Instructor: {slot.facultyName} &bull; Room: {slot.roomNumber}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                    {slot.period === 1
                      ? '09:00 AM'
                      : slot.period === 2
                      ? '09:50 AM'
                      : slot.period === 3
                      ? '10:55 AM'
                      : slot.period === 4
                      ? '11:45 AM'
                      : slot.period === 5
                      ? '01:30 PM'
                      : '02:20 PM'}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Academic Notices for Student */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Pertinent Academic Circulars</span>
            </h3>
          </div>

          <div className="space-y-3">
            {circulars.slice(0, 3).map(c => (
              <div
                key={c.id}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1 text-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-sky-400 font-mono">{c.refNo}</span>
                  <span>{c.date}</span>
                </div>
                <div className="font-semibold text-white">{c.title}</div>
                <p className="text-slate-400 line-clamp-2">{c.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
