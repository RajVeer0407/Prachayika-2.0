// ── pages/About.jsx ───────────────────────────────────────────────────────────
// Full About / Home page: Hero → Story → Stats → Philosophy → Team CTA
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariant, staggerContainerVariant, slideLeftVariant, slideRightVariant } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'
import Button       from '../components/ui/Button'

// ── Page hero banner ──────────────────────────────────────
function PageHero({ title, accent, subtitle, image }) {
  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden pt-28">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover filter brightness-35 saturate-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
      </div>
      <div className="relative z-10 container-luxury pb-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
          <span className="gold-rule" />
          <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">{subtitle}</span>
        </motion.div>
        <div className="overflow-hidden">
          <motion.h1 initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            {title} <em className="text-gold-gradient">{accent}</em>
          </motion.h1>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  const s1 = useScrollAnimation()
  const s2 = useScrollAnimation()
  const s3 = useScrollAnimation()
  const s4 = useScrollAnimation()

  const values = [
    { icon: '✦', title: 'Artistry',    desc: 'Every element — from a napkin fold to a ceiling installation — is approached with the seriousness of fine art.' },
    { icon: '◈', title: 'Devotion',    desc: 'We are devoted to your vision. We listen more than we speak, and we execute with obsessive attention to detail.' },
    { icon: '◆', title: 'Discretion',  desc: 'Our most prestigious clients trust us completely. Confidentiality is not a policy — it is a founding principle.' },
    { icon: '❋', title: 'Excellence',  desc: 'We do not accept "good enough." Every Prachayika event must be, without question, the finest event our client has ever attended.' },
  ]

  const team = [
    { name: 'Priya Sharma',   role: 'Founding Director',     img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80' },
    { name: 'Arjun Mehta',    role: 'Creative Director',     img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Kavitha Rao',    role: 'Head of Weddings',      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' },
    { name: 'Dev Singhania',  role: 'Corporate Events Lead',  img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80' },
  ]

  return (
    <>
      <PageHero
        title="Our" accent="Home"
        subtitle="About Prachayika"
        image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=2000&q=85"
      />

      {/* ── Story section ─────────────────────────────────── */}
      <section className="section-pad bg-obsidian">
        <div className="container-luxury grid lg:grid-cols-2 gap-20 items-center">
          <motion.div ref={s1.ref} variants={staggerContainerVariant} initial="hidden" animate={s1.controls} className="space-y-6">
            <SectionTitle label="Our Story" heading="Twelve Years of" accent="Crafting Legends" controls={s1.controls} />
            <motion.p variants={fadeUpVariant} className="font-body text-cream/55 leading-relaxed">
              Prachayika Events was founded in Mumbai in 2012 by Priya Sharma, a former luxury hotel concierge who believed that the events industry was missing one crucial ingredient: true artistic devotion.
            </motion.p>
            <motion.p variants={fadeUpVariant} className="font-body text-cream/55 leading-relaxed">
              From a two-person studio, we have grown into India's most sought-after event atelier — with a team of 60+ specialists spanning design, logistics, florals, lighting, culinary direction, and guest experience architecture.
            </motion.p>
            <motion.p variants={fadeUpVariant} className="font-body text-cream/55 leading-relaxed">
              Our commissions have taken us from the zenanas of Udaipur's Lake Palace to the cliffs of Santorini, from Mumbai's Taj Mahal Palace to private villas in Tuscany. Every location. Every scale. One standard: unforgettable.
            </motion.p>
            <motion.div variants={fadeUpVariant}>
              <Button to="/contact" variant="primary">Commission Your Event</Button>
            </motion.div>
          </motion.div>

          <motion.div ref={s2.ref} variants={slideRightVariant} initial="hidden" animate={s2.controls} className="relative h-[500px]">
            <div className="absolute top-0 right-0 w-[72%] h-[65%] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85" alt=""
                   className="w-full h-full object-cover filter brightness-80 saturate-80" />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[48%] overflow-hidden border-4 border-obsidian">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85" alt=""
                   className="w-full h-full object-cover filter brightness-80 saturate-80" />
            </div>
            <div className="absolute bottom-10 right-0 bg-gold px-6 py-5 shadow-gold">
              <p className="font-display text-3xl font-semibold text-obsidian">500+</p>
              <p className="font-display text-[9px] tracking-luxury uppercase text-obsidian/70 mt-0.5">Events Orchestrated</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────── */}
      <section className="section-pad bg-obsidian-soft">
        <div className="container-luxury">
          <motion.div ref={s3.ref} variants={staggerContainerVariant} initial="hidden" animate={s3.controls}>
            <div className="mb-16 text-center">
              <SectionTitle label="Philosophy" heading="The Four" accent="Pillars" align="center" controls={s3.controls} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <motion.div key={v.title} variants={fadeUpVariant}
                  className="p-8 border border-white/8 hover:border-gold/25 transition-colors duration-500 group">
                  <div className="font-display text-xl text-gold/50 mb-4 group-hover:text-gold transition-colors">{v.icon}</div>
                  <h3 className="font-display italic text-lg text-white mb-3">{v.title}</h3>
                  <p className="font-body text-cream/45 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="section-pad bg-obsidian">
        <div className="container-luxury">
          <motion.div ref={s4.ref} variants={staggerContainerVariant} initial="hidden" animate={s4.controls}>
            <div className="mb-16">
              <SectionTitle label="Our Team" heading="The Artisans" accent="Behind the Magic" controls={s4.controls} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member) => (
                <motion.div key={member.name} variants={fadeUpVariant} className="group">
                  <div className="relative overflow-hidden aspect-[3/4] mb-4">
                    <img src={member.img} alt={member.name}
                         className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
                  </div>
                  <p className="font-display italic text-white text-base">{member.name}</p>
                  <p className="font-display text-[9px] tracking-luxury uppercase text-gold/60 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
