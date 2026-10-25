'use client';

import React, { useState } from 'react';
import { VERIFIED_CIRCULARS, CekNotice } from '@/lib/data/cekDatabase';
import {
  Bell,
  Search,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Tag,
} from 'lucide-react';

export function NoticesView() {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<'ALL' | 'Election' | 'Recruitment' | 'Academic'>('ALL');

  const filtered = VERIFIED_CIRCULARS.filter(c => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.summary.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === 'ALL' || c.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Bell className="w-4 h-4" />
            <span>Verified Statutory Disclosures & Gazetted Notices</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Official Circulars & Notifications
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Statutory election notifications, student voter rolls, candidate nomination documents, and faculty
            recruitment orders directly published on the official CEK administration portal.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#151817] border border-[#262A2E] p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circulars by title, keyword, or document category..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080A09] border border-[#262A2E] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#387DDD]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['ALL', 'Election', 'Recruitment', 'Academic'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedCat === cat
                    ? 'bg-[#387DDD] text-white border-[#387DDD]'
                    : 'bg-[#080A09] text-slate-400 border-[#262A2E] hover:text-white'
                }`}
              >
                {cat === 'ALL' ? 'All Circulars' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Circulars List */}
        <div className="space-y-4">
          {filtered.map(circ => (
            <div
              key={circ.id}
              className="bg-[#151817] border border-[#262A2E] rounded-3xl p-6 sm:p-8 space-y-4 hover:border-[#387DDD]/60 transition shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs px-2.5 py-1 rounded bg-[#387DDD]/20 text-[#387DDD] font-bold">
                      {circ.category}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 text-xs font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Official Verified PDF</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>{circ.date}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-bold text-white">{circ.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{circ.summary}</p>
              </div>

              {circ.pdfUrl && (
                <div className="pt-4 border-t border-[#262A2E] flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Source: www.ceknpy.ac.in/uploads/news/
                  </span>
                  <a
                    href={circ.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#387DDD] hover:bg-[#2f6fc7] text-white text-xs font-bold transition shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF Circular</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
