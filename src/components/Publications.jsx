import { publications } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Publications() {
  const ref = useScrollReveal()
  return (
    <section id="publications" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label">Research</p>
          <h2 className="font-display text-4xl font-bold text-espresso mb-12">Publications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, i) => <PubCard key={i} pub={pub} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function PubCard({ pub, index }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="animate-on-scroll rounded-2xl p-7 border border-coffee-100/30 bg-cream-100/40 card-hover" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="flex items-center gap-2 mb-5">
        <span className="font-mono text-xs text-espresso/60 bg-cream-200/60 border border-coffee-100/20 px-2.5 py-1 rounded-full uppercase tracking-widest">{pub.venue}</span>
        <span className="font-mono text-xs text-espresso/40">{pub.period}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-espresso leading-snug mb-4">{pub.title}</h3>
      <ul className="space-y-2 mb-5">
        {pub.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-sm text-espresso/70 font-body leading-relaxed">
            <span className="text-coffee-300 mt-0.5 shrink-0">›</span>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {pub.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <a href={pub.href} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-3 font-body text-xs text-coffee-300 hover:text-coffee-400 transition-colors duration-300">
          View ↗
        </a>
      </div>
    </div>
  )
}