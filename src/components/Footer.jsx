import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <p>AI &amp; Data Science student · Tirur, India</p>
      </div>
    </footer>
  )
}
