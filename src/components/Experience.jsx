import { experience } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useScrollReveal()
  return (
    <section id="experience" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label">Career</p>
          <h2 className="font-display text-4xl font-bold text-espresso mb-12">Experience</h2>
        </div>
        <div className="relative">
          <div className="absolute top-0 bottom-0 bg-gradient-to-b from-coffee-200/40 via-coffee-100/20 to-transparent hidden md:block" style={{ left: '11px', width: '1px' }} />
          <div className="space-y-10">
            {experience.map((job, i) => <ExperienceCard key={i} job={job} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ job, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="animate-on-scroll md:pl-10 relative" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="absolute top-6 hidden md:flex items-center justify-center" style={{ left: '3px', width: '20px', height: '20px' }}>
        <div className="w-5 h-5 rounded-full border-2 border-coffee-200/60 bg-cream-50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-coffee-300" />
        </div>
      </div>
      <div className="card-hover rounded-2xl p-7 border border-coffee-100/30 bg-cream-100/40">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h3 className="font-display text-xl font-bold text-espresso mb-1">{job.role}</h3>
            <p className="font-body text-sm text-coffee-400 font-semibold">{job.company}</p>
            {job.sub && <p className="font-mono text-xs text-espresso/50 mt-1 uppercase tracking-wider">{job.sub}</p>}
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <span className="font-mono text-xs text-espresso/60 bg-cream-200/60 px-3 py-1 rounded-full border border-coffee-100/20">{job.period}</span>
            <span className="font-mono text-xs text-espresso/40">{job.location}</span>
          </div>
        </div>
        <ul className="space-y-2.5 mb-5">
          {job.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-espresso/75 font-body leading-relaxed">
              <span className="text-coffee-300 mt-0.5 shrink-0">›</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}