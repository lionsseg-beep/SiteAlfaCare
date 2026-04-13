import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle, CheckCircle2 } from 'lucide-react'
import { EXAMS } from '../../data/clinic'
import { CLINIC } from '../../data/clinic'

const EXAM_IMAGES = [
  'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
]

export function ExamesSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <section id="exames" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-badge mb-4">Nossos Exames</span>
          <h2 className="section-title mb-4">
            Todos os seus exames<br />
            <span className="text-gradient">em um só lugar</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Realizamos exames de diagnóstico por imagem com equipamentos digitais de alta resolução e laudo entregue na hora do atendimento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {EXAMS.map((exam, i) => (
            <div key={exam.id} className="reveal card-surface overflow-hidden group" style={{ transitionDelay: `${i * 100}ms` }}>
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#d0eff5]">
                <img
                  src={exam.image}
                  alt={exam.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = EXAM_IMAGES[i] || EXAM_IMAGES[0]
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3840]/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-2xl">{exam.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-[#1e6e80] text-xl mb-3">
                  {exam.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">
                  {exam.description}
                </p>

                {/* Expand button */}
                <button
                  onClick={() => setExpanded(expanded === exam.id ? null : exam.id)}
                  className="flex items-center gap-2 text-[#2d8a9e] text-sm font-medium hover:text-[#145461] transition-colors"
                >
                  {expanded === exam.id ? (
                    <><ChevronUp size={16} /> Ver menos</>
                  ) : (
                    <><ChevronDown size={16} /> Ver tipos de exame</>
                  )}
                </button>

                {/* Expanded details */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expanded === exam.id ? 'max-h-64 mt-4' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {exam.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#50B4C8] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de agendar um exame de ${exam.title} na Alfa Care.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle size={15} />
                    Agendar este exame
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Particular highlight */}
        <div className="bg-white border-2 border-[#d0eff5] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left flex-1">
            <span className="tag-badge mb-3">💳 Atendimento Particular</span>
            <h3 className="font-display font-bold text-[#1e6e80] text-2xl mb-3">
              Não tem convênio? Sem problema.
            </h3>
            <p className="font-body text-gray-600 leading-relaxed">
              Atendemos pacientes particulares com preços acessíveis e a mesma qualidade de sempre. Consulte valores e disponibilidade diretamente com nossa equipe.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de saber os valores dos exames particulares na Alfa Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              Consultar valores
            </a>
            <a
              href={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
              className="btn-outline"
            >
              Ligar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
