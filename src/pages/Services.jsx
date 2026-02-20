// ── pages/Services.jsx ────────────────────────────────────────────────────────
// Full services page with interactive list + panel layout (desktop)
// and stacked ServiceCards (mobile).
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, fadeUpVariant, staggerContainerVariant } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'
import ServiceCard  from '../components/cards/ServiceCard'
import Button       from '../components/ui/Button'
import { servicesData } from '../data/servicesData'

export default function Services() {
  const [active, setActive] = useState(0)
  const { ref, controls } = useScrollAnimation()

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=2000&q=85"
               alt="Services" className="w-full h-full object-cover filter brightness-30 saturate-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
            <span className="gold-rule" />
            <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">What We Do</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
              Our <em className="text-gold-gradient">Event Solutions</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Interactive Panel (desktop) ───────────────────── */}
      <section className="section-pad bg-obsidian hidden lg:block">
        <div className="container-luxury">
          <div className="grid grid-cols-5 gap-2 min-h-[560px]">
            {/* List */}
            <div className="col-span-2 border-r border-gold/10">
              {servicesData.map((s, i) => (
                <motion.div key={s.id}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }}
                  onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}
                  className={`flex items-center gap-6 px-8 py-7 cursor-pointer transition-all duration-400
                              border-b border-white/5 group
                              ${active === i ? 'bg-gold/5 border-l-2 border-l-gold' : 'border-l-2 border-l-transparent hover:bg-white/[0.02]'}`}>
                  <span className="font-display text-[10px] tracking-luxury text-gold/50">{s.number}</span>
                  <div>
                    <p className={`font-display italic text-lg transition-colors duration-300 ${active === i ? 'text-white' : 'text-cream/60 group-hover:text-cream/90'}`}>{s.title}</p>
                    <p className={`font-display text-[9px] tracking-luxury uppercase mt-0.5 transition-colors duration-300 ${active === i ? 'text-gold' : 'text-cream/30'}`}>{s.subtitle}</p>
                  </div>
                  <span className={`ml-auto text-gold transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}>→</span>
                </motion.div>
              ))}
            </div>

            {/* Panel */}
            <div className="col-span-3 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0">
                  <img src={servicesData[active].image} alt={servicesData[active].title}
                       className="w-full h-full object-cover filter brightness-45 saturate-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-12">
                    <p className="font-display text-[9px] tracking-luxury uppercase text-gold mb-3">{servicesData[active].subtitle}</p>
                    <h3 className="font-display italic text-3xl text-white font-light mb-4">{servicesData[active].title}</h3>
                    <p className="font-body text-cream/60 text-sm leading-relaxed max-w-lg mb-6">{servicesData[active].description}</p>
                    <Button to="/contact" variant="ghost" size="sm">Commission This →</Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Card grid (mobile + tablet) ────────────────────── */}
      <section className="section-pad bg-obsidian lg:hidden">
        <div className="container-luxury">
          <motion.div ref={ref} variants={staggerContainerVariant} initial="hidden" animate={controls}
            className="grid sm:grid-cols-2 gap-4">
            {servicesData.map((s) => <ServiceCard key={s.id} service={s} />)}
          </motion.div>
        </div>
      </section>

      {/* ── Process section ───────────────────────────────── */}
      <section className="section-pad bg-obsidian-soft">
        <div className="container-luxury">
          <div className="mb-16 text-center">
            <SectionTitle label="How We Work" heading="The Prachayika" accent="Process" align="center" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'First Conversation', desc: 'We listen to your vision, your values, and your dreams without judgment.' },
              { step: '02', title: 'Concept Creation',   desc: 'Our creative team develops a bespoke concept tailored exclusively to you.' },
              { step: '03', title: 'Flawless Execution', desc: 'Every vendor, every detail, every moment — orchestrated with surgical precision.' },
              { step: '04', title: 'Your Legend',        desc: 'An event that your guests carry in their hearts for the rest of their lives.' },
            ].map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="p-8 border border-white/8 hover:border-gold/20 transition-colors relative overflow-hidden group">
                <div className="absolute top-4 right-4 font-display text-6xl font-bold text-gold/[0.04] select-none pointer-events-none">{p.step}</div>
                <p className="font-display text-[10px] tracking-luxury uppercase text-gold/60 mb-3">{p.step}</p>
                <h3 className="font-display italic text-lg text-white mb-3">{p.title}</h3>
                <p className="font-body text-cream/45 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-gold">
        <div className="container-luxury text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display italic text-4xl lg:text-5xl text-obsidian font-light mb-8">
            Ready to Commission Your Event?
          </motion.h2>
          <Button to="/contact" variant="ghost" size="lg">
            Begin the Conversation
          </Button>
        </div>
      </section>
    </>
  )
}
