'use client';

import React, { useState } from 'react';
import { useAppState } from '@/lib/store/appState';
import type { EditorialState, ContentCategory, SourceType } from '@/lib/domain/editorial';
import {
  FileCheck2,
  Plus,
  ShieldCheck,
  HeartHandshake,
  ExternalLink,
  Tag,
  AlertTriangle,
  CheckCircle,
  Archive,
  ArrowRight,
  X,
  Send,
} from 'lucide-react';

export function EditorialCmsView() {
  const {
    editorialStories,
    transitionEditorial,
    createEditorialItem,
    currentUser,
  } = useAppState();

  const [activeFilter, setActiveFilter] = useState<'ALL' | EditorialState>('ALL');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ContentCategory>('CAMPUS_LIFE_STORY');
  const [sourceType, setSourceType] = useState<SourceType>('HUMANS_OF_CEK');
  const [sourceAttribution, setSourceAttribution] = useState('@humansofcek Student Interview');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [mediaRightsVerified, setMediaRightsVerified] = useState(true);
  const [participantConsentObtained, setParticipantConsentObtained] = useState(true);
  const [tagsInput, setTagsInput] = useState('Humans of CEK, Student Life');

  const filteredStories =
    activeFilter === 'ALL'
      ? editorialStories
      : editorialStories.filter(s => s.state === activeFilter);

  const handleTransition = (storyId: string, nextState: EditorialState) => {
    setFeedback(null);
    const res = transitionEditorial(storyId, nextState);
    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    const res = createEditorialItem({
      title,
      category,
      summary,
      body,
      sourceType,
      sourceAttribution,
      mediaRightsVerified,
      participantConsentObtained,
      tags,
    });

    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
      setTimeout(() => {
        setShowCreateModal(false);
        setTitle('');
        setSummary('');
        setBody('');
      }, 1000);
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-sky-400" />
            <span>Controlled Editorial & Storytelling CMS</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Enforces publication gatekeeping, source attribution, copyright clearance, and privacy consent before
            promoting stories to the public website.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition cursor-pointer shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>New Editorial Submission</span>
        </button>
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
            feedback.type === 'success'
              ? 'bg-emerald-950 border border-emerald-800 text-emerald-300'
              : 'bg-rose-950 border border-rose-800 text-rose-300'
          }`}
        >
          {feedback.type === 'success' ? (
            <CheckCircle className="w-5 h-5 shrink-0" />
          ) : (
            <AlertTriangle className="w-5 h-5 shrink-0" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* State Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {(['ALL', 'DRAFT', 'IN_REVIEW', 'APPROVED', 'PUBLISHED', 'ARCHIVED'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
              activeFilter === tab
                ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
            }`}
          >
            {tab.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Stories Pipeline Cards */}
      <div className="space-y-4">
        {filteredStories.map(story => (
          <div
            key={story.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                    story.state === 'PUBLISHED'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : story.state === 'APPROVED'
                      ? 'bg-sky-950 text-sky-400 border border-sky-800'
                      : story.state === 'IN_REVIEW'
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : story.state === 'ARCHIVED'
                      ? 'bg-slate-800 text-slate-400 border border-slate-700'
                      : 'bg-indigo-950 text-indigo-400 border border-indigo-800'
                  }`}
                >
                  {story.state.replace('_', ' ')}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {story.category.replace('_', ' ')}
                </span>
              </div>

              <div className="text-xs text-slate-400">
                Author: <strong className="text-slate-300">{story.authorName}</strong> &bull; Updated:{' '}
                {new Date(story.updatedAt).toLocaleDateString()}
              </div>
            </div>

            <h3 className="text-lg font-bold text-white">{story.title}</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{story.summary}</p>

            {/* Compliance verification strip */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Tag className="w-3.5 h-3.5 text-sky-400" />
                <span>Source Attribution: <strong>{story.sourceAttribution}</strong></span>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex items-center gap-1 font-medium ${
                    story.mediaRightsVerified ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{story.mediaRightsVerified ? 'Media Cleared' : 'Unverified Media'}</span>
                </span>

                <span
                  className={`inline-flex items-center gap-1 font-medium ${
                    story.participantConsentObtained ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>{story.participantConsentObtained ? 'Consent Verified' : 'Missing Consent'}</span>
                </span>
              </div>
            </div>

            {/* State Transition Actions */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-end gap-2 text-xs">
              {story.state === 'DRAFT' && (
                <button
                  onClick={() => handleTransition(story.id, 'IN_REVIEW')}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold transition"
                >
                  Submit for Editorial Review
                </button>
              )}

              {story.state === 'IN_REVIEW' && (
                <>
                  <button
                    onClick={() => handleTransition(story.id, 'DRAFT')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  >
                    Request Revision (Draft)
                  </button>
                  <button
                    onClick={() => handleTransition(story.id, 'APPROVED')}
                    className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
                  >
                    Approve Content
                  </button>
                </>
              )}

              {story.state === 'APPROVED' && (
                <button
                  onClick={() => handleTransition(story.id, 'PUBLISHED')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition shadow-md shadow-emerald-600/30"
                >
                  Promote to Public Website
                </button>
              )}

              {story.state === 'PUBLISHED' && (
                <button
                  onClick={() => handleTransition(story.id, 'ARCHIVED')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                >
                  Archive Story
                </button>
              )}

              {story.state === 'ARCHIVED' && (
                <button
                  onClick={() => handleTransition(story.id, 'DRAFT')}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                >
                  Restore to Draft
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-sky-400" />
                <span>Create Institutional Story / Article</span>
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-medium">Story Headline *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Student Team Wins National Smart India Hackathon"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Content Category</label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value as ContentCategory)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="CAMPUS_LIFE_STORY">Campus Life Story</option>
                    <option value="STUDENT_INNOVATION">Student Innovation</option>
                    <option value="IEEE_HIGHLIGHT">IEEE Student Branch</option>
                    <option value="IEDC_STARTUP">IEDC Incubation</option>
                    <option value="NSS_OUTREACH">NSS Community Outreach</option>
                    <option value="ACADEMIC_ACHIEVEMENT">Academic Achievement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Primary Source Type</label>
                  <select
                    value={sourceType}
                    onChange={e => setSourceType(e.target.value as SourceType)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="HUMANS_OF_CEK">@humansofcek (Instagram Community)</option>
                    <option value="IEEE_STUDENT_BRANCH">IEEE Student Branch</option>
                    <option value="IEDC_CELL">IEDC Innovation Cell</option>
                    <option value="NSS_UNIT_543">NSS Unit No. 543</option>
                    <option value="OFFICIAL_COLLEGE_NOTICE">Official College Notice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Traceable Source Attribution *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. @humansofcek Interview Series (Oct 2026)"
                  value={sourceAttribution}
                  onChange={e => setSourceAttribution(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Summary (Min 20 characters) *
                </label>
                <textarea
                  required
                  rows={2}
                  value={summary}
                  onChange={e => setSummary(e.target.value)}
                  placeholder="Concise factual overview of the milestone or event..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Detailed Article Body</label>
                <textarea
                  rows={3}
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  placeholder="Full background, student quotes, and educational takeaway..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              {/* Compliance toggles */}
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mediaRightsVerified}
                    onChange={e => setMediaRightsVerified(e.target.checked)}
                    className="accent-sky-500"
                  />
                  <span>I confirm media copyright & re-publication rights are verified.</span>
                </label>

                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={participantConsentObtained}
                    onChange={e => setParticipantConsentObtained(e.target.checked)}
                    className="accent-sky-500"
                  />
                  <span>I confirm privacy consent has been obtained from identifiable persons.</span>
                </label>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold transition"
                >
                  Create Submission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
