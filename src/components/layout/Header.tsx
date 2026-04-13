import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { CLINIC } from '../../data/clinic'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Exames', href: '#exames' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-teal-700 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="text-teal-200 font-mono text-xs tracking-wide">
            Seg–Sex: 07h–18h &nbsp;|&nbsp; Sáb: 07h–11h
          </span>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
            >
              <Phone size={13} />
              <span>{CLINIC.phone}</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-green-300 transition-colors"
            >
              <MessageCircle size={13} />
              <span>{CLINIC.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav('#inicio')} className="flex-shrink-0">
            <Logo className="h-10 w-auto" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-gray-600 hover:text-teal-700 font-body font-medium text-sm rounded-lg hover:bg-teal-50 transition-all duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame na Alfa Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5"
            >
              <MessageCircle size={16} />
              Agendar via WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
          }`}
        >
          <nav className="px-6 py-4 bg-white flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 text-gray-700 hover:text-teal-700 font-medium rounded-xl hover:bg-teal-50 transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 px-4 py-3 text-teal-700 font-medium rounded-xl border border-teal-200 hover:bg-teal-50"
              >
                <Phone size={16} /> {CLINIC.phone}
              </a>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame na Alfa Care.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                <MessageCircle size={16} /> Agendar via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
