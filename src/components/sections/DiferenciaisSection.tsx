import { DIFERENCIAIS } from '../../data/clinic'

export function DiferenciaisSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-teal-200 text-sm font-mono font-medium px-3 py-1 rounded-full mb-4">
            Por que escolher a Alfa Care?
          </span>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl">
            O que nos torna diferentes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((item, i) => (
            <div
              key={item.title}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                {/* Photo when available */}
                {item.image && (
                  <div className="relative h-40 overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-teal-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-teal-200 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
