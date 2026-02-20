// ── components/navbar/MobileMenu.jsx ─────────────────────────────────────────
// Animated full-height mobile slide-in menu.
// Props: isOpen (bool), onClose (fn), navLinks (array)
// ─────────────────────────────────────────────────────────────────────────────

import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const PHONE = '+91 95820 56738'
const EMAIL = 'info@prachayikaevents.com'

const menuVariants = {
  hidden:  { x: '100%', opacity: 0 },
  visible: { x: 0,      opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit:    { x: '100%', opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function MobileMenu({ isOpen, onClose, navLinks }) {
  // ── Lock body scroll when open ────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-obsidian/70 backdrop-blur-sm"
          />

          {/* ── Drawer ──────────────────────────────────────── */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed top-0 right-0 bottom-0 z-50
              w-80 max-w-[85vw]
              bg-obsidian-soft border-l border-gold/15
              flex flex-col
            "
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="self-end mt-6 mr-6 text-cream/50 hover:text-gold transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Brand mark */}
            <div className="px-8 mt-4 pb-6 border-b border-gold/10">
              <p className="font-display italic text-white text-2xl font-light tracking-wide">Prachayika</p>
              <p className="font-display text-[9px] text-gold tracking-luxury uppercase mt-0.5">Events</p>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block font-display italic text-2xl font-light py-3 border-b border-white/5
                       transition-colors duration-300
                       ${isActive ? 'text-gold' : 'text-cream/70 hover:text-white'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Contact info at bottom */}
            <div className="px-8 py-8 border-t border-gold/10 space-y-3">
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="block font-display text-xs tracking-wide text-cream/50 hover:text-gold transition-colors">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block font-display text-xs tracking-wide text-cream/50 hover:text-gold transition-colors">
                {EMAIL}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
