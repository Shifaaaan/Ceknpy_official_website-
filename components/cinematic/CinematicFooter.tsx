'use client';

import React from 'react';
import Image from 'next/image';
import { useAppState } from '@/lib/store/appState';
import {
  GraduationCap,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Lock,
  Camera,
  Database,
  Sparkles,
} from 'lucide-react';

interface CinematicFooterProps {
  setCurrentTab: (tab: string) => void;
}

export function CinematicFooter({ setCurrentTab }: CinematicFooterProps) {
  const { setActiveView } = useAppState();

  return (
    <footer className="bg-[#080A09] text-slate-400 text-xs border-t border-[#262A2E]">
      {/* Top Banner inside Footer: Location & Connect (Ref 1 Style) */}
      <div className="border-b border-[#262A2E] py-8 bg-[#151817]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0">
              <Image
                src="/assets/cek/cek-logo.png"
                alt="CEK Emblem"
                fill
                className="object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-editorial text-lg font-bold text-white">
                College of Engineering Karunagappally
              </div>
              <p className="text-[11px] text-slate-400">
                Managed by IHRD, Govt. of Kerala &bull; Affiliated to KTU &bull; AICTE Approved &bull; College Code:{' '}
                <span className="text-[#387DDD] font-mono font-bold">KNP</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setCurrentTab('ADMISSIONS')}
              className="px-5 py-2.5 rounded-xl bg-[#387DDD] hover:bg-[#2f6fc7] text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
            >
              Admissions 2026–2027
            </button>
            <button
              onClick={() => setActiveView('IMS')}
              className="px-5 py-2.5 rounded-xl bg-[#262A2E] hover:bg-[#32363b] text-white font-semibold text-xs border border-slate-700 transition cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5 text-[#387DDD]" />
              <span>IMS Portal Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-column Grid (Ref 1 Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: Admission */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Admission
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setCurrentTab('ADMISSIONS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Apply Online (KEAM - KNP)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('ADMISSIONS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  NRI Quota Direct Counseling
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('ADMISSIONS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Lateral Entry for Diploma
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('ADMISSIONS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Government Fee Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('ADMISSIONS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Eligibility Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Departments */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Departments
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setCurrentTab('DEPARTMENTS')}
                  className="hover:text-[#387DDD] transition text-left cursor-pointer"
                >
                  Computer Science (120 Seats - NBA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('DEPARTMENTS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Electronics & Comm. (60 Seats)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('DEPARTMENTS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Artificial Intelligence & DS (60 Seats)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('DEPARTMENTS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Mechanical Engineering (30 Seats)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('DEPARTMENTS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Electrical & Electronics (30 Seats)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('DEPARTMENTS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Department of Basic Sciences
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => setCurrentTab('FACULTY')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Verified Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('MEDIA')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Media & Video Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('INVENTORY')}
                  className="hover:text-[#387DDD] transition text-left cursor-pointer font-bold"
                >
                  Source & Asset Inventory
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('NOTICES')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Official Circulars (PDF)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentTab('PLACEMENTS')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Training & Placement Cell
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Governance & Affiliations
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://ktu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5"
                >
                  <div className="relative w-4 h-4 rounded overflow-hidden">
                    <Image src="/assets/cek/ktu-logo.png" alt="KTU" fill className="object-contain" />
                  </div>
                  <span>KTU University Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="http://ihrd.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5"
                >
                  <div className="relative w-4 h-4 rounded overflow-hidden">
                    <Image src="/assets/cek/ihrd-logo.png" alt="IHRD" fill className="object-contain" />
                  </div>
                  <span>IHRD Kerala Head Office</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://cee.kerala.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1"
                >
                  <span>CEE Kerala Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-1">
                  Anti-Ragging 24x7 Helpline: 1800-180-5522
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Campus Coordinates */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Campus Address
            </h4>
            <div className="space-y-2 text-slate-400 text-xs">
              <p className="text-white font-medium">College of Engineering Karunagappally</p>
              <p>Thodiyoor P.O., Karunagappally</p>
              <p>Kollam District, Kerala - 690523, India</p>
              <div className="pt-2 space-y-1">
                <a href="tel:04762666160" className="hover:text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#387DDD]" />
                  <span>0476 - 2666160 / 2665935</span>
                </a>
                <a href="mailto:principal@ceknpy.ac.in" className="hover:text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#387DDD]" />
                  <span>principal@ceknpy.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Proof */}
        <div className="mt-12 pt-6 border-t border-[#262A2E] flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} College of Engineering Karunagappally (IHRD). All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.instagram.com/daksha_cek/"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>@daksha_cek</span>
            </a>
            <a
              href="https://www.instagram.com/ieee_sb_cek/"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:underline"
            >
              @ieee_sb_cek
            </a>
            <a
              href="https://www.instagram.com/iedc_ceknpy/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              @iedc_ceknpy
            </a>
            <a
              href="https://www.instagram.com/humansofcek/"
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:underline flex items-center gap-1"
            >
              <Camera className="w-3 h-3" />
              <span>@humansofcek</span>
            </a>
            <button
              onClick={() => setActiveView('IMS')}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              IMS Portal Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
