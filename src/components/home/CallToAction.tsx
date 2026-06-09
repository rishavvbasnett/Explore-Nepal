import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-800/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative z-10 container-custom py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="eyebrow-gold mb-5">Ready to Go?</p>

          <h2 className="font-display font-bold text-white leading-display tracking-tighter mb-5
                         text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem]">
            Your Nepal Adventure Starts with One Message
          </h2>

          <p className="font-body text-[15px] text-white/65 leading-relaxed max-w-md mx-auto mb-10">
            Tell us your dream — we'll design the perfect itinerary, handle every permit,
            and make sure you come home with the trip of a lifetime.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary px-9 py-4 text-[13px]">
              Plan My Trip <ArrowRight size={16} />
            </Link>
            <a href="tel:+9779801234567" className="btn-outline-white px-9 py-4 text-[13px]">
              <Phone size={16} /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
