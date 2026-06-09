interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>

      {/* Eyebrow */}
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? 'eyebrow-gold' : 'eyebrow'}`}>
          {eyebrow}
        </p>
      )}

      {/* Heading */}
      <h2
        className={`
          font-display font-bold text-balance
          text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem]
          leading-display tracking-tighter mb-5
          ${light ? 'text-white' : 'text-navy-800'}
        `}
      >
        {title}
      </h2>

      {/* Decorative line — thin, tasteful */}
      <div
        className={`
          h-px w-12 mb-6 rounded-full
          ${centered ? 'mx-auto' : ''}
          ${light ? 'bg-nepal-gold/70' : 'bg-nepal-red/70'}
        `}
      />

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`
            font-body text-[15px] leading-relaxed max-w-xl
            ${centered ? 'mx-auto' : ''}
            ${light ? 'text-white/70' : 'text-gray-500'}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
