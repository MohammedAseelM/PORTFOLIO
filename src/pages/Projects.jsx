import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
const filters = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI / ML', 'Real-Time']
export default function Projects() {
  const [f, setF] = useState('All'), [q, setQ] = useState('')
  const list = useMemo(() => projects.filter(p => (f === 'All' || p.tags.includes(f)) && [p.title, p.category, ...p.technologies].join(' ').toLowerCase().includes(q.toLowerCase())), [f, q])
  return (
    <div className="sec">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {filters.map(x => <button key={x} onClick={() => setF(x)} aria-pressed={f === x} className={`rounded-md border px-3 py-1.5 text-sm ${f === x ? 'border-accent text-fg' : 'border-line text-mute'}`}>{x}</button>)}
        <input value={q} onChange={e => setQ(e.target.value)} aria-label="Search projects" placeholder="Search projects..." className="ml-auto w-full rounded-md border border-line bg-card px-3 py-1.5 text-sm sm:w-56" />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2"><AnimatePresence mode="popLayout">{list.map(p => <ProjectCard key={p.id} p={p} />)}</AnimatePresence></div>
      {!list.length && <p className="mt-8 text-mute">No projects match. Clear the filter or search.</p>}
    </div>
  )
}
