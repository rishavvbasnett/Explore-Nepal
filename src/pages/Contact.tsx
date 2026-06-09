import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook, Youtube, Twitter } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader'
import PageHero from '../components/common/PageHero'

const contactInfo = [
  { icon: MapPin, label: 'Address',          value: 'Thamel, Kathmandu 44600, Nepal', href: undefined },
  { icon: Phone,  label: 'Phone',            value: '+977 980-123-4567', href: 'tel:+9779801234567' },
  { icon: Mail,   label: 'Email',            value: 'info@explorenepal.com', href: 'mailto:info@explorenepal.com' },
  { icon: Clock,  label: 'Office Hours',     value: 'Mon–Sat  9am – 6pm (NPT)', href: undefined },
]

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@explorenepal',
    href: 'https://instagram.com',
    desc: 'Daily shots from the trail',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'Explore Nepal',
    href: 'https://facebook.com',
    desc: 'Trip updates & community',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'Explore Nepal',
    href: 'https://youtube.com',
    desc: 'Trek films & destination guides',
  },
  {
    icon: Twitter,
    label: 'X / Twitter',
    handle: '@explorenepal',
    href: 'https://twitter.com',
    desc: 'News, tips & quick answers',
  },
]

type FormState = {
  name: string; email: string; phone: string
  tour: string; dates: string; groupSize: string; message: string
}
const initForm: FormState = {
  name: '', email: '', phone: '', tour: '', dates: '', groupSize: '', message: '',
}

export default function Contact() {
  const [form, setForm]           = useState<FormState>(initForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false); setSubmitted(true); setForm(initForm)
  }

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
        eyebrow="Let's Talk"
        title={`Plan Your\nNepal\nAdventure`}
        subtitle="Tell us your dream — we'll respond within 24 hours with a personalised itinerary proposal."
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
              eyebrow="Get in Touch"
              title="Send Us an Enquiry"
              subtitle="Our team responds within 24 hours with a personalised itinerary proposal."
            />
          </motion.div>

          {/* 3-column grid: left info panel | right form */}
          <div className="grid lg:grid-cols-3 gap-10 items-stretch">

            {/* ── Left column ────────────────────────────────── */}
            <div className="flex flex-col gap-4 h-full">
              {/* contact cards */}
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="font-body text-navy-800 font-medium hover:text-nepal-red transition-colors text-sm">{item.value}</a>
                      : <p className="font-body text-navy-800 font-medium text-sm">{item.value}</p>
                    }
                  </div>
                </motion.div>
              ))}

              {/* ── Follow Us section ────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.36 }}
                className="flex-1 bg-white rounded-xl p-5 shadow-sm flex flex-col"
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-nepal-red mb-4">
                  Follow Us
                </p>

                <div className="flex flex-col gap-3 flex-1">
                  {socials.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-9 h-9 rounded-full border-2 border-nepal-red/30 group-hover:border-nepal-red group-hover:bg-nepal-red/5 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                        <s.icon size={16} className="text-nepal-red" />
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-navy-800 leading-none">{s.handle}</p>
                        <p className="font-body text-xs text-gray-400 mt-0.5">{s.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right column: form ─────────────────────────── */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8 h-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <CheckCircle size={64} className="text-green-500" />
                  <h3 className="font-display text-2xl font-bold text-navy-800">Message Sent!</h3>
                  <p className="font-body text-gray-500 max-w-sm">
                    We'll get back to you within 24 hours with a personalised proposal.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-navy mt-4">
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: 'name',  label: 'Full Name *',      type: 'text',  placeholder: 'Jane Smith',        required: true },
                    { id: 'email', label: 'Email *',          type: 'email', placeholder: 'jane@example.com',  required: true },
                    { id: 'phone', label: 'Phone / WhatsApp', type: 'tel',   placeholder: '+1 555 000 0000',    required: false },
                    { id: 'dates', label: 'Preferred Dates',  type: 'text',  placeholder: 'e.g. October 2025', required: false },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-1.5">
                        {field.label}
                      </label>
                      <input
                        id={field.id} name={field.id}
                        type={field.type} required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof FormState]}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-800"
                      />
                    </div>
                  ))}

                  {[
                    {
                      id: 'tour', label: 'Tour Interest',
                      options: ['Select a tour…','Everest Base Camp Trek','Annapurna Circuit Trek','Kathmandu Heritage Tour','Chitwan Wildlife Safari','Nepal Heritage Grand Tour','Upper Mustang Trek','Langtang Valley Trek','Custom / Unsure'],
                    },
                    {
                      id: 'groupSize', label: 'Group Size',
                      options: ['Select…','Solo','2 people','3 – 5 people','6 – 10 people','10+ people'],
                    },
                  ].map(sel => (
                    <div key={sel.id}>
                      <label htmlFor={sel.id} className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-1.5">
                        {sel.label}
                      </label>
                      <select
                        id={sel.id} name={sel.id}
                        value={form[sel.id as keyof FormState]}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 bg-white text-gray-700"
                      >
                        {sel.options.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wide block mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your dream Nepal adventure — budget, fitness level, special requirements…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit" disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-sm uppercase tracking-wider"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <>Send Enquiry <Send size={15} /></>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
