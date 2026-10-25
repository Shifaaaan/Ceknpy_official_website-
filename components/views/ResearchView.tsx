'use client';

import React from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Lightbulb,
  Award,
  Cpu,
  FileCheck2,
  ExternalLink,
  Rocket,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export function ResearchView() {
  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>Research & Innovation Division</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Applied Research, Patents & Incubation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            At CEK, technological discovery moves from laboratory breadboards to real-world deployment. Our
            research programs are supported by the Kerala Startup Mission (KSUM), IEEE Kerala Section, and
            APJ Abdul Kalam Technological University funding.
          </p>
        </div>

        {/* Featured Research Card: Agro Rover */}
        <div className="bg-[#151817] border border-[#262A2E] rounded-3xl overflow-hidden grid lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[400px]">
            <Image
              src={PHOTO_LIBRARY.RESEARCH_ROVER_PROTOTYPE.url}
              alt="Autonomous Agro-Diagnostic Rover"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                IEDC Incubated Patent
              </span>
              <h2 className="font-editorial text-3xl font-bold text-white leading-tight">
                Autonomous Agro-Diagnostic Multi-Spectral Rover
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Developed jointly by students from the Department of Mechanical Engineering and AI & Data Science.
                The solar-powered robotic rover autonomously scans coconut and spice plantation canopies across
                Kollam district to detect early fungal blight using edge computer vision.
              </p>
            </div>

            <div className="space-y-2 text-xs border-t border-[#262A2E] pt-4 text-slate-400">
              <div className="flex justify-between">
                <span>Funding Agency:</span>
                <span className="text-white font-bold">Kerala Startup Mission (₹2 Lakh)</span>
              </div>
              <div className="flex justify-between">
                <span>Patent Status:</span>
                <span className="text-emerald-400 font-bold">Provisional Indian Patent Filed</span>
              </div>
              <div className="flex justify-between">
                <span>Department Leads:</span>
                <span className="text-white">Mechanical & AI&DS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars: IEEE, IEDC, Publications */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#387DDD]/10 border border-[#387DDD]/30 flex items-center justify-center text-[#387DDD]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">IEEE Student Branch</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consistently awarded the IEEE MGA Regional Exemplary Student Branch Award. Hosts annual regional
              symposiums, international paper presentations, and Women in Engineering (WIE) leadership tracks.
            </p>
          </div>

          <div className="bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">IEDC Innovation Cell</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Functions as an on-campus pre-incubator facilitating seed grants, product validation, Intellectual
              Property (IP) guidance, and entrepreneurship bootcamps.
            </p>
          </div>

          <div className="bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-white">Scopus Publications</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Faculty and postgraduate students regularly contribute to peer-reviewed IEEE Transactions, Springer
              Lecture Notes, and international conferences in signal processing and cryptography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
