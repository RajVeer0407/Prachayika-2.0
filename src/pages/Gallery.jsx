// ── pages/Gallery.jsx ────────────────────────────────────────────────────────
// Gallery page with a CSS masonry-style grid and lightbox modal on click.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Button       from '../components/ui/Button'

// ── Gallery image data ────────────────────────────────────
const GALLERY_ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85', alt: 'Royal Wedding Ceremony',      cat: 'Wedding',   span: 'tall' },
  { id: 2, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85', alt: 'Corporate Summit Stage',       cat: 'Corporate', span: 'normal' },
  { id: 3, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85', alt: 'Destination Wedding Santorini', cat: 'Destination', span: 'normal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85', alt: 'Anniversary Gala',             cat: 'Private',   span: 'wide' },
  { id: 5, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85', alt: 'Brand Activation',            cat: 'Brand',     span: 'normal' },
  { id: 6, src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=900&q=85', alt: 'Wedding Reception',           cat: 'Wedding',   span: 'tall' },
  { id: 7, src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=85', alt: 'Corporate Forum',             cat: 'Corporate', span: 'normal' },
  { id: 8, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&q=85', alt: 'Luxury Private Dinner',       cat: 'Private',   span: 'wide' },
  { id: 9, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=85', alt: 'Festival Setup',              cat: 'Brand',     span: 'normal' },
]

// ── Lightbox component ───────────────────────────────────
function Lightbox({ item, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-obsidian/97 flex items-center justify-center p-6"
          onClick={onClose}
          style={{ backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: 'spring', damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full"
          >
            <img src={item.src} alt={item.alt} className="w-full max-h-[80vh] object-contain" />

            {/* Close */}
            <button onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 border border-gold/40 bg-obsidian
                         flex items-center justify-center text-gold hover:bg-gold hover:text-obsidian transition-colors">
              ✕
            </button>

            {/* Prev / Next */}
            <button onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-gold/30
                         bg-obsidian/80 flex items-center justify-center text-gold hover:border-gold transition-colors">
              ←
            </button>
            <button onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-gold/30
                         bg-obsidian/80 flex items-center justify-center text-gold hover:border-gold transition-colors">
              →
            </button>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <p className="font-display italic text-sm text-cream/60">{item.alt}</p>
              <span className="font-display text-[9px] tracking-luxury uppercase text-gold/60 border border-gold/25 px-3 py-1">
                {item.cat}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // ── Navigation helpers ────────────────────────────────
  const openLightbox = (i)  => setLightboxIndex(i)
  const closeLightbox = ()  => setLightboxIndex(null)
  const prevImage = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length) }
  const nextImage = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % GALLERY_ITEMS.length) }

  // ── Keyboard navigation ───────────────────────────────
  // (handled via effect in production — skipped here for brevity)

  // ── Distribute items into 3 columns for masonry ────────
  const col1 = GALLERY_ITEMS.filter((_, i) => i % 3 === 0)
  const col2 = GALLERY_ITEMS.filter((_, i) => i % 3 === 1)
  const col3 = GALLERY_ITEMS.filter((_, i) => i % 3 === 2)

  const GalleryImage = ({ item, originalIndex }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      onClick={() => openLightbox(originalIndex)}
      className="relative overflow-hidden group cursor-pointer mb-3"
    >
      <motion.img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full object-cover block filter brightness-75 saturate-80"
      />
      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-obsidian/50 flex items-center justify-center"
      >
        <div className="border border-gold/50 px-4 py-2">
          <span className="font-display text-[9px] tracking-luxury uppercase text-gold">
            {item.cat}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=2000&q=85"
               alt="Gallery" className="w-full h-full object-cover filter brightness-30 saturate-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        </div>
        <div className="relative z-10 container-luxury pb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 mb-4">
            <span className="gold-rule" />
            <span className="font-display text-[10px] tracking-luxury uppercase text-gold/70">Visual Stories</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
              A Visual <em className="text-gold-gradient">Chronicle</em>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ─────────────────────────────────── */}
      <section className="section-pad bg-obsidian">
        <div className="container-luxury">
          {/* 3-column masonry */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Column 1 */}
            <div>
              {col1.map((item) => {
                const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id)
                return <GalleryImage key={item.id} item={item} originalIndex={idx} />
              })}
            </div>
            {/* Column 2 — offset down on desktop */}
            <div className="lg:mt-10">
              {col2.map((item) => {
                const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id)
                return <GalleryImage key={item.id} item={item} originalIndex={idx} />
              })}
            </div>
            {/* Column 3 */}
            <div className="hidden lg:block">
              {col3.map((item) => {
                const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id)
                return <GalleryImage key={item.id} item={item} originalIndex={idx} />
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-obsidian-soft text-center border-t border-gold/10">
        <div className="container-luxury max-w-xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="heading-display mb-6">
            Let's Create Your <em className="text-gold-gradient">Next Chapter</em>
          </motion.h2>
          <Button to="/contact" variant="primary" size="lg">Begin the Conversation</Button>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────── */}
      <Lightbox
        item={lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  )
}
