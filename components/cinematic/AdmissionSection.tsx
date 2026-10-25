'use client';

import React, { useState } from 'react';
import {
  FileText,
  CheckCircle,
  Download,
  Phone,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Calendar,
  AlertCircle,
} from 'lucide-react';

interface AdmissionSectionProps {
  setCurrentTab: (tab: string) => void;
}

export function AdmissionSection({ setCurrentTab }: AdmissionSectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<'MENU' | 'GUIDE' | 'CONTACT' | 'FAQ'>('MENU');

  const actionCards = [
    {
      title: 'Apply Online',
      desc: 'Centralized CEE Kerala KEAM allotment portal or CEK direct spot registration.',
      href: 'https://cee.kerala.gov.in/',
      isExternal: true,
      tag: 'CEE Kerala',
    },
    {
      title: 'Admission Advertisement',
      desc: 'Official prospectus for B.Tech, M.Tech, NRI Quota, and Lateral Entry 2026–27.',
      tab: 'ADMISSIONS',
      tag: 'Prospectus 2026',
    },
    {
      title: 'Instructions for Applicant',
      desc: 'Required certificates, medical fitness norms, and photo specifications.',
      tab: 'ADMISSIONS',
      tag: 'Guidelines',
    },
    {
      title: 'NRI Sponsorship Affidavit',
      desc: 'Download format for NRI parent or close relative affidavit with embassy seal.',
      tab: 'ADMISSIONS',
      tag: 'Download Format',
    },
    {
      title: 'Lateral Entry (LET) Criteria',
      desc: 'Direct 3rd semester admission guidelines for polytechnic engineering diploma holders.',
      tab: 'ADMISSIONS',
      tag: 'Diploma LET',
    },
    {
      title: 'Fee Structure & Concessions',
      desc: 'Semester-wise government subsidized fee schedule with SC/ST/OEC grants.',
      tab: 'ADMISSIONS',
      tag: 'Subsidized Fee',
    },
  ];

  return (
    <section className="bg-[#387DDD] text-white py-20 relative overflow-hidden">
      {/* Geometric Islamic-style geometric architectural grid inspired by Reference 1 */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Geometric Crest Motif & Heading (Ref 1 Style) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#F5E9D8]" />
              <span>Academic Year 2026–2027</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Admissions & Enrollment
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              College of Engineering Karunagappally admits students across 6 engineering disciplines through
              CEE Kerala (KEAM), NRI institutional quota, and Diploma Lateral Entry under the Higher Education
              Department, Government of Kerala.
            </p>

            {/* Sub-navigation tabs (Ref 1 style) */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setActiveSubTab('MENU')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeSubTab === 'MENU'
                    ? 'bg-white text-[#387DDD] shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Admission Menu
              </button>
              <button
                onClick={() => setActiveSubTab('GUIDE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeSubTab === 'GUIDE'
                    ? 'bg-white text-[#387DDD] shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Eligibility Rules
              </button>
              <button
                onClick={() => setActiveSubTab('CONTACT')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeSubTab === 'CONTACT'
                    ? 'bg-white text-[#387DDD] shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Spot Admission Desk
              </button>
            </div>

            {/* Quick Fact Banner */}
            <div className="p-4 rounded-2xl bg-[#080A09]/40 border border-white/20 space-y-1 text-xs">
              <div className="font-bold text-[#F5E9D8]">CEE KEAM College Code: KNP</div>
              <p className="text-white/80">
                Merit seats allotted through Centralized Allotment Process (CAP) conducted by CEE Kerala.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Structured Action Cards in 2x3 Grid (Ref 1 Style) */}
          <div className="lg:col-span-7">
            {activeSubTab === 'MENU' && (
              <div className="grid sm:grid-cols-2 gap-4">
                {actionCards.map((card, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (card.isExternal) {
                        window.open(card.href, '_blank');
                      } else if (card.tab) {
                        setCurrentTab(card.tab);
                      }
                    }}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 p-5 rounded-2xl transition cursor-pointer flex flex-col justify-between group space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/20 text-white">
                          {card.tag}
                        </span>
                        {card.isExternal ? (
                          <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-white" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 group-hover:text-white transition" />
                        )}
                      </div>
                      <h4 className="font-editorial text-xl font-bold text-white group-hover:text-[#F5E9D8] transition">
                        {card.title}
                      </h4>
                      <p className="text-xs text-white/80 leading-relaxed mt-1">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSubTab === 'GUIDE' && (
              <div className="bg-[#080A09]/60 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4 text-xs">
                <h4 className="font-editorial text-2xl font-bold text-white">
                  Academic Eligibility Standards (KTU / AICTE)
                </h4>
                <div className="space-y-3 text-white/90">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5E9D8] block">B.Tech First Year (HSE / CBSE):</span>
                    <p>
                      Pass in Higher Secondary Examination of the Board of Higher Secondary Education, Kerala or
                      examinations recognized equivalent thereto, with 45% marks in Mathematics, Physics, and
                      Chemistry put together (40% for reserved categories).
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5E9D8] block">Lateral Entry (Semester 3):</span>
                    <p>
                      Candidates who have passed 3-year Engineering Diploma examination with minimum 45% marks from
                      AICTE-approved state technical boards.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5E9D8] block">M.Tech (Postgraduate):</span>
                    <p>
                      B.Tech in Computer Science / Electronics or equivalent with minimum 60% aggregate and valid
                      GATE score (non-GATE candidates considered as per DTE Kerala guidelines).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === 'CONTACT' && (
              <div className="bg-[#080A09]/60 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4 text-xs">
                <h4 className="font-editorial text-2xl font-bold text-white">
                  Admission Guidance & Spot Allotment Desk
                </h4>
                <p className="text-white/90 leading-relaxed">
                  Visit the Administrative Block, College of Engineering Karunagappally, Thodiyoor, Kollam.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Phone className="w-4 h-4 text-[#F5E9D8]" />
                    <span>Admissions Officer: +91 476 2580555 / +91 94471 20101</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span>Working Hours: Monday to Saturday, 9:00 AM – 4:30 PM IST</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
