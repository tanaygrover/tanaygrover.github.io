import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Education from './components/Education'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-body antialiased">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-coffee-100/50 to-transparent" />
        </div>

        <Experience />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-coffee-100/50 to-transparent" />
        </div>

        <Education />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-coffee-100/50 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-coffee-100/50 to-transparent" />
        </div>

        <Publications />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-coffee-100/50 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-coffee-100/50 to-transparent" />
        </div>

        <About />
      </main>
      <Footer />
    </div>
  )
}