import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-gold text-3xl font-bold mb-1">NMB</div>
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">
              Nadya's Music Bridge
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Bridging the gap in music education by giving underprivileged children
              in Dallas the gift of classical music — completely free.
            </p>
            {/* Social — update hrefs when accounts are created */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-gold text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/programs', label: 'Our Programs' },
                { href: '/donate', label: 'Donate' },
                { href: '/news', label: 'News & Updates' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-gold text-lg font-semibold mb-5">Get In Touch</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>Dallas, Texas</p>
              {/* Update email once confirmed */}
              <a
                href="mailto:info@dycp.org"
                className="block hover:text-gold transition-colors"
              >
                info@dycp.org
              </a>
            </div>
            <div className="mt-6">
              <Link href="/donate" className="btn-gold text-sm py-2 px-6">
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Nadya's Music Bridge. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">A 501(c)(3) nonprofit organization</p>
        </div>
      </div>
    </footer>
  )
}
