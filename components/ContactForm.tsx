'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SuccessBanner() {
  const searchParams = useSearchParams()
  if (searchParams.get('success') !== 'true') return null
  return (
    <div className="mb-8 bg-green-50 border border-green-200 text-green-800 rounded-lg p-5 flex items-start gap-3">
      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p className="font-semibold">Message sent successfully!</p>
        <p className="text-sm mt-1 text-green-700">Thank you for reaching out. We&apos;ll get back to you within 2–3 business days.</p>
      </div>
    </div>
  )
}

export default function ContactForm() {
  return (
    <Suspense fallback={null}>
      <SuccessBanner />

      {/* Netlify Forms — Netlify detects data-netlify at deploy time and handles submissions */}
      <form
        name="contact"
        method="POST"
        action="/contact/?success=true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot — hidden from humans, catches bots */}
        <div className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject <span className="text-gold">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
          >
            <option value="">Select a topic…</option>
            <option>Enroll a Child</option>
            <option>Volunteer as an Instructor</option>
            <option>Donate an Instrument</option>
            <option>Partnership / Sponsorship</option>
            <option>Media Inquiry</option>
            <option>General Question</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us how we can help…"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="btn-gold w-full sm:w-auto"
        >
          Send Message
        </button>
      </form>
    </Suspense>
  )
}
