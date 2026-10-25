'use client';

import React from 'react';
import Image from 'next/image';
import { Award, GraduationCap, Users, Lightbulb, ArrowUpRight } from 'lucide-react';

interface SuccessStoriesBarProps {
  setCurrentTab: (tab: string) => void;
}

export function SuccessStoriesBar({ setCurrentTab }: SuccessStoriesBarProps) {
  return (
    <section className="bg-[#F5E9D8] text-[#080A09] py-16 border-b border-[#8A5238]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8A5238] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#8A5238]" />
            <span>Proven Institutional Outcomes</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#080A09] tracking-tight">
            Our Success Stories
          </h2>
        </div>

        {/* 4 Metric Cards in Reference 1 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#8A5238]/10 flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#080A09]">
                100%
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#F5E9D8] flex items-center justify-center text-[#8A5238]">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-[#080A09]">KTU Curriculum Alignment</div>
              <p className="text-xs text-slate-600 mt-1">
                Outcome-Based Education with NBA-Accredited computer science standards.
              </p>
            </div>
          </div>

          {/* Card 2 with Graduate Photo Highlight (Ref 1 style) */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#8A5238]/10 flex items-center gap-4 hover:shadow-md transition">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#387DDD]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                alt="Student success"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-editorial text-2xl font-bold text-[#080A09]">
                Industry Placed
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Students placed at Cisco, Infosys, TCS & Texas Instruments.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#8A5238]/10 flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#080A09]">
                1500+
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#F5E9D8] flex items-center justify-center text-[#387DDD]">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-[#080A09]">Graduate Alumni Network</div>
              <p className="text-xs text-slate-600 mt-1">
                Engineers making meaningful impact across 18 countries worldwide.
              </p>
            </div>
          </div>

          {/* Card 4 (Dark Accent CTA card from Ref 1) */}
          <div
            onClick={() => setCurrentTab('DEPARTMENTS')}
            className="bg-[#080A09] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between hover:bg-[#151817] transition cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#387DDD]">
                Academic Catalog
              </span>
              <div className="w-8 h-8 rounded-full bg-[#387DDD] text-white flex items-center justify-center group-hover:scale-110 transition">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-[#F5E9D8] transition">
                Explore All Programmes
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                B.Tech, M.Tech, and Lateral Entry curricula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
