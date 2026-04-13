import { useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { DiferenciaisSection } from './components/sections/DiferenciaisSection'
import { ExamesSection } from './components/sections/ExamesSection'
import { ConveniosSection } from './components/sections/ConveniosSection'
import { TeamSection } from './components/sections/TeamSection'
import { ContatoSection } from './components/sections/ContatoSection'
import { WhatsAppFloat } from './components/ui/WhatsAppFloat'
import { useScrollRevealAll } from './hooks/useScrollReveal'

export default function App() {
  useScrollRevealAll()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <DiferenciaisSection />
        <ExamesSection />
        <ConveniosSection />
        <TeamSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
