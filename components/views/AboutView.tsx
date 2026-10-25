'use client';

import React from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Building2,
  ShieldCheck,
  Award,
  History,
  Target,
  Users,
  Compass,
  MapPin,
  CheckCircle,
} from 'lucide-react';

export function AboutView() {
  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Institutional Profile</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            About College of Engineering Karunagappally
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Founded under the Institute of Human Resources Development (IHRD), an autonomous agency established
            by the Government of Kerala, CEK has been a trusted benchmark in higher engineering education for
            over a quarter of a century.
          </p>
        </div>

        {/* Hero Architectural Showcase (Reference Image 3: Actual CEK Block-A photograph) */}
        <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-[#262A2E] shadow-2xl">
          <Image
            src={PHOTO_LIBRARY.CEK_CAMPUS_HERO.url}
            alt={PHOTO_LIBRARY.CEK_CAMPUS_HERO.alt}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#F5E9D8] uppercase tracking-wider block">
                Administrative & Computer Science Block-A
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Thodiyoor Campus Architecture
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#080A09]/80 backdrop-blur-md text-xs text-slate-300 border border-[#262A2E]">
              Authentic Kerala Terracotta Heritage
            </span>
          </div>
        </div>

        {/* Pillars: Legacy, Governance, Vision */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#387DDD]/10 border border-[#387DDD]/30 flex items-center justify-center text-[#387DDD]">
              <History className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">25-Year Heritage</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Established in 1999–2000 to foster technical competence in Kollam district. The college has
              grown into an NBA-accredited institution with modern computing clusters and global alumni.
            </p>
          </div>

          <div className="bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">IHRD Governance</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Governed by the Institute of Human Resources Development, ensuring government-regulated fee
              structures, transparent merit admissions via KEAM, and strict adherence to AICTE and KTU standards.
            </p>
          </div>

          <div className="bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">Vision & Mission</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To produce principled, skilled engineers endowed with analytical rigor, ethical values, and
              innovative drive to meet the changing needs of society and global industry.
            </p>
          </div>
        </div>

        {/* Principal Leadership Feature */}
        <div className="bg-[#151817] border border-[#262A2E] rounded-3xl p-8 sm:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#387DDD]">
              <span>Institutional Leadership</span>
            </div>
            <h3 className="font-editorial text-3xl font-bold text-white">
              Message from Principal Dr. Smitha Dharan
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-[#387DDD] pl-4 py-1">
              &ldquo;Engineering education at CEK is defined by our commitment to experiential learning. Whether
              it is developing agricultural rovers in our IEDC cell, winning global IEEE awards, or pushing
              upstream open-source code from our computing labs, we create an environment where curiosity is
              valued and nurtured.&rdquo;
            </p>
            <div className="text-xs text-slate-400 pt-2">
              Dr. Smitha Dharan &bull; Ph.D. in Computer Science &bull; Principal, CEK Karunagappally
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#080A09] border border-[#262A2E] p-6 rounded-2xl space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider border-b border-[#262A2E] pb-2">
              Quick Institutional Facts
            </h4>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Managing Agency</span>
              <span className="text-white font-semibold">IHRD Kerala</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Affiliation</span>
              <span className="text-white font-semibold">APJ AKTU</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Approval</span>
              <span className="text-white font-semibold">AICTE Approved</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Accreditation</span>
              <span className="text-amber-400 font-bold">NBA (CSE Tier II)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
