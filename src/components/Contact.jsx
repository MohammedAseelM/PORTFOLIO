import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Section from './Section'
import { socials } from '../data/profile'
const field = 'mt-1 w-full rounded-md border border-line bg-card px-3 py-2 outline-none focus:border-accent'
export default function Contact() {
  const [note, setNote] = useState('')
  const send = e => {
    e.preventDefault()
    const f = new FormData(e.target)
    if (!socials.email) return setNote('Email delivery is not configured yet. Set VITE_CONTACT_EMAIL to enable this form.')
    window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent('Portfolio message from ' + f.get('name'))}&body=${encodeURIComponent(f.get('message') + '\n\n' + f.get('email'))}`
  }
  return (
      <Section id="contact" title="Let's build something" sub="Have a project, opportunity, or idea? Feel free to get in touch.">
        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={send} className="space-y-4">
            <label className="block text-sm">Name<input name="name" required className={field} /></label>
            <label className="block text-sm">Email<input name="email" type="email" required className={field} /></label>
            <label className="block text-sm">Message<textarea name="message" required rows={5} className={field} /></label>
            <button className="btn btn-p">Send message</button>
            <p role="status" className="text-sm text-mute">{note}</p>
          </form>
          <ul className="space-y-3 text-mute">
            <li><a className="inline-flex items-center gap-2 hover:text-fg" href={socials.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a></li>
            {socials.linkedin && <li><a className="inline-flex items-center gap-2 hover:text-fg" href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a></li>}
            {socials.email && <li><a className="inline-flex items-center gap-2 hover:text-fg" href={`mailto:${socials.email}`}><Mail size={16} />{socials.email}</a></li>}
          </ul>
        </div>
      </Section>
  )
}
