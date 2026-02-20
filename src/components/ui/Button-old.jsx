// ── components/ui/Button.jsx ──────────────────────────────────────────────────
// Reusable button with two variants: 'primary' (gold fill) and 'ghost' (outline).
// Wraps react-router Link OR renders a plain <button>.
// ─────────────────────────────────────────────────────────────────────────────

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Button component
 * @param {'primary'|'ghost'} variant
 * @param {string}  to       - React Router path (renders <Link>)
 * @param {string}  href     - External URL (renders <a>)
 * @param {function} onClick  - Click handler (renders <button>)
 * @param {string}  size     - 'sm' | 'md' (default) | 'lg'
 * @param {React.ReactNode} children
 * @param {string}  className - extra Tailwind classes
 */
export default function Button({
  variant   = 'primary',
  to,
  href,
  onClick,
  size      = 'md',
  children,
  className = '',
  ...rest
}) {
  // ── Size map ──────────────────────────────────────────────
  const sizes = {
    sm: 'px-6 py-3 text-[10px]',
    md: 'px-8 py-4 text-[11px]',
    lg: 'px-10 py-5 text-[12px]',
  }

  // ── Base styles ───────────────────────────────────────────
  const base = `
    inline-flex items-center gap-3 font-display tracking-luxury uppercase
    transition-all duration-500 cursor-pointer select-none
    ${sizes[size]}
    ${variant === 'primary'
      ? 'bg-gold text-obsidian hover:bg-gold-light hover:shadow-gold'
      : 'border border-gold/40 text-gold hover:border-gold hover:bg-gold/10'}
    ${className}
  `

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap:   { scale: 0.97 },
    className:  base.replace(/\s+/g, ' ').trim(),
  }

  // ── Render as Link, anchor, or button ─────────────────────
  if (to)   return <motion.div {...motionProps}><Link to={to} className="flex items-center gap-3 w-full h-full" {...rest}>{children}</Link></motion.div>
  if (href)  return <motion.a  href={href} target="_blank" rel="noreferrer" {...motionProps} {...rest}>{children}</motion.a>
  return       <motion.button onClick={onClick} {...motionProps} {...rest}>{children}</motion.button>
}
