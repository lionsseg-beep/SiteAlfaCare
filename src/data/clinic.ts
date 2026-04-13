// ─── Alfa Care — Dados Centralizados ─────────────────────────────────────────

export const CLINIC = {
  name: 'Alfa Care',
  fullName: 'Alfa Care Centro de Diagnóstico por Imagem',
  slogan: 'Diagnóstico com Cuidado e Precisão',
  description:
    'Há mais de uma década cuidando da saúde das famílias de Campo Grande com exames de imagem de alta precisão, equipamentos de última geração e laudo entregue na hora.',
  address: 'Rua Padre João Crippa, 2665 — Bairro São Francisco',
  city: 'Campo Grande — MS',
  cep: 'CEP: 79010-180',
  phone: '(67) 3321-8130',
  whatsapp: '5567991301435',
  whatsappDisplay: '(67) 99130-1435',
  email: 'alfacare@gmail.com',
  instagram: 'https://instagram.com/clinicaalfacare',
  facebook: 'https://facebook.com/clinicaalfacare',
  hours: [
    { days: 'Segunda a Sexta', time: '07h às 18h' },
    { days: 'Sábado', time: '07h às 11h' },
  ],
  googleMaps:
    'https://www.google.com/maps/search/Rua+Padre+João+Crippa,+2665+Campo+Grande+MS',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.0!2d-54.615!3d-20.462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzQzLjIiUyA1NMKwMzYnNTQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr',
}

export const EXAMS = [
  {
    id: 'ultrassonografia',
    title: 'Ultrassonografia',
    description:
      'Exames de ultrassom de alta resolução para diagnóstico abdominal, obstétrico, articular, vascular e de partes moles. Imagens em tempo real com tecnologia doppler.',
    icon: '🔬',
    color: 'teal',
    details: [
      'Ultrassom Abdominal Total e Pélvico',
      'Ultrassom Obstétrico (Morfológico)',
      'Ultrassom de Partes Moles',
      'Doppler Vascular e Cardíaco',
      'Ultrassom Articular',
      'Ultrassom de Tireoide e Pescoço',
    ],
    image: '/images/exames/ultrassonografia.jpg',
  },
  {
    id: 'mamografia',
    title: 'Mamografia',
    description:
      'Mamografia digital de alta definição para rastreamento e diagnóstico precoce do câncer de mama. Essencial no controle da saúde feminina.',
    icon: '🩺',
    color: 'pink',
    details: [
      'Mamografia Digital Bilateral',
      'Mamografia de Rastreamento',
      'Mamografia Diagnóstica',
      'Ultrassom Mamário Complementar',
    ],
    image: '/images/exames/mamografia.jpg',
  },
  {
    id: 'raio-x',
    title: 'Raio-X',
    description:
      'Radiografias digitais com equipamentos modernos para avaliação óssea, torácica e abdominal. Resultado imediato com qualidade de imagem superior.',
    icon: '🫁',
    color: 'blue',
    details: [
      'Raio-X de Tórax',
      'Raio-X de Coluna (Cervical, Torácica, Lombar)',
      'Raio-X de Membros Superiores e Inferiores',
      'Raio-X de Crânio e Face',
      'Raio-X de Abdômen',
      'Raio-X Odontológico',
    ],
    image: '/images/exames/raio-x.jpg',
  },
]

export const CONVENIOS = [
  { name: 'CASSEMS', category: 'Saúde Pública' },
  { name: 'Unimed', category: 'Cooperativa Médica' },
  { name: 'CASSI', category: 'Bancários' },
  { name: 'GEAP', category: 'Servidor Federal' },
  { name: 'Unisaúde', category: 'Corporativo' },
  { name: 'IMPCG', category: 'Municipal' },
  { name: 'Bradesco Saúde', category: 'Seguradora' },
  { name: 'SulAmérica', category: 'Seguradora' },
  { name: 'Amil', category: 'Seguradora' },
  { name: 'Care Plus', category: 'Seguradora' },
  { name: 'Fusex', category: 'Militar' },
  { name: 'Assefaz', category: 'Fazendário' },
  { name: 'Capesesp', category: 'Previdência' },
  { name: 'IPEMAT', category: 'Estadual' },
  { name: 'Postal Saúde', category: 'Correios' },
  { name: 'Particular', category: 'Particular' },
]

export const TEAM = [
  {
    name: 'Dr. Ricardo Bezerra',
    role: 'Diretor Clínico — Radiologista',
    crm: 'CRM/MS 0000',
    specialties: ['Ultrassonografia', 'Radiologia'],
    image: '/images/team/dr-ricardo.jpg',
  },
  {
    name: 'Dra. Ananda Ruiz',
    role: 'Médica Radiologista',
    crm: 'CRM/MS 0000',
    specialties: ['Mamografia', 'Ultrassonografia'],
    image: '/images/team/dra-ananda.jpg',
  },
  {
    name: 'Dr. Camilo Suarez',
    role: 'Médico Radiologista',
    crm: 'CRM/MS 0000',
    specialties: ['Raio-X', 'Ultrassonografia'],
    image: '/images/team/dr-camilo.jpg',
  },
  {
    name: 'Dr. Ferreira',
    role: 'Médico Radiologista',
    crm: 'CRM/MS 0000',
    specialties: ['Radiologia Geral', 'Ultrassonografia'],
    image: '/images/team/dr-ferreira.jpg',
  },
]

export const DIFERENCIAIS = [
  {
    icon: '⚡',
    title: 'Laudo na Hora',
    description:
      'Entregamos seu laudo no momento do exame, sem espera. Praticidade e agilidade para você e seu médico.',
    image: null,
  },
  {
    icon: '🏆',
    title: 'Equipamentos de Ponta',
    description:
      'Tecnologia Samsung de última geração para imagens de alta resolução, garantindo diagnósticos mais precisos.',
    image: null,
  },
  {
    icon: '💙',
    title: 'Atendimento Humanizado',
    description:
      'Uma equipe que cuida de você com empatia, respeito e atenção em cada etapa do seu atendimento.',
    image: null,
  },
  {
    icon: '🚗',
    title: 'Estacionamento Próprio',
    description:
      'Estacionamento gratuito e arborizado para sua comodidade. Venha de carro sem preocupação.',
    image: '/images/estrutura/estacionamento.jpg',
  },
  {
    icon: '♿',
    title: 'Acessibilidade Total',
    description:
      'Elevador e estrutura adaptada para garantir conforto e segurança a todos os nossos pacientes.',
    image: '/images/estrutura/elevador.jpg',
  },
  {
    icon: '☕',
    title: 'Café e Conforto',
    description:
      'Oferecemos café, chá e biscoitos enquanto você aguarda. Pequenos detalhes que fazem toda a diferença.',
    image: '/images/estrutura/cafe.jpg',
  },
]
