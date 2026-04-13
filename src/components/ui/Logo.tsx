interface LogoProps {
  variant?: 'full' | 'icon' | 'white'
  className?: string
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0D5252'
  const accentColor = variant === 'white' ? '#5EC4BC' : '#1DA89A'
  const iconBg = variant === 'white' ? '#FFFFFF22' : '#0D5252'

  if (variant === 'icon') {
    return (
      <svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Alfa Care"
      >
        {/* Cross médico estilizado */}
        <rect width="48" height="48" rx="12" fill="#0D5252" />
        <rect x="20" y="10" width="8" height="28" rx="4" fill="#F2EDE8" />
        <rect x="10" y="20" width="28" height="8" rx="4" fill="#F2EDE8" />
        <circle cx="24" cy="24" r="5" fill="#1DA89A" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 220 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Alfa Care Centro de Diagnóstico por Imagem"
    >
      {/* Icon mark */}
      <rect width="44" height="44" x="0" y="4" rx="10" fill={iconBg} />
      <rect x="18" y="11" width="8" height="30" rx="4" fill={variant === 'white' ? '#FFFFFF' : '#F2EDE8'} />
      <rect x="8" y="21" width="28" height="8" rx="4" fill={variant === 'white' ? '#FFFFFF' : '#F2EDE8'} />
      <circle cx="22" cy="25" r="5" fill={accentColor} />

      {/* ALFA */}
      <text
        x="52"
        y="29"
        fontFamily="Sora, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill={textColor}
        letterSpacing="-0.5"
      >
        ALFA
      </text>

      {/* CARE */}
      <text
        x="108"
        y="29"
        fontFamily="Sora, sans-serif"
        fontWeight="300"
        fontSize="22"
        fill={accentColor}
        letterSpacing="1"
      >
        CARE
      </text>

      {/* Subtitle */}
      <text
        x="52"
        y="44"
        fontFamily="DM Sans, sans-serif"
        fontWeight="400"
        fontSize="9"
        fill={variant === 'white' ? 'rgba(255,255,255,0.7)' : '#147A78'}
        letterSpacing="1.5"
      >
        CENTRO DE DIAGNÓSTICO POR IMAGEM
      </text>
    </svg>
  )
}
