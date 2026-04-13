# Alfa Care — Site Institucional

Stack: **React 19 + TypeScript + Vite + Tailwind CSS 3**

---

## 🚀 Rodando localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# → Acesse http://localhost:5173

# 3. Build de produção
npm run build
# → Gera a pasta /dist pronta para deploy

# 4. Prévia do build
npm run preview
```

---

## 📁 Estrutura do projeto

```
src/
├── data/
│   └── clinic.ts          ← TODOS os textos e dados da clínica (edite aqui)
├── components/
│   ├── layout/
│   │   ├── Header.tsx     ← Navegação + top bar
│   │   └── Footer.tsx     ← Rodapé completo
│   ├── sections/
│   │   ├── HeroSection.tsx       ← Slider principal
│   │   ├── AboutSection.tsx      ← Quem somos
│   │   ├── DiferenciaisSection.tsx ← Cards de diferenciais
│   │   ├── ExamesSection.tsx     ← Cards de exames
│   │   ├── ConveniosSection.tsx  ← Busca de convênios
│   │   ├── TeamSection.tsx       ← Equipe médica
│   │   └── ContatoSection.tsx    ← Formulário + mapa
│   └── ui/
│       ├── Logo.tsx        ← Logo SVG (substituir pelo PDF convertido)
│       └── WhatsAppFloat.tsx ← Botão flutuante WhatsApp
├── hooks/
│   └── useScrollReveal.ts  ← Animações de scroll
├── App.tsx                 ← Composição de todas as seções
├── main.tsx                ← Entry point
└── index.css               ← Estilos globais + design tokens
```

---

## 🖼️ Adicionando as fotos reais

Crie a pasta `public/images/` e adicione as fotos seguindo esta estrutura:

```
public/
└── images/
    ├── hero/
    │   ├── fachada.jpg       ← Foto da fachada da clínica (Hero slide 1)
    │   ├── equipamentos.jpg  ← Equipamentos (Hero slide 2)
    │   └── atendimento.jpg   ← Atendimento (Hero slide 3)
    ├── clinica-interna.jpg   ← Interior da clínica (seção Quem Somos)
    ├── ultrassom.jpg         ← Card do exame de ultrassom
    ├── mamografia.jpg        ← Card do exame de mamografia
    ├── raio-x.jpg            ← Card do exame de raio-x
    └── team/
        ├── dr-ricardo.jpg
        ├── dra-ananda.jpg
        ├── dr-camilo.jpg
        └── dr-ferreira.jpg
```

> **Tamanhos recomendados:**
> - Hero: 1400×800px (landscape)
> - Cards de exame: 800×450px (16:9)
> - Equipe: 400×533px (3:4)
> - Quem Somos: 800×600px (4:3)

---

## ✏️ Editando conteúdo

Todo o conteúdo está centralizado em `src/data/clinic.ts`. Edite esse arquivo para:
- Atualizar convênios
- Adicionar/remover exames
- Mudar dados de contato
- Editar informações da equipe
- Alterar diferenciais

---

## 🎨 Customizando a logo

O arquivo `src/components/ui/Logo.tsx` contém uma logo SVG gerada com base na identidade da clínica.

Para usar o PDF original:
1. Converta o PDF para SVG usando [CloudConvert](https://cloudconvert.com/pdf-to-svg) ou Adobe Illustrator
2. Salve como `public/logo.svg`
3. Substitua o componente `Logo.tsx` por:

```tsx
export function Logo({ className = '' }: { className?: string }) {
  return <img src="/logo.svg" alt="Alfa Care" className={className} />
}
```

---

## 🌐 Deploy na Hostinger

```bash
# 1. Build
npm run build

# 2. Faça upload da pasta /dist para o public_html da Hostinger
# (via FTP ou File Manager)
```

O site gerado é **100% estático** — pode ser hospedado em qualquer servidor, incluindo Hostinger Shared Hosting (sem precisar de Node.js).

---

## 📞 Suporte

Desenvolvido por **Prattica AI** — contato@prattica.ai
