import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/armaannii',
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/armanhosen92',
    icon: <FaLinkedin className="w-4 h-4" />,
  },
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    icon: <HiOutlineMail className="w-4 h-4" />,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(48,54,61,0.5)] bg-[var(--bg-primary)] px-6 py-10">
      {/* Subtle glow */}
      <div
        className="absolute left-1/2 top-0 h-px w-96 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,217,163,0.5),transparent)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <div className="text-lg font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#00d9a3] to-[#58a6ff] bg-clip-text text-transparent">&lt;Arman /&gt;</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-lg border border-[rgba(48,54,61,0.5)] bg-[rgba(28,35,51,0.6)] p-2.5 text-[#8b949e] transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,217,163,0.4)] hover:text-[#00d9a3]"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#8b949e]">
            © {year}{' '}
            <span className="font-semibold text-[#c9d1d9]">Arman</span>
            {' · '}Built with{' '}
            <span className="text-[#00d9a3]">React</span> &{' '}
            <span className="text-[#38bdf8]">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
