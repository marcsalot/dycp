import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Discover all NMB programs: free cello lessons, instrument loans, competition workshops, and performance opportunities for Dallas children.',
}

const programs = [
  {
    id: 'lessons',
    title: 'Cello Lessons',
    tagline: 'Free weekly instruction for every level',
    description: [
      'Every NMB student receives free, structured weekly cello lessons regardless of their prior experience. Our instructors — a dedicated team of local high school cellists and professional musicians — create individualized lesson plans that meet each student where they are.',
      'From learning how to hold a bow for the very first time to preparing competition repertoire, every lesson is designed to build technical skill, musical understanding, and a genuine love for the instrument.',
    ],
    image: '/images/programs-lessons.jpg',
    highlights: ['Beginner to advanced levels', 'Individualized lesson plans', 'Group and private sessions', 'Volunteer instructors with real-world performance experience'],
    imageLeft: true,
  },
  {
    id: 'instruments',
    title: 'Instrument Loans',
    tagline: 'Every child gets the tools they need',
    description: [
      'The cost of a cello — even a student-grade instrument — can be a significant financial barrier for many families. NMB eliminates this obstacle entirely by providing loaner cellos, bows, strings, rosin, and all necessary accessories to every participant at no cost.',
      'Instruments are maintained and regularly serviced so that students are always playing on equipment that supports their growth. When a student outgrows their instrument, they are fitted with the next size up automatically.',
    ],
    image: '/images/programs-instruments.jpg',
    highlights: ['Full-size to 1/8 cellos for all ages', 'Bows, cases, and accessories included', 'Regular instrument maintenance', 'Automatic upgrades as students grow'],
    imageLeft: false,
  },
  {
    id: 'workshops',
    title: 'Competition Workshops',
    tagline: 'Expert preparation for UIL & beyond',
    description: [
      'NMB organizes intensive workshops specifically timed to help students prepare for UIL competitions, all-city, all-region, and all-state auditions. These workshops cover audition repertoire, sight-reading skills, performance practice, and mental preparation.',
      'Led by professional musicians with extensive competition and audition experience, these sessions give NMB students the tools and confidence to compete alongside students from much more resourced programs — and excel.',
    ],
    image: '/images/programs-ensemble.jpg',
    highlights: ['UIL, all-city, all-region, all-state preparation', 'Sight-reading clinics', 'Mock audition sessions', 'Performance anxiety strategies'],
    imageLeft: true,
  },
  {
    id: 'performances',
    title: 'Performance Opportunities',
    tagline: 'Building confidence on every stage',
    description: [
      'NMB believes strongly in the power of performance. Beyond the practice room, students are regularly invited to perform at community events, school showcases, and seasonal recitals. These experiences build stage presence, ensemble awareness, and the immense pride that comes from sharing music publicly.',
      'We also organize opportunities for students to attend top-level professional concerts — exposing them to the highest level of cello playing and inspiring them to envision their own musical futures.',
    ],
    image: '/images/programs-performance.jpg',
    highlights: ['Regular community recitals', 'School and public performances', 'Tickets to professional concerts', 'Ensemble and solo opportunities'],
    imageLeft: false,
  },
]

export default function ProgramsPage() {
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
          <p className="text-white/75 max-w-2xl text-lg leading-relaxed">
            Comprehensive, free music education that meets every child at their level
            and supports them every step of the way.
          </p>
        </div>
      </section>

      {/* ── PROGRAM SECTIONS ──────────────────────────────────── */}
      {programs.map((prog, index) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-cream' : 'bg-navy'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                prog.imageLeft ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
              }`}
            >
              {/* Image */}
              <div
                className="h-80 lg:h-[480px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url('${prog.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#19376D',
                }}
              />

              {/* Text */}
              <div className={index % 2 === 0 ? 'text-gray-800' : 'text-white'}>
                <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
                  {prog.tagline}
                </p>
                <h2 className={`section-title mb-2 ${index % 2 === 0 ? 'text-navy' : 'text-white'}`}>
                  {prog.title}
                </h2>
                <div className="gold-divider-left" />

                {prog.description.map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed mb-4 text-sm ${
                      index % 2 === 0 ? 'text-gray-600' : 'text-white/70'
                    }`}
                  >
                    {para}
                  </p>
                ))}

                <ul className="mt-6 space-y-2">
                  {prog.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span
                        className={`text-sm ${
                          index % 2 === 0 ? 'text-gray-700' : 'text-white/75'
                        }`}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

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
