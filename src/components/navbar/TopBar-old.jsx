// ── components/navbar/TopBar.jsx ─────────────────────────────────────────────
// Fixed top strip — always visible on ALL pages.
// Shows brand tagline (left) and phone + email (right).
// ─────────────────────────────────────────────────────────────────────────────

import { Link } from 'react-router-dom'

// ── Contact constants ─────────────────────────────────────
const PHONE = '+91 95820 56738'
const EMAIL = 'info@prachayikaevents.com'

export default function TopBar() {
  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-50
        bg-obsidian/98 backdrop-blur-md
        border-b border-gold/15
        py-2.5 px-6 lg:px-16
        flex items-center justify-between
      "
    >
      {/* ── Left: Brand tagline ────────────────────────────── */}
      <Link
        to="/"
        className="font-display italic text-xs tracking-wide uppercase text-gold
                   hover:text-gold-light transition-colors hidden sm:block font-medium"
      >
        Est. 2012 · Delhi, India
      </Link>

      {/* ── Right: Contact info ────────────────────────────── */}
      <div className="flex items-center gap-6 ml-auto">
        {/* Phone */}
        <a
          href={`tel:${PHONE.replace(/\s/g, '')}`}
          className="flex items-center gap-2 font-display text-xs tracking-wide
                     text-cream/85 hover:text-gold transition-colors duration-300"
        >
          {/* Phone icon (inline SVG — no extra package needed) */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                     19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67
                     A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                     c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91
                     a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45
                     c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{PHONE}</span>
        </a>

        {/* Separator */}
        <span className="text-gold/30 hidden md:inline">|</span>

        {/* Email */}
        <a
          href={`mailto:${EMAIL}`}
          className="hidden md:flex items-center gap-2 font-display text-xs tracking-wide
                     text-cream/85 hover:text-gold transition-colors duration-300"
        >
          {/* Mail icon */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>{EMAIL}</span>
        </a>
      </div>
    </div>
  )
}
