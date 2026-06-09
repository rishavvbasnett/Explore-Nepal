import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader'
import PageHero from '../components/common/PageHero'
import { galleryItems } from '../data/gallery'
import type { GalleryItem } from '../types'

const categories: { label: string; value: GalleryItem['category'] | 'all' }[] = [
  { label: 'All',       value: 'all' },
  { label: 'Mountains', value: 'mountains' },
  { label: 'Culture',   value: 'culture' },
  { label: 'Wildlife',  value: 'wildlife' },
  { label: 'Trekking',  value: 'trekking' },
  { label: 'People',    value: 'people' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryItem['category'] | 'all'>('all')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Visual Stories"
        title={`Nepal Through\nOur Lens`}
        subtitle="Every image captured by our guides and travellers in the places we visit."
        overlay="dark"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Gallery"
              title="Mountains, People & Moments"
              subtitle="22 destinations, one camera roll. Click any image to expand."
            />
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`font-body text-sm font-medium px-5 py-2 rounded-full border transition-all ${
                  activeCategory === cat.value
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-navy-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ── Bigger masonry grid: max 3 cols ───────────────── */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      `https://picsum.photos/seed/${item.id}/1200/900`
                  }}
                />

                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={36}
                    className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                  />
                </div>

                {/* caption bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-white text-sm font-medium leading-snug">{item.alt}</p>
                  <p className="font-body text-white/60 text-xs mt-0.5">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/96 z-50 flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[82vh] max-w-full object-contain rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            <div className="mt-5 text-center">
              <p className="font-display text-white text-lg font-semibold">{lightbox.alt}</p>
              <p className="font-body text-white/50 text-sm mt-1">{lightbox.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
