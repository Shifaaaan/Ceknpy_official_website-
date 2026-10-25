'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Building,
  Navigation,
} from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950 text-sky-400 border border-sky-800/60 text-xs font-semibold mb-3">
            <MapPin className="w-4 h-4" />
            <span>Campus Location & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact College of Engineering Karunagappally
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Reach out for admissions inquiries, academic verification, industry collaboration, or visit our
            serene campus situated at Thodiyoor in Karunagappally, Kollam district.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Travel Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-400" />
                <span>Campus Postal Address</span>
              </h3>

              <div className="text-xs sm:text-sm text-slate-300 space-y-1">
                <p className="font-semibold text-white">College of Engineering Karunagappally</p>
                <p>Thodiyoor P.O., Karunagappally</p>
                <p>Kollam District, Kerala - 690568, India</p>
                <p className="text-xs text-slate-500 pt-1">Institution Code: KNP</p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-xs block">Principal & Office Desk</span>
                    <a href="tel:+914762580555" className="font-medium hover:text-white">
                      +91 476 2580555
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-xs block">Official Inquiries & Admissions</span>
                    <a href="mailto:ceknpy.ihrd@gmail.com" className="font-medium hover:text-white">
                      ceknpy.ihrd@gmail.com / principal@ceknpy.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Directions Guide */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>How to Reach Campus</span>
              </h4>

              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  <strong>By Rail:</strong> Karunagappally Railway Station (KPY) is ~4 km from campus. Auto-rickshaws
                  and local buses to Thodiyoor are readily available.
                </p>
                <p>
                  <strong>By Road:</strong> NH 66 passes through Karunagappally town (~3.5 km). KSRTC bus stand connects
                  to Kollam, Alappuzha, and Thiruvananthapuram.
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Send an Institutional Inquiry</h3>
            <p className="text-xs text-slate-400 mb-6">
              Our academic administration desk responds to verified student and parent queries within 2 business days.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-800 text-emerald-300 space-y-2">
                <div className="flex items-center gap-2 font-bold text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Inquiry Dispatched to Administrative Desk</span>
                </div>
                <p className="text-xs text-slate-300">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding{' '}
                  <em>{formData.subject}</em> has been logged. Our office will contact you at{' '}
                  <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-emerald-400 underline font-semibold cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 94471 XXXXX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry (KEAM / NRI / LET)</option>
                      <option value="Academic Verification">Academic Verification & Transcripts</option>
                      <option value="Placement & Training">Placement & Corporate Partnerships</option>
                      <option value="General Administration">General Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your query..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
