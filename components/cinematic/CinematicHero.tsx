'use client';

import React from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  ArrowRight,
  GraduationCap,
  Building,
  Award,
  Sparkles,
  MapPin,
  ChevronRight,
  Compass,
} from 'lucide-react';

interface CinematicHeroProps {
  setCurrentTab: (tab: string) => void;
}

export function CinematicHero({ setCurrentTab }: CinematicHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#080A09] text-white">
      {/* Primary Campus Architectural Hero Background (Reference Image 3: Actual CEK Block-A photograph) */}
      <div className="relative w-full h-[640px] sm:h-[720px] lg:h-[800px] overflow-hidden">
        <Image
          src={PHOTO_LIBRARY.CEK_CAMPUS_HERO.url}
          alt={PHOTO_LIBRARY.CEK_CAMPUS_HERO.alt}
          fill
          priority
          className="object-cover object-center transform scale-105 hover:scale-100 transition duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Vignette Overlay (Dark bottom gradient with subtle top shading for legibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/60 to-[#080A09]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A09]/90 via-[#080A09]/50 to-transparent" />

        {/* Electric Blue Horizontal Accent Line (Reference Image 2 style) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#387DDD] via-[#387DDD] to-transparent z-10" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-32 sm:pb-36 z-20">
          <div className="max-w-3xl space-y-5">
            {/* Kerala Architectural Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080A09]/80 border border-[#8A5238]/60 backdrop-blur-md text-[#F5E9D8] text-xs font-semibold tracking-wide shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#8A5238]" />
              <span>Thodiyoor Campus, Karunagappally &bull; Est. 1999–2000</span>
            </div>

            {/* Editorial Serif Display Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08]">
              Engineering Rigor,{' '}
              <span className="italic font-normal text-[#F5E9D8]">
                Kerala Heritage.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl text-shadow">
              Under the <strong>Institute of Human Resources Development (IHRD)</strong>, Government of Kerala,
              CEK delivers NBA-accredited technical curricula, award-winning IEEE research, and an empowering
              student maker ecosystem.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                onClick={() => setCurrentTab('DEPARTMENTS')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#387DDD] hover:bg-[#2f6fc7] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#387DDD]/30 transition cursor-pointer hover:-translate-y-0.5"
              >
                <span>Explore Departments</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentTab('ADMISSIONS')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F5E9D8] hover:bg-white text-[#080A09] font-bold text-xs uppercase tracking-wider shadow-lg transition cursor-pointer hover:-translate-y-0.5"
              >
                <span>KEAM & NRI Admissions</span>
              </button>

              <button
                onClick={() => setCurrentTab('ABOUT')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#080A09]/80 hover:bg-[#262A2E] text-slate-200 font-semibold text-xs border border-slate-700/80 backdrop-blur-md transition cursor-pointer"
              >
                <Building className="w-4 h-4 text-[#387DDD]" />
                <span>About Campus</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Quick-Discovery Bento Tiles (Inspired by Reference 2) */}
      <div className="relative -mt-20 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Tile 1 */}
          <div
            onClick={() => setCurrentTab('ADMISSIONS')}
            className="group bg-[#080A09] border border-[#262A2E] hover:border-[#387DDD]/60 p-6 rounded-2xl shadow-2xl transition cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#387DDD]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#387DDD]/10 border border-[#387DDD]/30 flex items-center justify-center text-[#387DDD]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Scholarships & Fees
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#387DDD] transition">
              Government Merit & Concessions
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Subsidized fee structures under CEE Kerala guidelines with full fee concession for eligible SC, ST,
              OEC, and SEBC categories.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#387DDD] font-semibold">
              <span>View Fee Structure</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Tile 2 */}
          <div
            onClick={() => setCurrentTab('ABOUT')}
            className="group bg-[#080A09] border border-[#262A2E] hover:border-[#8A5238]/60 p-6 rounded-2xl shadow-2xl transition cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#8A5238]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#8A5238]/10 border border-[#8A5238]/30 flex items-center justify-center text-[#8A5238]">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Our Campus
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#F5E9D8] transition">
              Thodiyoor Architectural Heritage
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              A serene 25-acre green academic environment featuring traditional Kerala tiled architecture,
              central computing facilities, and modern departmental labs.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#F5E9D8] font-semibold">
              <span>Campus Infrastructure</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Tile 3 */}
          <div
            onClick={() => setCurrentTab('DEPARTMENTS')}
            className="group bg-[#080A09] border border-[#262A2E] hover:border-[#387DDD]/60 p-6 rounded-2xl shadow-2xl transition cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#387DDD]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#387DDD]/10 border border-[#387DDD]/30 flex items-center justify-center text-[#387DDD]">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                NBA Accredited
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#387DDD] transition">
              Academic Curricula & Labs
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              6 specialised departments with Outcome-Based Education (OBE) under KTU, AICTE approval, and 24+
              advanced experimentation laboratories.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-[#387DDD] font-semibold">
              <span>Explore All 6 Depts</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
