import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { MouseGlow } from './components/common/MouseGlow'

import { Hero } from './sections/Hero/Hero'
import { Projects } from './sections/Projects/Projects'
import { Expertise } from './sections/Expertise/Expertise'
import { DSA } from './sections/DSA/DSA'
import { Experience } from './sections/Experience/Experience'
import { Contact } from './sections/Contact/Contact'
import { ScrollProgress } from './components/common/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <MouseGlow />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Expertise />
        <DSA />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App