import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1920&q=85',
    label: 'Trekking',
    heading: 'Stand at the Top\nof the World',
    sub: 'Everest Base Camp Trek — 14 days from $1,890',
    cta: { label: 'View Trek', to: '/tours/ebc-trek' },
  },
  {
    image: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1920&q=85',
    label: 'Trekking',
    heading: 'Circle the\nAnnapurna Massif',
    sub: 'Annapurna Circuit — 18 days of pure Himalayan magic',
    cta: { label: 'Explore Circuit', to: '/tours/annapurna-circuit' },
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85',
    label: 'Destination',
    heading: 'Lakeside Serenity\nin Pokhara',
    sub: "Mountains, lakes, paragliding — Nepal's adventure capital",
    cta: { label: 'See Pokhara', to: '/destinations/pokhara' },
  },
  {
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1920&q=85',
    label: 'Culture',
    heading: 'Ancient Temples\nof Kathmandu',
    sub: 'Seven UNESCO World Heritage Sites within one valley',
    cta: { label: 'Explore Culture', to: '/destinations/kathmandu' },
  },
]

const stats = [
  { value: '500+', label: 'Tours Completed' },
  { value: '15+',  label: 'Years Operating' },
  { value: '50+',  label: 'Expert Guides' },
  { value: '4.9',  label: 'Average Rating' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading,  setFading]  = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length)
        setFading(false)
      }, 700)
    }, 6500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[640px] max-h-[960px] overflow-hidden">

      {/* ── Background ───────────────────────────────────────── */}
      <div
        key={current}
        className={`absolute inset-0 transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
      >
        <img
          src={slide.image}
          alt=""
          aria-hidden
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      {/* Gradient — stronger on left so text is legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative z-10 container-custom h-full flex flex-col justify-center">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="eyebrow-gold mb-5 animate-fade-in">
            — Authentic Journeys Since 2008
          </p>

          {/* Slide label */}
          <span className="inline-block mb-3 bg-white/15 backdrop-blur-sm text-white/80 text-[11px] uppercase tracking-ultra font-semibold px-3 py-1 rounded-full border border-white/20">
            {slide.label}
          </span>

          {/* Heading */}
          <h1
            key={`h-${current}`}
            className="font-display font-bold text-white whitespace-pre-line animate-slide-up
                       text-[2.6rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]
                       leading-display tracking-tightest mb-5"
          >
            {slide.heading}
          </h1>

          {/* Sub */}
          <p
            key={`s-${current}`}
            className="font-body text-white/75 text-[15px] sm:text-base mb-8 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Link to={slide.cta.to} className="btn-primary">
              {slide.cta.label}
            </Link>
            <Link to="/tours" className="btn-outline-white">
              All Tours
            </Link>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-4 mt-10 md:mt-14 pt-8 border-t border-white/15 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {stats.map(stat => (
              <div key={stat.label}>
                <p className="font-display text-[1.8rem] font-bold text-white leading-none">
                  {stat.value}
                </p>
                <p className="font-body text-[11px] text-white/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide controls ───────────────────────────────────── */}
      {/* dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-[3px] bg-nepal-red' : 'w-[6px] h-[6px] bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* scroll indicator */}
      <a
        href="#destinations"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </a>
    </section>
  )
}
