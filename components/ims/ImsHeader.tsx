'use client';

import React from 'react';
import { useAppState } from '@/lib/store/appState';
import type { Role } from '@/lib/domain/rbac';
import {
  GraduationCap,
  ShieldAlert,
  Users,
  Calendar,
  Clock,
  BookOpen,
  FileCheck,
  History,
  ArrowLeft,
  UserCheck,
  LogOut,
  ChevronDown,
} from 'lucide-react';

export function ImsHeader() {
  const {
    currentUser,
    setCurrentUserByRole,
    setActiveView,
    imsActiveTab,
    setImsActiveTab,
  } = useAppState();

  const roles: { role: Role; label: string; desc: string }[] = [
    { role: 'ADMIN', label: 'Administrator', desc: 'Dr. Smitha Dharan (Principal)' },
    { role: 'FACULTY', label: 'Faculty / Teacher', desc: 'Prof. Deepa V (HOD CSE)' },
    { role: 'STUDENT', label: 'Enrolled Student', desc: 'Anjali Krishnan (CSE S5)' },
    { role: 'EDITOR', label: 'Content & PR Desk', desc: 'Editorial Team' },
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md sticky top-0 z-40">
      {/* Top Bar: Role Simulation & Session Identity */}
      <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('PUBLIC')}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition font-medium cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Public Website</span>
          </button>

          <span className="text-slate-500 hidden sm:inline">|</span>

          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-medium hidden sm:inline">Simulate Role:</span>
            <div className="flex items-center gap-1.5 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
              {roles.map(r => (
                <button
                  key={r.role}
                  onClick={() => setCurrentUserByRole(r.role)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition cursor-pointer ${
                    currentUser.role === r.role
                      ? 'bg-sky-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={r.desc}
                >
                  {r.role}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active User Session Details */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-semibold text-white text-xs">{currentUser.name}</div>
            <div className="text-[11px] text-slate-400 flex items-center justify-end gap-1.5">
              <span>{currentUser.email}</span>
              <span className="px-1.5 py-0.2 rounded bg-sky-950 text-sky-400 border border-sky-800 font-mono text-[10px]">
                {currentUser.role}
              </span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
            {currentUser.name.charAt(0)}
          </div>
        </div>
      </div>

      {/* Main IMS Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight text-white">CEK IMS</span>
              <span className="text-xs text-sky-400 ml-2 font-mono">v2.4.0</span>
            </div>
          </div>

          {/* Role-Aware Navigation Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto py-1 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setImsActiveTab('DASHBOARD')}
              className={`px-3 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer ${
                imsActiveTab === 'DASHBOARD'
                  ? 'bg-slate-800 text-white font-bold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            {/* Students tab: Visible to Admin and Faculty */}
            {(currentUser.role === 'ADMIN' || currentUser.role === 'FACULTY') && (
              <button
                onClick={() => setImsActiveTab('STUDENTS')}
                className={`px-3 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer ${
                  imsActiveTab === 'STUDENTS'
                    ? 'bg-slate-800 text-white font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Student Records</span>
              </button>
            )}

            {/* Attendance tab: Visible to Admin and Faculty */}
            {(currentUser.role === 'ADMIN' || currentUser.role === 'FACULTY') && (
              <button
                onClick={() => setImsActiveTab('ATTENDANCE')}
                className={`px-3 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer ${
                  imsActiveTab === 'ATTENDANCE'
                    ? 'bg-slate-800 text-white font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Attendance Engine</span>
              </button>
            )}

            {/* Timetable tab: Visible to Admin and Faculty */}
            {(currentUser.role === 'ADMIN' || currentUser.role === 'FACULTY') && (
              <button
                onClick={() => setImsActiveTab('TIMETABLE')}
                className={`px-3 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer ${
                  imsActiveTab === 'TIMETABLE'
                    ? 'bg-slate-800 text-white font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Timetable & Clashes</span>
              </button>
            )}

            {/* Editorial tab: Visible to Admin and Editor */}
            {(currentUser.role === 'ADMIN' || currentUser.role === 'EDITOR') && (
              <button
                onClick={() => setImsActiveTab('EDITORIAL')}
                className={`px-3 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer ${
                  imsActiveTab === 'EDITORIAL'
                    ? 'bg-slate-800 text-white font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <FileCheck className="w-4 h-4" />
                <span>Editorial CMS</span>
              </button>
            )}

            {/* Audit Log tab: Admin only */}
            {currentUser.role === 'ADMIN' && (
              <button
                onClick={() => setImsActiveTab('AUDIT')}
                className={`px-3 py-2 rounded-lg transition flex items-center gap-2 cursor-pointer ${
                  imsActiveTab === 'AUDIT'
                    ? 'bg-slate-800 text-white font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <History className="w-4 h-4" />
                <span>Audit Trail</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
