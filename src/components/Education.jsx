import { education } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section id="education" className="py-24 bg-cream-100/30">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label">Academic Background</p>
          <h2 className="font-display text-4xl font-bold text-espresso mb-12">Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <EduCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EduCard({ edu, index }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className="animate-on-scroll rounded-2xl p-7 border border-coffee-100/30 bg-cream-50 card-hover"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-coffee-100/30 border border-coffee-100/40 flex items-center justify-center text-2xl shrink-0">
          {edu.logo}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-espresso leading-snug mb-1">
            {edu.degree}
          </h3>
          <p className="font-body text-sm font-semibold text-coffee-400">{edu.school}</p>
          <p className="font-mono text-xs text-espresso/40 mt-0.5">{edu.location}</p>
        </div>
      </div>

      {/* Period + GPA */}
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-xs text-espresso/55 bg-cream-200/60 px-3 py-1 rounded-full border border-coffee-100/20">
          {edu.period}
        </span>
        <span className="font-mono text-xs text-coffee-400 bg-coffee-100/20 px-3 py-1 rounded-full border border-coffee-100/30 font-semibold">
          GPA {edu.gpa}
        </span>
      </div>

      {/* Highlights */}
      <ul className="space-y-2.5">
        {edu.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-sm text-espresso/70 font-body leading-relaxed">
            <span className="text-coffee-300 mt-0.5 shrink-0">›</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}