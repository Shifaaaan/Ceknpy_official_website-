'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  History,
  Shield,
  Filter,
  Clock,
  UserCheck,
  Search,
} from 'lucide-react';

export function AuditLogView() {
  const { auditLogs } = useAppState();
  const [filterAction, setFilterAction] = useState('ALL');

  const filteredLogs =
    filterAction === 'ALL'
      ? auditLogs
      : auditLogs.filter(log => log.action === filterAction);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <History className="w-5 h-5 text-sky-400" />
            <span>Immutable Institutional Audit Ledger</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Tamper-evident record of consequential administrative actions, attendance sessions, student
            registration, and editorial publications.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={filterAction}
            onChange={e => setFilterAction(e.target.value)}
            className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Actions</option>
            <option value="RECORD_ATTENDANCE">Attendance Recorded</option>
            <option value="CREATE_STUDENT">Student Created</option>
            <option value="TOGGLE_ARCHIVE_STUDENT">Archive Toggled</option>
            <option value="ADD_TIMETABLE_ENTRY">Timetable Scheduled</option>
            <option value="EDITORIAL_TRANSITION">Editorial Transition</option>
            <option value="PUBLISH_CIRCULAR">Circular Published</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Timestamp</th>
                <th className="px-5 py-3.5">Actor</th>
                <th className="px-5 py-3.5">Action</th>
                <th className="px-5 py-3.5">Entity Target</th>
                <th className="px-5 py-3.5">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-850/30 transition">
                  <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400">
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="font-semibold text-white">{log.actorName}</div>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-950 text-sky-400 border border-sky-800">
                      {log.actorRole}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-amber-300">
                    {log.action}
                  </td>
                  <td className="px-5 py-3.5 text-slate-400 font-mono text-[11px]">
                    {log.entityType} ({log.entityId})
                  </td>
                  <td className="px-5 py-3.5 text-slate-200">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
