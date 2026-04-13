import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { CLINIC } from '../../data/clinic'

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo variant="white" className="h-12 w-auto mb-6" />
          <p className="text-teal-200 text-sm leading-relaxed font-body">
            Diagnóstico com cuidado e precisão. Sua saúde é nossa prioridade.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">
            Navegação
          </h3>
          <ul className="space-y-3">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Quem Somos', href: '#quem-somos' },
              { label: 'Exames', href: '#exames' },
              { label: 'Convênios', href: '#convenios' },
              { label: 'Nossa Equipe', href: '#equipe' },
              { label: 'Contato & Agendamento', href: '#contato' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-teal-200 hover:text-white text-sm transition-colors hover:underline underline-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Exames */}
        <div>
          <h3 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">
            Exames
          </h3>
          <ul className="space-y-3">
            {['Ultrassonografia', 'Mamografia', 'Raio-X', 'Exames Particulares'].map((item) => (
              <li key={item}>
                <a
                  href="#exames"
                  className="text-teal-200 hover:text-white text-sm transition-colors hover:underline underline-offset-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">
            Contato
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href={CLINIC.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-teal-200 hover:text-white text-sm transition-colors"
              >
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-teal-400" />
                <span>{CLINIC.address}<br />{CLINIC.city}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${CLINIC.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-teal-200 hover:text-white text-sm transition-colors">
                <Phone size={16} className="text-teal-400" />
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-teal-200 hover:text-green-300 text-sm transition-colors"
              >
                <MessageCircle size={16} className="text-green-400" />
                {CLINIC.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-3 text-teal-200 hover:text-white text-sm transition-colors">
                <Mail size={16} className="text-teal-400" />
                {CLINIC.email}
              </a>
            </li>
            <li className="flex gap-3 text-teal-200 text-sm">
              <Clock size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                {CLINIC.hours.map((h) => (
                  <div key={h.days}><span className="text-white">{h.days}:</span> {h.time}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-teal-400 text-xs font-mono">
            © {new Date().getFullYear()} Alfa Care Centro de Diagnóstico por Imagem. Todos os direitos reservados.
          </p>
          <p className="text-teal-500 text-xs">
            Desenvolvido por{' '}
            <span className="text-teal-300 font-medium">Prattica AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
