'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Search,
  BookOpen,
  ArrowRight,
  Award,
  Clock,
  Users,
} from 'lucide-react';

interface CourseFinderSectionProps {
  setCurrentTab: (tab: string) => void;
}

export function CourseFinderSection({ setCurrentTab }: CourseFinderSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'BACHELOR' | 'MASTERS'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const programmes = [
    {
      id: 'cse',
      code: 'CSE',
      degree: 'BACHELOR',
      title: 'Computer Science & Engineering',
      duration: '4 Years (8 Semesters)',
      intake: 120,
      isNba: true,
      description:
        'NBA-Accredited flagship programme at CEK focusing on distributed systems, algorithms, computer networks, and full-stack software architecture.',
      image: PHOTO_LIBRARY.CS_SOFTWARE_LAB.url,
      sourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    },
    {
      id: 'aids',
      code: 'AI_DS',
      degree: 'BACHELOR',
      title: 'Artificial Intelligence & Data Science',
      duration: '4 Years (8 Semesters)',
      intake: 60,
      isNba: false,
      description:
        'Next-generation computing programme combining deep learning, computer vision, natural language processing, and high-performance computing.',
      image: PHOTO_LIBRARY.CS_SOFTWARE_LAB.url,
      sourceUrl: 'https://www.ceknpy.ac.in/departments/computerengineering',
    },
    {
      id: 'ece',
      code: 'ECE',
      degree: 'BACHELOR',
      title: 'Electronics & Communication Engineering',
      duration: '4 Years (8 Semesters)',
      intake: 60,
      isNba: false,
      description:
        'Advanced curriculum covering VLSI design with Cadence tools, digital signal processing, microwave antennas, and embedded IoT hardware.',
      image: PHOTO_LIBRARY.ELECTRONICS_DSP_LAB.url,
      sourceUrl: 'https://www.ceknpy.ac.in/departments/electronics',
    },
    {
      id: 'me',
      code: 'ME',
      degree: 'BACHELOR',
      title: 'Mechanical Engineering',
      duration: '4 Years (8 Semesters)',
      intake: 30,
      isNba: false,
      description:
        'Rigorous foundation in thermal sciences, computational fluid dynamics (CFD), CNC machine tooling, and automobile prototype design.',
      image: PHOTO_LIBRARY.MECHANICAL_CAD_WORKSHOP.url,
      sourceUrl: 'https://www.ceknpy.ac.in/departments/mechanical',
    },
    {
      id: 'eee',
      code: 'EEE',
      degree: 'BACHELOR',
      title: 'Electrical & Electronics Engineering',
      duration: '4 Years (8 Semesters)',
      intake: 30,
      isNba: false,
      description:
        'Specialized study in renewable solar smart grids, electric vehicle powertrains, electrical machine drives, and power system protection.',
      image: PHOTO_LIBRARY.ELECTRICAL_MACHINES_LAB.url,
      sourceUrl: 'https://www.ceknpy.ac.in/departments/electricalengineering',
    },
    {
      id: 'mtech-cs',
      code: 'MTECH',
      degree: 'MASTERS',
      title: 'M.Tech Computer Science & Engineering',
      duration: '2 Years (4 Semesters)',
      intake: 18,
      isNba: false,
      description:
        'Postgraduate research degree affiliated with KTU emphasizing advanced network security, distributed databases, and machine learning research.',
      image: PHOTO_LIBRARY.CENTRAL_LIBRARY.url,
      sourceUrl: 'https://www.ceknpy.ac.in/pg-programme',
    },
  ];

  const filtered = programmes.filter(p => {
    const matchesLevel = selectedLevel === 'ALL' || p.degree === selectedLevel;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <section className="bg-[#F5E9D8] text-[#080A09] py-20 border-b border-[#8A5238]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8A5238] uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Academic Discovery & Verified Seat Intake</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#080A09] tracking-tight">
            Explore Engineering Programmes
          </h2>
          <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            All programmes adhere to the APJ Abdul Kalam Technological University (KTU) curriculum with Outcome-Based
            Education (OBE) and AICTE approval. All seats allocated through CEE Kerala KEAM and IHRD quota.
          </p>
        </div>

        {/* Search bar & filter pills (Reference 1 style) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#8A5238]/15 mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by programme name, department code (CSE, ECE, ME...)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#387DDD]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['ALL', 'BACHELOR', 'MASTERS'] as const).map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#387DDD] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lvl === 'ALL' ? 'All Programmes' : lvl === 'BACHELOR' ? 'B.Tech (Bachelor)' : 'M.Tech (Masters)'}
              </button>
            ))}
          </div>
        </div>

        {/* Programmes Grid (3 columns, Ref 1 style with real photo header) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div
              key={p.id}
              onClick={() => setCurrentTab('DEPARTMENTS')}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#8A5238]/15 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#080A09]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {p.degree}
                    </span>
                    {p.isNba && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-400 text-[#080A09] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>NBA Accredited</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-editorial text-2xl font-bold text-[#080A09] group-hover:text-[#387DDD] transition leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{p.duration.split(' ')[0]} Yrs</span>
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 font-semibold text-[#8A5238]">
                    <Users className="w-3.5 h-3.5" />
                    <span>{p.intake} Seats</span>
                  </span>
                </div>

                <span className="text-[#387DDD] font-bold flex items-center gap-1 group-hover:translate-x-1 transition">
                  <span>View Dept</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
