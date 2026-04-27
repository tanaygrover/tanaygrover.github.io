import { useState } from 'react'
import { skillCategories } from '../data'

const ALL = 'all'

const categoryDescriptions = {
  all: 'Click on a category above to focus on specific skill areas. Comprehensive overview of all technical capabilities across different domains.',
  'ml-ai': 'Machine learning and artificial intelligence frameworks for building intelligent systems and data-driven applications.',
  languages: 'Programming languages used across systems engineering, backend services, and data pipelines.',
  'data-search': 'Data processing, vector search, and retrieval infrastructure for building intelligent data pipelines.',
  'backend-cloud': 'Cloud infrastructure, containerization, and distributed systems for production-grade deployment.',
  frontend: 'Frontend frameworks and tools for building modern, responsive user interfaces.',
  tools: 'Developer tooling, observability, and workflow automation across the engineering lifecycle.',
}

// Vibrant palette — one per category
const PALETTE = {
  all:            { stroke: '#8b5e2e', fill: 'rgba(139,94,46,0.13)' },
  'ml-ai':        { stroke: '#e05252', fill: 'rgba(224,82,82,0.13)' },
  languages:      { stroke: '#4f8ef7', fill: 'rgba(79,142,247,0.13)' },
  'data-search':  { stroke: '#22b573', fill: 'rgba(34,181,115,0.13)' },
  'backend-cloud':{ stroke: '#f5a623', fill: 'rgba(245,166,35,0.13)' },
  frontend:       { stroke: '#a259f7', fill: 'rgba(162,89,247,0.13)' },
  tools:          { stroke: '#1ec6c6', fill: 'rgba(30,198,198,0.13)' },
}

// Ring colors per category (subtle tint)
const RING_COLOR = {
  all:            'rgba(139,94,46,0.15)',
  'ml-ai':        'rgba(224,82,82,0.15)',
  languages:      'rgba(79,142,247,0.15)',
  'data-search':  'rgba(34,181,115,0.15)',
  'backend-cloud':'rgba(245,166,35,0.15)',
  frontend:       'rgba(162,89,247,0.15)',
  tools:          'rgba(30,198,198,0.15)',
}

export default function Skills() {
  const [active, setActive] = useState(ALL)

  const tabs = [
    { id: ALL, label: 'All Skills' },
    ...skillCategories.map(c => ({ id: c.id, label: c.label })),
  ]
  const focused = active === ALL ? null : skillCategories.find(c => c.id === active)
  const palette = PALETTE[active] ?? PALETTE.all

  return (
    <section id="skills" className="py-24 bg-cream-100/30">
      <div className="max-w-5xl mx-auto px-6">

        <p className="font-mono text-xs tracking-widest text-coffee-200/70 uppercase mb-3">Toolkit</p>
        <h2 className="font-display text-4xl font-bold text-espresso mb-10">Technical Skills</h2>

        {/* Tab bar */}
        <div className="w-full flex flex-wrap gap-1.5 p-2 rounded-2xl border border-coffee-100/40 bg-cream-50 mb-6">
          {tabs.map(tab => {
            const isActive = active === tab.id
            const p = PALETTE[tab.id] ?? PALETTE.all
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-1 min-w-fit px-4 py-2 rounded-xl font-display text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                  isActive ? 'text-white shadow-md' : 'text-espresso/60 hover:text-espresso hover:bg-coffee-100/20'
                }`}
                style={isActive ? { backgroundColor: p.stroke } : {}}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Description */}
        <p className="font-body text-sm text-espresso/60 text-center mb-4 max-w-2xl mx-auto">
          {categoryDescriptions[active]}
        </p>

        {/* Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-coffee-100/40 bg-cream-50">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: palette.stroke }} />
            <span className="font-mono text-xs text-espresso/60">
              {active === ALL ? 'All Skills' : focused?.label} Skills (1–{active === ALL ? skillCategories.length : focused?.items.length})
            </span>
          </div>
        </div>

        {active === ALL
          ? <AllSkillsRadar />
          : <FocusedRadar category={focused} palette={palette} ringColor={RING_COLOR[active]} />}
      </div>
    </section>
  )
}

function AllSkillsRadar() {
  const W = 620
  const H = 620
  const cx = W / 2
  const cy = H / 2
  const maxR = 175
  const n = skillCategories.length
  const rings = [0.25, 0.5, 0.75, 1]

  function polar(i, r) {
    const a = (2 * Math.PI * i) / n - Math.PI / 2
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  }

  // Each category gets its own color on the "All Skills" view — drawn as separate filled areas
  const labelPositions = skillCategories.map((cat, i) => {
    const p = polar(i, maxR + 54)
    const anchor = Math.abs(p.x - cx) < 10 ? 'middle' : p.x > cx ? 'start' : 'end'
    return { x: p.x, y: p.y, label: cat.label, anchor, color: PALETTE[cat.id].stroke }
  })

  // Combined data shape (overall level per category)
  const dataPoints = skillCategories.map((cat, i) => polar(i, (cat.level / 100) * maxR))
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'

  // Gradient stops for fill (approximate angular gradient via multiple paths)
  const gradId = 'radarGrad'

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[580px]" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5a623" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#e05252" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#4f8ef7" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#22b573" stopOpacity="0.15" />
          </radialGradient>
          <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e05252" />
            <stop offset="33%" stopColor="#f5a623" />
            <stop offset="66%" stopColor="#4f8ef7" />
            <stop offset="100%" stopColor="#22b573" />
          </linearGradient>
        </defs>

        {/* Rings */}
        {rings.map((r, ri) => {
          const pts = skillCategories.map((_, i) => polar(i, maxR * r))
          const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'
          return (
            <path key={ri} d={path}
              fill={ri % 2 === 0 ? 'rgba(139,94,46,0.04)' : 'none'}
              stroke="rgba(139,94,46,0.15)" strokeWidth="1" />
          )
        })}

        {/* Spokes */}
        {skillCategories.map((cat, i) => {
          const outer = polar(i, maxR)
          return (
            <line key={i} x1={cx} y1={cy}
              x2={outer.x.toFixed(1)} y2={outer.y.toFixed(1)}
              stroke={PALETTE[cat.id].stroke} strokeWidth="1.5" strokeOpacity="0.4" />
          )
        })}

        {/* Data fill with gradient */}
        <path d={dataPath} fill={`url(#${gradId})`} stroke="url(#strokeGrad)" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Colored dots per category */}
        {dataPoints.map((p, i) => (
          <circle key={i}
            cx={p.x.toFixed(1)} cy={p.y.toFixed(1)}
            r="6" fill={PALETTE[skillCategories[i].id].stroke} stroke="#fdf8f2" strokeWidth="2" />
        ))}

        {/* Category labels — colored */}
        {labelPositions.map((pos, i) => (
          <text key={i}
            x={pos.x.toFixed(1)} y={pos.y.toFixed(1)}
            textAnchor={pos.anchor}
            dominantBaseline="middle"
            fontSize="13"
            fontFamily="Advercase, Georgia, serif"
            fontWeight="700"
            fill={pos.color}
          >
            {pos.label}
          </text>
        ))}
      </svg>
    </div>
  )
}

function FocusedRadar({ category, palette, ringColor }) {
  if (!category) return null
  const items = category.items
  const W = 660
  const H = 660
  const cx = W / 2
  const cy = H / 2
  const maxR = 185
  const n = items.length
  const rings = [0.25, 0.5, 0.75, 1]
  const gradId = `fg-${category.id}`

  function polar(i, r) {
    const a = (2 * Math.PI * i) / n - Math.PI / 2
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }
  }

  const dataPoints = items.map((item, i) => polar(i, (item.level / 100) * maxR))
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'

  const labelPositions = items.map((item, i) => {
    const p = polar(i, maxR + 50)
    const anchor = Math.abs(p.x - cx) < 10 ? 'middle' : p.x > cx ? 'start' : 'end'
    return { x: p.x, y: p.y, label: item.name, anchor }
  })

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[600px]" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={palette.stroke} stopOpacity="0.45" />
            <stop offset="100%" stopColor={palette.stroke} stopOpacity="0.08" />
          </radialGradient>
        </defs>

        {rings.map((r, ri) => {
          const pts = items.map((_, i) => polar(i, maxR * r))
          const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'
          return (
            <path key={ri} d={path}
              fill={ri % 2 === 0 ? palette.fill : 'none'}
              stroke={ringColor} strokeWidth="1" />
          )
        })}

        {items.map((_, i) => {
          const outer = polar(i, maxR)
          return (
            <line key={i} x1={cx} y1={cy}
              x2={outer.x.toFixed(1)} y2={outer.y.toFixed(1)}
              stroke={palette.stroke} strokeWidth="1.5" strokeOpacity="0.3" />
          )
        })}

        <path d={dataPath}
          fill={`url(#${gradId})`}
          stroke={palette.stroke}
          strokeWidth="2.5"
          strokeLinejoin="round" />

        {dataPoints.map((p, i) => (
          <circle key={i}
            cx={p.x.toFixed(1)} cy={p.y.toFixed(1)}
            r="5.5" fill={palette.stroke} stroke="#fdf8f2" strokeWidth="2" />
        ))}

        {labelPositions.map((pos, i) => (
          <text key={i}
            x={pos.x.toFixed(1)} y={pos.y.toFixed(1)}
            textAnchor={pos.anchor}
            dominantBaseline="middle"
            fontSize="12"
            fontFamily="Advercase, Georgia, serif"
            fontWeight="600"
            fill="rgba(30,15,5,0.72)"
          >
            {pos.label}
          </text>
        ))}
      </svg>
    </div>
  )
}