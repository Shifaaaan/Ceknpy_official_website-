'use client';

import React from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  GraduationCap,
  ShieldCheck,
  Building,
  ExternalLink,
  Heart,
  Phone,
  Mail,
} from 'lucide-react';

export function PublicFooter() {
  const { setActiveView } = useAppState();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5 text-white font-bold text-base">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span>CEK Karunagappally</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              College of Engineering Karunagappally is a premier government-managed institution under IHRD,
              Kerala, committed to rigorous engineering education and inclusive student development.
            </p>
            <div className="pt-2 text-slate-500">
              Institution Code: <strong className="text-slate-300">KNP</strong> &bull; Est. 1999
            </div>
          </div>

          {/* Col 2: Academic Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Academic Departments
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#departments" className="hover:text-sky-400 transition">
                  Computer Science & Engineering (NBA)
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-sky-400 transition">
                  Electronics & Communication
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-sky-400 transition">
                  Artificial Intelligence & Data Science
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-sky-400 transition">
                  Mechanical Engineering
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-sky-400 transition">
                  Electrical & Electronics
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-sky-400 transition">
                  Basic Sciences & Humanities
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Campus & Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#campus-voices" className="hover:text-sky-400 transition">
                  Humans of CEK (@humansofcek)
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-sky-400 transition">
                  IEEE Student Branch Karunagappally
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-sky-400 transition">
                  IEDC Innovation & Incubation Cell
                </a>
              </li>
              <li>
                <a href="#campus-voices" className="hover:text-sky-400 transition">
                  NSS Unit No. 543
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActiveView('IMS')}
                  className="hover:text-sky-400 transition cursor-pointer text-left"
                >
                  Institution Management System (IMS)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Regulatory Disclosures */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Mandatory Disclosures
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="https://ktu.edu.in/" target="_blank" rel="noreferrer" className="hover:text-sky-400 flex items-center gap-1">
                  <span>APJ Abdul Kalam Tech. University</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="http://ihrd.ac.in/" target="_blank" rel="noreferrer" className="hover:text-sky-400 flex items-center gap-1">
                  <span>IHRD Kerala Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.aicte-india.org/" target="_blank" rel="noreferrer" className="hover:text-sky-400 flex items-center gap-1">
                  <span>AICTE Approval Status</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Anti-Ragging Helpline: 1800-180-5522 (Toll Free)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} College of Engineering Karunagappally (IHRD). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Thodiyoor, Kollam, Kerala - 690568</span>
            <span>&bull;</span>
            <button
              onClick={() => setActiveView('IMS')}
              className="text-sky-400 hover:underline cursor-pointer"
            >
              IMS Portal Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
