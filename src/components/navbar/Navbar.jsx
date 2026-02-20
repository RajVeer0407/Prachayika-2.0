// ── components/navbar/Navbar.jsx ─────────────────────────────────────────────
// Sticky navbar that starts transparent and gains a frosted-glass background
// after the user scrolls past 80px. Includes the MobileMenu toggle.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

// ── Navigation link config ────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',     path: '/about'        },
  { label: 'Event Solutions',   path: '/services'     },
  { label: 'Our Work',  path: '/events'       },
  { label: 'Gallery',    path: '/gallery'      },
  { label: 'Testimonials',     path: '/testimonials' },
  { label: 'Contact',    path: '/contact'      },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  // ── Track scroll position ─────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`
          fixed top-9 left-0 right-0 z-40
          px-6 lg:px-16 h-16 lg:h-20
          flex items-center justify-between
          transition-all duration-500
          ${scrolled
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-gold/10 shadow-deep'
            : 'bg-transparent'}
        `}
      >
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link to="/" className="flex flex-col items-start hover-lift">
          <span className="font-display text-white text-2xl lg:text-3xl font-bold tracking-wide leading-none">
            Prachayika
          </span>
          <span className="font-display text-xs text-gold tracking-widest uppercase mt-1 font-semibold">
            Events
          </span>
        </Link>

        {/* ── Desktop nav links ─────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-sm font-medium tracking-wide uppercase
                 transition-all duration-300 nav-link-hover
                 ${isActive ? 'text-gold active' : 'text-white/90 hover:text-gold'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTA ───────────────────────────────────── */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-ghost text-sm py-3 px-7 hover-lift"
        >
          Get Quote
        </Link>

        {/* ── Mobile hamburger ─────────────────────────────── */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex flex-col gap-1.5 p-2 text-white/90 hover:text-gold transition-colors"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-current transition-all" />
          <span className="block w-6 h-0.5 bg-current transition-all" />
          <span className="block w-6 h-0.5 bg-current transition-all" />
        </button>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  )
}
