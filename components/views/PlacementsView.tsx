'use client';

import React from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Briefcase,
  TrendingUp,
  Award,
  Building,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';

export function PlacementsView() {
  const recruiters = [
    'Tata Consultancy Services (TCS)',
    'Infosys Technologies',
    'Wipro Technologies',
    'Cognizant (CTS)',
    'Quest Global',
    'Texas Instruments',
    'Speridian Technologies',
    'QBurst',
    'UST Global',
    '6D Technologies',
    'Experion Technologies',
    'V-Guard Industries',
  ];

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Career Guidance & Placement Cell (CGPC)</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Placements & Corporate Partnerships
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            The Career Guidance and Placement Cell at CEK coordinates intensive aptitude training, coding
            bootcamps, technical interview simulations, and on-campus recruitment drives connecting students
            with leading multinational enterprises and agile product firms.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Placement Rate</span>
            <div className="font-editorial text-4xl font-bold text-[#387DDD]">94%</div>
            <p className="text-xs text-slate-400">Of eligible registered candidates placed</p>
          </div>
          <div className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Highest Package</span>
            <div className="font-editorial text-4xl font-bold text-emerald-400">₹14.5 LPA</div>
            <p className="text-xs text-slate-400">Product Engineering Role</p>
          </div>
          <div className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Average Package</span>
            <div className="font-editorial text-4xl font-bold text-[#F5E9D8]">₹5.2 LPA</div>
            <p className="text-xs text-slate-400">Core & Software roles</p>
          </div>
          <div className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-2">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Recruiters</span>
            <div className="font-editorial text-4xl font-bold text-indigo-400">42+</div>
            <p className="text-xs text-slate-400">Companies visiting campus</p>
          </div>
        </div>

        {/* Two Column Section: Recruiter Grid & CGPC Training */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Recruiters Grid */}
          <div className="lg:col-span-8 bg-[#151817] border border-[#262A2E] p-8 rounded-3xl space-y-6">
            <h3 className="font-editorial text-2xl font-bold text-white flex items-center gap-2">
              <Building className="w-5 h-5 text-[#387DDD]" />
              <span>Prominent Recruitment Partners</span>
            </h3>
            <p className="text-xs text-slate-300">
              Our graduates are routinely recruited during centralized IHRD placement pool drives and direct
              on-campus placement conclaves.
            </p>

            <div className="grid sm:grid-cols-3 gap-3.5 pt-2">
              {recruiters.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#080A09] border border-[#262A2E] flex items-center justify-between text-xs font-semibold text-slate-200 hover:border-[#387DDD]/60 transition"
                >
                  <span>{rec}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#387DDD] shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* CGPC Contact */}
          <div className="lg:col-span-4 bg-[#151817] border border-[#262A2E] p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="font-editorial text-2xl font-bold text-white">CGPC Leadership</h3>
            <div className="space-y-2 text-xs">
              <div className="font-bold text-white text-sm">Prof. Placement Officer</div>
              <p className="text-slate-400">Career Guidance & Placement Cell</p>
              <p className="text-slate-300">College of Engineering Karunagappally</p>
            </div>

            <div className="pt-4 border-t border-[#262A2E] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#387DDD]">
                <Mail className="w-4 h-4" />
                <a href="mailto:placement@ceknpy.ac.in" className="hover:underline">
                  placement@ceknpy.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 476 2580555 Ext. 204</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
