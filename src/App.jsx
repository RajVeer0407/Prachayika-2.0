// ── App.jsx — Routing Configuration ─────────────────────────────────────────
// All pages are wrapped in MainLayout which provides Navbar + Footer.
// This is a lead-generation site — no auth routes required.
// ─────────────────────────────────────────────────────────────────────────────

import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import MainLayout   from './layouts/MainLayout'
import Home         from './pages/Home'
import About        from './pages/About'
import Services     from './pages/Services'
import RecentEvents from './pages/RecentEvents'
import Gallery      from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact      from './pages/Contact'

// ── ScrollToTop: Ensures every route change starts at the top ────────────────
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

// ── App Component ─────────────────────────────────────────────────────────────
export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* All pages share the MainLayout wrapper (Navbar + Footer) */}
          <Route element={<MainLayout />}>
            <Route path="/"              element={<Home />}         />
            <Route path="/about"         element={<About />}        />
            <Route path="/services"      element={<Services />}     />
            <Route path="/events"        element={<RecentEvents />} />
            <Route path="/gallery"       element={<Gallery />}      />
            <Route path="/testimonials"  element={<Testimonials />} />
            <Route path="/contact"       element={<Contact />}      />
          </Route>

        </Routes>
      </AnimatePresence>
    </>
  )
}
