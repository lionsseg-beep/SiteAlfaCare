import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { CLINIC } from '../../data/clinic'

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame na Alfa Care.`

  return (
    <div className="whatsapp-float">
      {/* Popup */}
      {open && !dismissed && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-2 animate-fade-up">
          {/* Header */}
          <div className="gradient-teal p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-display font-semibold text-sm">Alfa Care</p>
                <p className="text-teal-200 text-xs">Geralmente responde em minutos</p>
              </div>
            </div>
            <button
              onClick={() => { setOpen(false); setDismissed(true) }}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-gray-700 text-sm font-body leading-relaxed">
                👋 Olá! Bem-vindo à <strong>Alfa Care</strong>. Podemos ajudá-lo a agendar seu exame agora mesmo!
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center text-sm py-3"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={16} />
              Iniciar conversa
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 active:bg-green-700 transition-all duration-200 hover:scale-110"
        aria-label="Abrir WhatsApp"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}
