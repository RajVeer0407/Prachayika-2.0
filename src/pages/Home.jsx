// ── pages/Home.jsx ────────────────────────────────────────────────────────────
// Main homepage: Hero → Marquee → About Preview → Services Preview
//               → Events Preview → Testimonials → CTA Banner
// ─────────────────────────────────────────────────────────────────────────────

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariant, staggerContainerVariant, slideLeftVariant, slideRightVariant } from '../hooks/useScrollAnimation'
import SectionTitle    from '../components/ui/SectionTitle'
import Button          from '../components/ui/Button'
import ServiceCard     from '../components/cards/ServiceCard'
import EventCard       from '../components/cards/EventCard'
import TestimonialCard from '../components/cards/TestimonialCard'
import { servicesData }     from '../data/servicesData'
import { eventsData }       from '../data/eventsData'
import { testimonialsData } from '../data/testimonialsData'

// ── Section wrapper with scroll-trigger ──────────────────
function AnimatedSection({ children, className = '' }) {
  const { ref, controls } = useScrollAnimation()
  return (
    <motion.div ref={ref} variants={staggerContainerVariant} initial="hidden" animate={controls} className={className}>
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-obsidian flex items-center">

      {/* ── Background image (replace with <video> when asset is available) ── */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=2000&q=90"
          alt="Hero background"
          className="w-full h-full object-cover scale-110 filter brightness-40 saturate-75"
          style={{ animation: 'none' }}
        />
        {/* Multi-layer vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />
      </div>

      {/* ── Decorative corner brackets ──────────────────────── */}
      <div className="absolute top-28 left-10 hidden lg:block">
        <div className="w-16 h-px bg-gold/40" />
        <div className="w-px h-12 bg-gold/40 mt-0" />
      </div>
      <div className="absolute top-28 right-10 hidden lg:block">
        <div className="w-16 h-px bg-gold/40 ml-auto" />
        <div className="w-px h-12 bg-gold/40 ml-auto" />
      </div>

      {/* ── Hero content ────────────────────────────────────── */}
      <div className="relative z-10 container-luxury pt-32">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="gold-rule" />
          <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70 italic">
            Since 2012 — Mumbai
          </span>
          <span className="gold-rule" />
        </motion.div>

        {/* Main headline — words animate up individually */}
        <div className="overflow-hidden">
          {['Crafting', 'Timeless', 'Moments'].map((word, i) => (
            <div key={word} className="overflow-hidden leading-[0.95]">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  font-display font-light italic
                  ${i === 1 ? 'text-gold-gradient' : 'text-white'}
                  pb-2
                `}
                style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-display text-sm tracking-luxury uppercase text-cream/55 mt-6 mb-10"
        >
          Weddings &ensp;·&ensp; Corporate Events &ensp;·&ensp; Brand Experiences &ensp;·&ensp; Destination Affairs
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button to="/contact" variant="primary" size="lg">
            Begin Your Journey
          </Button>
          <Button to="/events" variant="ghost" size="lg">
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about-preview')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-display text-[9px] tracking-luxury uppercase text-cream/30">Discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>

      {/* ── Bottom-right location text ─────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 font-display text-[9px] tracking-luxury uppercase text-cream/30 hidden lg:block"
      >
        Mumbai · Delhi · Udaipur
      </motion.p>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MARQUEE STRIP
// ─────────────────────────────────────────────────────────────────────────────
function Marquee() {
  const items = [
    'Grand Weddings', 'Destination Affairs', 'Corporate Galas',
    'Brand Mythology', 'Private Celebrations', 'Heritage Ceremonies',
  ]
  return (
    <div className="bg-gold py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8 font-display text-[11px] tracking-luxury uppercase text-obsidian">
            {item}
            <span className="text-obsidian/40 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT PREVIEW
// ─────────────────────────────────────────────────────────────────────────────
function AboutPreview() {
  const { ref, controls } = useScrollAnimation()
  const { ref: ref2, controls: controls2 } = useScrollAnimation()

  return (
    <section id="about-preview" className="section-pad bg-obsidian overflow-hidden">
      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — content */}
        <motion.div ref={ref} variants={staggerContainerVariant} initial="hidden" animate={controls} className="space-y-6">
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4">
            <span className="gold-rule" />
            <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">Our Home</span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="heading-display">
            Where Every Event <br />
            <em className="text-gold-gradient">Becomes a Legend</em>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="font-body text-cream/50 text-base leading-relaxed">
            Prachayika Events is India's most coveted luxury event atelier. Founded on the belief that a truly extraordinary event transcends the visual — it must be felt in the marrow of every guest.
          </motion.p>
          <motion.p variants={fadeUpVariant} className="font-body text-cream/50 text-base leading-relaxed">
            From the precise angle of a spotlight to the scent of rare Kashmiri roses — we leave nothing to chance. Only to artistry.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="grid grid-cols-2 gap-4 pt-4">
            {[
              { num: '500+', label: 'Events Orchestrated' },
              { num: '12',   label: 'Years of Mastery' },
              { num: '98%',  label: 'Client Devotion' },
              { num: '45+',  label: 'Cities & Countries' },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/8 p-5 hover:border-gold/20 transition-colors">
                <p className="font-display font-light text-3xl text-gold-gradient">{stat.num}</p>
                <p className="font-display text-[9px] tracking-wider uppercase text-cream/40 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUpVariant}>
            <Button to="/about" variant="ghost">Discover Our Story</Button>
          </motion.div>
        </motion.div>

        {/* Right — image collage */}
        <motion.div ref={ref2} variants={slideRightVariant} initial="hidden" animate={controls2} className="relative h-[520px]">
          <div className="absolute top-0 right-0 w-3/4 h-[62%] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=85"
                 alt="Event" className="w-full h-full object-cover filter brightness-80 saturate-80" />
          </div>
          <div className="absolute bottom-0 left-0 w-[55%] h-[50%] overflow-hidden border-4 border-obsidian">
            <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85"
                 alt="Event" className="w-full h-full object-cover filter brightness-80 saturate-80" />
          </div>
          {/* Floating stat card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-12 right-0 bg-gold p-6 shadow-gold"
          >
            <p className="font-display text-4xl font-semibold text-obsidian leading-none">12</p>
            <p className="font-display text-[9px] tracking-luxury uppercase text-obsidian/70 mt-1">Years of Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES PREVIEW (3 cards)
// ─────────────────────────────────────────────────────────────────────────────
function ServicesPreview() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section className="section-pad bg-obsidian-soft">
      <div className="container-luxury">
        <AnimatedSection className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionTitle
            label="Event Solutions"
            heading="Our Signature"
            accent="Disciplines"
            controls={controls}
          />
          <motion.div variants={fadeUpVariant}>
            <Button to="/services" variant="ghost">View All Services</Button>
          </motion.div>
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={staggerContainerVariant}
          initial="hidden"
          animate={controls}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {servicesData.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// EVENTS PREVIEW (3 featured)
// ─────────────────────────────────────────────────────────────────────────────
function EventsPreview() {
  const { ref, controls } = useScrollAnimation()
  const featured = eventsData.filter((e) => e.featured)

  return (
    <section className="section-pad bg-obsidian">
      <div className="container-luxury">
        <AnimatedSection className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionTitle label="Our Work" heading="Selected" accent="Commissions" />
          <motion.div variants={fadeUpVariant}>
            <Button to="/events" variant="ghost">View Full Our Work</Button>
          </motion.div>
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={staggerContainerVariant}
          initial="hidden"
          animate={controls}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {featured.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS PREVIEW (2 cards)
// ─────────────────────────────────────────────────────────────────────────────
function TestimonialsPreview() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section className="section-pad bg-obsidian-soft">
      <div className="container-luxury">
        <AnimatedSection className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionTitle label="Testimonials" heading="Words of Those" accent="Who Lived It" />
          <motion.div variants={fadeUpVariant}>
            <Button to="/testimonials" variant="ghost">Read All Testimonials</Button>
          </motion.div>
        </AnimatedSection>

        <motion.div
          ref={ref}
          variants={staggerContainerVariant}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-4"
        >
          {testimonialsData.slice(0, 2).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA BANNER
// ─────────────────────────────────────────────────────────────────────────────
function CTABanner() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section className="relative py-28 overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2000&q=85"
          alt=""
          className="w-full h-full object-cover filter brightness-30 saturate-70"
        />
        <div className="absolute inset-0 bg-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-12 border border-gold/10 pointer-events-none hidden lg:block" />

      {/* Content */}
      <motion.div
        ref={ref}
        variants={staggerContainerVariant}
        initial="hidden"
        animate={controls}
        className="relative z-10 container-luxury text-center max-w-3xl mx-auto"
      >
        <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 mb-6">
          <span className="gold-rule" />
          <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">Begin the Conversation</span>
          <span className="gold-rule" />
        </motion.div>
        <motion.h2 variants={fadeUpVariant} className="heading-display mb-6">
          Your Most Extraordinary <br />
          <em className="text-gold-gradient">Moment Awaits</em>
        </motion.h2>
        <motion.p variants={fadeUpVariant} className="font-body text-cream/55 text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Every legendary event begins with a single conversation. Our atelier is ready to listen, envision, and create.
        </motion.p>
        <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 justify-center">
          <Button to="/contact" variant="primary" size="lg">Commission Your Event</Button>
          <Button href={`tel:+919876543210`} variant="ghost" size="lg">Call Our Atelier</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <ServicesPreview />
      <EventsPreview />
      <TestimonialsPreview />
      <CTABanner />
    </>
  )
}
