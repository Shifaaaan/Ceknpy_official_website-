'use client';

import React from 'react';
import Image from 'next/image';
import {
  Camera,
  ExternalLink,
  Sparkles,
  Award,
  Flame,
  ArrowRight,
} from 'lucide-react';

interface CampusLifeMosaicProps {
  setCurrentTab: (tab: string) => void;
}

export function CampusLifeMosaic({ setCurrentTab }: CampusLifeMosaicProps) {
  return (
    <section className="bg-[#080A09] text-white py-24 border-b border-[#262A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Verified Community Handles */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 uppercase tracking-wider mb-2">
              <Camera className="w-4 h-4" />
              <span>Campus Culture & Verified Community Storytelling</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Humans of CEK & Campus Life
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Real moments from the Thodiyoor campus: overnight hackathons, open-source commits, cultural dance
              recitals, and lively courtyard gatherings. Documented across verified student media handles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://www.instagram.com/daksha_cek/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-950/70 text-purple-200 border border-purple-800/60 text-xs font-bold hover:bg-purple-900/70 transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>@daksha_cek</span>
              <ExternalLink className="w-3 h-3 text-purple-400" />
            </a>

            <a
              href="https://www.instagram.com/ieee_sb_cek/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-950/70 text-sky-200 border border-sky-800/60 text-xs font-bold hover:bg-sky-900/70 transition"
            >
              <span>@ieee_sb_cek</span>
              <ExternalLink className="w-3 h-3 text-sky-400" />
            </a>

            <a
              href="https://www.instagram.com/iedc_ceknpy/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-950/70 text-emerald-200 border border-emerald-800/60 text-xs font-bold hover:bg-emerald-900/70 transition"
            >
              <span>@iedc_ceknpy</span>
              <ExternalLink className="w-3 h-3 text-emerald-400" />
            </a>

            <a
              href="https://www.instagram.com/humansofcek/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-950/70 text-pink-200 border border-pink-800/60 text-xs font-bold hover:bg-pink-900/70 transition"
            >
              <Camera className="w-3.5 h-3.5 text-pink-400" />
              <span>@humansofcek</span>
              <ExternalLink className="w-3 h-3 text-pink-400" />
            </a>
          </div>
        </div>

        {/* Photography Mosaic (Varied dimensions, Reference 2 Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large Wide Photo - Holi in Courtyard */}
          <div
            onClick={() => setCurrentTab('CAMPUS_LIFE')}
            className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[360px] bg-[#151817] border border-[#262A2E] group cursor-pointer"
          >
            <Image
              src="/assets/cek/event-holi.png"
              alt="Holi Celebration at CEK Campus"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wider">
                @humansofcek &bull; Verified Campus Capture
              </span>
              <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
                Courtyard Joy: College Union Welcomes the Semester
              </h4>
              <p className="text-xs text-slate-200 line-clamp-2 max-w-xl">
                &ldquo;Under the terracotta roofs and palm foliage of Block-A, CEK students celebrate unity,
                diversity, and deep campus friendships across all batches.&rdquo;
              </p>
            </div>
          </div>

          {/* Card 2: Vertical Fest Card - Daksha 2026 */}
          <div
            onClick={() => setCurrentTab('CAMPUS_LIFE')}
            className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[360px] bg-[#151817] border border-[#262A2E] group flex flex-col justify-end p-6 cursor-pointer"
          >
            <Image
              src="/assets/cek/event-daksha.png"
              alt="Daksha Arts Fest"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/60 to-transparent" />
            <div className="relative z-10 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Annual Arts Fest &bull; @daksha_cek
              </span>
              <h4 className="font-editorial text-xl font-bold text-white">
                DAKSHA 2026: Cultural Harmony
              </h4>
              <p className="text-xs text-slate-300">
                Classical Kathakali, Mohiniyattam, rock band battles, drama, and street performances.
              </p>
            </div>
          </div>

          {/* Card 3: IEEE Chapter Event */}
          <div
            onClick={() => setCurrentTab('RESEARCH')}
            className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] bg-[#151817] border border-[#262A2E] group p-6 flex flex-col justify-between cursor-pointer"
          >
            <Image
              src="/assets/cek/event-ieee.jpeg"
              alt="IEEE Student Branch CEK"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/75 to-[#080A09]/40" />
            <div className="relative z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-[#080A09] text-[10px] font-bold uppercase tracking-wider">
                IEEE Student Branch &bull; @ieee_sb_cek
              </span>
            </div>
            <div className="relative z-10 space-y-1">
              <h4 className="font-editorial text-xl font-bold text-white">
                Technical Chapters & Global MGA Honors
              </h4>
              <p className="text-xs text-slate-300">
                PELS, ComSoc, and Computer Society driving student workshops across Kollam district.
              </p>
            </div>
          </div>

          {/* Card 4: TwistHack 24-Hour Hackathon */}
          <div
            onClick={() => setCurrentTab('RESEARCH')}
            className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[300px] bg-[#151817] border border-[#262A2E] group p-6 sm:p-8 flex flex-col justify-end cursor-pointer"
          >
            <Image
              src="/assets/cek/event-twisthack.jpg"
              alt="TwistHack 24-Hour Hackathon at CEK"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/70 to-transparent" />
            <div className="relative z-10 space-y-2 max-w-xl">
              <span className="px-2.5 py-0.5 rounded-full bg-[#387DDD] text-white text-[10px] font-bold uppercase tracking-wider">
                Hackathon Sprint &bull; FOSS & TinkerHub
              </span>
              <h4 className="font-editorial text-2xl font-bold text-white">
                TwistHack: 24 Hours of Hardware & Software Invention
              </h4>
              <p className="text-xs text-slate-300">
                Teams building robotics, agricultural IoT rovers, and kernel modules overnight with faculty mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
