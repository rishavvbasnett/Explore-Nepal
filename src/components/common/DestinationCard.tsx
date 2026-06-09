import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import type { Destination } from '../../types'

interface Props {
  destination: Destination
}

export default function DestinationCard({ destination }: Props) {
  return (
    <Link
      to={`/destinations/${destination.id}`}
      className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-400"
    >
      {/* ── Image ───────────────────────────────────────────── */}
      <div className="relative h-60 sm:h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              `https://picsum.photos/seed/${destination.id}/800/640`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Region badge */}
        <span className="absolute top-3 left-3 bg-white/90 text-navy-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          {destination.region}
        </span>

        {/* Name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-[1.2rem] font-bold text-white leading-tight mb-0.5">
            {destination.name}
          </h3>
          <p className="font-body text-[13px] text-white/70 italic leading-none">
            {destination.tagline}
          </p>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────── */}
      <div className="p-5">
        <p className="font-body text-[14px] text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {destination.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          <span className="flex items-center gap-1.5 text-[12px] text-gray-400 font-body">
            <MapPin size={12} className="text-nepal-red flex-shrink-0" />
            {destination.region}
          </span>
          {destination.duration && (
            <span className="flex items-center gap-1.5 text-[12px] text-gray-400 font-body">
              <Clock size={12} className="text-nepal-red flex-shrink-0" />
              {destination.duration}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="font-body text-[12px] text-gray-400">
            Best: <span className="text-gray-600 font-medium">{destination.bestSeason}</span>
          </span>
          <span className="flex items-center gap-1 text-nepal-red text-[13px] font-semibold font-body group-hover:gap-2 transition-all duration-200">
            Explore <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}
