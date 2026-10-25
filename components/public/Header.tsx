'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  GraduationCap,
  ShieldCheck,
  Building2,
  Calendar,
  Compass,
  FileText,
  Phone,
  LayoutDashboard,
  Menu,
  X,
  UserCheck,
} from 'lucide-react';

export function PublicHeader() {
  const { setActiveView, currentUser, setCurrentUserByRole } = useAppState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-md">
      {/* Top Utility Banner: Governance & Affiliation */}
      <div className="bg-slate-950 px-4 py-1.5 text-xs border-b border-slate-800/60 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              IHRD, Govt. of Kerala Institution
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">
              Affiliated to APJ Abdul Kalam Technological University (KTU)
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-amber-400 font-medium">
              NBA Accredited (CSE) & AICTE Approved
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">Active Session: 2026–2027</span>
            <button
              onClick={() => setActiveView('IMS')}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-600/30 hover:bg-sky-600/50 text-sky-300 border border-sky-500/40 font-medium text-xs transition"
            >
              <LayoutDashboard className="w-3 h-3" />
              IMS Portal ({currentUser.role})
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-600 to-indigo-800 p-2.5 flex items-center justify-center text-white shadow-lg border border-sky-400/30 group-hover:scale-105 transition">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition">
                  CEK
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-semibold tracking-wide">
                  Karunagappally
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium tracking-wide">
                College of Engineering Karunagappally
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-sky-400 transition py-1">
              About
            </a>
            <a href="#departments" className="hover:text-sky-400 transition py-1">
              Departments
            </a>
            <a href="#admissions" className="hover:text-sky-400 transition py-1">
              Admissions
            </a>
            <a href="#campus-voices" className="hover:text-sky-400 transition py-1">
              Campus Voices
            </a>
            <a href="#notices" className="hover:text-sky-400 transition py-1">
              Notices
            </a>
            <a href="#research" className="hover:text-sky-400 transition py-1">
              Research & IEDC
            </a>
            <a href="#contact" className="hover:text-sky-400 transition py-1">
              Contact
            </a>
          </nav>

          {/* Direct IMS Launch Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setActiveView('IMS')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md hover:shadow-sky-500/25 transition cursor-pointer border border-sky-400/40"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Launch IMS</span>
              <span className="px-1.5 py-0.5 text-xs bg-slate-900/60 rounded text-sky-200">
                {currentUser.role}
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setActiveView('IMS')}
              className="px-3 py-1.5 rounded-md bg-sky-600 text-white font-medium text-xs"
            >
              IMS
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            About CEK
          </a>
          <a
            href="#departments"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Academic Departments
          </a>
          <a
            href="#admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Admissions & KEAM
          </a>
          <a
            href="#campus-voices"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Campus Voices (@humansofcek)
          </a>
          <a
            href="#notices"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Official Circulars
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Research & IEDC Cell
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Contact & Location
          </a>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveView('IMS');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 text-white font-semibold text-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              Enter Institution Management System ({currentUser.role})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
