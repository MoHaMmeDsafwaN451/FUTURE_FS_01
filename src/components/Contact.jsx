import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { contactFormEndpoint, profile } from '../data/content'

const initialState = { name: '', email: '', message: '' }

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const configured = Boolean(contactFormEndpoint)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!configured) return

    setStatus('sending')
    try {
      const res = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="eyebrow mb-3">05 / Contact</p>
        <h2 className="section-title mb-4">Let's build something</h2>
        <p className="text-muted max-w-lg mb-12">
          Open to internships, full-stack roles and collaborative projects. The fastest way to
          reach me is the form below, or email directly.
        </p>

        <div ref={ref} className="reveal grid md:grid-cols-[1fr_1.3fr] gap-12">
          <div className="space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-ink hover:text-accent transition"
            >
              <Mail size={18} className="text-accent2" />
              {profile.email}
            </a>
            {profile.phone && (
              <p className="flex items-center gap-3 text-ink">
                <Phone size={18} className="text-accent2" />
                {profile.phone}
              </p>
            )}
            <p className="flex items-center gap-3 text-ink">
              <MapPin size={18} className="text-accent2" />
              {profile.location}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!configured && (
              <p className="font-mono text-xs text-accent border border-accent/30 rounded-lg px-4 py-3 bg-accent/5">
                Form isn't wired up yet — add a Formspree endpoint to{' '}
                <code>contactFormEndpoint</code> in src/data/content.js.
              </p>
            )}

            <div>
              <label htmlFor="name" className="font-mono text-xs text-muted uppercase tracking-wide">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full bg-surface2 border border-line rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent2 outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-mono text-xs text-muted uppercase tracking-wide">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full bg-surface2 border border-line rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent2 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs text-muted uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full bg-surface2 border border-line rounded-lg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-accent2 outline-none transition resize-none"
                placeholder="What are you building?"
              />
            </div>

            <button
              type="submit"
              disabled={!configured || status === 'sending'}
              className="bg-accent text-bg font-mono text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <p className="font-mono text-xs text-accent2">Message sent — thank you!</p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-red-400">
                Something went wrong. Try emailing directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
