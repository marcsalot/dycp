import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    "Support the Nadya's Music Bridge. Your donation provides free cello lessons, instruments, and performance opportunities to underprivileged children in Dallas.",
}

const uses = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: 'Instrument Purchases & Maintenance',
    description: 'Buying and maintaining cellos, bows, strings, and cases for students who have none.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Instruction & Workshops',
    description: 'Compensating instructors for their expertise and funding our UIL preparation workshops.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: 'Concert Tickets & Performances',
    description: 'Taking students to professional performances and funding student recitals and community events.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Program Expansion',
    description: 'Launching satellite programs in under-served Dallas communities and partnering with more schools.',
  },
]

export default function DonatePage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.80), rgba(6,24,48,0.92)), url('/images/donate-atmospheric.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Make a Difference
          </p>
          <h1 className="section-title text-white text-5xl md:text-6xl mb-6">Donate</h1>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-white/75 max-w-2xl text-lg leading-relaxed">
            Every gift — of any size — puts a bow in a child&apos;s hand and opens a door
            to a lifetime of music.
          </p>
        </div>
      </section>

      {/* ── DONATE FORM ───────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — context */}
            <div className="lg:col-span-2">
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-4">
                Why Give
              </p>
              <h2 className="section-title text-navy mb-2">Your Impact</h2>
              <div className="gold-divider-left" />
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                The Nadya's Music Bridge is run almost entirely by volunteers, which
                means your donation goes directly where it&apos;s needed most: instruments,
                instruction, and opportunities for children.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                NMB is a 501(c)(3) nonprofit organization. All donations are
                tax-deductible to the extent allowed by law.
              </p>

              <div className="space-y-5">
                {uses.map((use) => (
                  <div key={use.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold">
                      {use.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-navy text-sm mb-1">{use.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{use.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Zeffy embed */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="font-serif text-2xl font-bold text-navy mb-2 text-center">
                  Make a Donation
                </h3>
                <p className="text-gray-500 text-sm text-center mb-8">
                  Secure, fee-free giving powered by Zeffy
                </p>

                {/*
                  ── ZEFFY EMBED ────────────────────────────────────────
                  1. Go to zeffy.com and create a free nonprofit account
                  2. Create a "Donation Form" campaign
                  3. Copy the embed iframe code and replace the placeholder below
                  ──────────────────────────────────────────────────────
                */}
                <div className="border-2 border-dashed border-gold/40 rounded-lg p-12 text-center bg-cream">
                  <p className="text-gold font-serif text-lg font-semibold mb-2">
                    Donation Form Goes Here
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    Create your free Zeffy account at{' '}
                    <a
                      href="https://www.zeffy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline hover:text-gold transition-colors"
                    >
                      zeffy.com
                    </a>
                    , set up a donation form, then paste the iframe embed code here.
                  </p>
                  <p className="text-gray-400 text-xs font-mono bg-white border border-gray-200 rounded p-3">
                    {`<iframe src="https://www.zeffy.com/embed/..." />`}
                  </p>
                </div>

                {/* Fallback PayPal giving link */}
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-gray-400 text-xs mb-3">Also accept donations via</p>
                  <a
                    href="https://www.paypal.com/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-navy transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
                    </svg>
                    PayPal Giving Fund
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER WAYS TO GIVE ────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-3">
              More Ways to Help
            </p>
            <h2 className="section-title text-white">Other Ways to Give</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Donate an Instrument',
                description:
                  'Have a cello gathering dust? We gratefully accept instrument donations for student use. Contact us to arrange a pickup or drop-off.',
                cta: 'Contact Us',
                href: '/contact',
              },
              {
                title: 'Volunteer Your Time',
                description:
                  'Are you a cellist, musician, or music educator? We are always looking for passionate volunteer instructors and workshop leaders.',
                cta: 'Get Involved',
                href: '/contact',
              },
              {
                title: 'Spread the Word',
                description:
                  'Share our mission on social media, tell your friends, or nominate a child who would benefit from our programs.',
                cta: 'Share NMB',
                href: '/contact',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gold/20 rounded-lg p-8 text-center hover:border-gold/50 transition-colors"
              >
                <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{item.description}</p>
                <a href={item.href} className="btn-outline-gold text-sm py-2 px-6">
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
