import { useState, useEffect } from 'react'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

interface NavbarProps {
  activeSection: string
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(13, 17, 23, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(48, 54, 61, 0.5)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-xl font-extrabold tracking-tight transition-opacity hover:opacity-80 focus:outline-none"
          aria-label="Go to top"
        >
          <span className="gradient-text">&lt;Arman/&gt;</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none group cursor-pointer hover:text-[#00d9a3]
                ${activeSection === link.id
                      ? "text-[#00d9a3] bg-[rgba(0,217,163,0.08)]"
                      : "text-[#8b949e] bg-transparent"
                  }`}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: '#00d9a3',
                    width: activeSection === link.id ? '60%' : '0%',
                  }}
                />
              </button>
            </li>
          ))}
          <li className="ml-3">
            <a
              href="/resume.pdf"
              download
              className="btn-primary text-sm py-2 px-5"
              aria-label="Download Resume"
            >
              <HiOutlineDocumentDownload className="w-4 h-4" strokeWidth={2.5} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none"
          style={{ color: '#8b949e' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-current transition-all duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(13, 17, 23, 0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: menuOpen ? '1px solid rgba(48, 54, 61, 0.5)' : 'none',
        }}
      >
        <ul className="px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium 
                transition-all duration-200 focus:outline-none cursor-pointer
                hover:text-[#00d9a3]
                ${activeSection === link.id
                      ? "text-[#00d9a3] bg-[rgba(0,217,163,0.08)]"
                      : "text-[#8b949e] bg-transparent"
                  }`
                }
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/resume.pdf"
              download
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <HiOutlineDocumentDownload className="w-4 h-4" strokeWidth={2.5} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
