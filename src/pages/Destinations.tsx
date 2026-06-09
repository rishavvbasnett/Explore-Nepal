import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/common/SectionHeader'
import DestinationCard from '../components/common/DestinationCard'
import PageHero from '../components/common/PageHero'
import { destinations } from '../data/destinations'

const regions = ['All', ...Array.from(new Set(destinations.map(d => d.region)))]

export default function Destinations() {
  const [region, setRegion] = useState('All')

  const filtered = destinations.filter(d =>
    region === 'All' || d.region === region
  )

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1527842891421-42eec6e703ea?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Explore Nepal"
        title="Iconic Destinations"
        subtitle="From the world's highest peaks to ancient valley cities — Nepal packs more wonders per square kilometre than almost anywhere on earth."
        overlay="dark"
      />

      <section className="section-padding bg-nepal-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Where to Go"
              title="All Destinations"
              subtitle="Eight iconic regions — each one a world of its own."
            />
          </motion.div>

          {/* Region filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`font-body text-sm font-medium px-5 py-2 rounded-full border transition-all ${
                  region === r
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-navy-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <p className="font-body text-sm text-gray-400 text-center mb-8">
            {filtered.length} destination{filtered.length !== 1 ? 's' : ''}
          </p>

          <motion.div
            key={region}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map(d => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
