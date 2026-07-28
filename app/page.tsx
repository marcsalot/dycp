import Link from 'next/link'

const programs = [
  {
    title: 'Cello Lessons',
    description:
      'Free weekly lessons for beginners through advanced students, taught by experienced high school and professional musicians.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    image: '/images/programs-lessons.jpg',
    color: 'from-navy to-navy-light',
  },
  {
    title: 'Instrument Loans',
    description:
      'Loaner cellos, bows, and all necessary accessories provided to every participant — removing financial barriers entirely.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    image: '/images/programs-instruments.jpg',
    color: 'from-navy-light to-navy',
  },
  {
    title: 'Competition Workshops',
    description:
      'Dedicated workshops preparing students for UIL, all-city, all-region, and all-state auditions with expert coaching.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    image: '/images/programs-ensemble.jpg',
    color: 'from-navy to-navy-dark',
  },
  {
    title: 'Performances',
    description:
      'Regular recitals, community concerts, and opportunities to attend top-level professional performances.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    image: '/images/programs-performance.jpg',
    color: 'from-navy-dark to-navy',
  },
]

const stats = [
  { value: '100+', label: 'Children Served' },
  { value: '20+', label: 'Volunteer Instructors' },
  { value: 'Free', label: 'Cost to All Families' },
  { value: '5+', label: 'Years of Impact' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.78), rgba(6,24,48,0.88)), url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <p className="text-gold tracking-[0.35em] uppercase text-xs sm:text-sm font-medium mb-6">
            Nadya's Music Bridge
          </p>
          <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
            Music Has the Power<br className="hidden sm:block" /> to Transform Lives
          </h1>
          <div className="w-20 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Providing free cello lessons, instruments, and performance opportunities
            to underprivileged children across Dallas, Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-outline-white">
              Our Mission
            </Link>
            <Link href="/donate" className="btn-gold">
              Donate Now
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── MISSION STRIP ────────────────────────────────────── */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                ),
                title: 'Develop Musical Skills',
                text: 'Structured cello instruction tailored to each child\'s pace, from first bow hold to competition-level performance.',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
                title: 'Foster Personal Growth',
                text: 'Building discipline, patience, and self-confidence that extends far beyond the music room.',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: 'Build Community',
                text: 'Creating a supportive family of students, parents, and instructors united by a love of music.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center px-8 py-10">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div
              className="relative h-80 lg:h-[480px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('/images/about-lesson.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#19376D',
              }}
            >
              <div className="absolute inset-0 bg-navy/20" />
              {/* Gold frame accent */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border-2 border-gold/30 rounded-lg -z-10" />
            </div>

            {/* Text */}
            <div className="text-white">
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-4">
                Our Story
              </p>
              <h2 className="section-title text-white mb-2">
                Music for Every Child,<br /> Regardless of Means
              </h2>
              <div className="gold-divider-left" />
              <p className="text-white/75 leading-relaxed mb-5">
                Access to quality music education can often be limited by socio-economic
                factors, leaving many talented children unable to pursue their musical
                potential. The Nadya's Music Bridge bridges this gap.
              </p>
              <p className="text-white/75 leading-relaxed mb-10">
                Through free lessons, loaner instruments, workshop preparation, and
                performance opportunities, we nurture not just musicians — but confident,
                disciplined, and culturally enriched young people.
              </p>
              <Link href="/about" className="btn-outline-white">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
              What We Offer
            </p>
            <h2 className="section-title text-navy">Our Programs</h2>
            <div className="gold-divider" />
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Comprehensive support for every step of a young cellist&apos;s journey —
              at no cost to families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Image / gradient header */}
                <div
                  className={`h-44 bg-gradient-to-br ${prog.color} relative overflow-hidden`}
                  style={{
                    backgroundImage: `url('${prog.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">{prog.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{prog.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{prog.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-outline-gold">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────── */}
      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.92), rgba(6,24,48,0.95)), url('/images/donate-atmospheric.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
              Our Impact
            </p>
            <h2 className="section-title text-white">Making a Difference</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-5xl md:text-6xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ───────────────────────────────────────── */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Your Generosity Changes Everything
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">
            Every dollar you give provides a child with instruments, instruction, and the
            confidence that comes from making music. 100% of donations go directly to programs.
          </p>
          <Link href="/donate" className="btn-outline-white">
            Donate Today
          </Link>
        </div>
      </section>
    </>
  )
}
