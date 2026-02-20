// ── pages/Contact.jsx ─────────────────────────────────────────────────────────
// Lead generation contact page with:
// - Validated enquiry form (name, email, phone, type, date, guests, message)
// - Contact info cards
// - Map placeholder
// - Success state
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, fadeUpVariant, staggerContainerVariant, slideLeftVariant, slideRightVariant } from '../hooks/useScrollAnimation'
import SectionTitle from '../components/ui/SectionTitle'
import Button       from '../components/ui/Button'

const PHONE = '+91 95820 56738'
const EMAIL = 'info@prachayikaevents.com'

const EVENT_TYPES = [
  'Grand Wedding', 'Destination Wedding', 'Corporate Event',
  'Brand Experience', 'Private Gala', 'Social Celebration', 'Other',
]

// ── Form field component ─────────────────────────────────
function Field({ label, name, type = 'text', placeholder, value, onChange, error, children, onFocus, onBlur }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-display text-[9px] tracking-luxury uppercase text-gold/60">
        {label}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`
            bg-transparent border-b py-3 font-display italic text-base text-white
            outline-none placeholder:text-cream/20 placeholder:not-italic
            transition-colors duration-300
            ${error ? 'border-red-400/60' : 'border-gold/20 focus:border-gold/70'}
          `}
        />
      )}
      {error && (
        <span className="font-display text-[9px] text-red-400/80 tracking-wide">{error}</span>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function Contact() {
  // ── Form state ────────────────────────────────────────
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: '',
    date: '', guests: '', message: '',
  })
  const [errors,   setErrors]   = useState({})
  const [sent,     setSent]     = useState(false)
  const [loading,  setLoading]  = useState(false)

  const { ref: leftRef,  controls: leftCtrl  } = useScrollAnimation()
  const { ref: rightRef, controls: rightCtrl } = useScrollAnimation()

  // ── Change handler ────────────────────────────────────
  const handle = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  // ── Validation ────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())                              e.name    = 'Your name is required'
    if (!/\S+@\S+\.\S+/.test(form.email))              e.email   = 'A valid email is required'
    if (!form.phone.trim() || form.phone.length < 8)   e.phone   = 'A valid phone number is required'
    if (!form.type)                                    e.type    = 'Please select an event type'
    if (!form.message.trim())                          e.message = 'Please share your vision'
    return e
  }

  // ── Submit handler ────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    // TODO: Replace with actual API call, e.g. fetch('/api/enquiry', { method:'POST', body: JSON.stringify(form) })
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSent(true)
  }

  // ── Contact info items ────────────────────────────────
  const contactItems = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: PHONE,
      href:  `tel:${PHONE.replace(/\s/g, '')}`,
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: EMAIL,
      href:  `mailto:${EMAIL}`,
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Office',
      value: 'Raipur, Chhattisgarh 492014',
      href:  '#',
    },
  ]

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=2000&q=85"
               alt="Contact" className="w-full h-full object-cover filter brightness-25 saturate-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
            <span className="gold-rule" />
            <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">Get In Touch</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
              Commission Your <em className="text-gold-gradient">Masterpiece</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Main content grid ─────────────────────────────── */}
      <section className="section-pad bg-obsidian">
        <div className="container-luxury grid lg:grid-cols-5 gap-16 items-start">

          {/* ── Left: contact info ─────────────────────────── */}
          <motion.div ref={leftRef} variants={staggerContainerVariant} initial="hidden" animate={leftCtrl}
            className="lg:col-span-2 space-y-8">
            <SectionTitle label="Our Atelier" heading="Let's Begin" accent="Together" controls={leftCtrl} />

            <motion.p variants={fadeUpVariant} className="font-body text-cream/50 leading-relaxed">
              Every extraordinary event begins with a single conversation. Our team is ready to listen to your vision and bring it to life with devotion, artistry, and flawless precision.
            </motion.p>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactItems.map((item) => (
                <motion.a key={item.label} variants={fadeUpVariant} href={item.href}
                  className="flex items-start gap-4 p-5 border border-white/8 hover:border-gold/25
                             transition-colors duration-400 group"
                >
                  <div className="w-9 h-9 border border-gold/20 flex items-center justify-center text-gold/60
                                  group-hover:border-gold/60 group-hover:text-gold transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display text-[9px] tracking-luxury uppercase text-gold/50 mb-1">{item.label}</p>
                    <p className="font-display italic text-sm text-cream/65 group-hover:text-cream/90 transition-colors leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div variants={fadeUpVariant}
              className="h-44 border border-gold/15 flex items-center justify-center bg-obsidian-soft">
              <div className="text-center">
                <div className="text-gold/30 text-3xl mb-2">◈</div>
                <p className="font-display text-[9px] tracking-luxury uppercase text-cream/25">
                  Mumbai, Maharashtra · India
                </p>
                <p className="font-display italic text-xs text-cream/15 mt-1">
                  Google Maps Integration
                </p>
              </div>
            </motion.div>

            {/* Response promise */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4">
              <span className="gold-rule" />
              <span className="font-display italic text-xs text-cream/30">Response within 24 hours</span>
            </motion.div>
          </motion.div>

          {/* ── Right: form ────────────────────────────────── */}
          <motion.div ref={rightRef} variants={slideRightVariant} initial="hidden" animate={rightCtrl}
            className="lg:col-span-3">
            {sent ? (
              /* ── Success state ─────────────────────────── */
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-24 px-12
                           border border-gold/15 bg-obsidian-soft">
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center text-gold text-2xl mb-8">✓</div>
                <h3 className="font-display italic text-3xl text-white mb-4">Commission Received</h3>
                <p className="font-body text-cream/50 leading-relaxed max-w-sm">
                  Thank you, <span className="text-gold italic">{form.name}</span>. Our atelier team will reach out within 24 hours to begin crafting your vision.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', type: '', date: '', guests: '', message: '' }) }}
                  className="mt-10 font-display text-[10px] tracking-luxury uppercase text-gold/50
                             hover:text-gold border-b border-gold/20 pb-0.5 transition-colors">
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              /* ── Enquiry form ──────────────────────────── */
              <form onSubmit={handleSubmit} className="space-y-8 border border-white/8 p-8 lg:p-12 bg-obsidian-soft">
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Full Name *" name="name" placeholder="Your full name"
                         value={form.name} onChange={handle} error={errors.name} />
                  <Field label="Email Address *" name="email" type="email" placeholder="your@email.com"
                         value={form.email} onChange={handle} error={errors.email} />
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Phone Number *" name="phone" type="tel" placeholder="+91 95820 56738"
                         value={form.phone} onChange={handle} error={errors.phone} />
                  {/* Event type select */}
                  <Field label="Event Type *" name="type" error={errors.type}>
                    <select name="type" value={form.type} onChange={handle}
                      className={`bg-transparent border-b py-3 font-display italic text-base outline-none
                                  text-cream/70 transition-colors duration-300 cursor-pointer w-full
                                  ${errors.type ? 'border-red-400/60' : 'border-gold/20 focus:border-gold/70'}`}>
                      <option value="" className="bg-obsidian-soft italic text-cream/30">Select occasion</option>
                      {EVENT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-obsidian-soft">{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Preferred Date" name="date" type="date"
                         value={form.date} onChange={handle} />
                  <Field label="Approximate Guests" name="guests" placeholder="e.g. 200–500"
                         value={form.guests} onChange={handle} />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-display text-[9px] tracking-luxury uppercase text-gold/60">
                    Your Vision *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    placeholder="Describe your dream event — the mood, the scale, the emotion you wish to evoke..."
                    className={`
                      bg-transparent border-b py-3 font-display italic text-base text-white
                      outline-none placeholder:text-cream/20 placeholder:not-italic
                      resize-none leading-relaxed transition-colors duration-300
                      ${errors.message ? 'border-red-400/60' : 'border-gold/20 focus:border-gold/70'}
                    `}
                  />
                  {errors.message && (
                    <span className="font-display text-[9px] text-red-400/80 tracking-wide">{errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <div className="flex items-center gap-6 pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ letterSpacing: loading ? undefined : '0.42em' }}
                    className={`
                      btn-primary min-w-[200px] justify-center
                      ${loading ? 'opacity-70 cursor-wait' : ''}
                    `}
                  >
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <span className="w-4 h-4 border border-obsidian/40 border-t-obsidian rounded-full animate-spin-slow" />
                        Sending...
                      </span>
                    ) : (
                      'Submit Commission →'
                    )}
                  </motion.button>
                  <p className="font-display text-[9px] tracking-wide text-cream/20 italic">
                    No spam. Ever.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
