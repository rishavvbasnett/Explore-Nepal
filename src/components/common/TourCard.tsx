import { Link } from 'react-router-dom'
import { Clock, Users, Star, TrendingUp, ArrowRight } from 'lucide-react'
import type { Tour } from '../../types'

interface Props {
  tour: Tour
}

const difficultyStyle: Record<Tour['difficulty'], string> = {
  Easy:        'bg-emerald-50 text-emerald-700',
  Moderate:    'bg-amber-50  text-amber-700',
  Challenging: 'bg-orange-50 text-orange-700',
  Strenuous:   'bg-red-50    text-red-700',
}

export default function TourCard({ tour }: Props) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-400">

      {/* ── Image ────────────────────────────────────────────── */}
      <div className="relative h-56 sm:h-60 overflow-hidden flex-shrink-0">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              `https://picsum.photos/seed/${tour.id}/800/640`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Popular badge */}
        {tour.popular && (
          <span className="absolute top-3 left-3 bg-nepal-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
            <TrendingUp size={10} /> Popular
          </span>
        )}

        {/* Difficulty badge */}
        <span className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${difficultyStyle[tour.difficulty]}`}>
          {tour.difficulty}
        </span>

        {/* Duration pill — bottom left */}
        <div className="absolute bottom-3 left-4">
          <span className="flex items-center gap-1 bg-black/50 text-white/90 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            <Clock size={10} /> {tour.duration}
          </span>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">

        {/* Category */}
        <p className="eyebrow mb-2">{tour.category}</p>

        {/* Title */}
        <h3 className="font-display text-[1.05rem] font-bold text-navy-800 leading-snug mb-2 line-clamp-2 tracking-tight">
          {tour.title}
        </h3>

        {/* Description */}
        <p className="font-body text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
          {tour.description}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
          <span className="flex items-center gap-1 text-[12px] text-gray-400">
            <Users size={12} className="text-navy-700" /> {tour.groupSize}
          </span>
          <span className="flex items-center gap-1 text-[12px] text-gray-400">
            <Star size={12} className="text-nepal-gold fill-nepal-gold" />
            <span className="font-medium text-gray-700">{tour.rating}</span>
            <span className="text-gray-400">({tour.reviewCount})</span>
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
          <div className="leading-tight">
            {tour.originalPrice && (
              <p className="font-body text-[11px] text-gray-400 line-through">
                ${tour.originalPrice.toLocaleString()}
              </p>
            )}
            <p className="font-body text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">From</p>
            <p className="font-display text-[1.35rem] font-bold text-nepal-red leading-none">
              ${tour.price.toLocaleString()}
              <span className="font-body text-[11px] font-normal text-gray-400 ml-1">/ person</span>
            </p>
          </div>

          <Link
            to={`/tours/${tour.id}`}
            className="flex items-center gap-1.5 bg-navy-800 hover:bg-nepal-red text-white text-[12px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors duration-300 flex-shrink-0"
          >
            Book <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  )
}
