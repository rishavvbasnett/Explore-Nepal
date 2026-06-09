import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../common/SectionHeader'
import { galleryItems } from '../../data/gallery'

// Pick 9 visually strong images for the home preview
const preview = galleryItems.slice(0, 9)

export default function GalleryPreview() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Gallery"
            title="Nepal Through Our Lens"
            subtitle="A glimpse of the mountains, temples, wildlife, and people that make Nepal impossible to forget."
          />
        </motion.div>

        {/* 3-column masonry — bigger images, more visual impact */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {preview.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.id}/1200/900`
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/65 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-white text-sm font-medium">{item.alt}</p>
                <p className="font-body text-white/60 text-xs">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-outline-navy inline-flex">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Gallery image"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
