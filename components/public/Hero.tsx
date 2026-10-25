'use client';

import React from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export function PublicHero() {
  const { setActiveView } = useAppState();

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-20 border-b border-slate-800">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-600/40 text-sky-300 text-xs font-semibold tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Celebrating 25+ Years of Technological Excellence in Kerala</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Rigor,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300">
                Human Innovation.
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Established under the <strong>Institute of Human Resources Development (IHRD)</strong>,
              Government of Kerala, the <strong>College of Engineering Karunagappally (CEK)</strong> fosters
              scholarly excellence, high-impact research, and an empowering student community in Kollam.
            </p>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NBA Accredited (CSE)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>KTU Affiliated</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>AICTE Approved</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#departments"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5"
              >
                <span>Explore Departments</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition"
              >
                <span>Admissions & KEAM</span>
              </a>

              <button
                onClick={() => setActiveView('IMS')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 font-semibold text-sm border border-indigo-700/50 transition cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Open IMS Portal</span>
              </button>
            </div>
          </div>

          {/* Institutional Highlights Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-800/90 border border-slate-700 p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/70 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-300 font-bold text-sm">
                    CEK
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">Principal&apos;s Desk</h2>
                    <p className="text-xs text-slate-400">Dr. Smitha Dharan, Ph.D.</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 font-semibold">
                  Official Message
                </span>
              </div>

              <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-sky-500 pl-4 py-1">
                &ldquo;At Karunagappally, our goal is to cultivate engineers who balance analytical depth with
                creative responsibility. Through student-led platforms like our global-award-winning IEEE
                branch, the IEDC incubator, and campus storytelling from @humansofcek, CEK thrives on
                authentic learning.&rdquo;
              </blockquote>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70">
                  <div className="text-2xl font-bold text-sky-400">6</div>
                  <div className="text-xs text-slate-400 font-medium">Academic Departments</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70">
                  <div className="text-2xl font-bold text-teal-400">1999</div>
                  <div className="text-xs text-slate-400 font-medium">Year Established</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70">
                  <div className="text-2xl font-bold text-indigo-400">1500+</div>
                  <div className="text-xs text-slate-400 font-medium">Undergrad & Postgrad Alumni</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70">
                  <div className="text-2xl font-bold text-amber-400">NBA</div>
                  <div className="text-xs text-slate-400 font-medium">Accreditation Certified</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-700/50">
                <span>Thodiyoor, Karunagappally, Kollam</span>
                <span className="text-sky-400 font-medium">Code: KNP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
