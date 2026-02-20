// ── components/whatsapp/WhatsAppFloat.jsx ────────────────────────────────────
// Floating WhatsApp button — fixed bottom-right on ALL pages.
// Animates in after a 2s delay. Expands to show label on hover.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '919876543210'
const MESSAGE = encodeURIComponent(
  'Namaste! I\'d like to commission an event with Prachayika Events.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`

// WhatsApp SVG icon (inline — no react-icons dependency required)
function WhatsAppIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C9.373 3 4 8.373 4 15c0 2.385.672 4.614 1.84 6.513L4 29l7.715-1.824A11.93 11.93 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
        fill="white"
      />
      <path
        d="M21.94 18.86c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.49s1.06 2.89 1.21 3.09c.15.2 2.09 3.19 5.06 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z"
        fill="#25D366"
      />
    </svg>
  )
}

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      // ── Entry animation (delay 2s after mount) ─────────────
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 18 }}
      // ── Hover spring ────────────────────────────────────────
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="
        fixed bottom-8 right-8 z-50
        flex items-center gap-3
        bg-[#25D366] text-white
        shadow-[0_8px_32px_rgba(37,211,102,0.35)]
        hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)]
        transition-all duration-400
        overflow-hidden
      "
      style={{ padding: hovered ? '14px 20px' : '14px' }}
    >
      {/* Icon */}
      <WhatsAppIcon size={24} />

      {/* Expandable label */}
      <motion.span
        animate={{ width: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[10px] tracking-luxury uppercase text-white/95 whitespace-nowrap overflow-hidden"
      >
        WhatsApp Us
      </motion.span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-none animate-ping bg-[#25D366] opacity-20 pointer-events-none" />
    </motion.a>
  )
}
