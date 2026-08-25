import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Circuit trace signature — connects the hero to the About section */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.35]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        aria-hidden="true"
      >
        <path
          d="M -50 120 H 300 V 260 H 620 V 120 H 950 V 400 H 1250"
          fill="none"
          stroke="#22303F"
          strokeWidth="2"
        />
        <path
          d="M -50 120 H 300 V 260 H 620 V 120 H 950 V 400 H 1250"
          fill="none"
          stroke="#E3B23C"
          strokeWidth="2"
          strokeDasharray="1000"
          className="animate-trace"
        />
        <circle cx="300" cy="120" r="4" fill="#4FD1C5" />
        <circle cx="620" cy="260" r="4" fill="#4FD1C5" />
        <circle cx="950" cy="120" r="4" fill="#E3B23C" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 w-full">
        <p className="eyebrow mb-5">
          <span className="text-accent">$</span> whoami{' '}
          <span className="animate-blink text-accent2">_</span>
        </p>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-7xl leading-[1.05] max-w-4xl">
          {profile.name}
        </h1>

        <div className="mt-4 h-9 overflow-hidden">
          <p
            key={roleIndex}
            className="font-mono text-lg md:text-2xl text-accent2 animate-rise"
          >
            {profile.roles[roleIndex]}
          </p>
        </div>

        <p className="mt-6 max-w-xl text-muted text-base md:text-lg leading-relaxed">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="bg-accent text-bg font-mono text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-line font-mono text-sm px-6 py-3 rounded-full hover:border-accent2 hover:text-accent2 transition"
          >
            Get in Touch
          </a>

          <div className="flex items-center gap-4 ml-2">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-ink transition"
              >
                <Github size={20} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-ink transition"
              >
                <Linkedin size={20} />
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted hover:text-ink transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute -bottom-6 left-6 md:left-8 hidden sm:flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition"
        >
          <ArrowDown size={14} className="animate-bounce" />
          scroll
        </a>
      </div>
    </section>
  )
}
