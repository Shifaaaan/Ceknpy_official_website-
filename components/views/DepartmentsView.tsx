'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VERIFIED_DEPARTMENTS, CekDepartment } from '@/lib/data/cekDatabase';
import {
  Cpu,
  FlaskConical,
  Award,
  Users,
  ExternalLink,
  BookOpen,
  ArrowRight,
  Clock,
  Layers,
} from 'lucide-react';

export function DepartmentsView() {
  const [selectedDeptCode, setSelectedDeptCode] = useState<'CSE' | 'ECE' | 'EEE' | 'ME' | 'BS'>('CSE');

  const selectedDept = VERIFIED_DEPARTMENTS.find(d => d.code === selectedDeptCode) || VERIFIED_DEPARTMENTS[0];

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Academic Divisions & Laboratorial Infrastructure</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Academic Departments & Laboratories
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            CEK hosts academic divisions offering undergraduate and postgraduate degrees under the
            APJ Abdul Kalam Technological University (KTU) and approved by AICTE. Each department maintains
            modern experimental laboratories, advanced research workstations, and student societies.
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex flex-wrap gap-2.5 pb-4 border-b border-[#262A2E]">
          {VERIFIED_DEPARTMENTS.map(d => {
            const isActive = d.code === selectedDeptCode;
            return (
              <button
                key={d.code}
                onClick={() => setSelectedDeptCode(d.code)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer border ${
                  isActive
                    ? 'bg-[#387DDD] text-white border-[#387DDD] shadow-lg shadow-[#387DDD]/25'
                    : 'bg-[#151817] text-slate-300 border-[#262A2E] hover:border-slate-500 hover:text-white'
                }`}
              >
                <span>Dept. of {d.code}</span>
                {d.isNbaAccredited && (
                  <span className="ml-2 px-1.5 py-0.5 rounded bg-amber-400 text-[#080A09] text-[9px] font-extrabold">
                    NBA
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Department Overview */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image & Highlights */}
          <div className="lg:col-span-8 space-y-8">
            {/* Department Hero Photo */}
            <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#262A2E] shadow-2xl">
              <Image
                src={selectedDept.photoUrl}
                alt={selectedDept.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#387DDD] block">
                  Department Code: {selectedDept.code}
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-1">
                  {selectedDept.name}
                </h2>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-[#151817] border border-[#262A2E] p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-editorial text-2xl font-bold text-white">Department Overview</h3>
                <a
                  href={selectedDept.originalSourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#387DDD] hover:underline font-semibold"
                >
                  <span>ceknpy.ac.in official page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedDept.overview}
              </p>

              {/* Degrees Offered Table */}
              {selectedDept.degreesOffered.length > 0 && (
                <div className="pt-4 border-t border-[#262A2E]">
                  <h4 className="text-xs font-bold text-[#F5E9D8] uppercase tracking-wider mb-3">
                    Academic Programmes & Verified Seat Intake
                  </h4>
                  <div className="space-y-2">
                    {selectedDept.degreesOffered.map((deg, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#080A09] border border-[#262A2E] flex flex-wrap items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-[#387DDD]/20 text-[#387DDD] font-bold text-[10px]">
                            {deg.level}
                          </span>
                          <span className="font-semibold text-white">{deg.title}</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{deg.duration}</span>
                          </span>
                          <span className="font-bold text-[#F5E9D8] px-2 py-0.5 rounded bg-[#262A2E]">
                            {deg.intakeSeats} Seats
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Strengths */}
              <div className="pt-4 border-t border-[#262A2E]">
                <h4 className="text-xs font-bold text-[#F5E9D8] uppercase tracking-wider mb-3">
                  Key Department Strengths
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedDept.keyStrengths.map((str, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#080A09] text-slate-200 border border-[#262A2E] text-xs font-medium flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#387DDD] mt-1.5 shrink-0" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Laboratories Section */}
            <div className="bg-[#151817] border border-[#262A2E] p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="font-editorial text-2xl font-bold text-white flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-[#387DDD]" />
                <span>Laboratories & Equipment</span>
              </h3>
              <p className="text-xs text-slate-400">
                Equipped with hardware test benches, licensed EDA / CAD software, high-speed networking, and
                experimental equipment.
              </p>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {selectedDept.laboratories.map((lab, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#080A09] border border-[#262A2E] flex items-center gap-3 text-xs font-semibold text-slate-200"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#387DDD] shrink-0" />
                    <span>{lab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Faculty & Quick Fact Sheet */}
          <div className="lg:col-span-4 space-y-6">
            {/* Leadership Box */}
            <div className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#387DDD]">
                <Users className="w-4 h-4" />
                <span>Department Leadership</span>
              </div>
              <div>
                <h4 className="font-editorial text-2xl font-bold text-white">{selectedDept.hodName}</h4>
                <p className="text-xs text-[#8A5238] font-semibold mt-0.5">{selectedDept.hodDesignation}</p>
                <div className="mt-4 pt-3 border-t border-[#262A2E] text-[11px] text-slate-400">
                  <span>Affiliated: APJ Abdul Kalam Technological University (KTU)</span>
                </div>
              </div>
            </div>

            {/* Fact Sheet */}
            <div className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-3.5 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider border-b border-[#262A2E] pb-3">
                Department Metrics
              </h4>
              <div className="flex justify-between py-1 border-b border-[#262A2E]/60">
                <span className="text-slate-400">Total Approved Intake</span>
                <span className="text-white font-bold">
                  {selectedDept.degreesOffered.reduce((sum, d) => sum + d.intakeSeats, 0)} Seats
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#262A2E]/60">
                <span className="text-slate-400">NBA Accreditation</span>
                <span className={selectedDept.isNbaAccredited ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                  {selectedDept.isNbaAccredited ? 'Accredited (Tier II)' : 'Compliant with OBE'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#262A2E]/60">
                <span className="text-slate-400">Governance Body</span>
                <span className="text-white font-bold">IHRD, Govt. of Kerala</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">College Code</span>
                <span className="font-mono text-[#387DDD] font-bold">KNP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
