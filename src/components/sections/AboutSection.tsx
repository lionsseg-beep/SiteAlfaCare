import { CheckCircle2 } from 'lucide-react'

const ABOUT_POINTS = [
  'Laudo médico entregue no ato do exame',
  'Equipamentos digitais de última geração',
  'Equipe de radiologistas altamente qualificados',
  'Atendimento humanizado e acolhedor',
  'Mais de 15 convênios credenciados',
  'Exames particulares com preços acessíveis',
]

export function AboutSection() {
  return (
    <section id="quem-somos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/clinica-interna.jpg"
                alt="Interior da Clínica Alfa Care"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[200px]">
              <div className="text-4xl font-display font-bold text-teal-700">+15</div>
              <div className="text-sm text-gray-500 font-body mt-1 leading-snug">
                anos cuidando da saúde de Campo Grande
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-teal-50 border-2 border-teal-100 -z-10" />
            <div className="absolute -bottom-8 left-8 w-16 h-16 rounded-xl bg-teal-700/10 -z-10" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="tag-badge mb-4">Quem Somos</span>
            <h2 className="section-title mb-6">
              Uma clínica com propósito:<br />
              <span className="text-gradient">cuidar de você</span>
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
              A <strong className="text-teal-700">Alfa Care Centro de Diagnóstico por Imagem</strong> nasceu com uma missão clara: oferecer exames de imagem com a mais alta precisão técnica, aliada a um atendimento humano e acolhedor.
            </p>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Localizada no coração do Bairro São Francisco, em Campo Grande (MS), nossa clínica conta com equipamentos digitais de última geração e uma equipe de radiologistas experientes, prontos para garantir que você receba o melhor diagnóstico — com laudo entregue no ato do exame.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {ABOUT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-body">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Agende seu exame agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
