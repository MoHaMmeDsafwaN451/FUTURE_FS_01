import useReveal from '../hooks/useReveal'
import { education, experience, certificates } from '../data/content'

function TimelineBlock({ heading, entries }) {
  return (
    <div>
      <h3 className="font-mono text-sm text-accent2 uppercase tracking-wide mb-6">{heading}</h3>
      <div className="space-y-8 border-l border-line pl-6">
        {entries.map((e) => (
          <div key={e.title} className="relative">
            <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
            <p className="font-display font-semibold text-ink">{e.title}</p>
            <p className="text-sm text-muted mt-0.5">
              {e.place} &middot; {e.period}
            </p>
            {e.detail && <p className="text-sm text-muted/90 mt-2 leading-relaxed">{e.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="eyebrow mb-3">04 / Experience</p>
        <h2 className="section-title mb-12">Education & experience</h2>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 md:gap-16">
          <TimelineBlock heading="Experience" entries={experience} />
          <TimelineBlock heading="Education" entries={education} />
        </div>

        {certificates?.length > 0 && (
          <div className="mt-16">
            <h3 className="font-mono text-sm text-accent2 uppercase tracking-wide mb-6">
              Certificates
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certificates.map((c) => (
                <div
                  key={c.title}
                  className="border border-line rounded-xl px-5 py-4 bg-surface/40 flex items-center justify-between"
                >
                  <div>
                    <p className="text-ink text-sm font-medium">{c.title}</p>
                    <p className="text-muted text-xs mt-0.5">{c.issuer}</p>
                  </div>
                  {c.year && <span className="font-mono text-xs text-muted">{c.year}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
