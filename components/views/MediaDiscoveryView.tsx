'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { VERIFIED_MEDIA_ITEMS, CekMediaItem } from '@/lib/data/cekDatabase';
import {
  Video,
  Play,
  ExternalLink,
  Camera,
  Sparkles,
  Share2,
  CheckCircle2,
  Youtube,
  Instagram,
} from 'lucide-react';

export function MediaDiscoveryView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeVideoId, setActiveVideoId] = useState<string>('med-official-video');

  const filteredMedia = VERIFIED_MEDIA_ITEMS.filter(m => {
    if (selectedCategory === 'ALL') return true;
    return m.category === selectedCategory;
  });

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387DDD]/20 text-[#387DDD] border border-[#387DDD]/40 text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>Curated Campus Media & Video Archive</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            CEK Media Discovery & Reels Hub
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Discover verified video tours, student documentaries, hackathon sprints, cultural arts festivals, and
            social reels from College of Engineering Karunagappally. Every media item links directly to its
            authentic source.
          </p>
        </div>

        {/* Featured Video Player: Official CEK Video Embed */}
        <div className="bg-[#151817] border border-[#262A2E] rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262A2E]">
            <div className="space-y-1">
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Official YouTube Showcase
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                College of Engineering Karunagappally Campus Showcase
              </h2>
            </div>

            <a
              href="https://www.ceknpy.ac.in/videos"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#387DDD] hover:underline font-semibold"
            >
              <span>ceknpy.ac.in/videos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* YouTube Embed Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-[#262A2E]">
            <iframe
              src="https://www.youtube.com/embed/R0N4zv8xztc"
              title="College of Engineering Karunagappally Official Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Embedded directly from the official CEK website institutional video archive</span>
            </div>
            <span className="font-mono text-[11px] text-slate-500">Video ID: R0N4zv8xztc</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {[
            'ALL',
            'Institutional',
            'Cultural & Daksha',
            'Tech Fest & Hackathons',
            'Student Stories',
            'Innovation & IEDC',
          ].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#387DDD] text-white border-[#387DDD] shadow-md shadow-[#387DDD]/30'
                  : 'bg-[#151817] text-slate-300 border-[#262A2E] hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'All Media Assets' : cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map(item => (
            <div
              key={item.id}
              className="bg-[#151817] border border-[#262A2E] rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#387DDD]/60 transition shadow-lg group"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-[#080A09]">
                  {item.thumbnailUrl && (
                    <Image
                      src={item.thumbnailUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151817] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#080A09]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      {item.sourcePlatform === 'YouTube' ? (
                        <Youtube className="w-3 h-3 text-red-500" />
                      ) : (
                        <Instagram className="w-3 h-3 text-pink-500" />
                      )}
                      <span>{item.sourcePlatform}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#387DDD]/80 text-white text-[9px] font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <span>Creator: </span>
                    <strong className="text-[#F5E9D8]">{item.creatorOrOrg}</strong>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#F5E9D8] transition leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#262A2E] mt-4 flex items-center justify-between text-xs">
                <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Resource</span>
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#387DDD] hover:underline font-bold"
                >
                  <span>Open Original Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
