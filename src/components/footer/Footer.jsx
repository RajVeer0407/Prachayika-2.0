// ── components/footer/Footer.jsx ─────────────────────────────────────────────
// Full site footer with brand, navigation, services, and contact columns.
// ─────────────────────────────────────────────────────────────────────────────

import { Link, NavLink } from 'react-router-dom'

const PHONE = '+91 95820 56738'
const EMAIL = 'info@prachayikaevents.com'

const NAV_LINKS = [
  { label: 'Home',     path: '/about'        },
  { label: 'Event Solutions',   path: '/services'     },
  { label: 'Our Work',  path: '/events'       },
  { label: 'Gallery',    path: '/gallery'      },
  { label: 'Testimonials',     path: '/testimonials' },
  { label: 'Contact',    path: '/contact'      },
]

const SERVICES = [
  'Grand Weddings', 'Destination Affairs',
  'Corporate Eminence', 'Brand Mythology', 'Private Galas',
]

export default function Footer() {
  return (
    <footer className="bg-[#040302] border-t border-gold/10">

      {/* ── Main grid ─────────────────────────────────────── */}
      <div className="container-luxury py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-flex flex-col mb-6">
            <span className="font-display italic text-white text-2xl font-light tracking-wide leading-none">
              Prachayika
            </span>
            <span className="font-display text-[8px] text-gold tracking-luxury uppercase mt-1">
              Events
            </span>
          </Link>

          <p className="font-body text-cream/35 text-sm leading-relaxed max-w-[240px] mb-6">
            Creating extraordinary experiences that linger in memory long after the last candle has been extinguished.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { label: 'Instagram', char: 'IG' },
              { label: 'Facebook',  char: 'FB' },
              { label: 'LinkedIn',  char: 'LI' },
              { label: 'YouTube',   char: 'YT' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 border border-gold/20 flex items-center justify-center
                           font-display text-[9px] tracking-wider text-cream/40
                           hover:border-gold/60 hover:text-gold transition-all duration-300"
              >
                {s.char}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <h4 className="font-display text-[9px] tracking-luxury uppercase text-gold/70 mb-6">
            Navigation
          </h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <NavLink
                  to={l.path}
                  className={({ isActive }) =>
                    `font-display italic text-sm transition-colors duration-300
                     ${isActive ? 'text-gold' : 'text-cream/40 hover:text-cream/80'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h4 className="font-display text-[9px] tracking-luxury uppercase text-gold/70 mb-6">
            Event Solutions
          </h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="font-display italic text-sm text-cream/40 hover:text-cream/80 transition-colors duration-300"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 className="font-display text-[9px] tracking-luxury uppercase text-gold/70 mb-6">
            Reach Us
          </h4>
          <div className="space-y-5">
            {/* Phone */}
            <div>
              <p className="font-display text-[9px] tracking-wider uppercase text-gold/40 mb-1">Phone</p>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`}
                 className="font-display italic text-sm text-cream/50 hover:text-gold transition-colors">
                {PHONE}
              </a>
            </div>
            {/* Email */}
            <div>
              <p className="font-display text-[9px] tracking-wider uppercase text-gold/40 mb-1">Email</p>
              <a href={`mailto:${EMAIL}`}
                 className="font-display italic text-sm text-cream/50 hover:text-gold transition-colors">
                {EMAIL}
              </a>
            </div>
            {/* Address */}
            <div>
              <p className="font-display text-[9px] tracking-wider uppercase text-gold/40 mb-1">Office</p>
              <address className="font-display italic text-sm text-cream/40 not-italic leading-relaxed">
                Level 12, One World Centre<br />
                Mumbai 400013, India
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <div className="border-t border-gold/8 py-5">
        <div className="container-luxury flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-display text-[10px] tracking-wide text-cream/20">
            © 2024 Prachayika Events. All rights reserved.
          </p>
          <p className="font-display italic text-[10px] text-gold/25">
            Crafted by - Rajveer shaw (Delhi)
          </p>
        </div>
      </div>
    </footer>
  )
}
