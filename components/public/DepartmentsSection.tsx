'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  Cpu,
  Radio,
  Sparkles,
  Cog,
  Zap,
  BookOpen,
  Award,
  FlaskConical,
  GraduationCap,
  Mail,
  Users,
} from 'lucide-react';

export function DepartmentsSection() {
  const { departments } = useAppState();
  const [selectedDeptCode, setSelectedDeptCode] = useState<string>(departments[0]?.code || 'CSE');

  const selectedDept = departments.find(d => d.code === selectedDeptCode) || departments[0];

  const getDeptIcon = (code: string) => {
    switch (code) {
      case 'CSE':
        return <Cpu className="w-5 h-5" />;
      case 'ECE':
        return <Radio className="w-5 h-5" />;
      case 'AI_DS':
        return <Sparkles className="w-5 h-5" />;
      case 'ME':
        return <Cog className="w-5 h-5" />;
      case 'EEE':
        return <Zap className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="departments" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950 text-sky-400 border border-sky-800/60 text-xs font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Departments & Laboratories
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            CEK offers undergraduate and postgraduate curricula designed under APJ Abdul Kalam Technological
            University (KTU), supported by advanced experimentation labs, specialized hardware, and industry-experienced faculty.
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-6 border-b border-slate-800">
          {departments.map(dept => {
            const isActive = dept.code === selectedDeptCode;
            return (
              <button
                key={dept.code}
                onClick={() => setSelectedDeptCode(dept.code)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition cursor-pointer border ${
                  isActive
                    ? 'bg-sky-600 text-white border-sky-500 shadow-md shadow-sky-600/20'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {getDeptIcon(dept.code)}
                <span>{dept.shortName}</span>
                {dept.isNbaAccredited && (
                  <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-amber-400 text-slate-950 font-bold uppercase tracking-wider">
                    NBA
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Department Showcase */}
        {selectedDept && (
          <div className="mt-8 grid lg:grid-cols-12 gap-8 items-start">
            {/* Overview & Laboratories */}
            <div className="lg:col-span-8 bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {selectedDept.name}
                    </h3>
                  </div>
                  <p className="text-xs text-sky-400 font-medium mt-1">
                    Department Code: {selectedDept.code} &bull; Est. {selectedDept.established}
                  </p>
                </div>

                {selectedDept.isNbaAccredited && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>NBA Accredited Programme</span>
                  </div>
                )}
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {selectedDept.description}
              </p>

              {/* Specialization Pills */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Core Specializations & Focus Domains
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDept.keySpecializations.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-slate-800 text-sky-200 border border-slate-700 text-xs font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Laboratories Roster */}
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4 text-teal-400" />
                  <span>Laboratories & Research Infrastructure</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedDept.laboratories.map((lab, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs font-medium text-slate-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Department Factsheet & Leadership */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>Head of Department</span>
                </h4>

                <div>
                  <div className="text-base font-bold text-white">{selectedDept.hod}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Head & Senior Faculty</div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-sky-300">
                    <Mail className="w-3.5 h-3.5" />
                    <a href={`mailto:${selectedDept.hodEmail}`} className="hover:underline">
                      {selectedDept.hodEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700 pb-3">
                  Quick Department Facts
                </h4>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Annual Intake</span>
                    <span className="text-white font-semibold">
                      {selectedDept.intake > 0 ? `${selectedDept.intake} Seats` : 'Foundation Dept'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Affiliated University</span>
                    <span className="text-white font-semibold">KTU (APJ AKTU)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Managing Agency</span>
                    <span className="text-white font-semibold">IHRD, Govt. of Kerala</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Curriculum Model</span>
                    <span className="text-white font-semibold">Outcome Based (OBE)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
