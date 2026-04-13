import { TEAM } from '../../data/clinic'

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-badge mb-4">Nossa Equipe</span>
          <h2 className="section-title mb-4">
            Profissionais comprometidos<br />
            <span className="text-gradient">com sua saúde</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Nossa equipe de médicos radiologistas é altamente qualificada e experiente, dedicada a oferecer diagnósticos precisos e um atendimento humanizado.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="card-surface overflow-hidden">
                {/* Photo */}
                <div className="relative aspect-[3/4] bg-teal-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />

                  {/* Specialties overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-mono"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-teal-700 text-lg leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-body text-gray-500 text-sm mt-1">{member.role}</p>
                  <p className="font-mono text-teal-400 text-xs mt-1">{member.crm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Staff note */}
        <div className="mt-12 text-center">
          <p className="font-body text-gray-500 text-sm">
            Nossa clínica conta ainda com uma equipe de recepcionistas, técnicos em radiologia e auxiliares administrativos
            dedicados a oferecer a melhor experiência do início ao fim do seu atendimento.
          </p>
        </div>
      </div>
    </section>
  )
}
