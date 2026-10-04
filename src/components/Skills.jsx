import Section from './Section'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat}>
            <h3 className="text-lg font-semibold">{cat}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {list.map(s => <li key={s} tabIndex={0} title={`${s} — ${cat}`} className="rounded-md border border-line bg-card px-3 py-1.5 text-sm text-mute transition-colors hover:border-accent hover:text-fg">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
