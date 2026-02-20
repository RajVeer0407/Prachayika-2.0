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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const links = [
    { id: 'about', label: 'Home' },
    { id: 'services', label: 'Event Solutions' },
    { id: 'Our Work', label: 'Our Work' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <header
        className={`
          fixed top-9 left-0 right-0 z-40
          px-6 lg:px-16 h-20 lg:h-24
          flex items-center justify-between
          transition-all duration-500
          ${scrolled
            ? 'bg-obsidian/98 backdrop-blur-xl border-b border-gold/20 shadow-deep'
            : 'bg-obsidian/85 backdrop-blur-md border-b border-gold/15'}
        `}
      >
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link to="/" className="flex flex-col items-start">
          <span className="font-display italic text-white text-2xl lg:text-3xl font-light tracking-wide leading-none">
            Prachayika
          </span>
          <span className="font-display text-[10px] text-gold tracking-luxury uppercase mt-1">
            Events
          </span>
        </Link>

        {/* ── Desktop nav links ─────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-display text-sm tracking-wide uppercase font-medium
                 transition-colors duration-300 relative group
                 ${isActive ? 'text-gold' : 'text-cream/90 hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {/* Underline accent */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-px bg-gold
                      transition-all duration-400
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── Desktop CTA ───────────────────────────────────── */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-ghost text-xs py-3 px-8"
        >
          Enquire
        </Link>

        {/* ── Mobile hamburger ─────────────────────────────── */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden flex flex-col gap-1.5 p-2 text-gold hover:text-gold-light transition-colors"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-current" />
          <span className="block w-4 h-0.5 bg-current" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={links}
      />
    </>
  )
}
