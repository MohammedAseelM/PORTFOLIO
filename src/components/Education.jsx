import Section from './Section'
import { profile } from '../data/profile'
export default function Education() {
  const e = profile.education
  return (
    <Section id="education" title="Education">
      <div className="grid gap-10 md:grid-cols-2">
        <div><h3 className="text-xl font-semibold">{e.degree}</h3><p className="mt-1 text-mute">{e.college}</p><p className="text-mute">{e.years}</p>
          <h4 className="mt-6 font-medium">Relevant areas</h4><ul className="mt-2 flex flex-wrap gap-2">{e.areas.map(a => <li key={a} className="rounded border border-line px-2.5 py-1 text-sm text-mute">{a}</li>)}</ul></div>
        <ol className="space-y-5 border-l border-line pl-6">
          {profile.journey.map(([y, t]) => <li key={y}><p className="font-display font-semibold">{y}</p><p className="text-mute">{t}</p></li>)}
        </ol>
      </div>
    </Section>
  )
}
