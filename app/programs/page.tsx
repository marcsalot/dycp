import type { Metadata } from 'next'
import Link from 'next/link'
import { getPageContent } from '@/lib/pages'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    "Discover all Nadya's Music Bridge programs: free cello lessons, instrument loans, competition workshops, and performance opportunities for Dallas children.",
}

// Icons and images are fixed — only text comes from CMS
const programMeta: Record<string, { image: string; icon: React.ReactNode }> = {
  lessons: {
    image: '/images/programs-lessons.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  instruments: {
    image: '/images/programs-instruments.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  workshops: {
    image: '/images/programs-ensemble.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  performances: {
    image: '/images/programs-performance.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
}

export default function ProgramsPage() {
  const cms = getPageContent('programs')
  const heroSubtitle = (cms.heroSubtitle as string) ?? 'Comprehensive, free music education that meets every child at their level.'
  type ProgramEntry = { id: string; title: string; tagline: string; paragraph1: string; paragraph2: string; highlights: string[] }
  const programs = ((cms.programs as ProgramEntry[]) ?? [])

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.82), rgba(6,24,48,0.92)), url('/images/programs-ensemble.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            What We Offer
          </p>
          <h1 className="section-title text-white text-5xl md:text-6xl mb-6">Our Programs</h1>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-white/75 max-w-2xl text-lg leading-relaxed">{heroSubtitle}</p>
        </div>
      </section>

      {/* ── PROGRAM SECTIONS ──────────────────────────────────── */}
      {programs.map((prog, index) => {
        const meta = programMeta[prog.id] ?? { image: '/images/programs-lessons.jpg', icon: null }
        const isLight = index % 2 === 0

        return (
          <section
            key={prog.id}
            id={prog.id}
            className={`py-20 ${isLight ? 'bg-cream' : 'bg-navy'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  !isLight ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                }`}
              >
                {/* Image */}
                <div
                  className="h-80 lg:h-[480px] rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url('${meta.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#19376D',
                  }}
                />

                {/* Text */}
                <div>
                  <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
                    {prog.tagline}
                  </p>
                  <h2 className={`section-title mb-2 ${isLight ? 'text-navy' : 'text-white'}`}>
                    {prog.title}
                  </h2>
                  <div className="gold-divider-left" />
                  <p className={`leading-relaxed mb-4 text-sm ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                    {prog.paragraph1}
                  </p>
                  <p className={`leading-relaxed mb-4 text-sm ${isLight ? 'text-gray-600' : 'text-white/70'}`}>
                    {prog.paragraph2}
                  </p>

                  {prog.highlights?.length > 0 && (
                    <ul className="mt-6 space-y-2">
                      {prog.highlights.map((h: string) => (
                        <li key={h} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span className={`text-sm ${isLight ? 'text-gray-700' : 'text-white/75'}`}>
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gold py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Help Us Reach More Children
          </h2>
          <p className="text-white/85 mb-8">
            Your support keeps all our programs completely free for every family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-outline-white">
              Donate Now
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Enroll a Child
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
