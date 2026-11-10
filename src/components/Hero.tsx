import { useEffect, useState } from 'react'
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineCubeTransparent, HiOutlineDocumentDownload } from 'react-icons/hi'
import HeroIllustration from './HeroIllustration'

const roles = [
  'Full-Stack Developer',
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/armaannii',
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/armanhosen92',
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  // {
  //   label: 'Facebook',
  //   href: 'https://facebook.com/yourusername',
  //   icon: <FaFacebookF className="w-5 h-5" />,
  // },
  {
    label: 'Email',
    href: '#message',
    icon: <FaEnvelope className="w-5 h-5" />,
  },
  
]

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex((i) => i + 1)
      }, 70)
      return () => clearTimeout(t)
    } else if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    } else if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex((i) => i - 1)
      }, 40)
      return () => clearTimeout(t)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text-green-blue">{displayed}</span>
      <span className="typing-cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-pattern"
    >
      {/* Decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="orb-1 absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#00d9a3_0%,transparent_70%)] opacity-10"
        />
        <div
          className="orb-2 absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#58a6ff_0%,transparent_70%)] opacity-10"
        />
        {/* background circle */}
        {/* <div
          className="orb-3 absolute top-[40%] left-[40%] w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,#d2a8ff_0%,transparent_70%)] opacity-5"
        /> */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div
              className="animate-fade-in-up delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[rgba(0,217,163,0.1)] border border-[rgba(0,217,163,0.3)] text-[#00d9a3]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00d9a3] animate-[pulse-glow_2s_ease-in-out_infinite]" />
              Available for work
            </div>

            {/* Name */}
            <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text glow-green-text">Arman</span>
            </h1>

            {/* Dynamic role */}
            <div className="animate-fade-in-up delay-300 text-2xl sm:text-3xl font-bold mb-5 min-h-[2.5rem]">
              <TypingEffect />
            </div>

            {/* Description */}
            <p
              className="animate-fade-in-up delay-400 text-lg leading-relaxed mb-8 max-w-lg text-[#8b949e]"
            >
              I craft modern, scalable, and user-friendly web applications with a passion for clean code, pixel-perfect design, and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4 mb-10">
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
                }}
              >
                <HiOutlineCubeTransparent className="w-4 h-4" strokeWidth={2.5} />
                View My Projects
              </button>
              <a href="/resume.pdf" download className="btn-secondary">
                <HiOutlineDocumentDownload className="w-4 h-4" strokeWidth={2.5} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up delay-600 flex items-center gap-3">
              <span className="text-sm font-medium text-[#00d9a3]">Find me on</span>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === 'Email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2.5 rounded-lg transition-all duration-200 group text-[#8b949e] bg-[rgba(28,35,51,0.6)] border border-[rgba(48,54,61,0.5)] hover:text-[#00d9a3] hover:border-[rgba(0,217,163,0.5)] hover:bg-[rgba(0,217,163,0.08)] hover:-translate-y-0.5"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="animate-fade-in delay-400 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Spinning gradient ring */}
              {/* <div
                className="absolute -inset-3 rounded-[20px] bg-[conic-gradient(from_0deg,#00d9a3,#58a6ff,#d2a8ff,#00d9a3)] p-[2px] animate-[spin-slow_10s_linear_infinite] blur-[6px] opacity-30"
                aria-hidden="true"
              /> */}
              {/* Glow behind */}
              <div
                className="absolute -inset-6 rounded-2xl bg-[radial-gradient(circle,#00d9a3_0%,#58a6ff_100%)] opacity-15 blur-3xl"
                aria-hidden="true"
              />
              {/* Illustration card */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border-[1.5px] border-[rgba(0,217,163,0.25)] shadow-[0_0_40px_rgba(0,217,163,0.15),0_0_80px_rgba(88,166,255,0.08)] bg-[#0d1117]"
              >
                <HeroIllustration />
              </div>

              {/* Floating badge: Experience */}
              {/* <div
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[rgba(13,17,23,0.95)] border border-[rgba(0,217,163,0.4)] shadow-[0_8px_32px_rgba(0,217,163,0.15)] text-[#e6edf3]"
              >
                <span className="gradient-text font-black text-xl">3+</span> Years Exp.
              </div> */}

              {/* Floating badge: Projects */}
              {/* <div
                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[rgba(13,17,23,0.95)] border border-[rgba(88,166,255,0.4)] shadow-[0_8px_32px_rgba(88,166,255,0.15)] text-[#e6edf3]"
              >
                <span className="font-black text-xl text-[#58a6ff]">20+</span> Projects
              </div> */}
              
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-800 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-[#8b949e]">Scroll to explore</span>
          <div
            className="w-5 h-8 rounded-full border border-[#30363d] flex items-start justify-center pt-1.5"
          >
            <div
              className="w-1 h-2 rounded-full bg-[#00d9a3] animate-[float-slow_1.5s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
