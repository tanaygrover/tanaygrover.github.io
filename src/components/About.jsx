import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()
  return (
    <section id="about" className="py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label">Background</p>
          <h2 className="font-display text-4xl font-bold text-espresso mb-12">About Me</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-5">

            {/* Identity chips */}
            <div className="flex flex-wrap gap-2 mb-2">
              {['AI Engineer', 'ML Systems', 'LLM Pipelines', 'Full-Stack AI', 'SWE'].map((label) => (
                <span key={label} className="font-mono text-xs px-3 py-1.5 rounded-full bg-coffee-100/25 border border-coffee-200/40 text-coffee-400 font-semibold">
                  {label}
                </span>
              ))}
            </div>

            <p className="font-body text-base text-espresso/80 leading-relaxed">
              I'm an{' '}
              <span className="text-espresso font-semibold">AI Engineer</span>{' '}
              with hands-on experience shipping production-grade ML systems — not just studying them.
              I build end-to-end pipelines in Python and C++, from data ingestion through model inference
              to deployed, monitored services. My M.S. in AI (Northeastern, May 2026, GPA 3.62) deepens
              the theory behind what I build.
            </p>
            <p className="font-body text-base text-espresso/80 leading-relaxed">
              My work spans LLM pipelines with RAG and agentic workflows, multimodal vision-language systems,
              and MLOps — Docker, Kubernetes, CI/CD on AWS and GCP. I've shipped systems achieving 90%
              efficiency gains, 99.2% uptime, and 94%+ model accuracy in production.
            </p>
            <p className="font-body text-base text-espresso/80 leading-relaxed">
              I'm actively seeking{' '}
              <span className="text-coffee-400 font-semibold">AI/ML Engineering</span>{' '}
              and{' '}
              <span className="text-coffee-400 font-semibold">Software Engineering</span>{' '}
              roles where I can build scalable, intelligent systems at the intersection of applied AI
              and robust software architecture.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1eM98q0srcuu9bfuTV-nYBSTp80uKbGt5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-coffee-300 hover:bg-coffee-400 text-cream-50 font-display font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Download Resume ↗
              </a>
              <a
                href="mailto:tanay2312@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-coffee-200/50 hover:border-coffee-300/70 text-espresso/70 hover:text-espresso font-body text-sm transition-all duration-300"
              >
                Say Hello →
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-coffee-100/20 rotate-2" />
              <div className="w-64 h-72 rounded-2xl overflow-hidden border border-coffee-100/30 shadow-lg">
                <img
                  src="assets/hero-photo.jpg"
                  alt="Tanay Grover"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl bg-cream-100 border border-coffee-100/30 shadow-md">
                <div className="font-mono text-xs text-coffee-400 font-semibold">Boston, MA</div>
                <div className="font-mono text-xs text-espresso/50 mt-0.5">Open to relocation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}