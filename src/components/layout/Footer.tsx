import { Link } from 'react-router-dom'
import {
  MapPin, Phone, Mail, Facebook, Instagram, Youtube,
  Send, Mountain,
} from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours & Treks', to: '/tours' },
  { label: 'Gallery',       to: '/gallery' },
  { label: 'About Us',      to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

const popularTours = [
  { label: 'Everest Base Camp Trek',    to: '/tours/ebc-trek' },
  { label: 'Annapurna Circuit',         to: '/tours/annapurna-circuit' },
  { label: 'Chitwan Wildlife Safari',   to: '/tours/chitwan-safari' },
  { label: 'Nepal Heritage Grand Tour', to: '/tours/nepal-heritage' },
  { label: 'Upper Mustang Trek',        to: '/tours/upper-mustang' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer className="bg-navy-900 text-white">
      {/* main grid */}
      <div className="container-custom py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-5">
            <span className="font-display font-bold text-xl uppercase tracking-[0.12em] text-white">
              Explore <span className="text-nepal-red">Nepal</span>
            </span>
          </Link>
          <p className="font-body text-white/55 text-sm leading-relaxed mb-5">
            Expert-guided treks, cultural tours and wildlife adventures in Nepal.
            Locally owned, ethically operated since 2008.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook,  href: '#', label: 'Facebook' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Youtube,   href: '#', label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label} href={href} aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-nepal-red flex items-center justify-center transition-colors duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* quick links */}
        <div>
          <h4 className="font-body text-[11px] font-semibold uppercase tracking-ultra text-white/35 mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="font-body text-[14px] text-white/55 hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* popular tours */}
        <div>
          <h4 className="font-body text-[11px] font-semibold uppercase tracking-ultra text-white/35 mb-5">Popular Tours</h4>
          <ul className="space-y-2.5">
            {popularTours.map(tour => (
              <li key={tour.to}>
                <Link to={tour.to} className="font-body text-[14px] text-white/55 hover:text-white transition-colors duration-200">
                  {tour.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact + newsletter */}
        <div>
          <h4 className="font-body text-[11px] font-semibold uppercase tracking-ultra text-white/35 mb-5">Get in Touch</h4>
          <ul className="space-y-3 mb-6">
            {[
              { icon: MapPin, text: 'Thamel, Kathmandu 44600, Nepal', href: undefined },
              { icon: Phone,  text: '+977 980-123-4567', href: 'tel:+9779801234567' },
              { icon: Mail,   text: 'info@explorenepal.com', href: 'mailto:info@explorenepal.com' },
            ].map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-white/55">
                <Icon size={14} className="mt-0.5 flex-shrink-0 text-nepal-red" />
                {href
                  ? <a href={href} className="hover:text-white transition-colors">{text}</a>
                  : <span>{text}</span>
                }
              </li>
            ))}
          </ul>

          <h5 className="font-body text-[11px] font-semibold uppercase tracking-ultra text-white/35 mb-3">Newsletter</h5>
          {subscribed ? (
            <p className="font-body text-sm text-nepal-gold">Thanks! You're in. 🙏</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com" required
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-nepal-gold transition-colors font-body"
              />
              <button type="submit" aria-label="Subscribe"
                className="bg-nepal-red hover:bg-red-600 text-white rounded-lg px-3 py-2 transition-colors flex-shrink-0">
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35 font-body">
          <p>© {new Date().getFullYear()} Explore Nepal. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <Mountain size={11} className="text-nepal-gold" />
            <span>Made with love in Kathmandu</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
