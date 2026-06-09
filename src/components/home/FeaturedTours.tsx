import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '../common/SectionHeader'
import TourCard from '../common/TourCard'
import { tours } from '../../data/tours'
import type { TourCategory } from '../../types'

const categories: { label: string; value: TourCategory | 'all' }[] = [
  { label: 'All',      value: 'all' },
  { label: 'Trekking', value: 'trekking' },
  { label: 'Cultural', value: 'cultural' },
  { label: 'Wildlife', value: 'wildlife' },
]

export default function FeaturedTours() {
  const [active, setActive] = useState<TourCategory | 'all'>('all')

  const filtered = active === 'all'
    ? tours.slice(0, 8)
    : tours.filter(t => t.category === active)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Our Tours"
            title="Handcrafted Journeys"
            subtitle="Every itinerary is designed by people who have done the trek, walked the streets, and understand what makes a journey genuinely transformative."
          />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`font-body text-[12px] font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all duration-200 ${
                active === cat.value
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-navy-800 hover:text-navy-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/tours" className="btn-outline-navy inline-flex">
            Browse All Tours <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
