import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { CLINIC } from '../../data/clinic'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0a3840' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          {/* Logo branca no footer — filtro apenas aqui */}
          <img
            src="/logo.png"
            alt="Alfa Care"
            className="h-12 w-auto object-contain mb-6"
            style={{ filter: 'brightness(0) invert(1)', maxWidth: '220px' }}
          />
          <p style={{ color: '#a0deed' }} className="text-sm leading-relaxed font-body">
            Diagnóstico com cuidado e precisão.<br />Sua saúde é nossa prioridade.
          </p>
          <div className="flex gap-3 mt-6">
            <a href={CLINIC.instagram} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
               style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
               aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
               style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
               aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">
            Navegação
          </h3>
          <ul className="space-y-3">
            {[
              { label: 'Início',                  href: '#inicio' },
              { label: 'Quem Somos',              href: '#quem-somos' },
              { label: 'Exames',                  href: '#exames' },
              { label: 'Convênios',               href: '#convenios' },
              { label: 'Nossa Equipe',            href: '#equipe' },
              { label: 'Contato & Agendamento',   href: '#contato' },
            ].map(item => (
              <li key={item.href}>
                <a href={item.href}
                   className="text-sm transition-colors hover:text-white hover:underline underline-offset-2"
                   style={{ color: '#a0deed' }}>
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
            {['Ultrassonografia','Mamografia','Raio-X','Exames Particulares'].map(item => (
              <li key={item}>
                <a href="#exames"
                   className="text-sm transition-colors hover:text-white hover:underline underline-offset-2"
                   style={{ color: '#a0deed' }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-display font-semibold text-white mb-5 text-sm tracking-widest uppercase">
            Contato
          </h3>
          <ul className="space-y-4">
            {[
              { icon: <MapPin size={16} style={{ color: '#50B4C8' }} />, text: `${CLINIC.address}\n${CLINIC.city}`, href: CLINIC.googleMaps },
              { icon: <Phone size={16} style={{ color: '#50B4C8' }} />, text: CLINIC.phone, href: `tel:${CLINIC.phone.replace(/\D/g,'')}` },
              { icon: <MessageCircle size={16} className="text-green-400" />, text: CLINIC.whatsappDisplay, href: `https://wa.me/${CLINIC.whatsapp}` },
              { icon: <Mail size={16} style={{ color: '#50B4C8' }} />, text: CLINIC.email, href: `mailto:${CLINIC.email}` },
            ].map((item,i) => (
              <li key={i}>
                <a href={item.href} target={item.href.startsWith('http')?'_blank':undefined}
                   rel="noopener noreferrer"
                   className="flex items-start gap-3 text-sm transition-colors hover:text-white"
                   style={{ color: '#a0deed' }}>
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="whitespace-pre-line">{item.text}</span>
                </a>
              </li>
            ))}
            <li className="flex gap-3 text-sm" style={{ color: '#a0deed' }}>
              <Clock size={16} style={{ color: '#50B4C8' }} className="flex-shrink-0 mt-0.5" />
              <div>
                {CLINIC.hours.map(h => (
                  <div key={h.days}>
                    <span className="text-white">{h.days}:</span> {h.time}
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-mono" style={{ color: '#6dcae0' }}>
            © {new Date().getFullYear()} Alfa Care Centro de Diagnóstico por Imagem. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: '#50B4C8' }}>
            Desenvolvido por <span className="font-medium text-white">Prattica AI</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
