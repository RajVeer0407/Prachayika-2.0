// ── MainLayout.jsx ────────────────────────────────────────────────────────────
// The persistent shell for every page.
// Renders: TopBar → Navbar → <page content> → Footer → WhatsAppFloat
// ─────────────────────────────────────────────────────────────────────────────

import { Outlet } from 'react-router-dom'
import TopBar       from '../components/navbar/TopBar'
import Navbar       from '../components/navbar/Navbar'
import Footer       from '../components/footer/Footer'
import WhatsAppFloat from '../components/whatsapp/WhatsAppFloat'
import CustomCursor from '../components/ui/CustomCursor'

export default function MainLayout() {
  return (
    /* noise-overlay adds a subtle cinematic film-grain via CSS pseudo-element */
    <div className="noise-overlay min-h-screen bg-obsidian flex flex-col">

      {/* ── Custom elegant cursor */}
      <CustomCursor />

      {/* ── Fixed contact strip (phone + email visible on ALL pages) */}
      <TopBar />

      {/* ── Sticky translucent navigation */}
      <Navbar />

      {/* ── Page content outlet */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Site-wide footer */}
      <Footer />

      {/* ── Floating WhatsApp CTA */}
      <WhatsAppFloat />
    </div>
  )
}
