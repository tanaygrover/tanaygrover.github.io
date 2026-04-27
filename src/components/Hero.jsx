export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream-50">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100/60 via-cream-50 to-cream-200/30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-coffee-100/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-coffee-200/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1">
            {/* NAME */}
            <h1
              className="font-display font-bold leading-none tracking-tight text-espresso mb-4"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 5.5rem)' }}
            >
              Tanay<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #b8864a 0%, #8b5e2e 55%, #4a2810 100%)' }}
              >
                Grover
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-display text-xl font-bold text-espresso/80 leading-snug mb-6 max-w-md">
              "I break ML models, fix them — and sometimes they thank me with{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #b8864a, #8b5e2e)' }}
              >
                94% accuracy.
              </span>"
            </p>

            {/* Description */}
            <div className="mb-8 max-w-lg space-y-1.5">
              <p className="font-body text-base text-espresso/80 leading-relaxed">
                AI Engineer with <span className="text-espresso font-semibold">2+ years of experience</span> building scalable ML systems.
              </p>
              <p className="font-body text-base text-espresso/80 leading-relaxed">
                M.S. in Artificial Intelligence,{' '}
                <span className="text-espresso font-semibold">Northeastern University</span> (May 2026).
              </p>
              <p className="font-body text-base text-espresso/75 leading-relaxed pt-1">
                Built and deployed LLM automation platforms, engineered multi-agent RAG systems, and developed multimodal diffusion and CNN-based learning pipelines — all production-focused and infrastructure-aware.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/tanaygrover/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-coffee-200/50 hover:border-coffee-300/70 text-espresso/70 hover:text-espresso font-body text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1eM98q0srcuu9bfuTV-nYBSTp80uKbGt5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-coffee-200/30 hover:border-coffee-200/60 text-coffee-300 hover:text-coffee-400 font-body text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Resume ↗
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-coffee-100/30 rotate-3" />
              <div className="absolute -inset-8 rounded-2xl border border-coffee-100/15 -rotate-1" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-coffee-100/30 shadow-xl shadow-coffee-300/10">
                <img
                  src="assets/grad.jpeg"
                  alt="Tanay Grover"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream-50/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-xl bg-cream-100 border border-coffee-100/30 shadow-lg">
                <div className="font-display text-sm font-bold text-espresso">Tanay Grover</div>
                <div className="font-mono text-xs text-coffee-400 mt-0.5">AI Engineer · NEU M.S. AI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact strip — brand-colored icons */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-coffee-100/30 bg-cream-100/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <ContactItem href="mailto:tanay2312@gmail.com" label="tanay2312@gmail.com">
            <GmailIcon />
          </ContactItem>
          <ContactItem href="https://github.com/tanaygrover" label="github.com/tanaygrover" external>
            <GitHubIcon />
          </ContactItem>
          <ContactItem href="https://www.linkedin.com/in/tanaygrover/" label="linkedin.com/in/tanaygrover" external>
            <LinkedInIcon />
          </ContactItem>
          <ContactItem href="https://tanaygrover.github.io" label="tanaygrover.github.io" external>
            <WebIcon />
          </ContactItem>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ href, label, external, children }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1.5 text-espresso/65 hover:text-espresso transition-colors duration-200 group"
    >
      <span className="transition-transform duration-200 group-hover:scale-110">{children}</span>
      <span className="font-mono text-xs">{label}</span>
    </a>
  )
}

function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Brand-colored icons */
function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73l-6.545 4.91-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" fill="#FBBC05"/>
      <path d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548 3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#34A853"/>
      <path d="M24 5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" fill="#4285F4"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 98 96" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" fill="#24292f"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 72 72" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8z" fill="#0A66C2"/>
      <path d="M62 62H51.316V43.8c0-4.322-.081-9.887-6.021-9.887-6.03 0-6.952 4.709-6.952 9.573V62H27.665V27h10.245v4.612h.144c1.426-2.703 4.913-5.553 10.116-5.553C59.204 26.059 62 33.213 62 42.39V62zM16.17 22.388a5.983 5.983 0 1 1 0-11.966 5.983 5.983 0 0 1 0 11.966zM21.555 62H10.792V27h10.763v35z" fill="white"/>
    </svg>
  )
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#8b5e2e" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}