// ── components/cards/TestimonialCard.jsx ─────────────────────────────────────
// Displays a single client testimonial with quote, author, role, and avatar.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { fadeUpVariant } from '../../hooks/useScrollAnimation'

/**
 * TestimonialCard
 * @param {object}  testimonial - item from testimonialsData.js
 * @param {boolean} featured    - if true, renders a larger "hero" style card
 */
export default function TestimonialCard({ testimonial, featured = false }) {
  return (
    <motion.article
      variants={fadeUpVariant}
      className={`
        card-luxury
        flex flex-col gap-6 p-10
        hover:shadow-luxury transition-all duration-700
        ${featured ? 'p-12 border-gold/20 shadow-glow' : ''}
      `}
    >
      {/* ── Star rating with glow ───────────────────────── */}
      <div className="flex gap-2">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.span 
            key={i} 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            className="text-gold text-base"
          >
            ★
          </motion.span>
        ))}
      </div>

      {/* ── Quote with luxury styling ──────────────────── */}
      <blockquote
        className={`
          quote-luxury
          ${featured ? 'text-xl' : 'text-base'}
        `}
      >
        {testimonial.quote}
      </blockquote>

      {/* ── Refined divider ────────────────────────────── */}
      <div className="divider-luxury" />

      {/* ── Author with refined layout ──────────────────── */}
      <div className="flex items-center gap-5">
        {/* Avatar with glow */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-gold/25 
                          filter grayscale-[25%] ring-1 ring-gold/10">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full 
                          border-2 border-obsidian animate-glow" />
        </div>

        {/* Name & role */}
        <div className="flex-1">
          <p className="font-display italic text-white text-base font-light mb-1">
            {testimonial.name}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-px bg-gold/40" />
            <p className="font-display text-[9px] tracking-luxury uppercase text-gold/60">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
