import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the Dallas Young Cellist Project — enroll a child, volunteer, donate an instrument, or just say hello.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.85), rgba(6,24,48,0.93)), url('/images/programs-lessons.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            We&apos;d Love to Hear From You
          </p>
          <h1 className="section-title text-white text-5xl md:text-6xl mb-6">Contact Us</h1>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-white/75 max-w-xl text-lg leading-relaxed">
            Questions, enrollment inquiries, volunteering, instrument donations —
            we&apos;re here and happy to help.
          </p>
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy mb-2">
                  Get In Touch
                </h2>
                <div className="gold-divider-left" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Whether you&apos;re a parent interested in enrolling a child, a musician
                  who would like to volunteer, or a supporter who wants to help — please
                  don&apos;t hesitate to reach out.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">Email</p>
                    <a
                      href="mailto:info@dallasyoungcellistproject.org"
                      className="text-gray-600 text-sm hover:text-gold transition-colors"
                    >
                      info@dallasyoungcellistproject.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy rounded-full flex items-center justify-center text-gold">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-1">Location</p>
                    <p className="text-gray-600 text-sm">Dallas, Texas</p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-navy rounded-lg p-6">
                <h3 className="font-serif text-gold font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Enroll a child in our programs', subject: 'Enroll a Child' },
                    { label: 'Volunteer as an instructor', subject: 'Volunteer as an Instructor' },
                    { label: 'Donate an instrument', subject: 'Donate an Instrument' },
                    { label: 'Partner with DYCP', subject: 'Partnership / Sponsorship' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow p-8">
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
