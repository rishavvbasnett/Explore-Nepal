import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours',        to: '/tours' },
  { label: 'Gallery',      to: '/gallery' },
  { label: 'About',        to: '/about' },
  { label: 'Contact',      to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Transparent on every page until the user scrolls — all pages now have full-screen heroes
  const solidBg = scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        solidBg ? 'bg-navy-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ──────────────────────────────────────────── */}
          <Link to="/" aria-label="Explore Nepal home" className="flex-shrink-0">
            <span className="font-display font-bold text-lg sm:text-xl uppercase tracking-[0.12em] text-white">
              Explore{' '}
              <span className="text-nepal-red">Nepal</span>
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group relative font-body text-[12px] font-medium uppercase tracking-[0.14em] px-4 py-2 transition-colors duration-200 ${
                    isActive ? 'text-nepal-gold' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* red underline — slides in from left on hover, gold when active */}
                    <span
                      className={`absolute bottom-0.5 left-4 right-4 h-px origin-left transition-transform duration-300 ease-out ${
                        isActive
                          ? 'bg-nepal-gold scale-x-100'
                          : 'bg-nepal-red scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+9779801234567"
              className="flex items-center gap-1.5 text-white/55 hover:text-white font-body text-[11px] tracking-wide transition-colors"
            >
              <Phone size={12} />
              +977 980-123-4567
            </a>
            <Link
              to="/contact"
              className="btn-primary text-[11px] px-4 py-2 tracking-wide uppercase"
            >
              Book Now
            </Link>
          </div>

          {/* ── Mobile hamburger ─────────────────────────────── */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────── */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-navy-900 z-40 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-body text-sm font-medium uppercase tracking-[0.15em] py-3 px-4 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-nepal-red/20 text-nepal-gold'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+9779801234567"
              className="flex items-center gap-2 text-white/50 font-body text-sm py-2"
            >
              <Phone size={15} />
              +977 980-123-4567
            </a>
            <Link to="/contact" className="btn-primary justify-center uppercase tracking-widest text-sm">
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
