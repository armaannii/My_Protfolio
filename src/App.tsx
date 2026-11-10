import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'skills', 'projects', 'contact']
    const NAV_HEIGHT = 80

    const getActiveSection = (): string => {
      const scrollY = window.scrollY

      // Snap to last section when near bottom
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 10) {
        return sectionIds[sectionIds.length - 1]
      }

      // Walk sections: last one whose top edge has passed the nav threshold wins
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + scrollY
          if (scrollY + NAV_HEIGHT + 60 >= offsetTop) {
            current = id
          }
        }
      }
      return current
    }

    const handleScroll = () => setActiveSection(getActiveSection())

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount to set correct initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Scroll reveal
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, [data-scroll-reveal]')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    return () => revealElements.forEach((el) => revealObserver.unobserve(el))
  }, [])

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
