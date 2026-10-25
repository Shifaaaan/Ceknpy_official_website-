'use client';

import React from 'react';
import Image from 'next/image';
import { PHOTO_LIBRARY } from '@/lib/data/photoLibrary';
import {
  Camera,
  ExternalLink,
  Sparkles,
  Users,
  Award,
  Heart,
  Music,
  Code,
  ShieldCheck,
} from 'lucide-react';

export function CampusLifeView() {
  const clubs = [
    {
      name: 'IEEE Student Branch',
      tag: 'Global MGA Award Winner',
      desc: 'Technical workshops, IoT symposiums, robotics bootcamps, and Women in Engineering tracks.',
      icon: Award,
      color: 'text-[#387DDD]',
    },
    {
      name: 'TinkerHub CEK',
      tag: 'Maker Community',
      desc: 'Peer-to-peer coding sessions, open-source sprints, and weekend hardware teardowns.',
      icon: Code,
      color: 'text-amber-400',
    },
    {
      name: 'FOSS Cell CEK',
      tag: 'Free Software',
      desc: 'Advocating Linux, Git, open web standards, and distributed systems contributions.',
      icon: Code,
      color: 'text-teal-400',
    },
    {
      name: 'NSS Unit No. 543',
      tag: 'National Service Scheme',
      desc: 'Blood donation drives, coastal flood resilience mapping, and rural education outreach.',
      icon: Heart,
      color: 'text-rose-400',
    },
    {
      name: 'Arts & Cultural Club',
      tag: 'College Union',
      desc: 'Organizers of the annual "Varnam" festival, classical dance, music band, and street drama.',
      icon: Music,
      color: 'text-purple-400',
    },
    {
      name: 'Sports & Athletics Cell',
      tag: 'Campus Sports',
      desc: 'Inter-collegiate football, cricket, volleyball, and badminton tournaments across KTU.',
      icon: Users,
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner with Social Handles */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 text-pink-400 border border-pink-800/60 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-4 h-4" />
              <span>Student Community & Culture</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Campus Life & Humans of CEK
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Beyond engineering classrooms and laboratories, CEK pulsates with creative energy, technical
              clubs, cultural festivities, and grassroots social service.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/humansofcek/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-950 text-pink-300 border border-pink-800 text-xs font-bold hover:bg-pink-900 transition"
            >
              <Camera className="w-4 h-4 text-pink-400" />
              <span>@humansofcek</span>
              <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
            </a>
            <a
              href="https://www.instagram.com/ceknpy.official/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-950 text-sky-300 border border-sky-800 text-xs font-bold hover:bg-sky-900 transition"
            >
              <span>@ceknpy.official</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>
        </div>

        {/* Photography Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] border border-[#262A2E] shadow-xl group">
            <Image
              src={PHOTO_LIBRARY.TECH_FEST_AUDITORIUM.url}
              alt="PRAYATNA Tech Fest"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#387DDD] text-white text-[10px] font-bold uppercase">
                Annual Flagship Fest
              </span>
              <h3 className="font-editorial text-2xl font-bold text-white">
                PRAYATNA National Technical Symposium
              </h3>
              <p className="text-xs text-slate-300">
                A weekend of inter-collegiate hackathons, autonomous robotics races, and technical paper conclaves.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[380px] border border-[#262A2E] shadow-xl group">
            <Image
              src={PHOTO_LIBRARY.STUDENT_CANDID_HUMANS_OF_CEK.url}
              alt="Humans of CEK candid"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A09] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-500 text-white text-[10px] font-bold uppercase">
                @humansofcek Series
              </span>
              <h3 className="font-editorial text-2xl font-bold text-white">
                Campus Stories & Student Friendships
              </h3>
              <p className="text-xs text-slate-300">
                Documenting candid everyday moments, hostel traditions, and individual student achievements.
              </p>
            </div>
          </div>
        </div>

        {/* Co-Curricular & Student Clubs */}
        <div className="space-y-6">
          <h2 className="font-editorial text-3xl font-bold text-white">Student Societies & Technical Chapters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#151817] border border-[#262A2E] p-6 rounded-3xl space-y-3 hover:border-slate-600 transition"
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-6 h-6 ${c.color}`} />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-white">{c.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
