import type { ReactNode } from 'react'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
  SiCplusplus,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'
import { GrTechnology } from 'react-icons/gr'

interface Skill {
  name: string
  colorClass: string
  hoverClass: string
  icon: ReactNode
}

interface SkillCategory {
  title: string
  categoryIcon: ReactNode
  iconClass: string
  hoverClass: string
  skills: Skill[]
}

const IC = 22 // icon size px

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    categoryIcon: <SiReact size={18} />,
    iconClass: 'border border-[#58a6ff33] bg-[#58a6ff18] text-[#58a6ff]',
    hoverClass: 'hover:border-[#58a6ff44] hover:shadow-[0_8px_40px_#58a6ff18]',
    skills: [
      { name: 'HTML5', colorClass: 'text-[#E34F26]', hoverClass: 'hover:border-[#E34F26] hover:bg-[color-mix(in_srgb,#E34F26_8%,transparent)] hover:text-[#E34F26] hover:shadow-[0_4px_20px_#E34F2622]', icon: <SiHtml5 size={IC} /> },
      { name: 'CSS3', colorClass: 'text-[#1572B6]', hoverClass: 'hover:border-[#1572B6] hover:bg-[color-mix(in_srgb,#1572B6_8%,transparent)] hover:text-[#1572B6] hover:shadow-[0_4px_20px_#1572B622]', icon: <SiCss size={IC} /> },
      { name: 'JavaScript', colorClass: 'text-[#F7DF1E]', hoverClass: 'hover:border-[#F7DF1E] hover:bg-[color-mix(in_srgb,#F7DF1E_8%,transparent)] hover:text-[#F7DF1E] hover:shadow-[0_4px_20px_#F7DF1E22]', icon: <SiJavascript size={IC} /> },
      { name: 'TypeScript', colorClass: 'text-[#3178C6]', hoverClass: 'hover:border-[#3178C6] hover:bg-[color-mix(in_srgb,#3178C6_8%,transparent)] hover:text-[#3178C6] hover:shadow-[0_4px_20px_#3178C622]', icon: <SiTypescript size={IC} /> },
      { name: 'React.js', colorClass: 'text-[#61DAFB]', hoverClass: 'hover:border-[#61DAFB] hover:bg-[color-mix(in_srgb,#61DAFB_8%,transparent)] hover:text-[#61DAFB] hover:shadow-[0_4px_20px_#61DAFB22]', icon: <SiReact size={IC} /> },
      { name: 'Next.js', colorClass: 'text-white', hoverClass: 'hover:border-white hover:bg-[color-mix(in_srgb,white_8%,transparent)] hover:text-white hover:shadow-[0_4px_20px_#ffffff22]', icon: <SiNextdotjs size={IC} /> },
      { name: 'Tailwind CSS', colorClass: 'text-[#38BDF8]', hoverClass: 'hover:border-[#38BDF8] hover:bg-[color-mix(in_srgb,#38BDF8_8%,transparent)] hover:text-[#38BDF8] hover:shadow-[0_4px_20px_#38BDF822]', icon: <SiTailwindcss size={IC} /> },
    ],
  },
  {
    title: 'Backend Development',
    categoryIcon: <SiNodedotjs size={18} />,
    iconClass: 'border border-[#00d9a333] bg-[#00d9a318] text-[#00d9a3]',
    hoverClass: 'hover:border-[#00d9a344] hover:shadow-[0_8px_40px_#00d9a318]',
    skills: [
      { name: 'Node.js', colorClass: 'text-[#68A063]', hoverClass: 'hover:border-[#68A063] hover:bg-[color-mix(in_srgb,#68A063_8%,transparent)] hover:text-[#68A063] hover:shadow-[0_4px_20px_#68A06322]', icon: <SiNodedotjs size={IC} /> },
      { name: 'Express.js', colorClass: 'text-white', hoverClass: 'hover:border-white hover:bg-[color-mix(in_srgb,white_8%,transparent)] hover:text-white hover:shadow-[0_4px_20px_#ffffff22]', icon: <SiExpress size={IC} /> },
      { name: 'REST API', colorClass: 'text-[#FF6B35]', hoverClass: 'hover:border-[#FF6B35] hover:bg-[color-mix(in_srgb,#FF6B35_8%,transparent)] hover:text-[#FF6B35] hover:shadow-[0_4px_20px_#FF6B3522]', icon: <TbApi size={IC} /> },
      { name: 'JWT / Auth', colorClass: 'text-[#D63AFF]', hoverClass: 'hover:border-[#D63AFF] hover:bg-[color-mix(in_srgb,#D63AFF_8%,transparent)] hover:text-[#D63AFF] hover:shadow-[0_4px_20px_#D63AFF22]', icon: <SiJsonwebtokens size={IC} /> },
    ],
  },
  {
    title: 'Database',
    categoryIcon: <SiMongodb size={18} />,
    iconClass: 'border border-[#d2a8ff33] bg-[#d2a8ff18] text-[#d2a8ff]',
    hoverClass: 'hover:border-[#d2a8ff44] hover:shadow-[0_8px_40px_#d2a8ff18]',
    skills: [
      { name: 'MongoDB', colorClass: 'text-[#47A248]', hoverClass: 'hover:border-[#47A248] hover:bg-[color-mix(in_srgb,#47A248_8%,transparent)] hover:text-[#47A248] hover:shadow-[0_4px_20px_#47A24822]', icon: <SiMongodb size={IC} /> },
    ],
  },
  {
    title: 'Tools & Technologies',
    categoryIcon: <SiGit size={18} />,
    iconClass: 'border border-[#ff9d4733] bg-[#ff9d4718] text-[#ff9d47]',
    hoverClass: 'hover:border-[#ff9d4744] hover:shadow-[0_8px_40px_#ff9d4718]',
    skills: [
      { name: 'Git', colorClass: 'text-[#F05032]', hoverClass: 'hover:border-[#F05032] hover:bg-[color-mix(in_srgb,#F05032_8%,transparent)] hover:text-[#F05032] hover:shadow-[0_4px_20px_#F0503222]', icon: <SiGit size={IC} /> },
      { name: 'GitHub', colorClass: 'text-white', hoverClass: 'hover:border-white hover:bg-[color-mix(in_srgb,white_8%,transparent)] hover:text-white hover:shadow-[0_4px_20px_#ffffff22]', icon: <SiGithub size={IC} /> },
      { name: 'VS Code', colorClass: 'text-[#007ACC]', hoverClass: 'hover:border-[#007ACC] hover:bg-[color-mix(in_srgb,#007ACC_8%,transparent)] hover:text-[#007ACC] hover:shadow-[0_4px_20px_#007ACC22]', icon: <VscVscode size={IC} /> },
      { name: 'Postman', colorClass: 'text-[#FF6C37]', hoverClass: 'hover:border-[#FF6C37] hover:bg-[color-mix(in_srgb,#FF6C37_8%,transparent)] hover:text-[#FF6C37] hover:shadow-[0_4px_20px_#FF6C3722]', icon: <SiPostman size={IC} /> },
    ],
  },
  {
    title: 'Others',
    categoryIcon: <GrTechnology size={18} />,
    iconClass: 'border border-[#ff9d4733] bg-[#ff9d4718] text-[#ff9d47]',
    hoverClass: 'hover:border-[#ff9d4744] hover:shadow-[0_8px_40px_#ff9d4718]',
    skills: [
      { name: 'C++', colorClass: 'text-[#4169E1]', hoverClass: 'hover:border-[#4169E1] hover:bg-[color-mix(in_srgb,#4169E1_8%,transparent)] hover:text-[#4169E1] hover:shadow-[0_4px_20px_#4169E122]', icon: <SiCplusplus size={IC} /> },
    ],
  },
]

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <div
      className={`flex cursor-default items-center gap-2.5 rounded-lg border border-[rgba(48,54,61,0.6)] bg-[rgba(28,35,51,0.6)] px-3.5 py-2.5 text-sm font-medium text-[#c9d1d9]
      transition-all duration-200 ease-in-out hover:-translate-y-0.5 ${skill.hoverClass}`}
    >
      <span className={`flex items-center ${skill.colorClass}`}>
        {skill.icon}
      </span>
      <span>{skill.name}</span>
    </div>
  )
}

function CategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div
      className={`reveal glass-card rounded-2xl p-6 transition-all duration-300 ${category.hoverClass}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.iconClass}`}>
          {category.categoryIcon}
        </div>
        <h3 className="text-lg font-bold text-[#e6edf3]">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding dot-pattern bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#00d9a3]">
            What I Work With
          </p>
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build modern, scalable, and performant web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <CategoryCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
