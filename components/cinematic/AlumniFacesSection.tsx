'use client';

import React from 'react';
import Image from 'next/image';
import { FACULTY_LEADERSHIP_SHOWCASE } from '@/lib/data/photoLibrary';
import { ArrowRight, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';

interface AlumniFacesSectionProps {
  setCurrentTab: (tab: string) => void;
}

export function AlumniFacesSection({ setCurrentTab }: AlumniFacesSectionProps) {
  return (
    <section className="bg-[#F5E9D8] text-[#080A09] py-24 border-b border-[#8A5238]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8A5238] uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Mentorship & Doctoral Leadership</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#080A09] tracking-tight">
            Scholars Shaping Engineers
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Meet the experienced professors, department heads, and researchers at CEK guiding KTU curricula,
            doctoral scholars, and innovative student engineering prototypes.
          </p>
        </div>

        {/* Real Faculty Cards Grid (Reference Image 1 Style with Cream Background) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {FACULTY_LEADERSHIP_SHOWCASE.map((leader, idx) => (
            <div
              key={idx}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-[#8A5238]/15 shadow-sm hover:shadow-xl hover:border-[#387DDD] transition duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover:scale-105 group-hover:border-[#387DDD] transition duration-300 shrink-0">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-base text-[#080A09] group-hover:text-[#387DDD] transition">
                      {leader.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                  <div className="text-xs font-semibold text-[#8A5238]">{leader.designation}</div>
                  <div className="text-[11px] text-slate-500 leading-tight">{leader.qualification}</div>
                </div>
              </div>

              <blockquote className="text-xs text-slate-700 italic border-l-2 border-[#8A5238]/40 pl-3 py-1 mb-4 leading-relaxed">
                &ldquo;{leader.quote}&rdquo;
              </blockquote>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-bold">
                  Verified Official Profile
                </span>
                <a
                  href={leader.source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#387DDD] hover:underline font-medium"
                >
                  <span>ceknpy.ac.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setCurrentTab('FACULTY')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8A5238] hover:bg-[#72432e] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition cursor-pointer hover:-translate-y-0.5"
          >
            <span>Browse Complete Faculty Directory (65+ Members)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentTab('INVENTORY')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#080A09] border border-slate-300 font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <span>View Source & Asset Inventory</span>
          </button>
        </div>
      </div>
    </section>
  );
}
