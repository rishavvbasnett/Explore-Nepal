import { motion } from 'framer-motion'
import { ShieldCheck, Users, Map, Award, Leaf, HeartHandshake } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'

const features = [
  {
    icon: ShieldCheck,
    title: 'Government Licensed',
    desc: 'All guides hold official Nepal Tourism Board certification. Your safety is never an afterthought.',
  },
  {
    icon: Users,
    title: 'Small Group Sizes',
    desc: 'We cap groups at 14. You get real attention, not a convoy. Better for you, and better for local communities.',
  },
  {
    icon: Map,
    title: '15+ Years Experience',
    desc: 'Since 2008, we have led over 3,000 travellers on Nepal adventures. We know every trail, teahouse, and shortcut.',
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    desc: 'Ranked #1 Nepal operator on TripAdvisor for four consecutive years. 4.9/5 across 800+ verified reviews.',
  },
  {
    icon: Leaf,
    title: 'Responsible Tourism',
    desc: 'We plant a tree for every booking, use biodegradable supplies on trails, and pay porters above fair-wage rates.',
  },
  {
    icon: HeartHandshake,
    title: 'Fully Local Team',
    desc: 'Every guide, cook, and porter is Nepali. Your money stays in Nepal and supports the communities you visit.',
  },
]

const stats = [
  { value: '3,000+', label: 'Happy Travellers' },
  { value: '15+',    label: 'Years Operating' },
  { value: '50+',    label: 'Expert Guides' },
  { value: '4.9/5',  label: 'Average Rating' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-800 relative overflow-hidden">
      {/* decorative background element */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-nepal-red/10 rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Why Us"
            title="Travel with Confidence"
            subtitle="We've been leading journeys in Nepal since 2008. Here's what sets us apart."
            light
          />
        </motion.div>

        {/* feature cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map(feature => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-nepal-red/80 flex items-center justify-center mb-4">
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/20 pt-12"
        >
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl lg:text-5xl font-bold text-white mb-1">{stat.value}</p>
              <p className="font-body text-sm text-white/60 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
