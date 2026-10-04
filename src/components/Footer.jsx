import { socials } from '../data/profile'
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute">
        <div><p className="font-display font-semibold text-fg">Mohammed Aseel M</p><p>Full Stack Developer · © 2026 Mohammed Aseel M · Built with React.</p></div>
        <div className="flex gap-5"><a className="hover:text-fg" href={socials.github} target="_blank" rel="noreferrer">GitHub</a>{socials.linkedin && <a className="hover:text-fg" href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}{socials.email && <a className="hover:text-fg" href={`mailto:${socials.email}`}>Email</a>}</div>
      </div>
    </footer>
  )
}
