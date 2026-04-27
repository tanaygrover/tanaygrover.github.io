import { useState, useEffect } from 'react'
import { nav } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-xl border-b border-coffee-100/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight text-espresso hover:text-coffee-300 transition-colors duration-300"
        >
          Tanay Grover
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm text-espresso/70 hover:text-espresso transition-colors duration-300 tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1eM98q0srcuu9bfuTV-nYBSTp80uKbGt5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm px-4 py-1.5 rounded-full border border-coffee-300/50 text-coffee-300 hover:bg-coffee-100/20 transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <SocialLink href="https://github.com/tanaygrover" label="GitHub"><GitHubIcon /></SocialLink>
          <SocialLink href="https://www.linkedin.com/in/tanaygrover/" label="LinkedIn"><LinkedInIcon /></SocialLink>
          <ContactButton />
        </div>

        <button
          className="md:hidden text-espresso/70 hover:text-espresso transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream-50/95 backdrop-blur-xl border-b border-coffee-100/30 px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-espresso/70 hover:text-espresso transition-colors font-body text-base"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <SocialLink href="https://github.com/tanaygrover" label="GitHub"><GitHubIcon /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/tanaygrover/" label="LinkedIn"><LinkedInIcon /></SocialLink>
            <ContactButton />
          </div>
        </div>
      )}
    </header>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full text-espresso/50 hover:text-coffee-300 hover:bg-coffee-100/20 transition-all duration-300"
    >
      {children}
    </a>
  )
}

function ContactButton() {
  return (
    <a
      href="mailto:tanay2312@gmail.com"
      aria-label="Email"
      className="w-8 h-8 flex items-center justify-center rounded-full text-espresso/50 hover:text-coffee-300 hover:bg-coffee-100/20 transition-all duration-300"
    >
      <EmailIcon />
    </a>
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

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}