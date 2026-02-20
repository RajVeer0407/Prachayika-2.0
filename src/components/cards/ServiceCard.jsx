// ── components/cards/ServiceCard.jsx ─────────────────────────────────────────
// Displays a single service with image, number, title, description & features.
// Hover reveals a subtle overlay with a CTA arrow.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUpVariant } from '../../hooks/useScrollAnimation'

/**
 * ServiceCard
 * @param {object} service - item from servicesData.js
 */
export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={fadeUpVariant}
      className="group relative overflow-hidden cursor-pointer card-luxury luxury-lift"
    >
      {/* ── Image wrapper with reveal ──────────────────────── */}
      <div className="relative h-80 overflow-hidden reveal-image">
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover filter brightness-[0.65] saturate-75"
        />
        {/* Enhanced gradient overlay */}
        <div className="image-overlay" />
        
        {/* Vignette effect */}
        <div className="vignette" />

        {/* Number badge with glow */}
        <div className="absolute top-5 left-5 flex items-center gap-3">
          <span className="w-px h-8 bg-gold/30" />
          <span className="font-display text-xs tracking-luxury text-gold/70">
            {service.number}
          </span>
        </div>

        {/* Hover overlay with refined animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
          style={{ background: 'rgba(8,6,4,0.7)' }}
        >
          <Link
            to="/contact"
            className="border border-gold/60 text-gold font-display text-[10px] tracking-luxury
                       uppercase px-8 py-4 hover:bg-gold/15 transition-all duration-500
                       shadow-glow"
          >
            Commission This →
          </Link>
        </motion.div>
      </div>

      {/* ── Content with refined spacing ───────────────────── */}
      <div className="p-8 bg-obsidian-soft/80 backdrop-blur-sm border border-white/5 border-t-0">
        {/* Subtitle */}
        <p className="font-display text-[10px] tracking-luxury uppercase text-gold/60 mb-3 flex items-center gap-2">
          <span className="w-6 h-px bg-gold/30" />
          {service.subtitle}
        </p>

        {/* Title with luxury underline */}
        <h3 className="font-display text-2xl italic text-white font-light mb-4 luxury-underline
                       group-hover:text-gold-light transition-colors duration-700">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-cream/45 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features with refined styling */}
        <div className="divider-luxury mb-5" />
        <ul className="flex flex-wrap gap-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="font-display text-[9px] tracking-wider uppercase text-cream/35
                         border border-white/8 px-4 py-2 hover:border-gold/30 
                         hover:text-cream/60 transition-all duration-500"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
