import { projects } from '../data'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  const ref = useScrollReveal()
  return (
    <section id="projects" className="py-24 bg-cream-100/30">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label">Work</p>
          <h2 className="font-display text-4xl font-bold text-espresso mb-12">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const ref = useScrollReveal()
  return (
    <a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-on-scroll group block rounded-2xl p-7 border border-coffee-100/30 bg-cream-50 card-hover"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs text-coffee-400 bg-coffee-100/20 border border-coffee-100/30 px-2.5 py-1 rounded-full">
          {project.metric}
        </span>
        <span className="text-espresso/30 group-hover:text-coffee-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg">↗</span>
      </div>
      <h3 className="font-display text-lg font-bold text-espresso group-hover:text-coffee-400 mb-3 leading-snug transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-body text-sm text-espresso/65 leading-relaxed mb-5">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </a>
  )
}