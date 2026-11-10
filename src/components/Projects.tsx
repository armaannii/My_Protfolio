import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

const accentStyles = {
  '#00d9a3': {
    cardHover: 'hover:shadow-[0_20px_60px_#00d9a325] hover:border-[#00d9a344]',
    tag: 'bg-[#00d9a312] text-[#00d9a3] border-[#00d9a330]',
    demo: 'bg-[#00d9a3]',
    repoHover: 'hover:border-[#00d9a355] hover:text-[#00d9a3]',
  },
  '#58a6ff': {
    cardHover: 'hover:shadow-[0_20px_60px_#58a6ff25] hover:border-[#58a6ff44]',
    tag: 'bg-[#58a6ff12] text-[#58a6ff] border-[#58a6ff30]',
    demo: 'bg-[#58a6ff]',
    repoHover: 'hover:border-[#58a6ff55] hover:text-[#58a6ff]',
  },
  '#d2a8ff': {
    cardHover: 'hover:shadow-[0_20px_60px_#d2a8ff25] hover:border-[#d2a8ff44]',
    tag: 'bg-[#d2a8ff12] text-[#d2a8ff] border-[#d2a8ff30]',
    demo: 'bg-[#d2a8ff]',
    repoHover: 'hover:border-[#d2a8ff55] hover:text-[#d2a8ff]',
  },
  '#ff9d47': {
    cardHover: 'hover:shadow-[0_20px_60px_#ff9d4725] hover:border-[#ff9d4744]',
    tag: 'bg-[#ff9d4712] text-[#ff9d47] border-[#ff9d4730]',
    demo: 'bg-[#ff9d47]',
    repoHover: 'hover:border-[#ff9d4755] hover:text-[#ff9d47]',
  },
} as const

type AccentColor = keyof typeof accentStyles

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  demo: string
  repo: string
  gradientClass: string
  accentColor: AccentColor
  emoji: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'বাজার দর\nদৈনন্দিন পণ্যের বাজারদর জানুন',
    description:
      "বাজার দর (BazarDor) is a web-based market price tracking application that helps users easily explore and monitor the daily prices of essential commodities in Bangladesh. Users can view today's prices, compare price changes, browse products by category, and check market-based price details through a simple and responsive interface.",
    tags: ['Next.js', 'React.js', 'MongoDB', 'Tailwind', 'TypeScript', 'BetterAuth'],
    demo: 'https://bazar-dor-theta-smoky.vercel.app',
    repo: 'https://github.com/armaannii/Bazar-Dor',
    gradientClass: 'bg-[linear-gradient(135deg,#00d9a3_0%,#0099ff_100%)]',
    accentColor: '#00d9a3',
    emoji: '🛒',
  },
  {
    id: 2,
    title: 'SkillPath AI',
    description:
      "SkillPath AI analyzes a student's resume or academic background against their target role and generates a full career readiness plan. It scores their profile, highlights skill gaps with curated free learning resources, produces a semester-by-semester roadmap through graduation, creates a 30-day action sprint, and offers interactive tools like a skill quiz lab, AI mock interview coach, and portfolio blueprint generator — all powered by a free AI backend with no signup needed.",
    tags: ['React', 'next.js', 'Tailwind', 'pdf-parse'],
    demo: 'https://hacktoberfest-murex.vercel.app',
    repo: 'https://github.com/armaannii/HACKTOBERFEST',
    gradientClass: 'bg-[linear-gradient(135deg,#58a6ff_0%,#d2a8ff_100%)]',
    accentColor: '#58a6ff',
    emoji: '🤖 SkillPath AI',
  },
  {
    id: 3,
    title: 'Fit Log',
    description:
      "FitLog is a modern, responsive workout library designed to help users explore exercises, view detailed workout instructions, organize their daily training plans, and save workouts for later. With a clean dark-themed interface and dynamic workout tracking, FitLog makes planning and managing workouts simple and intuitive.",
    tags: ['Next.js', 'React.js', 'TypeScript','Tailwind', 'REST API'],
    demo: 'https://fit-log-dusky-ten.vercel.app',
    repo: 'https://github.com/armaannii/Fit_Log',
    gradientClass: 'bg-[linear-gradient(135deg,#d2a8ff_0%,#ff9d47_100%)]',
    accentColor: '#d2a8ff',
    emoji: '🏋️‍♀️ Fit Log',
  },
  {
    id: 4,
    title: 'Book Vibe',
    description:
      "Book Vibe is a modern book discovery and reading management web application built with Next.js. It allows readers to explore a curated collection of popular books, browse different genres, and view detailed information about their favorite titles. Users can discover books through ratings, authors, and categories, access dedicated book detail pages, and use reading-related features such as Read and Wishlist. With its clean, user-friendly interface and organized book catalog, Book Vibe provides an enjoyable experience for readers to discover and manage their reading journey.",
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    demo: 'https://book-vibe-next-js-psi.vercel.app',
    repo: 'https://github.com/armaannii/Book-Vibe-Next.js-',
    gradientClass: 'bg-[linear-gradient(135deg,#ff9d47_0%,#00d9a3_100%)]',
    accentColor: '#ff9d47',
    emoji: '🗂️ Book Vibe',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentStyles[project.accentColor]
  const animationDelay = [
    '[animation-delay:0ms]',
    '[animation-delay:100ms]',
    '[animation-delay:200ms]',
    '[animation-delay:300ms]',
    '[animation-delay:400ms]',
    '[animation-delay:500ms]',
  ][index]

  return (
    <div
      className={`reveal group glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 ${accent.cardHover} ${animationDelay}`}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 flex items-center justify-center overflow-hidden ${project.gradientClass}`}
      >
        <span className="text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
          {project.emoji}
        </span>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Number */}
        <div
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-[rgba(13,17,23,0.7)] text-[#e6edf3]"
        >
          {String(project.id).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold mb-2 text-[#e6edf3] whitespace-pre-line">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1 text-[#8b949e]">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-md text-xs font-medium border ${accent.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 text-[#0d1117] hover:opacity-[0.85] hover:-translate-y-px ${accent.demo}`}
          >
            <HiOutlineExternalLink className="w-4 h-4" strokeWidth={2.5} />
            Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 bg-[rgba(48,54,61,0.5)] text-[#c9d1d9] border border-[rgba(48,54,61,0.7)] hover:-translate-y-px ${accent.repoHover}`}
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding grid-pattern bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal">
          <p className="text-center text-sm font-semibold uppercase tracking-widest mb-3 text-[#58a6ff]">
            My Work
          </p>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of full-stack applications I've built. Each project reflects real-world challenges and professional-grade engineering.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View More CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="https://github.com/armaannii?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FaGithub className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
