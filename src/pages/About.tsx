import { motion } from 'framer-motion'
import { Heart, Mountain, Users, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/common/SectionHeader'
import PageHero from '../components/common/PageHero'

const values = [
  {
    icon: Mountain,
    title: 'Deep Local Knowledge',
    desc: "Every member of our team is Nepali — born in the mountains, raised on the trails. We don't read about Nepal; we live it.",
  },
  {
    icon: Heart,
    title: 'Safety First, Always',
    desc: 'Government-licensed guides, mandatory first-aid training, satellite phones on all high-altitude treks, and no summit pressure — ever.',
  },
  {
    icon: Users,
    title: 'Community-Centred',
    desc: 'We route money directly into local economies: fair wages, local guesthouses, locally sourced food. Tourism that gives back.',
  },
  {
    icon: Leaf,
    title: 'Leave No Trace',
    desc: 'Biodegradable packaging on trails, carbon offset for all flights, tree-planting for every booking, and strict waste pack-out policy.',
  },
]

const team = [
  {
    name: 'Pemba Sherpa',
    role: 'Lead Guide & Co-founder',
    img: 'https://i.pravatar.cc/200?img=57',
    bio: '20 years guiding in the Khumbu. Summited Everest three times. Speaks Nepali, Sherpa, English.',
  },
  {
    name: 'Sunita Tamang',
    role: 'Operations Director',
    img: 'https://i.pravatar.cc/200?img=45',
    bio: 'Manages logistics for 200+ annual departures with zero-stress precision. Former Himalayan porter.',
  },
  {
    name: 'Ram Gurung',
    role: 'Cultural Guide',
    img: 'https://i.pravatar.cc/200?img=66',
    bio: 'Expert in Kathmandu Valley heritage. Co-authored a guide to Newari architecture. Speaks 5 languages.',
  },
  {
    name: 'Dawa Lama',
    role: 'Wildlife & Terai Specialist',
    img: 'https://i.pravatar.cc/200?img=49',
    bio: 'Chitwan-born naturalist with 12 years tracking rhino and tiger. Certified by Nepal Tourism Board.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1570979103-5b8cd34ae84d?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Our Story"
        title={`Started on a Trek.\nBuilt into\na Mission.`}
        subtitle="Locally owned, ethically operated since 2008. We know every trail, teahouse, and shortcut."
        cta={{ label: 'Plan Your Trip', to: '/contact' }}
        overlay="dark"
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-body text-nepal-red text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Since 2008
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-5">
                Two Nepalis who wanted<br />to do it differently.
              </h2>
              <div className="space-y-4 font-body text-gray-500 leading-relaxed text-[15px]">
                <p>
                  Explore Nepal was founded in 2008 by Pemba Sherpa and Sunita Tamang — two Nepalis who
                  watched the tourism industry grow rapidly while local communities saw little of the benefit.
                </p>
                <p>
                  Their idea was simple: build an agency where every guide was locally trained, every
                  teahouse was locally owned, and every itinerary was crafted by someone who had personally
                  walked the trail.
                </p>
                <p>
                  Fifteen years and 3,000 travellers later, that idea is still the core of everything we do.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Plan Your Trip</Link>
                <Link to="/tours" className="btn-outline-navy">Browse Tours</Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: 'photo-1551632811-561732d1e306', alt: 'Everest trek' },
                { src: 'photo-1605000797499-95a51c5269ae', alt: 'Kathmandu temple' },
                { src: 'photo-1474511320723-9a56873867b5', alt: 'Wildlife safari' },
                { src: 'photo-1506905925346-21bda4d32df4', alt: 'Mountain lake' },
              ].map((item, i) => (
                <img
                  key={item.src}
                  src={`https://images.unsplash.com/${item.src}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.alt}
                  className={`rounded-2xl object-cover w-full h-48 md:h-56 ${
                    i === 1 ? 'mt-8' : i === 2 ? '-mt-4' : i === 3 ? 'mt-4' : ''
                  }`}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = `https://picsum.photos/seed/about${i}/600/500`
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-nepal-cream">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="The principles that shape every trek, every guide briefing, and every itinerary we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-800 flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-navy-800 text-lg mb-2">{v.title}</h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="The Team"
            title="Meet Your Guides"
            subtitle="The people who will show you Nepal — and make sure you come home safely."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-nepal-cream shadow"
                />
                <h3 className="font-display font-semibold text-navy-800 text-lg">{member.name}</h3>
                <p className="font-body text-nepal-red text-sm font-semibold mb-2">{member.role}</p>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
