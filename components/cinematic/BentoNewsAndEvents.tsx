'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Calendar as CalendarIcon,
  ArrowRight,
  Sparkles,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';

interface BentoNewsAndEventsProps {
  setCurrentTab: (tab: string) => void;
}

export function BentoNewsAndEvents({ setCurrentTab }: BentoNewsAndEventsProps) {
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<number>(28);

  const keyDates = [
    { day: 15, label: 'College Union Election Notification Published', type: 'election' },
    { day: 18, label: 'Electoral Roll 2026–27 Verification Deadline', type: 'election' },
    { day: 22, label: 'Scrutiny of Union Candidate Nominations', type: 'election' },
    { day: 28, label: 'KEAM Spot Allotment & NRI Verification', type: 'admission' },
    { day: 31, label: 'TwistHack Prototyping Showcase', type: 'event' },
  ];

  return (
    <section className="bg-[#080A09] text-white py-24 border-b border-[#262A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header in Editorial Style (Reference Image 2) */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#387DDD] uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#387DDD]" />
              <span>Campus Dispatches &bullet; News & Editorial</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
              News & Campus Chronicles
            </h2>
          </div>

          <button
            onClick={() => setCurrentTab('NOTICES')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#387DDD] hover:text-[#F5E9D8] transition cursor-pointer"
          >
            <span>View All Official Circulars (PDF Archive)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetric Bento Grid (Directly inspired by Reference Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Bento Item 1: Dominant Featured Photographic Story (Col 1 to 7) */}
          <div
            onClick={() => setCurrentTab('CAMPUS_LIFE')}
            className="md:col-span-7 relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[480px] bg-[#151817] border border-[#262A2E] group cursor-pointer flex flex-col justify-end p-6 sm:p-10 shadow-2xl"
          >
            <Image
              src="/assets/cek/event-daksha.png"
              alt="Daksha 2026 Annual Techno-Cultural Arts Fest at CEK"
              fill
              className="object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Dark Vignette Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-[#080A09]/75 to-transparent" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#387DDD] text-white text-[10px] font-bold uppercase tracking-wider">
                  Flagship Festival
                </span>
                <span className="text-xs text-slate-300 font-medium">Annual College Union Extravaganza</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-[#F5E9D8] transition">
                DAKSHA 2026: College Union Unveils South Kerala&apos;s Techno-Cultural Arts Fest
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed max-w-xl">
                Classical Kathakali recitals, inter-collegiate rock band battles, street drama, and technical
                symposia unite over 2,000 students at the Thodiyoor campus.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#387DDD] font-bold">
                <span>Explore Fest Lineup & Handles (@daksha_cek)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          </div>

          {/* Bento Item 2: Overlapping Graduate Portrait Card (Col 8 to 12) (Ref 2 Style) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div
              onClick={() => setCurrentTab('PLACEMENTS')}
              className="relative rounded-3xl overflow-hidden bg-[#151817] border border-[#262A2E] p-6 flex flex-col justify-between group cursor-pointer hover:border-[#387DDD]/60 transition min-h-[260px]"
            >
              <div className="absolute top-0 right-0 w-44 h-full overflow-hidden opacity-85 group-hover:opacity-100 transition">
                <Image
                  src="/assets/cek/event-placement.jpg"
                  alt="CEK Placement Drive"
                  fill
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151817] to-transparent" />
              </div>

              <div className="relative z-10 max-w-[65%] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#387DDD]">
                  Career Pathways
                </span>
                <h4 className="font-editorial text-2xl font-bold text-white group-hover:text-[#F5E9D8] transition leading-snug">
                  CEK Class of 2026 Records 94% Placement
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Graduates secure coveted roles at Cisco, Texas Instruments, Tata Consultancy Services, and Infosys.
                </p>
              </div>

              <div className="relative z-10 pt-4 flex items-center gap-1.5 text-xs text-[#387DDD] font-semibold">
                <span>Explore Placements Cell</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Electric Blue Quick Action Card (Reference 2 Blue Block) */}
            <div
              onClick={() => setCurrentTab('ADMISSIONS')}
              className="rounded-3xl bg-[#387DDD] text-white p-6 sm:p-7 shadow-xl flex flex-col justify-between cursor-pointer hover:bg-[#2f6fc7] transition group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                  Admissions 2026–27
                </span>
                <Sparkles className="w-5 h-5 text-[#F5E9D8]" />
              </div>

              <div className="my-4">
                <h4 className="font-editorial text-2xl sm:text-3xl font-bold leading-tight">
                  JOIN CEK 2026–27
                </h4>
                <p className="text-xs text-white/90 mt-1">
                  College Code: <span className="font-mono font-bold">KNP</span> &bull; CEE Kerala Centralized Allotment
                  and IHRD NRI Quota Direct Admissions.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-white/20">
                <span>View Guidelines & Documents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Bento Grid: Academic Calendar + Image News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Calendar Widget Tile (Inspired by Ref 2) */}
          <div className="bg-[#151817] border border-[#262A2E] rounded-3xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#262A2E]">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <CalendarIcon className="w-4 h-4 text-[#387DDD]" />
                <span>Academic Calendar</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Oct 2026</span>
            </div>

            <div className="my-3 space-y-2 text-xs">
              {keyDates.map(kd => (
                <div
                  key={kd.day}
                  onClick={() => setSelectedCalendarDate(kd.day)}
                  className={`p-2 rounded-xl transition cursor-pointer flex items-center gap-2.5 ${
                    selectedCalendarDate === kd.day
                      ? 'bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40'
                      : 'hover:bg-[#262A2E] text-slate-300'
                  }`}
                >
                  <span className="w-6 h-6 rounded-lg bg-[#262A2E] text-white flex items-center justify-center font-bold font-mono text-[11px]">
                    {kd.day}
                  </span>
                  <span className="text-[11px] font-medium line-clamp-1">{kd.label}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-[#262A2E] flex justify-between items-center">
              <span>KTU Academic Regulations</span>
              <span className="text-[#387DDD] font-bold">Odd Sem</span>
            </div>
          </div>

          {/* News Tile 1: TwistHack Hackathon */}
          <div
            onClick={() => setCurrentTab('RESEARCH')}
            className="bg-[#151817] border border-[#262A2E] rounded-3xl overflow-hidden group cursor-pointer hover:border-[#387DDD]/60 transition flex flex-col"
          >
            <div className="relative h-36 w-full">
              <Image
                src="/assets/cek/event-twisthack.jpg"
                alt="TwistHack Hackathon at CEK"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#080A09]/80 text-[#387DDD] text-[10px] font-bold backdrop-blur-sm">
                FOSS & TinkerHub
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <h5 className="font-editorial text-base font-bold text-white group-hover:text-[#F5E9D8] transition line-clamp-2">
                TwistHack: 24-Hour Hardware & Software Hackathon at CEK
              </h5>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                Student engineering teams prototype embedded systems, IoT devices, and autonomous robotics overnight.
              </p>
              <span className="text-[11px] text-[#387DDD] font-semibold pt-1 block">
                Read Hackathon Chronicle &rarr;
              </span>
            </div>
          </div>

          {/* News Tile 2: Arambh IEDC Innovation Fest */}
          <div
            onClick={() => setCurrentTab('RESEARCH')}
            className="bg-[#151817] border border-[#262A2E] rounded-3xl overflow-hidden group cursor-pointer hover:border-[#387DDD]/60 transition flex flex-col"
          >
            <div className="relative h-36 w-full">
              <Image
                src="/assets/cek/event-arambh.png"
                alt="Arambh IEDC Fest"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#080A09]/80 text-amber-400 text-[10px] font-bold backdrop-blur-sm">
                Innovation & IEDC
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <h5 className="font-editorial text-base font-bold text-white group-hover:text-[#F5E9D8] transition line-clamp-2">
                Arambh IEDC Fest: Seed Funding for Agro-Diagnostic Rover
              </h5>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                Multidisciplinary team secures ₹2 Lakh grant from Kerala Startup Mission for agricultural robotics.
              </p>
              <span className="text-[11px] text-[#387DDD] font-semibold pt-1 block">
                Explore IEDC Cell (@iedc_ceknpy) &rarr;
              </span>
            </div>
          </div>

          {/* News Tile 3: Holi Campus Celebration (@humansofcek) */}
          <div
            onClick={() => setCurrentTab('CAMPUS_LIFE')}
            className="bg-[#151817] border border-[#262A2E] rounded-3xl overflow-hidden group cursor-pointer hover:border-[#387DDD]/60 transition flex flex-col"
          >
            <div className="relative h-36 w-full">
              <Image
                src="/assets/cek/event-holi.png"
                alt="Holi Celebration at CEK"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#080A09]/80 text-pink-400 text-[10px] font-bold backdrop-blur-sm">
                @humansofcek
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <h5 className="font-editorial text-base font-bold text-white group-hover:text-[#F5E9D8] transition line-clamp-2">
                Courtyard Colors: College Union Welcomes Spring Semester
              </h5>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                Vibrant celebrations under the terracotta roofs of Block-A as captured by student storytellers.
              </p>
              <span className="text-[11px] text-pink-400 font-semibold pt-1 block">
                View Campus Photo Story &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
