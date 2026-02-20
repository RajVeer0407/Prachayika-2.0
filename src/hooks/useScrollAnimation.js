// ── hooks/useScrollAnimation.js ───────────────────────────────────────────────
// Custom hook that returns Framer Motion ref + animation state.
// Attach `ref` to any DOM element; `controls` to its `animate` prop.
// Also exports pre-built animation variant objects for consistency.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * useScrollAnimation
 * @param {string} margin - IntersectionObserver root margin (default '-80px')
 * @returns {{ ref, controls, inView }}
 */
export function useScrollAnimation(margin = '-80px') {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return { ref, controls, inView }
}

// ── Reusable Framer Motion variant presets ────────────────────────────────────

/** Fade up from below */
export const fadeUpVariant = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

/** Fade in (no movement) */
export const fadeInVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

/** Slide in from left */
export const slideLeftVariant = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

/** Slide in from right */
export const slideRightVariant = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

/** Stagger container — wraps children with staggered entry */
export const staggerContainerVariant = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

/** Scale up from center */
export const scaleUpVariant = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
