'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import {
  Sparkles,
  Camera,
  ExternalLink,
  ShieldCheck,
  Award,
  Users,
  Compass,
  HeartHandshake,
  Tag,
  Calendar,
} from 'lucide-react';

export function CampusVoicesSection() {
  const { editorialStories } = useAppState();
  const [filterTag, setFilterTag] = useState<string>('ALL');

  // Only display PUBLISHED stories on the public website
  const publishedStories = editorialStories.filter(s => s.state === 'PUBLISHED');

  const filtered =
    filterTag === 'ALL'
      ? publishedStories
      : publishedStories.filter(s => s.tags.includes(filterTag) || s.category === filterTag);

  return (
    <section id="campus-voices" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-950 text-amber-400 border border-amber-800/60 text-xs font-semibold mb-3">
              <Camera className="w-4 h-4" />
              <span>Campus Life & Authentic Storytelling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Humans of CEK & Campus Voices
            </h2>
            <p className="mt-3 text-slate-300 text-base leading-relaxed">
              Curated student journeys, technological milestones, and community impact. Researched and
              corroborated from student initiatives like <strong>@humansofcek</strong>, our award-winning{' '}
              <strong>IEEE Student Branch</strong>, and the <strong>IEDC Innovation Cell</strong>.
            </p>
          </div>

          {/* Social Proof Channels Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/humansofcek/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-pink-950/60 text-pink-300 border border-pink-800/60 text-xs font-semibold hover:bg-pink-900/60 transition"
            >
              <Camera className="w-3.5 h-3.5 text-pink-400" />
              <span>@humansofcek</span>
              <ExternalLink className="w-3 h-3 text-pink-400" />
            </a>

            <a
              href="https://www.instagram.com/ceknpy.official/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-sky-950/60 text-sky-300 border border-sky-800/60 text-xs font-semibold hover:bg-sky-900/60 transition"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>@ceknpy.official</span>
              <ExternalLink className="w-3 h-3 text-sky-400" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['ALL', 'Humans of CEK', 'IEEE', 'IEDC', 'NSS'].map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer border ${
                filterTag === tag
                  ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map(story => (
            <article
              key={story.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition shadow-lg space-y-5"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-sky-300 border border-slate-700 font-medium">
                    {story.category.replace('_', ' ')}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : 'Recent'}</span>
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  {story.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {story.summary}
                </p>

                {/* Excerpt Body */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs text-slate-400 leading-relaxed">
                  {story.body}
                </div>
              </div>

              {/* Editorial Attribution & Compliance Badges */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium text-slate-300">
                    <Tag className="w-3 h-3 text-sky-400" />
                    <span>Source: {story.sourceAttribution}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {story.mediaRightsVerified && (
                      <span className="inline-flex items-center gap-1 text-emerald-400" title="Rights Verified">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Rights Verified</span>
                      </span>
                    )}
                    {story.participantConsentObtained && (
                      <span className="inline-flex items-center gap-1 text-sky-400" title="Consent Recorded">
                        <HeartHandshake className="w-3 h-3" />
                        <span>Consent Recorded</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {story.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
