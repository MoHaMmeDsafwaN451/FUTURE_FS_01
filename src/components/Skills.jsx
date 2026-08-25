import useReveal from '../hooks/useReveal'
import { skills } from '../data/content'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="eyebrow mb-3">02 / Skills</p>
        <h2 className="section-title mb-12">What I build with</h2>

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="border border-line rounded-2xl p-6 bg-surface/40 hover:border-accent2/50 transition-colors"
            >
              <h3 className="font-mono text-sm text-accent2 uppercase tracking-wide mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink/90 bg-surface2 border border-line rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
