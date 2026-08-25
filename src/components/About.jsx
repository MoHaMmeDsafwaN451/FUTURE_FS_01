import useReveal from '../hooks/useReveal'
import { profile, stats } from '../data/content'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="eyebrow mb-3">01 / About</p>
        <div ref={ref} className="reveal grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16">
          <div>
            <h2 className="section-title mb-6">
              I connect the model to the interface,
              <br className="hidden md:block" /> and the interface to the user.
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed whitespace-pre-line">
              {profile.about}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 content-start">
            {stats.map((s) => (
              <div key={s.label} className="border border-line rounded-2xl p-6 bg-surface/50">
                <p className="font-display text-3xl font-semibold text-accent">{s.value}</p>
                <p className="font-mono text-xs text-muted mt-1 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
