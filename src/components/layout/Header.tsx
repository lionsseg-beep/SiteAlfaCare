import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { CLINIC } from '../../data/clinic'

const NAV_LINKS = [
  { label: 'Início',      href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Exames',     href: '#exames' },
  { label: 'Convênios',  href: '#convenios' },
  { label: 'Equipe',     href: '#equipe' },
  { label: 'Contato',    href: '#contato' },
]

export function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const nav = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top bar — cor primária da logo */}
      <div style={{ backgroundColor: '#1e6e80' }} className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-white/70 font-mono text-xs tracking-widest uppercase">
            Seg–Sex: 07h–18h &nbsp;|&nbsp; Sáb: 07h–11h
          </span>
          <div className="flex items-center gap-6">
            <a href={`tel:${CLINIC.phone.replace(/\D/g,'')}`}
               className="flex items-center gap-1.5 text-white text-sm hover:text-white/80 transition-colors">
              <Phone size={13} />{CLINIC.phone}
            </a>
            <a href={`https://wa.me/${CLINIC.whatsapp}`}
               target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-white text-sm hover:text-green-300 transition-colors">
              <MessageCircle size={13} />{CLINIC.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main header — fundo branco puro */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md border-b border-gray-100' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo real — sem filtro, sem manipulação de cor */}
          <button onClick={() => nav('#inicio')} className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Alfa Care — Centro de Diagnóstico por Imagem"
              className="h-14 w-auto object-contain"
              style={{ maxWidth: '280px' }}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => nav(link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg
                           hover:text-[#1e6e80] hover:bg-[#f0fafc] transition-all duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame na Alfa Care.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5"
            >
              <MessageCircle size={16} />
              Agendar via WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ color: '#1e6e80' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
        }`}>
          <nav className="px-6 py-4 bg-white flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => nav(link.href)}
                className="text-left px-4 py-3 text-gray-700 font-medium rounded-xl
                           hover:text-[#1e6e80] hover:bg-[#f0fafc] transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
              <a href={`tel:${CLINIC.phone.replace(/\D/g,'')}`}
                 className="flex items-center gap-2 px-4 py-3 font-medium rounded-xl
                            border hover:bg-[#f0fafc] transition-colors"
                 style={{ color: '#1e6e80', borderColor: '#a0deed' }}>
                <Phone size={16} />{CLINIC.phone}
              </a>
              <a href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame na Alfa Care.`}
                 target="_blank" rel="noopener noreferrer"
                 className="btn-whatsapp justify-center">
                <MessageCircle size={16} />Agendar via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
