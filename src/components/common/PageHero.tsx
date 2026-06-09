import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  image: string
  eyebrow: string
  title: string
  subtitle?: string
  cta?: { label: string; to: string }
  overlay?: 'dark' | 'navy'
  align?: 'left' | 'center'
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  cta,
  overlay = 'dark',
  align = 'left',
}: PageHeroProps) {
  const overlayClass =
    overlay === 'navy'
      ? 'bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-800/40'
      : 'bg-gradient-to-r from-black/80 via-black/50 to-black/20'

  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <section className="relative flex flex-col justify-end min-h-screen overflow-hidden">
      {/* Full-screen background */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        onError={(e) => {
          ;(e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80'
        }}
      />

      {/* Gradient overlays */}
      <div className={`absolute inset-0 ${overlayClass}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content — anchored to the bottom third */}
      <div className={`relative z-10 container-custom pb-14 sm:pb-20 md:pb-28 flex flex-col ${alignClass} gap-4`}>

        {/* Eyebrow */}
        <p className="eyebrow-muted">— {eyebrow}</p>

        {/* Heading */}
        <h1 className={`
          font-display font-bold text-white whitespace-pre-line
          leading-display tracking-tightest
          text-[clamp(2rem,7vw,6.5rem)]
          ${align === 'center' ? 'max-w-4xl mx-auto' : 'max-w-4xl'}
        `}>
          {title}
        </h1>

        {subtitle && (
          <p className={`
            font-body text-[15px] text-white/65 leading-relaxed
            ${align === 'center' ? 'max-w-xl mx-auto' : 'max-w-xl'}
          `}>
            {subtitle}
          </p>
        )}

        {cta && (
          <div className="mt-2">
            <Link to={cta.to} className="btn-primary">
              {cta.label} <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
