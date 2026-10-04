import Section from './Section'
import { profile } from '../data/profile'
export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="max-w-prose leading-7 text-mute">{profile.about}</p>
        <div>
          <h3 className="text-lg font-semibold">Focus areas</h3>
          <ul className="mt-3 space-y-2 text-mute">{profile.focus.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
      <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
        {profile.stats.map(([n, l]) => <div key={l}><dt className="text-sm text-mute">{l}</dt><dd className="font-display text-3xl font-semibold">{n}</dd></div>)}
      </dl>
    </Section>
  )
}
