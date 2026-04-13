interface LogoProps {
  variant?: 'full' | 'icon' | 'white'
  className?: string
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  // Logo real da Alfa Care extraída do arquivo oficial
  return (
    <img
      src="/logo.png"
      alt="Alfa Care — Centro de Diagnóstico por Imagem"
      className={className}
      style={variant === 'white' ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  )
}
