'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  FileCheck2,
  HelpCircle,
  Calculator,
  Compass,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export function AdmissionsSection() {
  const [eligibilityCategory, setEligibilityCategory] = useState<'KEAM' | 'NRI' | 'LET'>('KEAM');
  const [mathsMarks, setMathsMarks] = useState<number>(85);
  const [physicsMarks, setPhysicsMarks] = useState<number>(80);
  const [chemMarks, setChemMarks] = useState<number>(82);

  const aggregate = Math.round(((mathsMarks + physicsMarks + chemMarks) / 3) * 10) / 10;
  const isEligible = mathsMarks >= 45 && aggregate >= 45;

  return (
    <section id="admissions" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950 text-emerald-400 border border-emerald-800/60 text-xs font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions Hub 2026–2027</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Pathways to an Engineering Career
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Admissions to College of Engineering Karunagappally are regulated under the Government of Kerala
            guidelines through CEE KEAM, IHRD management quota, and lateral entry programs.
          </p>
        </div>

        {/* Admission Pathways Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pathway 1: KEAM Merit */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-xl font-bold text-white">KEAM Government Merit Quota</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Allocated centrally by the Commissioner for Entrance Examinations (CEE), Kerala, based on the
                Engineering rank list published under KEAM.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>College Code: <strong>KNP</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subsidized Government Fee Structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Reservation benefits for SC/ST/OEC/SEBC</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800">
              <a
                href="https://cee.kerala.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
              >
                <span>CEE Kerala Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Pathway 2: NRI Quota */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-xl font-bold text-white">NRI Quota Direct Admission</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct spot admission conducted directly by CEK for candidates sponsored by Non-Resident Indians,
                strictly adhering to AICTE and KTU norms.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>No KEAM rank requirement (Qualifying +2 marks)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>NRI Sponsorship Affidavit required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Direct Counseling at CEK Admin Office</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800">
              <a
                href="#notices"
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                <span>View NRI Spot Circular</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Pathway 3: Lateral Entry */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Lateral Entry (LET)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct admission into the 2nd year (Semester 3) of B.Tech programmes for eligible 3-year Engineering
                Diploma holders through DTE Kerala LET rank list.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>AICTE-recognized 3-year Diploma required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Allotment via DTE Kerala LET portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Special bridge modules in Mathematics</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-semibold"
              >
                <span>Contact Admissions Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Eligibility & Cutoff Evaluator */}
        <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Calculator className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white">
              B.Tech Academic Eligibility Evaluator (Kerala HSE / CBSE)
            </h3>
          </div>

          <p className="text-xs text-slate-300 mb-6">
            Under AICTE and KTU criteria, candidates must achieve at least 45% aggregate in Mathematics, Physics,
            and Chemistry/Biotechnology/Computer Science in Higher Secondary Examination (40% for reserved categories).
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Mathematics Score (%): {mathsMarks}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={mathsMarks}
                onChange={e => setMathsMarks(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Physics Score (%): {physicsMarks}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={physicsMarks}
                onChange={e => setPhysicsMarks(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Chemistry / CS Score (%): {chemMarks}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={chemMarks}
                onChange={e => setChemMarks(Number(e.target.value))}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${
              isEligible
                ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
            }`}
          >
            <div>
              <div className="text-sm font-bold">
                Computed PCM Aggregate: {aggregate}% &bull; Mathematics: {mathsMarks}%
              </div>
              <div className="text-xs mt-0.5">
                {isEligible
                  ? 'Eligible for Kerala B.Tech admissions through KEAM merit list or NRI quota counseling.'
                  : 'Does not satisfy the minimum 45% aggregate threshold for standard engineering admissions.'}
              </div>
            </div>

            <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700">
              Status: {isEligible ? 'QUALIFIED' : 'BELOW CUTOFF'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
