export default function Footer() {
  return (
    <footer id="contact" className="border-t border-coffee-100/30 py-12 mt-4 bg-cream-100/50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Contact info row — prominent */}
        <div className="mb-8 pb-8 border-b border-coffee-100/30">
          <p className="section-label mb-4">Contact</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <FooterContact href="mailto:tanay2312@gmail.com" icon={<EmailIcon />} label="tanay2312@gmail.com" />
            <FooterContact href="https://github.com/tanaygrover" icon={<GitHubIcon />} label="github.com/tanaygrover" external />
            <FooterContact href="https://www.linkedin.com/in/tanaygrover/" icon={<LinkedInIcon />} label="linkedin.com/in/tanaygrover" external />
            <FooterContact href="https://tanaygrover.github.io" icon={<WebIcon />} label="tanaygrover.github.io" external />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-bold text-espresso mb-1">Tanay Grover</div>
            <div className="font-mono text-xs text-espresso/60">AI Engineer · ML Systems · SWE</div>
          </div>
          <div className="flex items-center gap-3">
            <IconLink href="https://github.com/tanaygrover" label="GitHub"><GitHubIcon /></IconLink>
            <IconLink href="https://www.linkedin.com/in/tanaygrover/" label="LinkedIn"><LinkedInIcon /></IconLink>
            <IconLink href="mailto:tanay2312@gmail.com" label="Email"><EmailIcon /></IconLink>
            <a
              href="https://drive.google.com/file/d/1eM98q0srcuu9bfuTV-nYBSTp80uKbGt5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-coffee-300/50 text-coffee-400 hover:bg-coffee-100/20 transition-all duration-300"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-coffee-100/20 text-center">
          <p className="font-mono text-xs text-espresso/35">
            © {new Date().getFullYear()} Tanay Grover. Built with React + Vite + Tailwind.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterContact({ href, icon, label, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 text-espresso/75 hover:text-coffee-400 transition-colors duration-200 group"
    >
      <span className="text-coffee-300 group-hover:text-coffee-400">{icon}</span>
      <span className="font-mono text-sm">{label}</span>
    </a>
  )
}

function IconLink({ href, label, children }) {
  const isEmail = href.startsWith('mailto')
  return (
    <a
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-coffee-100/40 text-espresso/50 hover:text-coffee-300 hover:border-coffee-200/50 transition-all duration-300"
    >
      {children}
    </a>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73l-6.545 4.91-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" fill="#FBBC05"/>
      <path d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548 3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#34A853"/>
      <path d="M24 5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" fill="#4285F4"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
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
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}