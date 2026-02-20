# Prachayika Events — Premium Event Management Website
### React + Vite + Tailwind CSS + Framer Motion

---

## 🚀 Quick Start

```bash
# 1. Navigate to the project
cd prachayika-events

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build
```

---

## 📁 Exact Folder Structure

```
prachayika-events/
│
├── public/
│   └── favicon.svg
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/          ← Add your .jpg / .webp files here
│   │   ├── videos/          ← Add your hero .mp4 file here
│   │   └── icons/           ← Add any custom icon SVGs here
│   │
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── Navbar.jsx       ✅ Sticky transparent → glass on scroll
│   │   │   ├── TopBar.jsx       ✅ Fixed top bar: phone + email on ALL pages
│   │   │   └── MobileMenu.jsx   ✅ Animated slide-in drawer
│   │   │
│   │   ├── footer/
│   │   │   └── Footer.jsx       ✅ 4-column footer
│   │   │
│   │   ├── cards/
│   │   │   ├── ServiceCard.jsx  ✅ Hover reveal + feature tags
│   │   │   ├── EventCard.jsx    ✅ Zoom on hover + overlay CTA
│   │   │   └── TestimonialCard.jsx ✅ Quote + author + stars
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx       ✅ primary + ghost, works as Link/a/button
│   │   │   └── SectionTitle.jsx ✅ Gold ornament + display heading
│   │   │
│   │   └── whatsapp/
│   │       └── WhatsAppFloat.jsx ✅ Spring entry, expand on hover
│   │
│   ├── pages/
│   │   ├── Home.jsx          ✅ Hero + Marquee + About + Services + Events + Testimonials + CTA
│   │   ├── About.jsx         ✅ Story + Values + Team
│   │   ├── Services.jsx      ✅ Interactive panel (desktop) + card grid (mobile)
│   │   ├── RecentEvents.jsx  ✅ Category filter + event grid
│   │   ├── Gallery.jsx       ✅ Masonry grid + lightbox with keyboard nav
│   │   ├── Testimonials.jsx  ✅ Auto-slider + full grid
│   │   └── Contact.jsx       ✅ Validated lead form + success state
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx    ✅ TopBar + Navbar + <Outlet> + Footer + WhatsApp
│   │
│   ├── data/
│   │   ├── servicesData.js   ✅ 5 services
│   │   ├── eventsData.js     ✅ 6 Our Work events
│   │   └── testimonialsData.js ✅ 5 testimonials
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js ✅ Custom hook + 6 variant presets
│   │
│   ├── App.jsx               ✅ React Router v6 with AnimatePresence
│   ├── main.jsx              ✅ Entry point with BrowserRouter
│   └── index.css             ✅ Tailwind + CSS variables + utility classes
│
├── index.html                ✅ SEO meta + Google Fonts (Cormorant Garamond + DM Sans)
├── vite.config.js            ✅
├── tailwind.config.js        ✅ Custom colors, fonts, animations
├── postcss.config.js         ✅
└── package.json              ✅
```

---

## 🎨 Design System

### Fonts
| Font | Usage |
|------|-------|
| `Cormorant Garamond` | All headings, labels, buttons, nav |
| `DM Sans` | Body paragraphs, descriptions |

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `obsidian` | `#080604` | Primary background |
| `obsidian-soft` | `#0E0C09` | Alternate section bg |
| `gold` | `#C9A84C` | Primary accent |
| `gold-light` | `#D4AF64` | Hover gold |
| `cream` | `#F5F0E8` | Body text |

### Custom Tailwind Utilities
```
.font-display      → Cormorant Garamond
.font-body         → DM Sans
.text-gold-gradient → Animated gold-shimmer text
.section-pad       → py-24 lg:py-32
.container-luxury  → max-w-8xl mx-auto px-6 lg:px-16
.gold-rule         → 32px gold horizontal line
.btn-primary       → Gold fill button
.btn-ghost         → Gold outline button
.glass-card        → Glassmorphism card
.heading-display   → Cormorant Garamond, clamp sizing, italic
.label-gold        → Small uppercase gold label
.noise-overlay     → Film-grain texture via CSS pseudo-element
```

---

## 🔌 Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Full homepage |
| `/about` | `About` | Story, values, team |
| `/services` | `Services` | Interactive panel + all services |
| `/events` | `RecentEvents` | Filterable Our Work |
| `/gallery` | `Gallery` | Masonry + lightbox |
| `/testimonials` | `Testimonials` | Slider + full grid |
| `/contact` | `Contact` | Lead generation form |

---

## 📹 Adding the Hero Video

Replace the `<img>` in `Home.jsx` Hero section with:

```jsx
<video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover filter brightness-40"
>
  <source src="/src/assets/videos/hero.mp4" type="video/mp4" />
</video>
```

Place your video at: `src/assets/videos/hero.mp4`

---

## 🖼 Adding Local Images

```js
// In any data file or component:
import heroImg from '../assets/images/hero.jpg'

// In JSX:
<img src={heroImg} alt="..." />
```

---

## 📤 Lead Form Integration

In `Contact.jsx`, replace the `setTimeout` with your actual API call:

```js
// Option 1: EmailJS
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')

// Option 2: REST API
await fetch('https://your-api.com/enquiry', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})

// Option 3: Formspree
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(form),
  headers: { 'Content-Type': 'application/json' },
})
```

---

## 🏭 Production Build

```bash
npm run build
# Output: /dist folder — ready to deploy to Vercel / Netlify / any static host
```

**Vercel** (recommended):
```bash
npx vercel
```

---

*Prachayika Events — Crafting Timeless Moments*
