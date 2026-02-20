// ── pages/Testimonials.jsx ───────────────────────────────────────────────────
// Full Testimonials / Testimonials page:
// Hero → Featured Quote → Grid → CTA
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeUpVariant, staggerContainerVariant } from '../hooks/useScrollAnimation'
import SectionTitle    from '../components/ui/SectionTitle'
import TestimonialCard from '../components/cards/TestimonialCard'
import Button          from '../components/ui/Button'
import { testimonialsData } from '../data/testimonialsData'

export default function Testimonials() {
  const [cur, setCur]      = useState(0)
  const { ref, controls }  = useScrollAnimation()

  const prev = () => setCur((c) => (c - 1 + testimonialsData.length) % testimonialsData.length)
  const next = () => setCur((c) => (c + 1) % testimonialsData.length)

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=2000&q=85"
               alt="Testimonials" className="w-full h-full object-cover filter brightness-25 saturate-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
            <span className="gold-rule" />
            <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">Client Love</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
              Words of Those <em className="text-gold-gradient">Who Lived It</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Featured Slider ───────────────────────────────── */}
      <section className="py-28 bg-obsidian overflow-hidden relative">
        {/* Decorative large quote */}
        <div className="absolute top-8 left-12 font-display text-[28vw] leading-none text-gold/[0.025]
                        select-none pointer-events-none" aria-hidden="true">"</div>

        <div className="container-luxury max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div key={cur}
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center px-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(testimonialsData[cur].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display italic font-light text-cream/85 leading-relaxed mb-12"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}>
                "{testimonialsData[cur].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-5">
                <div className="w-px h-12 bg-gold/25" />
                <img src={testimonialsData[cur].image} alt={testimonialsData[cur].name}
                     className="w-14 h-14 rounded-full object-cover border border-gold/25 filter grayscale-[20%]" />
                <div className="text-left">
                  <p className="font-display italic text-white text-base">{testimonialsData[cur].name}</p>
                  <p className="font-display text-[9px] tracking-luxury uppercase text-gold/60 mt-0.5">
                    {testimonialsData[cur].role}
                  </p>
                </div>
                <div className="w-px h-12 bg-gold/25" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev}
              className="w-11 h-11 border border-gold/25 flex items-center justify-center text-gold
                         font-display hover:border-gold hover:bg-gold/5 transition-all">←</button>
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button key={i} onClick={() => setCur(i)}
                  className={`h-px transition-all duration-400 ${i === cur ? 'w-8 bg-gold' : 'w-2 bg-gold/25'}`} />
              ))}
            </div>
            <button onClick={next}
              className="w-11 h-11 border border-gold/25 flex items-center justify-center text-gold
                         font-display hover:border-gold hover:bg-gold/5 transition-all">→</button>
          </div>
        </div>
      </section>

      {/* ── Full Grid ─────────────────────────────────────── */}
      <section className="section-pad bg-obsidian-soft">
        <div className="container-luxury">
          <div className="mb-16">
            <SectionTitle label="All Testimonials" heading="Every Story" accent="Matters" />
          </div>
          <motion.div ref={ref} variants={staggerContainerVariant} initial="hidden" animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-gold text-center">
        <div className="container-luxury max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display italic text-4xl lg:text-5xl text-obsidian font-light mb-8">
            Add Your Story to Our Chronicle
          </motion.h2>
          <Button to="/contact" variant="ghost" size="lg">Commission Your Event</Button>
        </div>
      </section>
    </>
  )
}
