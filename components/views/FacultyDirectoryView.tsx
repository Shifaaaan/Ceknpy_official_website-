'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VERIFIED_FACULTY_ROSTER, CekFacultyMember } from '@/lib/data/cekDatabase';
import {
  Users,
  Search,
  Mail,
  Phone,
  GraduationCap,
  ExternalLink,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';

export function FacultyDirectoryView() {
  const [selectedDept, setSelectedDept] = useState<'ALL' | 'CSE' | 'ECE' | 'EEE' | 'ME'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = VERIFIED_FACULTY_ROSTER.filter(f => {
    const matchesDept = selectedDept === 'ALL' || f.departmentCode === selectedDept;
    const matchesSearch =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Verified Official Staff Directory</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Faculty & Academic Leadership
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Authentic faculty profiles, official designations, doctoral research areas, and contact credentials
            extracted directly from the College of Engineering Karunagappally department directories.
          </p>
        </div>

        {/* Search & Department Filters */}
        <div className="bg-[#151817] border border-[#262A2E] p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty by name, specialization, or qualification..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080A09] border border-[#262A2E] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#387DDD]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(['ALL', 'CSE', 'ECE', 'ME', 'EEE'] as const).map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedDept === dept
                    ? 'bg-[#387DDD] text-white border-[#387DDD]'
                    : 'bg-[#080A09] text-slate-400 border-[#262A2E] hover:text-white'
                }`}
              >
                {dept === 'ALL' ? 'All Departments' : `Dept. of ${dept}`}
              </button>
            ))}
          </div>
        </div>

        {/* Faculty Grid with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(faculty => (
            <div
              key={faculty.id}
              className="bg-[#151817] border border-[#262A2E] rounded-3xl p-6 flex flex-col justify-between hover:border-[#387DDD]/60 transition space-y-4 shadow-lg group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#262A2E] group-hover:border-[#387DDD] transition duration-300 shrink-0 bg-[#080A09]">
                    <Image
                      src={faculty.photoUrl}
                      alt={faculty.name}
                      fill
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-editorial text-lg font-bold text-white group-hover:text-[#F5E9D8] transition">
                        {faculty.name}
                      </h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-xs text-[#387DDD] font-semibold">{faculty.designation}</p>
                    <span className="text-[10px] text-slate-400 uppercase font-mono font-bold tracking-wider block">
                      {faculty.department}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#262A2E]/80 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                      Highest Qualification:
                    </span>
                    <span className="text-slate-200 font-medium">{faculty.qualification}</span>
                  </div>

                  {faculty.specialization && (
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                        Specialization:
                      </span>
                      <span className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                        {faculty.specialization}
                      </span>
                    </div>
                  )}

                  {faculty.experience && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#F5E9D8]">
                      <Briefcase className="w-3.5 h-3.5 text-[#8A5238]" />
                      <span>Experience: {faculty.experience.replace(/&lt;br&gt;/g, '')}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-[#262A2E] space-y-1.5 text-xs text-slate-400">
                {faculty.email && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#387DDD]" />
                      <a href={`mailto:${faculty.email}`} className="hover:text-white transition text-[11px]">
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                )}

                {faculty.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px]">{faculty.phone}</span>
                  </div>
                )}

                <div className="pt-1 flex items-center justify-end">
                  <a
                    href={faculty.originalSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-slate-500 hover:text-[#387DDD] transition"
                  >
                    <span>ceknpy.ac.in official profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
