import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the Dallas Young Cellist Project — our mission, methodology, and the dedicated team bringing free cello education to Dallas children.',
}

const objectives = [
  {
    number: '01',
    title: 'Enhance Musical Skills',
    description:
      'Equip children with fundamental musical knowledge and cello-playing skills through structured, individualized lessons.',
  },
  {
    number: '02',
    title: 'Promote Personal Development',
    description:
      'Foster discipline, patience, and teamwork through group sessions, ensemble practice, and public performances.',
  },
  {
    number: '03',
    title: 'Cultivate Cultural Awareness',
    description:
      'Expose children to classical music and its rich history, broadening their cultural horizons and appreciation.',
  },
  {
    number: '04',
    title: 'Build Community',
    description:
      'Create a supportive, inclusive community where children and families engage in music together.',
  },
]

const methodology = [
  {
    title: 'Recruiting Instructors',
    description:
      'We partner with local high school cello students and professional musicians who volunteer their time and expertise. Instructors create tailored lesson plans that cater to varying skill levels and learning paces.',
  },
  {
    title: 'Providing Instruments & Supplies',
    description:
      'A significant barrier for underprivileged children is the lack of instruments. We offer loaner cellos, bows, strings, and accessories to every participant — ensuring no child is left behind.',
  },
  {
    title: 'Organizing Workshops',
    description:
      'We hold focused workshops before UIL competitions, all-city, all-region, and all-state auditions, where students learn effective practice strategies to successfully prepare.',
  },
  {
    title: 'Performance Opportunities',
    description:
      'Participants are encouraged to perform at local community events and recitals, building confidence and showcasing their progress in a supportive environment.',
  },
]

export default function AboutPage() {
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
          <h1 className="section-title text-white text-5xl md:text-6xl mb-6">About DYCP</h1>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-white/75 max-w-2xl text-lg leading-relaxed">
            A dedicated charity initiative bringing the transformative power of cello
            education to underprivileged children across Dallas, Texas.
          </p>
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
              <p className="text-gray-600 leading-relaxed mb-5">
                Access to quality music education can often be limited by socio-economic
                factors, leaving many talented children unable to pursue their musical
                potential. The Dallas Young Cellist Project was founded to bridge this gap.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                By providing free lessons, instrument rentals, strings, and access to
                experienced instructors, DYCP gives every child — regardless of their
                family&apos;s financial situation — the opportunity to discover and develop
                their musical gifts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe music education is not a luxury. It is a tool for personal
                development, cultural enrichment, and community building that every
                child deserves.
              </p>
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

      {/* ── METHODOLOGY ───────────────────────────────────────── */}
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

      {/* ── FUTURE PLANS ──────────────────────────────────────── */}
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
              DYCP is committed to expanding its reach and impact across the Dallas–Fort Worth area.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Satellite Programs',
                  text: 'Launching additional programs in nearby communities to reach more children who currently have no access to music education.',
                },
                {
                  title: 'Fundraising Initiatives',
                  text: 'Organizing fundraising events to secure additional funding for instruments, teaching materials, and instructor compensation.',
                },
                {
                  title: 'School Partnerships',
                  text: 'Collaborating with Dallas-area schools to integrate cello lessons into after-school programs, maximizing accessibility for every student.',
                },
              ].map((plan) => (
                <div key={plan.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gold mt-1" />
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-gold py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/85 mb-8">
            Whether through a donation, volunteering, or spreading the word — you can
            help transform a child&apos;s life through music.
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
