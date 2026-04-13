import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Star } from 'lucide-react'
import { CLINIC } from '../../data/clinic'

const SLIDES = [
  {
    id: 1,
    image: '/images/hero/fachada.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80',
    tag: 'Nossa Estrutura',
    title: 'Tecnologia de ponta,\ncuidado de verdade.',
    subtitle: 'Equipamentos de última geração para um diagnóstico mais preciso e seguro.',
  },
  {
    id: 2,
    image: '/images/hero/equipamentos.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1666214280577-5d4c7e64d5a6?w=1400&q=80',
    tag: 'Equipamentos',
    title: 'Ultrassom, Mamografia\ne Raio-X Digital.',
    subtitle: 'Exames realizados com equipamentos digitais de alta resolução para resultados confiáveis.',
  },
  {
    id: 3,
    image: '/images/hero/atendimento.jpg',
    imageFallback: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80',
    tag: 'Atendimento',
    title: 'Laudo entregue\nna hora do exame.',
    subtitle: 'Sem esperas desnecessárias. Você sai com o resultado em mãos para consultar seu médico.',
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = (index: number) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setTransitioning(false)
    }, 300)
  }

  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
  const next = () => goTo((current + 1) % SLIDES.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [current])

  const slide = SLIDES[current]

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.currentTarget
            img.src = slide.imageFallback
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            className={`transition-all duration-500 ${transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
          >
            <span className="tag-badge mb-6 inline-flex bg-teal-700/60 border-teal-400/40 text-teal-200">
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 whitespace-pre-line transition-all duration-500 delay-75 ${
              transitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            className={`font-body text-teal-100 text-lg md:text-xl leading-relaxed mb-10 transition-all duration-500 delay-150 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-200 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame na Alfa Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4 justify-center"
            >
              <MessageCircle size={20} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline border-white/60 text-white hover:bg-white/10 hover:border-white text-base px-8 py-4 justify-center"
            >
              <Phone size={20} />
              {CLINIC.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap gap-6 mt-12 transition-all duration-500 delay-300 ${
              transitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {[
              { value: '+15', label: 'Convênios' },
              { value: '100%', label: 'Digital' },
              { value: 'Laudo', label: 'na Hora' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <div className="w-1 h-8 bg-teal-400 rounded-full" />
                <div>
                  <div className="font-display font-bold text-white text-xl leading-none">{badge.value}</div>
                  <div className="text-teal-300 text-xs font-mono mt-0.5">{badge.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors text-white"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/40 z-20">
        <span className="text-xs font-mono tracking-widest rotate-90 mb-2">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
