'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAppState } from '@/lib/store/appState';
import {
  GraduationCap,
  Lock,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  Video,
  Database,
  ExternalLink,
} from 'lucide-react';

interface CinematicHeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function CinematicHeader({ currentTab, setCurrentTab }: CinematicHeaderProps) {
  const { setActiveView, currentUser } = useAppState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { id: 'HOME', label: 'Home' },
    {
      id: 'ABOUT',
      label: 'About CEK',
      dropdown: [
        { id: 'ABOUT_HISTORY', label: 'Institutional Legacy & IHRD', tab: 'ABOUT' },
        { id: 'ABOUT_PRINCIPAL', label: "Principal's Desk (Dr. Smitha Dharan)", tab: 'ABOUT' },
        { id: 'ABOUT_GOVERNANCE', label: 'Governance & KTU Affiliation', tab: 'ABOUT' },
        { id: 'ABOUT_FACILITIES', label: 'Campus Infrastructure & Library', tab: 'ABOUT' },
      ],
    },
    {
      id: 'DEPARTMENTS',
      label: 'Academics & Depts',
      dropdown: [
        { id: 'DEP_CSE', label: 'Computer Science & Engg (NBA)', tab: 'DEPARTMENTS' },
        { id: 'DEP_ECE', label: 'Electronics & Communication', tab: 'DEPARTMENTS' },
        { id: 'DEP_AIDS', label: 'Artificial Intelligence & Data Science', tab: 'DEPARTMENTS' },
        { id: 'DEP_ME', label: 'Mechanical Engineering', tab: 'DEPARTMENTS' },
        { id: 'DEP_EEE', label: 'Electrical & Electronics', tab: 'DEPARTMENTS' },
        { id: 'DEP_BSH', label: 'Basic Sciences', tab: 'DEPARTMENTS' },
      ],
    },
    { id: 'ADMISSIONS', label: 'Admissions' },
    { id: 'FACULTY', label: 'Faculty Directory' },
    { id: 'RESEARCH', label: 'Research & IEDC' },
    { id: 'PLACEMENTS', label: 'Placements' },
    { id: 'CAMPUS_LIFE', label: 'Campus Life (@humansofcek)' },
    { id: 'MEDIA', label: 'Media & Videos' },
    { id: 'NOTICES', label: 'Notices' },
    { id: 'INVENTORY', label: 'Asset Inventory' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#080A09]/95 backdrop-blur-md border-b border-[#262A2E] text-slate-100 shadow-xl">
      {/* Top Utility Bar (Cream & Terracotta Accents inspired by Reference 1 & 2) */}
      <div className="bg-[#080A09] border-b border-[#262A2E]/80 px-4 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#F5E9D8] font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#387DDD]" />
              Institute of Human Resources Development (IHRD), Govt. of Kerala
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              Affiliated to APJ Abdul Kalam Technological University (KTU)
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-amber-300 font-semibold">
              NBA Accredited (CSE) &bull; AICTE Approved
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 text-slate-300">
              <a href="tel:04762666160" className="hover:text-white flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#387DDD]" />
                <span>0476-2666160</span>
              </a>
              <span className="text-slate-600">|</span>
              <a href="mailto:principal@ceknpy.ac.in" className="hover:text-white flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#387DDD]" />
                <span>principal@ceknpy.ac.in</span>
              </a>
            </div>

            <button
              onClick={() => setActiveView('IMS')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#387DDD] hover:bg-[#2f6fc7] text-white font-semibold text-xs transition cursor-pointer shadow-md shadow-[#387DDD]/20"
            >
              <Lock className="w-3 h-3" />
              <span>IMS Portal ({currentUser.role})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Electric Blue Vertical Accent Bookmark (Inspired by Reference 2) */}
        <div className="absolute top-0 right-4 sm:right-8 w-10 sm:w-12 h-8 sm:h-10 bg-[#387DDD] flex items-center justify-center text-white shadow-lg pointer-events-none rounded-b-md">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>

        <div className="flex items-center justify-between h-20">
          {/* Institutional Brand Identity with Official Logo */}
          <button
            onClick={() => setCurrentTab('HOME')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg border border-[#387DDD]/40 group-hover:scale-105 transition overflow-hidden">
              <Image
                src="/assets/cek/cek-logo.png"
                alt="CEK Logo"
                fill
                className="object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-2xl font-bold tracking-tight text-white group-hover:text-[#F5E9D8] transition">
                  CEK
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#F5E9D8]/10 text-[#F5E9D8] border border-[#F5E9D8]/20 font-semibold tracking-wider uppercase font-mono">
                  Code: KNP
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium tracking-wide">
                College of Engineering Karunagappally &bull; IHRD
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-4 text-xs font-semibold tracking-wide">
            {navLinks.map(link => {
              const isActive = currentTab === link.id;
              if (link.dropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => setCurrentTab(link.id)}
                      className={`py-2 inline-flex items-center gap-1 transition cursor-pointer ${
                        isActive ? 'text-[#387DDD]' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {activeDropdown === link.id && (
                      <div className="absolute top-full left-0 w-64 bg-[#080A09] border border-[#262A2E] rounded-xl shadow-2xl p-2 z-50 space-y-1">
                        {link.dropdown.map(sub => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              setCurrentTab(sub.tab);
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-[#262A2E] transition cursor-pointer"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentTab(link.id)}
                  className={`py-2 transition cursor-pointer ${
                    isActive
                      ? 'text-[#387DDD] border-b-2 border-[#387DDD] font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu trigger */}
          <div className="xl:hidden flex items-center gap-2 pr-12">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#262A2E]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#080A09] border-b border-[#262A2E] px-4 py-4 space-y-2 text-sm">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg transition font-medium ${
                currentTab === link.id
                  ? 'bg-[#387DDD] text-white font-bold'
                  : 'text-slate-300 hover:bg-[#262A2E] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 border-t border-[#262A2E]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveView('IMS');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#387DDD] text-white font-bold text-sm"
            >
              <Lock className="w-4 h-4" />
              <span>Launch Institution Management System</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
