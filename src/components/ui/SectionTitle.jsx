// ── components/ui/SectionTitle.jsx ───────────────────────────────────────────
// Reusable section header.
// Renders: gold rule + label + display heading + optional subtext.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainerVariant } from '../../hooks/useScrollAnimation'

/**
 * SectionTitle component
 * @param {string} label      - Small uppercase gold label above heading
 * @param {string} heading    - Main display heading (supports <br/> via dangerouslySetInnerHTML)
 * @param {string} accent     - Italic gold accent portion of heading
 * @param {string} subtext    - Optional paragraph below heading
 * @param {'left'|'center'} align - Text alignment (default: 'left')
 * @param {object} controls   - Framer Motion animation controls
 */
export default function SectionTitle({
  label,
  heading,
  accent,
  subtext,
  align    = 'left',
  controls,
}) {
  const centered = align === 'center'

  return (
    <motion.div
      variants={staggerContainerVariant}
      initial="hidden"
      animate={controls || 'visible'}
      className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start'}`}
    >
      {/* ── Gold rule + label ──────────────────────────────── */}
      {label && (
        <motion.div
          variants={fadeUpVariant}
          className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}
        >
          <span className="gold-rule" />
          <span className="font-display text-[10px] tracking-luxury uppercase text-gold/80">
            {label}
          </span>
          <span className="gold-rule" />
        </motion.div>
      )}

      {/* ── Main heading ───────────────────────────────────── */}
      <motion.h2
        variants={fadeUpVariant}
        className="heading-display"
      >
        {heading}
        {accent && (
          <>
            {' '}
            <em className="text-gold-gradient not-italic">{accent}</em>
          </>
        )}
      </motion.h2>

      {/* ── Optional subtext ───────────────────────────────── */}
      {subtext && (
        <motion.p
          variants={fadeUpVariant}
          className={`font-body text-cream/55 text-base leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''}`}
        >
          {subtext}
        </motion.p>
      )}
    </motion.div>
  )
}
