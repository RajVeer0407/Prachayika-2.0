// ── pages/RecentEvents.jsx ────────────────────────────────────────────────────
// Full Recent Events / Our Work page with category filter tabs.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, staggerContainerVariant } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'
import EventCard    from '../components/cards/EventCard'
import Button       from '../components/ui/Button'
import { eventsData } from '../data/eventsData'

// ── All filter categories from data ──────────────────────
const CATEGORIES = ['All', ...new Set(eventsData.map((e) => e.cat || e.category))]

export default function RecentEvents() {
  const [filter,   setFilter]  = useState('All')
  const { ref, controls }      = useScrollAnimation()

  // ── Filter events by category ─────────────────────────
  const filtered = filter === 'All'
    ? eventsData
    : eventsData.filter((e) => (e.cat || e.category) === filter)

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2000&q=85"
               alt="Our Work" className="w-full h-full object-cover filter brightness-30 saturate-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
            <span className="gold-rule" />
            <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">Our Work</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
              Selected <em className="text-gold-gradient">Commissions</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Filter tabs + Grid ────────────────────────────── */}
      <section className="section-pad bg-obsidian">
        <div className="container-luxury">

          {/* Category filter */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-16">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`font-display text-[10px] tracking-luxury uppercase px-5 py-2.5 transition-all duration-300
                            ${filter === cat
                              ? 'bg-gold text-obsidian'
                              : 'border border-white/15 text-cream/50 hover:border-gold/40 hover:text-cream/80'}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Events grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              ref={ref}
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="text-center font-display italic text-cream/30 text-lg py-20">
              No events found for this category.
            </p>
          )}
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────── */}
      <section className="py-16 bg-obsidian-soft border-y border-gold/10">
        <div className="container-luxury grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: '500+', label: 'Events Delivered' },
            { num: '12',   label: 'Years of Excellence' },
            { num: '45+',  label: 'Cities & Countries' },
            { num: '98%',  label: 'Client Retention' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-light text-gold-gradient">{s.num}</p>
              <p className="font-display text-[9px] tracking-luxury uppercase text-cream/40 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-obsidian text-center">
        <div className="container-luxury max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="heading-display mb-6">
            Your Story <em className="text-gold-gradient">Belongs Here</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-body text-cream/50 mb-10 leading-relaxed">
            Every commission in our Our Work began with one conversation. Let's have yours.
          </motion.p>
          <Button to="/contact" variant="primary" size="lg">Commission Your Event</Button>
        </div>
      </section>
    </>
  )
}
