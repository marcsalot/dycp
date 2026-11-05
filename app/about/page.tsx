import type { Metadata } from 'next'
import Link from 'next/link'
import { getPageContent } from '@/lib/pages'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Nadya's Music Project — our mission, methodology, and the dedicated team bringing free cello education to Dallas children.",
}

export default function AboutPage() {
  const cms = getPageContent('about')

  const heroSubtitle = (cms.heroSubtitle as string) ?? "A dedicated charity initiative bringing the transformative power of cello education to underprivileged children across Dallas, Texas."
  const introParagraph1 = (cms.introParagraph1 as string) ?? ''
  const introParagraph2 = (cms.introParagraph2 as string) ?? ''
  const introParagraph3 = (cms.introParagraph3 as string) ?? ''

  const objectives = ((cms.objectives as { number: string; title: string; description: string }[]) ?? [])
  const methodology = ((cms.methodology as { title: string; description: string }[]) ?? [])
  const futurePlans = ((cms.futurePlans as { title: string; text: string }[]) ?? [])

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.82), rgba(6,24,48,0.92)), url('/images/about-lesson.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Who We Are
          </p>
          <h1 className="section-title text-white text-5xl md:text-6xl mb-6">About Us</h1>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-white/75 max-w-2xl text-lg leading-relaxed">{heroSubtitle}</p>
        </div>
      </section>

      {/* ── INTRODUCTION ──────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-4">
                Our Beginning
              </p>
              <h2 className="section-title text-navy mb-2">
                Where Every Child Deserves Music
              </h2>
              <div className="gold-divider-left" />
              <p className="text-gray-600 leading-relaxed mb-5">{introParagraph1}</p>
              <p className="text-gray-600 leading-relaxed mb-5">{introParagraph2}</p>
              <p className="text-gray-600 leading-relaxed">{introParagraph3}</p>
            </div>

            <div
              className="h-96 lg:h-[500px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/images/about-lesson.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#19376D',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ────────────────────────────────────────── */}
      {objectives.length > 0 && (
        <section className="bg-navy py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
                What We Stand For
              </p>
              <h2 className="section-title text-white">Project Objectives</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {objectives.map((obj) => (
                <div
                  key={obj.number}
                  className="border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-colors"
                >
                  <div className="font-serif text-5xl font-bold text-gold/30 mb-4 leading-none">
                    {obj.number}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{obj.title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm">{obj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── METHODOLOGY ───────────────────────────────────────── */}
      {methodology.length > 0 && (
        <section className="bg-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
                How We Do It
              </p>
              <h2 className="section-title text-navy">Our Methodology</h2>
              <div className="gold-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methodology.map((item, i) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                    <span className="font-serif text-gold font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FUTURE PLANS ──────────────────────────────────────── */}
      {futurePlans.length > 0 && (
        <section
          className="py-20 text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,24,48,0.9), rgba(6,24,48,0.95)), url('/images/programs-performance.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#061830',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-4">
                Looking Ahead
              </p>
              <h2 className="section-title text-white mb-2">Future Plans</h2>
              <div className="gold-divider-left" />
              <p className="text-white/70 leading-relaxed mb-10">
                We are committed to expanding our reach and impact across the Dallas–Fort Worth area.
              </p>

              <div className="space-y-6">
                {futurePlans.map((plan) => (
                  <div key={plan.title} className="flex gap-4">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-gold mb-1">{plan.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed">{plan.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gold py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/85 mb-8">
            Whether through a donation, volunteering, or spreading the word — you can
            help transform a child's life through music.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-outline-white">
              Donate Now
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
