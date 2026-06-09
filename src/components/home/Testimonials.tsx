import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

// One background image per testimonial — vivid Nepal landscapes
const bgImages = [
  'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1920&q=85', // EBC
  'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1920&q=85', // Annapurna
  'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1920&q=85', // Kathmandu
  'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1920&q=85', // Chitwan
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=85', // Poon Hill
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85', // Mountains
  'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=1920&q=85', // Trekking
  'https://images.unsplash.com/photo-1570979103-5b8cd34ae84d?auto=format&fit=crop&w=1920&q=85', // Prayer flags
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir]         = useState(1)

  const total = testimonials.length

  const go = useCallback((nextIdx: number, direction: number) => {
    setDir(direction)
    setCurrent(nextIdx)
  }, [])

  const prev = () => go((current - 1 + total) % total, -1)
  const next = () => go((current + 1) % total,        1)

  // Auto-advance every 7 s
  useEffect(() => {
    const id = setInterval(() => next(), 7000)
    return () => clearInterval(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const t = testimonials[current]
  const padded = String(current + 1).padStart(2, '0')
  const paddedTotal = String(total).padStart(2, '0')

  const slideVariants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  }

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">

      {/* ── Background image ───────────────────────────────── */}
      <AnimatePresence initial={false}>
        <motion.img
          key={`bg-${current}`}
          src={bgImages[current]}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = bgImages[0]
          }}
        />
      </AnimatePresence>

      {/* dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* ── Left arrow ─────────────────────────────────────── */}
      <button
        onClick={prev}
        aria-label="Previous testimonial"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 md:w-14 md:h-14 rounded-full border-2 border-white/40
                   text-white hover:border-white hover:bg-white/10
                   flex items-center justify-center transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft size={22} />
      </button>

      {/* ── Right arrow ────────────────────────────────────── */}
      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 md:w-14 md:h-14 rounded-full border-2 border-white/40
                   text-white hover:border-white hover:bg-white/10
                   flex items-center justify-center transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Main content ───────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20">
        <div className="container-custom">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              {/* eyebrow */}
              <p className="eyebrow-muted mb-4">— Testimonials</p>

              {/* tour name — large display title */}
              <h2 className="font-display font-bold text-white uppercase leading-display tracking-tightest mb-3
                             text-[clamp(1.6rem,5vw,4rem)]">
                {t.tour}
              </h2>

              {/* reviewer byline */}
              <p className="font-body text-[11px] text-white/50 uppercase tracking-ultra mb-6">
                {t.countryFlag} {t.name} · {t.country}
              </p>

              {/* stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'text-nepal-gold fill-nepal-gold' : 'text-white/20'}
                  />
                ))}
              </div>

              {/* quote */}
              <blockquote className="font-body text-[15px] text-white/80 leading-relaxed max-w-2xl line-clamp-3 md:line-clamp-none">
                "{t.text}"
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom bar: dots + counter ─────────────────── */}
          <div className="flex items-center justify-between mt-8">
            {/* dot pagination */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-7 h-2 bg-nepal-red'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* "01 — 08" counter */}
            <p className="font-body text-sm text-white/40 tracking-widest">
              <span className="text-white font-semibold">{padded}</span>
              {' '}—{' '}
              {paddedTotal}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
