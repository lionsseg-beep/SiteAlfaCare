import { useState } from 'react'
import { Search, MessageCircle } from 'lucide-react'
import { CONVENIOS, CLINIC } from '../../data/clinic'

export function ConveniosSection() {
  const [query, setQuery] = useState('')

  const filtered = CONVENIOS.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  )

  const planos = CONVENIOS.filter((c) => c.category !== 'Particular')
  const particular = CONVENIOS.find((c) => c.category === 'Particular')

  return (
    <section id="convenios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-badge mb-4">Convênios e Planos</span>
          <h2 className="section-title mb-4">
            Seu plano está<br />
            <span className="text-gradient">entre os nossos parceiros</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Trabalhamos com os principais convênios de Campo Grande e região. Consulte abaixo se o seu plano é atendido.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar convênio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-100 focus:border-teal-400 focus:outline-none font-body text-gray-700 text-base transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Grid of convenios */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
          {(query ? filtered : planos).map((convenio, i) => (
            <div
              key={convenio.name}
              className="reveal card-surface p-4 flex flex-col items-center text-center gap-2 hover:border-teal-200 hover:shadow-teal-100/50 cursor-default"
              style={{ transitionDelay: `${Math.min(i * 40, 400)}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 font-display font-bold text-sm">
                {convenio.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-body font-medium text-gray-800 text-sm leading-tight">
                  {convenio.name}
                </p>
                <p className="font-mono text-teal-500 text-xs mt-0.5">{convenio.category}</p>
              </div>
            </div>
          ))}

          {query && filtered.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 font-body">
                Nenhum convênio encontrado para "{query}".
              </p>
              <p className="text-teal-600 text-sm mt-2">
                Entre em contato para verificar seu plano.
              </p>
            </div>
          )}
        </div>

        {/* Particular CTA */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-200 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display font-bold text-teal-700 text-xl mb-2">
              Atendemos também por conta particular
            </h3>
            <p className="font-body text-gray-600 text-sm leading-relaxed">
              Além dos convênios, realizamos exames particulares com preços acessíveis. Se seu plano não estiver na lista ou se preferir atendimento particular, entre em contato — nossa equipe verificará as melhores condições para você.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href={`https://wa.me/${CLINIC.whatsapp}?text=Olá! Gostaria de verificar se meu convênio é atendido na Alfa Care.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
            >
              <MessageCircle size={18} />
              Verificar meu convênio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
