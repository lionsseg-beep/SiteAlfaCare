import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { CLINIC } from '../../data/clinic'

const EXAM_OPTIONS = ['Ultrassonografia', 'Mamografia', 'Raio-X', 'Não sei ainda']
const CONVENIO_OPTIONS = ['CASSEMS', 'Unimed', 'CASSI', 'GEAP', 'Unisaúde', 'IMPCG', 'Bradesco Saúde', 'Outro', 'Particular']

type FormData = {
  nome: string
  telefone: string
  email: string
  exame: string
  convenio: string
  mensagem: string
}

const INITIAL: FormData = { nome: '', telefone: '', email: '', exame: '', convenio: '', mensagem: '' }

export function ContatoSection() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Monta mensagem WhatsApp
    const msg = encodeURIComponent(
      `Olá! Gostaria de agendar um exame na Alfa Care.\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*Telefone:* ${form.telefone}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Exame desejado:* ${form.exame || 'Não informado'}\n` +
      `*Convênio:* ${form.convenio || 'Não informado'}\n` +
      `*Mensagem:* ${form.mensagem || 'Sem mensagem adicional'}`
    )
    setTimeout(() => {
      window.open(`https://wa.me/${CLINIC.whatsapp}?text=${msg}`, '_blank')
      setLoading(false)
      setSent(true)
      setForm(INITIAL)
      setTimeout(() => setSent(false), 5000)
    }, 600)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-teal-400 focus:outline-none font-body text-gray-700 text-sm transition-colors bg-gray-50 focus:bg-white'
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5 font-body'

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-badge mb-4">Agendamento & Contato</span>
          <h2 className="section-title mb-4">
            Agende seu exame<br />
            <span className="text-gradient">de forma fácil e rápida</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato pelo WhatsApp para confirmar seu agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-surface p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-teal-700 text-xl">
                    Solicitação enviada!
                  </h3>
                  <p className="font-body text-gray-500 max-w-sm">
                    Você foi redirecionado para o WhatsApp. Nossa equipe confirmará seu agendamento em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Nome completo *</label>
                      <input required value={form.nome} onChange={set('nome')} type="text" placeholder="Seu nome" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Telefone / WhatsApp *</label>
                      <input required value={form.telefone} onChange={set('telefone')} type="tel" placeholder="(67) 99999-9999" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>E-mail</label>
                    <input value={form.email} onChange={set('email')} type="email" placeholder="seu@email.com" className={inputClass} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Exame desejado</label>
                      <select value={form.exame} onChange={set('exame')} className={inputClass}>
                        <option value="">Selecionar exame</option>
                        {EXAM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Convênio</label>
                      <select value={form.convenio} onChange={set('convenio')} className={inputClass}>
                        <option value="">Selecionar convênio</option>
                        {CONVENIO_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Mensagem (opcional)</label>
                    <textarea
                      value={form.mensagem}
                      onChange={set('mensagem')}
                      rows={3}
                      placeholder="Dúvidas, observações ou pedido específico..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-whatsapp flex-1 justify-center disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <><MessageCircle size={18} /> Enviar pelo WhatsApp</>
                      )}
                    </button>
                    <a
                      href={`tel:${CLINIC.phone.replace(/\D/g, '')}`}
                      className="btn-outline flex-1 justify-center"
                    >
                      <Phone size={18} /> Ligar agora
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 text-center font-body">
                    Ao enviar, você será redirecionado ao WhatsApp com suas informações preenchidas.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact info + map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            <div className="card-surface p-6 space-y-5">
              <h3 className="font-display font-bold text-teal-700 text-lg">Informações de contato</h3>
              {[
                { icon: <MapPin size={18} className="text-teal-500" />, label: 'Endereço', value: `${CLINIC.address}`, sub: `${CLINIC.city} — ${CLINIC.cep}`, href: CLINIC.googleMaps },
                { icon: <Phone size={18} className="text-teal-500" />, label: 'Telefone fixo', value: CLINIC.phone, href: `tel:${CLINIC.phone.replace(/\D/g, '')}` },
                { icon: <MessageCircle size={18} className="text-green-500" />, label: 'WhatsApp', value: CLINIC.whatsappDisplay, href: `https://wa.me/${CLINIC.whatsapp}` },
                { icon: <Mail size={18} className="text-teal-500" />, label: 'E-mail', value: CLINIC.email, href: `mailto:${CLINIC.email}` },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:bg-teal-50 -mx-2 px-2 py-2 rounded-xl transition-colors group">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="font-body font-medium text-gray-800 text-sm group-hover:text-teal-700 transition-colors">{item.value}</p>
                    {item.sub && <p className="text-xs text-gray-500">{item.sub}</p>}
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="card-surface p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-teal-500" />
                <h3 className="font-display font-bold text-teal-700 text-lg">Horário de Funcionamento</h3>
              </div>
              {CLINIC.hours.map((h) => (
                <div key={h.days} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="font-body text-gray-600 text-sm">{h.days}</span>
                  <span className="font-mono font-medium text-teal-700 text-sm">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48">
              <iframe
                title="Localização Alfa Care"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.8!2d-54.6148!3d-20.4626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e7082de5bd85%3A0x0!2sR.+Padre+Jo%C3%A3o+Crippa%2C+2665+-+S%C3%A3o+Francisco%2C+Campo+Grande+-+MS!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
