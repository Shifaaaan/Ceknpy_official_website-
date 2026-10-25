'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  FileCheck2,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Calculator,
  Download,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export function AdmissionsView() {
  const [activeTab, setActiveTab] = useState<'KEAM' | 'NRI' | 'LET' | 'MTECH'>('KEAM');
  const [mathsMarks, setMathsMarks] = useState<number>(85);
  const [physicsMarks, setPhysicsMarks] = useState<number>(80);
  const [chemMarks, setChemMarks] = useState<number>(82);

  const aggregate = Math.round(((mathsMarks + physicsMarks + chemMarks) / 3) * 10) / 10;
  const isEligible = mathsMarks >= 45 && aggregate >= 45;

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions Hub 2026–2027</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Transparent Pathways to an Engineering Career
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Admissions to College of Engineering Karunagappally are regulated under the Government of Kerala
            guidelines through CEE KEAM centralized allotment, IHRD institutional quota, and lateral entry.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2.5 pb-4 border-b border-[#262A2E]">
          {[
            { id: 'KEAM', label: 'KEAM Government Merit' },
            { id: 'NRI', label: 'NRI Quota Direct Admission' },
            { id: 'LET', label: 'Lateral Entry (Diploma Holders)' },
            { id: 'MTECH', label: 'M.Tech Postgraduate' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer border ${
                activeTab === tab.id
                  ? 'bg-[#387DDD] text-white border-[#387DDD] shadow-lg shadow-[#387DDD]/25'
                  : 'bg-[#151817] text-slate-300 border-[#262A2E] hover:border-slate-500 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#151817] border border-[#262A2E] p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          {activeTab === 'KEAM' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-editorial text-3xl font-bold text-white">
                    KEAM Centralized Allotment (Govt. Merit)
                  </h2>
                  <p className="text-xs text-[#387DDD] font-bold mt-1">
                    CEE Kerala College Code: KNP &bull; Managed by IHRD
                  </p>
                </div>
                <a
                  href="https://cee.kerala.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#387DDD] hover:bg-[#2f6fc7] text-white text-xs font-bold transition"
                >
                  <span>Visit CEE Kerala Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-4 text-xs">
                <div className="p-5 rounded-2xl bg-[#080A09] border border-[#262A2E] space-y-2">
                  <div className="font-bold text-white text-sm">Step 1: Option Registration</div>
                  <p className="text-slate-400">
                    Register options on the CEE Kerala website selecting college code <strong>KNP</strong> and
                    preferred branch (CSE, ECE, AI&DS, ME, EEE).
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#080A09] border border-[#262A2E] space-y-2">
                  <div className="font-bold text-white text-sm">Step 2: Trial & Allotment Memo</div>
                  <p className="text-slate-400">
                    Download allotment memo issued by CEE and remit the required token fee at specified SBT /
                    post offices.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#080A09] border border-[#262A2E] space-y-2">
                  <div className="font-bold text-white text-sm">Step 3: Document Verification</div>
                  <p className="text-slate-400">
                    Report to CEK Karunagappally administrative block with original 10+2 mark sheets, transfer
                    certificate, and conduct certificate.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'NRI' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-3xl font-bold text-white">
                  NRI Quota Direct Counseling & Spot Admission
                </h2>
                <p className="text-xs text-[#387DDD] font-bold mt-1">
                  Direct Spot Allotment at CEK Administrative Block
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                As per Government orders, up to 15% of approved seats in B.Tech programmes are earmarked for
                candidates sponsored by Non-Resident Indians. KEAM entrance rank is not mandatory; admission is
                based purely on qualifying marks in Higher Secondary Mathematics, Physics, and Chemistry.
              </p>

              <div className="p-6 rounded-2xl bg-[#080A09] border border-[#262A2E] space-y-3 text-xs">
                <h4 className="font-bold text-white text-sm">Mandatory Documents for NRI Admission:</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>NRI Sponsorship Affidavit attested by Indian Embassy or Notary.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Copy of Sponsor&apos;s Passport, Visa / Resident Card, and Employment Certificate.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Original +2 Higher Secondary mark sheet showing minimum 45% aggregate in PCM.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Transfer Certificate (TC) and Migration Certificate from the institution last attended.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'LET' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-3xl font-bold text-white">
                  Lateral Entry for Polytechnic Diploma Holders
                </h2>
                <p className="text-xs text-[#387DDD] font-bold mt-1">
                  Direct Entry to 3rd Semester (Second Year B.Tech)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Candidates with a 3-year Engineering Diploma approved by the State Board of Technical Education
                are eligible for direct admission to the 2nd year (Semester 3) via the Kerala Lateral Entry
                Entrance Examination (LET) conducted by the Directorate of Technical Education (DTE).
              </p>
            </div>
          )}

          {activeTab === 'MTECH' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-3xl font-bold text-white">
                  M.Tech Postgraduate Admissions (KTU)
                </h2>
                <p className="text-xs text-[#387DDD] font-bold mt-1">
                  2-Year Research-Integrated Master of Technology
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Admissions to M.Tech in Computer Science & Engineering are coordinated centrally through the DTE
                Kerala allotment portal. Valid GATE score holders receive preference and AICTE postgraduate
                stipends where applicable.
              </p>
            </div>
          )}
        </div>

        {/* Interactive Eligibility Evaluator */}
        <div className="bg-[#151817] border border-[#262A2E] p-8 sm:p-10 rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-[#387DDD]" />
            <h3 className="font-editorial text-2xl font-bold text-white">
              B.Tech Academic Eligibility Evaluator (PCM Calculator)
            </h3>
          </div>

          <p className="text-xs text-slate-300">
            Verify whether your Higher Secondary / CBSE Class XII scores meet the AICTE and KTU minimum cutoff.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Mathematics Score: {mathsMarks}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={mathsMarks}
                onChange={e => setMathsMarks(Number(e.target.value))}
                className="w-full accent-[#387DDD] cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Physics Score: {physicsMarks}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={physicsMarks}
                onChange={e => setPhysicsMarks(Number(e.target.value))}
                className="w-full accent-[#387DDD] cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Chemistry / CS Score: {chemMarks}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={chemMarks}
                onChange={e => setChemMarks(Number(e.target.value))}
                className="w-full accent-[#387DDD] cursor-pointer"
              />
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
              isEligible
                ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                : 'bg-rose-950/40 border-rose-800 text-rose-300'
            }`}
          >
            <div>
              <div className="text-sm font-bold">
                Computed Aggregate: {aggregate}% &bull; Mathematics: {mathsMarks}%
              </div>
              <p className="text-xs mt-1">
                {isEligible
                  ? 'Eligible for Kerala B.Tech engineering admissions through KEAM merit list or NRI quota counseling.'
                  : 'Does not satisfy the minimum 45% aggregate threshold for standard engineering admissions.'}
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#080A09] border border-white/20 text-xs font-bold">
              {isEligible ? 'STATUS: QUALIFIED' : 'STATUS: BELOW CUTOFF'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
