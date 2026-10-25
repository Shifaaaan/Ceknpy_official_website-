'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import { calculateAttendancePercentage, evaluateShortage } from '@/lib/domain/attendance';
import {
  Users,
  Search,
  UserPlus,
  Archive,
  ArchiveRestore,
  Filter,
  CheckCircle,
  AlertTriangle,
  X,
  Plus,
} from 'lucide-react';

export function StudentDirectoryView() {
  const { students, attendanceRecords, addStudent, archiveStudent, currentUser } = useAppState();
  const [search, setSearch] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('ALL');
  const [showArchived, setShowArchived] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState<{
    id: string;
    name: string;
    batchId: string;
    department: string;
    semester: number;
    email: string;
    phone: string;
    admissionCategory: 'KEAM_MERIT' | 'NRI_QUOTA' | 'LATERAL_ENTRY';
    mentorName: string;
  }>({
    id: '',
    name: '',
    batchId: 'CSE-S5',
    department: 'CSE',
    semester: 5,
    email: '',
    phone: '',
    admissionCategory: 'KEAM_MERIT',
    mentorName: 'Prof. Deepa V',
  });
  const [formFeedback, setFormFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  const isAdmin = currentUser.role === 'ADMIN';

  // Scoped view for faculty
  const visibleStudents = students.filter(s => {
    // If faculty, filter to assigned batches unless admin
    if (currentUser.role === 'FACULTY' && currentUser.assignedBatchIds) {
      if (!currentUser.assignedBatchIds.includes(s.batchId)) return false;
    }

    if (!showArchived && s.status === 'ARCHIVED') return false;
    if (showArchived && s.status !== 'ARCHIVED') return false;

    if (selectedBatch !== 'ALL' && s.batchId !== selectedBatch) return false;

    const query = search.toLowerCase();
    return (
      s.name.toLowerCase().includes(query) ||
      s.id.toLowerCase().includes(query) ||
      s.email.toLowerCase().includes(query)
    );
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setFormFeedback(null);
    if (!formData.name || !formData.email) {
      setFormFeedback({ type: 'error', message: 'Name and email are mandatory.' });
      return;
    }

    const res = addStudent({
      name: formData.name,
      id: formData.id || undefined,
      batchId: formData.batchId,
      department: formData.department,
      semester: Number(formData.semester),
      email: formData.email,
      phone: formData.phone || '+91 94471 00000',
      status: 'ACTIVE',
      admissionYear: 2023,
      admissionCategory: formData.admissionCategory,
      mentorName: formData.mentorName,
    });

    if (res.success) {
      setFormFeedback({ type: 'success', message: res.message });
      setTimeout(() => {
        setShowAddModal(false);
        setFormFeedback(null);
        setFormData({
          id: '',
          name: '',
          batchId: 'CSE-S5',
          department: 'CSE',
          semester: 5,
          email: '',
          phone: '',
          admissionCategory: 'KEAM_MERIT',
          mentorName: 'Prof. Deepa V',
        });
      }, 1200);
    } else {
      setFormFeedback({ type: 'error', message: res.message });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-400" />
            <span>Institutional Student Registry</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {currentUser.role === 'ADMIN'
              ? 'Administrator full register access: manage enrollment, attendance thresholds, and student archiving.'
              : `Faculty scoped view: showing students in assigned batches (${currentUser.assignedBatchIds?.join(', ')}).`}
          </p>
        </div>

        {isAdmin && (
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition cursor-pointer shadow-md"
          >
            <UserPlus className="w-4 h-4" />
            <span>Register New Student</span>
          </button>
        )}
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by student name, KTU reg ID, or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedBatch}
            onChange={e => setSelectedBatch(e.target.value)}
            className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          >
            <option value="ALL">All Batches</option>
            <option value="CSE-S5">CSE-S5</option>
            <option value="ECE-S5">ECE-S5</option>
            <option value="ME-S5">ME-S5</option>
          </select>

          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showArchived}
              onChange={e => setShowArchived(e.target.checked)}
              className="accent-sky-500"
            />
            <span>Show Archived Only</span>
          </label>
        </div>
      </div>

      {/* Student Registry Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">KTU Reg ID</th>
                <th className="px-5 py-3.5">Student Name</th>
                <th className="px-5 py-3.5">Batch / Dept</th>
                <th className="px-5 py-3.5">Attendance Rate</th>
                <th className="px-5 py-3.5">Admission Cat.</th>
                <th className="px-5 py-3.5">Status</th>
                {isAdmin && <th className="px-5 py-3.5 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {visibleStudents.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-500">
                    No student records found matching the filter criteria.
                  </td>
                </tr>
              ) : (
                visibleStudents.map(student => {
                  const rate = calculateAttendancePercentage(attendanceRecords, student.id);
                  const shortage = evaluateShortage(rate);

                  return (
                    <tr key={student.id} className="hover:bg-slate-850/50 transition">
                      <td className="px-5 py-3.5 font-mono font-semibold text-sky-400">
                        {student.id}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="font-bold text-white">{student.name}</div>
                        <div className="text-[11px] text-slate-400">{student.email}</div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 font-medium">
                          {student.batchId}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-bold ${
                              rate >= 75
                                ? 'text-emerald-400'
                                : rate >= 60
                                ? 'text-amber-400'
                                : 'text-rose-400'
                            }`}
                          >
                            {rate}%
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
                      <td className="px-5 py-3.5 text-slate-400">
                        {student.admissionCategory.replace('_', ' ')}
                      </td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            student.status === 'ACTIVE'
                              ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/60'
                              : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                      {isAdmin && (
                        <td className="px-5 py-3.5 text-right">
                          <button
                            onClick={() => archiveStudent(student.id)}
                            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
                            title={student.status === 'ACTIVE' ? 'Archive Student Record' : 'Restore Student Record'}
                          >
                            {student.status === 'ACTIVE' ? (
                              <Archive className="w-4 h-4 text-amber-400" />
                            ) : (
                              <ArchiveRestore className="w-4 h-4 text-emerald-400" />
                            )}
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-sky-400" />
                <span>Register Student Record</span>
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formFeedback && (
              <div
                className={`p-3 rounded-lg text-xs font-medium flex items-center gap-2 ${
                  formFeedback.type === 'success'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-rose-950 text-rose-300 border border-rose-800'
                }`}
              >
                {formFeedback.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                )}
                <span>{formFeedback.message}</span>
              </div>
            )}

            <form onSubmit={handleRegister} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-medium">Student Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohith M"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">KTU Reg No. (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. KNP23CS050"
                    value={formData.id}
                    onChange={e => setFormData({ ...formData, id: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Batch / Class</label>
                  <select
                    value={formData.batchId}
                    onChange={e => setFormData({ ...formData, batchId: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="CSE-S5">CSE-S5</option>
                    <option value="ECE-S5">ECE-S5</option>
                    <option value="ME-S5">ME-S5</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Institutional Email *</label>
                <input
                  type="email"
                  required
                  placeholder="rohith.cs23@ceknpy.ac.in"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Admission Quota</label>
                  <select
                    value={formData.admissionCategory}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        admissionCategory: e.target.value as 'KEAM_MERIT' | 'NRI_QUOTA' | 'LATERAL_ENTRY',
                      })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="KEAM_MERIT">KEAM Merit</option>
                    <option value="NRI_QUOTA">NRI Quota</option>
                    <option value="LATERAL_ENTRY">Lateral Entry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Mentor Faculty</label>
                  <input
                    type="text"
                    value={formData.mentorName}
                    onChange={e => setFormData({ ...formData, mentorName: e.target.value })}
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
                  Confirm Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
