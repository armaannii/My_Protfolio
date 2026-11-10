// Animated SVG developer workspace illustration — replaces the static hero.png
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Developer workspace illustration"
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#161b22" />
          <stop offset="100%" stopColor="#1c2333" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d1117" />
          <stop offset="100%" stopColor="#161b22" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d9a3" />
          <stop offset="100%" stopColor="#58a6ff" />
        </linearGradient>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#58a6ff" />
          <stop offset="100%" stopColor="#d2a8ff" />
        </linearGradient>
        <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#30363d" />
          <stop offset="100%" stopColor="#21262d" />
        </linearGradient>
        <filter id="glow-green">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-blue">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
        </filter>
        <clipPath id="screenClip">
          <rect x="62" y="55" width="276" height="195" rx="4" />
        </clipPath>
      </defs>

      {/* ── Background circle ── */}
      <circle cx="200" cy="200" r="195" fill="url(#bgGrad)" />
      <circle cx="200" cy="200" r="195" fill="none" stroke="rgba(0,217,163,0.08)" strokeWidth="1" />

      {/* ── Decorative grid lines ── */}
      {[80, 140, 200, 260, 320].map((x) => (
        <line key={`v${x}`} x1={x} y1="20" x2={x} y2="380" stroke="rgba(0,217,163,0.04)" strokeWidth="1" />
      ))}
      {[80, 140, 200, 260, 320].map((y) => (
        <line key={`h${y}`} x1="20" y1={y} x2="380" y2={y} stroke="rgba(0,217,163,0.04)" strokeWidth="1" />
      ))}

      {/* ── Monitor body ── */}
      <rect x="55" y="48" width="290" height="210" rx="10" fill="url(#monitorGrad)" filter="url(#shadow)" />
      {/* Monitor bezel top bar */}
      <rect x="55" y="48" width="290" height="18" rx="10" fill="#21262d" />
      {/* Traffic lights */}
      <circle cx="78" cy="57" r="5" fill="#ff5f57" />
      <circle cx="96" cy="57" r="5" fill="#febc2e" />
      <circle cx="114" cy="57" r="5" fill="#28c840" />
      {/* Tab bar hint */}
      <rect x="130" y="51" width="60" height="12" rx="4" fill="#30363d" />
      <rect x="196" y="51" width="50" height="12" rx="4" fill="rgba(48,54,61,0.4)" />

      {/* ── Screen ── */}
      <rect x="62" y="66" width="276" height="184" rx="4" fill="url(#screenGrad)" clipPath="url(#screenClip)" />

      {/* ── Code editor content ── */}
      {/* Line numbers */}
      {[0,1,2,3,4,5,6,7,8].map((i) => (
        <text key={i} x="76" y={86 + i * 18} fontSize="8" fontFamily="monospace" fill="rgba(139,148,158,0.4)">{i + 1}</text>
      ))}

      {/* Code lines — simulated syntax highlighted */}
      {/* Line 1: import */}
      <text x="92" y="86" fontSize="8" fontFamily="monospace">
        <tspan fill="#d2a8ff">import </tspan>
        <tspan fill="#e6edf3">React </tspan>
        <tspan fill="#d2a8ff">from </tspan>
        <tspan fill="#a5d6ff">'react'</tspan>
      </text>
      {/* Line 2: blank */}
      {/* Line 3: const */}
      <text x="92" y="122" fontSize="8" fontFamily="monospace">
        <tspan fill="#d2a8ff">const </tspan>
        <tspan fill="#79c0ff">Portfolio </tspan>
        <tspan fill="#e6edf3">= () </tspan>
        <tspan fill="#d2a8ff">=&gt;</tspan>
        <tspan fill="#e6edf3"> {'{'}</tspan>
      </text>
      {/* Line 4: return */}
      <text x="92" y="140" fontSize="8" fontFamily="monospace">
        <tspan fill="#ff7b72">  return </tspan>
        <tspan fill="#e6edf3">(</tspan>
      </text>
      {/* Line 5: JSX opening */}
      <text x="92" y="158" fontSize="8" fontFamily="monospace">
        <tspan fill="#e6edf3">    &lt;</tspan>
        <tspan fill="#7ee787">div </tspan>
        <tspan fill="#79c0ff">className</tspan>
        <tspan fill="#e6edf3">=</tspan>
        <tspan fill="#a5d6ff">"hero"</tspan>
        <tspan fill="#e6edf3">&gt;</tspan>
      </text>
      {/* Line 6: content */}
      <text x="92" y="176" fontSize="8" fontFamily="monospace" filter="url(#glow-green)">
        <tspan fill="#00d9a3">      Hello, World! 👋</tspan>
      </text>
      {/* Line 7: closing */}
      <text x="92" y="194" fontSize="8" fontFamily="monospace">
        <tspan fill="#e6edf3">    &lt;/</tspan>
        <tspan fill="#7ee787">div</tspan>
        <tspan fill="#e6edf3">&gt;</tspan>
      </text>
      {/* Line 8 */}
      <text x="92" y="212" fontSize="8" fontFamily="monospace">
        <tspan fill="#e6edf3">  )</tspan>
      </text>
      {/* Line 9 */}
      <text x="92" y="230" fontSize="8" fontFamily="monospace">
        <tspan fill="#e6edf3">{'}'}</tspan>
      </text>

      {/* Blinking cursor */}
      <rect x="92" y="219" width="5" height="10" fill="#00d9a3" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.1s" repeatCount="indefinite" />
      </rect>

      {/* ── Monitor stand ── */}
      <rect x="183" y="258" width="34" height="28" rx="3" fill="#21262d" />
      <rect x="155" y="284" width="90" height="8" rx="4" fill="#30363d" />

      {/* ── Keyboard ── */}
      <rect x="90" y="308" width="220" height="50" rx="8" fill="#21262d" />
      {/* Key rows */}
      {[0,1,2].map((row) =>
        Array.from({ length: 10 - row }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={100 + col * 20 + row * 5}
            y={316 + row * 14}
            width="14"
            height="10"
            rx="2"
            fill="#30363d"
          />
        ))
      )}
      {/* Space bar */}
      <rect x="140" y="344" width="120" height="10" rx="3" fill="#30363d" />

      {/* ── Floating tech badges ── */}
      {/* React badge — top right */}
      <g filter="url(#glow-blue)">
        <rect x="310" y="80" width="64" height="26" rx="8" fill="rgba(97,218,251,0.12)" stroke="rgba(97,218,251,0.4)" strokeWidth="1" />
        <circle cx="323" cy="93" r="6" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="323" cy="93" r="2" fill="#61DAFB" />
        <text x="334" y="97" fontSize="9" fontFamily="monospace" fill="#61DAFB">React</text>
      </g>
      {/* TypeScript badge — left */}
      <g>
        <rect x="12" y="120" width="66" height="26" rx="8" fill="rgba(49,120,198,0.15)" stroke="rgba(49,120,198,0.5)" strokeWidth="1" />
        <rect x="20" y="128" width="14" height="10" rx="2" fill="#3178C6" />
        <text x="21" y="136" fontSize="6.5" fontFamily="monospace" fontWeight="bold" fill="#fff">TS</text>
        <text x="40" y="136" fontSize="9" fontFamily="monospace" fill="#79c0ff">TypeScript</text>
      </g>
      {/* Node.js badge — bottom left */}
      <g>
        <rect x="18" y="300" width="64" height="26" rx="8" fill="rgba(104,160,99,0.15)" stroke="rgba(104,160,99,0.4)" strokeWidth="1" />
        <circle cx="31" cy="313" r="7" fill="#68A063" />
        <text x="32" y="317" fontSize="8" fontFamily="monospace" fill="#fff" textAnchor="middle">N</text>
        <text x="44" y="317" fontSize="9" fontFamily="monospace" fill="#68A063">Node.js</text>
      </g>
      {/* Tailwind badge — right */}
      <g>
        <rect x="316" y="290" width="68" height="26" rx="8" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
        <text x="323" y="307" fontSize="9" fontFamily="monospace" fill="#38BDF8">Tailwind</text>
      </g>

      {/* ── Animated orbiting dot ── */}
      <circle r="4" fill="#00d9a3" filter="url(#glow-green)">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          path="M200,200 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
        />
      </circle>
      <circle r="3" fill="#58a6ff" filter="url(#glow-blue)">
        <animateMotion
          dur="12s"
          repeatCount="indefinite"
          path="M200,200 m-150,0 a150,150 0 1,0 300,0 a150,150 0 1,0 -300,0"
        />
      </circle>

      {/* ── Status bar at bottom of screen ── */}
      <rect x="62" y="236" width="276" height="14" fill="#1f6feb" opacity="0.6" />
      <text x="70" y="246" fontSize="7" fontFamily="monospace" fill="#fff" opacity="0.9">⎇ main  ✓ TypeScript  ESLint: 0 errors</text>
    </svg>
  )
}
