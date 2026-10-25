'use client';

import React from 'react';
import {
  Lightbulb,
  Award,
  Cpu,
  Compass,
  FileCheck,
  Zap,
  Globe,
  Rocket,
} from 'lucide-react';

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-950 text-teal-400 border border-teal-800/60 text-xs font-semibold mb-3">
            <Lightbulb className="w-4 h-4" />
            <span>Innovation & Incubation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research Centers & Entrepreneurship Ecosystem
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            At CEK, applied engineering translates into prototypes. Through government grants, IEEE student
            workshops, and IEDC seed funding, students turn capstone projects into scalable ventures.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">IEDC Innovation Cell</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Backed by the Kerala Startup Mission (KSUM). Provides prototyping grants, mentor networks, and
              hardware lab access for student inventions in agritech, assistive devices, and renewable energy.
            </p>
            <div className="text-xs text-teal-400 font-semibold pt-2">
              &bull; 14+ Prototypes Funded &bull; 2 Provisional Patents
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">IEEE Student Branch</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consistently awarded the IEEE MGA Regional Exemplary Student Branch Award. Organizes international
              workshops, Women in Engineering (WIE) tracks, and South India hackathons.
            </p>
            <div className="text-xs text-sky-400 font-semibold pt-2">
              &bull; Global MGA Award Winner &bull; Active WIE Affinity Group
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Applied Publications</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Faculty and postgraduate scholars regularly publish in peer-reviewed IEEE, Springer, and Elsevier
              venues across machine learning, wireless communications, and power systems.
            </p>
            <div className="text-xs text-amber-400 font-semibold pt-2">
              &bull; 40+ Publications in Scopus &bull; KTU Sponsored Research
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
