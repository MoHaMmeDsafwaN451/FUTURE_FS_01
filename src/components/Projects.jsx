import { ExternalLink, Github } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { projects } from '../data/content'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="eyebrow mb-3">03 / Projects</p>
        <h2 className="section-title mb-12">Selected work</h2>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group border border-line rounded-2xl p-6 md:p-7 bg-surface/40 hover:bg-surface/70 hover:border-accent/40 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                <div className="flex items-center gap-3 shrink-0 pt-1">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="text-muted hover:text-accent2 transition"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="text-muted hover:text-accent2 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted text-sm md:text-[15px] leading-relaxed mt-3 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-xs text-accent2 border border-accent2/30 rounded-full px-2.5 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
