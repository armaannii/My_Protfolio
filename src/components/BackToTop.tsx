import { useEffect, useState } from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        background: 'linear-gradient(135deg, #00d9a3, #00b589)',
        boxShadow: '0 4px 20px rgba(0, 217, 163, 0.4)',
        color: '#0d1117',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0, 217, 163, 0.5)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = visible ? 'translateY(0)' : 'translateY(16px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0, 217, 163, 0.4)'
      }}
    >
      <HiOutlineChevronUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  )
}
