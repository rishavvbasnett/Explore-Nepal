import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader'
import TourCard from '../components/common/TourCard'
import PageHero from '../components/common/PageHero'
import { tours } from '../data/tours'
import type { TourCategory } from '../types'

const categories: { label: string; value: TourCategory | 'all' }[] = [
  { label: 'All Tours',  value: 'all' },
  { label: 'Trekking',   value: 'trekking' },
  { label: 'Cultural',   value: 'cultural' },
  { label: 'Wildlife',   value: 'wildlife' },
  { label: 'Adventure',  value: 'adventure' },
  { label: 'Spiritual',  value: 'spiritual' },
]

const difficulties = ['All', 'Easy', 'Moderate', 'Challenging', 'Strenuous']

const sortOptions = [
  { label: 'Default',         value: 'default' },
  { label: 'Price: Low–High', value: 'price-asc' },
  { label: 'Price: High–Low', value: 'price-desc' },
  { label: 'Rating',          value: 'rating' },
]

export default function Tours() {
  const [category,   setCategory]   = useState<TourCategory | 'all'>('all')
  const [difficulty, setDifficulty] = useState('All')
  const [sort,       setSort]       = useState('default')

  const filtered = tours
    .filter(t => {
      const matchCat  = category === 'all' || t.category === category
      const matchDiff = difficulty === 'All' || t.difficulty === difficulty
      return matchCat && matchDiff
    })
    .sort((a, b) => {
      if (sort === 'price-asc')  return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating')     return b.rating - a.rating
      return 0
    })

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=1920&q=80"
        eyebrow="What We Offer"
        title={`We Offer\nUnforgettable\nExperiences`}
        subtitle="Six ways to see the country, hand-built over fifteen years. Pick one, mix two, or call us and we'll stitch them together."
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
              eyebrow="Our Packages"
              title="Find Your Perfect Trek"
              subtitle="Handcrafted itineraries for every pace, budget, and ambition level."
            />
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`font-body text-sm font-semibold px-5 py-2 rounded-full border transition-all ${
                  category === cat.value
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-navy-800 hover:text-navy-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Difficulty + sort row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <SlidersHorizontal size={14} className="text-gray-400" />
            {difficulties.map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`font-body text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                  difficulty === d
                    ? 'bg-nepal-red text-white border-nepal-red'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-nepal-red'
                }`}
              >
                {d}
              </button>
            ))}
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="ml-auto border border-gray-200 rounded-xl px-3 py-2 font-body text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white"
            >
              {sortOptions.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <p className="font-body text-sm text-gray-400 mb-6">
            {filtered.length} tour{filtered.length !== 1 ? 's' : ''} found
          </p>

          {filtered.length > 0 ? (
            <motion.div
              key={`${category}-${difficulty}-${sort}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="font-body text-lg">No tours match your filters.</p>
              <button
                onClick={() => { setCategory('all'); setDifficulty('All') }}
                className="mt-4 text-navy-800 font-semibold underline font-body text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
