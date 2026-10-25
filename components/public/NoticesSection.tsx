'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  Bell,
  Search,
  Calendar,
  AlertCircle,
  FileText,
  Filter,
} from 'lucide-react';

export function NoticesSection() {
  const { circulars } = useAppState();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredCirculars = circulars.filter(circ => {
    const matchesSearch =
      circ.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      circ.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      circ.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || circ.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="notices" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950 text-sky-400 border border-sky-800/60 text-xs font-semibold mb-3">
            <Bell className="w-4 h-4" />
            <span>Official Disclosures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Institutional Circulars & Academic Notices
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Verified university directives, examination notifications, and administrative updates for
            students, faculty, and prospective applicants.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 min-w-[280px] max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, reference number or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {['ALL', 'Academic', 'Examination', 'Admissions'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Circulars List */}
        <div className="space-y-4">
          {filteredCirculars.length === 0 ? (
            <div className="p-8 text-center text-slate-400 bg-slate-900 rounded-xl border border-slate-800 text-sm">
              No circulars found matching your search criteria.
            </div>
          ) : (
            filteredCirculars.map(circ => (
              <div
                key={circ.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-slate-700 transition space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-800/60">
                      {circ.refNo}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {circ.category}
                    </span>
                    {circ.isUrgent && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-800/60 font-semibold">
                        <AlertCircle className="w-3 h-3" />
                        <span>Urgent Action Required</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{circ.date}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {circ.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {circ.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
