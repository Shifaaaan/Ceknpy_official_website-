'use client';

import React from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Building2,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

interface AboutEditorialSectionProps {
  setCurrentTab: (tab: string) => void;
}

export function AboutEditorialSection({ setCurrentTab }: AboutEditorialSectionProps) {
  const quickLinks = [
    { title: 'Institutional History & 25-Year Milestone', tab: 'ABOUT' },
    { title: 'Vision, Mission & Quality Policy', tab: 'ABOUT' },
    { title: "Principal's Desk & Leadership Profile", tab: 'ABOUT' },
    { title: 'Board of Governors & IHRD Oversight', tab: 'ABOUT' },
    { title: 'Central Library with 17,500+ Volumes', tab: 'ABOUT' },
    { title: 'Contact Office & Campus Map', tab: 'ABOUT' },
  ];

  return (
    <section className="relative py-24 bg-[#080A09] text-white border-b border-[#262A2E] overflow-hidden">
      {/* Background Architectural Canvas (Actual CEK Block-A Campus Photo - Ref 3) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={PHOTO_LIBRARY.CEK_CAMPUS_HERO.url}
          alt={PHOTO_LIBRARY.CEK_CAMPUS_HERO.alt}
          fill
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A09] via-[#080A09]/80 to-[#080A09]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Overlapping Crisp White Architectural Information Card (Reference Image 1 Style) */}
          <div className="lg:col-span-6 bg-white text-[#080A09] rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#387DDD]">
                  ESTD. 1999–2000 &bull; Govt. of Kerala
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#080A09]">
                  About CEK Karunagappally
                </h3>
              </div>
              <div className="relative w-12 h-12 rounded-2xl bg-white border border-slate-200 p-1 flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src="/assets/cek/cek-logo.png"
                  alt="CEK Emblem"
                  fill
                  className="object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              College of Engineering Karunagappally (CEK) was established under the aegis of the{' '}
              <strong>Institute of Human Resources Development (IHRD)</strong>, an autonomous institution
              governed by the Higher Education Department, Government of Kerala. Situated on a serene 25-acre
              tropical campus at Thodiyoor, CEK combines academic rigor with hands-on maker culture.
            </p>

            {/* Structured Navigation Rows with Clean Chevron (Ref 1 Style) */}
            <div className="space-y-2 pt-2">
              {quickLinks.map((ql, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTab(ql.tab)}
                  className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-slate-100 transition flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#387DDD] border-b border-slate-100 group cursor-pointer"
                >
                  <span className="group-hover:translate-x-1 transition">{ql.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#387DDD] transition" />
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8A5238]" />
                <span>Thodiyoor, Karunagappally, Kollam - 690523</span>
              </span>
              <button
                onClick={() => setCurrentTab('ABOUT')}
                className="text-[#387DDD] font-bold hover:underline"
              >
                Read Comprehensive Overview &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Highlights & Principal's Quote */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>25 Years of Technical Leadership</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                An Academic Sanctuary for Analytical Minds
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Surrounded by coastal Kerala foliage, CEK provides a focused academic sanctuary where students
                participate in national hackathons, publish original IEEE papers, and launch technology startups
                while pursuing undergraduate and postgraduate engineering degrees.
              </p>
            </div>

            {/* Principal Card Feature with Real Photo */}
            <div className="p-6 rounded-2xl bg-[#151817]/90 border border-[#262A2E] backdrop-blur-md space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#387DDD] shrink-0">
                  <Image
                    src="/assets/cek/staff-smitha.jpg"
                    alt="Dr. Smitha Dharan"
                    fill
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Dr. Smitha Dharan, Ph.D.</h4>
                  <p className="text-xs text-slate-400">Principal & Professor of Computer Science & Engineering</p>
                </div>
              </div>

              <blockquote className="text-xs text-slate-300 italic leading-relaxed border-l-2 border-[#387DDD] pl-3 py-0.5">
                &ldquo;Our vision is rooted in transforming curious engineering students into principled,
                globally competent practitioners. Through our NBA-accredited curriculum and active student
                chapters like IEEE and IEDC, we ensure every student leaves CEK ready to shape the future.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
