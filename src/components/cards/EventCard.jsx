// ── components/cards/EventCard.jsx ───────────────────────────────────────────
// Displays a single Our Work event with image zoom + overlay on hover.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUpVariant } from '../../hooks/useScrollAnimation'

/**
 * EventCard
 * @param {object} event - item from eventsData.js
 */
export default function EventCard({ event }) {
  return (
    <motion.article
      variants={fadeUpVariant}
      className="group relative overflow-hidden cursor-pointer luxury-lift"
    >
      {/* ── Image with cinematic zoom ───────────────────── */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <motion.img
          src={event.image}
          alt={event.title}
          loading="lazy"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover filter brightness-[0.65] saturate-75"
        />

        {/* Multi-layer gradient */}
        <div className="image-overlay" />
        <div className="vignette" />

        {/* Category badge with refined styling */}
        <div className="absolute top-5 left-5">
          <div className="flex items-center gap-3 bg-obsidian/60 backdrop-blur-md 
                          border border-gold/20 px-4 py-2">
            <span className="w-1 h-1 rounded-full bg-gold animate-glow" />
            <span className="font-display text-[9px] tracking-luxury uppercase text-gold">
              {event.category}
            </span>
          </div>
        </div>

        {/* Year badge */}
        <span className="absolute top-5 right-5 font-display text-[9px] tracking-wider
                         text-cream/30 uppercase">
          {event.year}
        </span>

        {/* Hover overlay with sophisticated entrance */}
        <motion.div
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          whileHover={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: 'linear-gradient(to top, rgba(8,6,4,0.85), rgba(8,6,4,0.4))' }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="border border-gold/70 text-gold font-display text-[10px]
                         tracking-luxury uppercase px-8 py-4 
                         hover:bg-gold hover:text-obsidian hover:border-gold
                         transition-all duration-700 shadow-gold"
            >
              Plan Similar Event
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-xs text-cream/40 tracking-wider uppercase"
          >
            {event.guests} guests
          </motion.p>
        </motion.div>

        {/* Bottom info with refined typography */}
        <div className="absolute bottom-0 left-0 right-0 p-7 
                        bg-gradient-to-t from-obsidian/95 to-transparent">
          <div className="flex items-center gap-2 text-cream/35 text-xs mb-2">
            <span className="w-4 h-px bg-gold/30" />
            <span className="font-display tracking-wide">📍 {event.subtitle}</span>
          </div>
          <h3 className="font-display text-xl italic text-white font-light mb-3
                         group-hover:text-gold-light transition-colors duration-700">
            {event.title}
          </h3>
          <p className="font-body text-cream/45 text-xs leading-relaxed line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
