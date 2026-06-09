import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '../common/SectionHeader'
import DestinationCard from '../common/DestinationCard'
import { getFeaturedDestinations } from '../../data/destinations'

const destinations = getFeaturedDestinations()

export default function FeaturedDestinations() {
  return (
    <section id="destinations" className="section-padding bg-nepal-cream">
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Where to Go"
            title="Iconic Destinations"
            subtitle="From Himalayan base camps to ancient valley cities — Nepal packs more wonders per square kilometre than almost anywhere on earth."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {destinations.map((destination, i) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/destinations" className="btn-outline-navy inline-flex">
            View All Destinations <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
