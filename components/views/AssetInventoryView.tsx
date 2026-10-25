'use client';

import React, { useState } from 'react';
import { CEK_ASSET_INVENTORY, AssetInventoryItem } from '@/lib/data/assetInventory';
import {
  Database,
  Search,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ShieldAlert,
  FileCheck,
  Tag,
  Filter,
} from 'lucide-react';

export function AssetInventoryView() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filtered = CEK_ASSET_INVENTORY.filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.verifiedSummary.toLowerCase().includes(search.toLowerCase()) ||
      item.creatorOrOrg.toLowerCase().includes(search.toLowerCase()) ||
      (item.departmentOrScope && item.departmentOrScope.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'ALL' || item.verificationStatus === selectedStatus;
    return matchesSearch && matchesCat && matchesStatus;
  });

  return (
    <div className="bg-[#080A09] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Banner */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>Audited Institutional Asset & Content Inventory</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Source-of-Truth Content Inventory
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Every digital asset, photograph, video, official circular, and faculty credential in this website has been
            inspected against public sources, verified against official institutional repositories, and cataloged
            with permission disclosures.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#151817] border border-[#262A2E] p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search inventory by title, ID, creator, or department..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080A09] border border-[#262A2E] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#387DDD]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-xl bg-[#080A09] border border-[#262A2E] text-xs text-white focus:outline-none focus:border-[#387DDD]"
            >
              <option value="ALL">All Categories</option>
              <option value="photograph">Photographs</option>
              <option value="logo">Logos & Emblems</option>
              <option value="video">Videos</option>
              <option value="social_channel">Social Channels</option>
              <option value="circular_pdf">Circular PDFs</option>
            </select>

            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="px-3 py-2 rounded-xl bg-[#080A09] border border-[#262A2E] text-xs text-white focus:outline-none focus:border-[#387DDD]"
            >
              <option value="ALL">All Statuses</option>
              <option value="verified">Verified</option>
              <option value="needs_review">Needs Review</option>
              <option value="permission_required">Permission Required</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>

        {/* Inventory Records Cards */}
        <div className="space-y-4">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-[#151817] border border-[#262A2E] rounded-3xl p-6 sm:p-7 space-y-4 hover:border-[#387DDD]/60 transition shadow-lg"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#080A09] text-[#387DDD] border border-[#262A2E] font-semibold">
                      {item.id}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#262A2E] text-slate-300">
                      {item.category}
                    </span>
                    <span
                      className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded flex items-center gap-1 ${
                        item.verificationStatus === 'verified'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{item.verificationStatus}</span>
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-white pt-1">{item.title}</h3>
                </div>

                <div className="text-right text-[11px] text-slate-400 font-mono">
                  <div>Retrieved: {item.retrievalDate}</div>
                  {item.publicationDate && <div>Published: {item.publicationDate}</div>}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.verifiedSummary}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#262A2E] text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Creator / Org:</span>
                  <span className="text-slate-200 font-medium">{item.creatorOrOrg}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Intended Section:</span>
                  <span className="text-slate-200 font-medium">{item.intendedSection}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Local Asset Path:</span>
                  <span className="text-emerald-400 font-mono text-[11px] truncate block">
                    {item.localPath || 'Remote / External Embed'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Permission / License:</span>
                  <span className="text-slate-300 text-[11px] leading-tight block">{item.permissionNotes}</span>
                </div>
              </div>

              {/* Source Link */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-500 truncate max-w-lg">Source: {item.sourceUrl}</span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#387DDD] hover:underline font-bold shrink-0"
                >
                  <span>Verify Original Source</span>
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
