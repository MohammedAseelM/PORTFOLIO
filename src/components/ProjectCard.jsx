import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import ProjectVisual from './ProjectVisual'
export default function ProjectCard({ p, large }) {
  return (
    <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} whileHover={{ y: -3 }} className={`flex flex-col gap-6 rounded-lg border border-line bg-card p-6 hover:border-accent ${large ? 'lg:flex-row lg:items-center' : ''}`}>
      <div className={`h-52 ${large ? 'lg:h-64 lg:w-1/2' : ''}`}><ProjectVisual type={p.visual} /></div>
      <div className={large ? 'lg:w-1/2' : ''}>
        <p className="text-sm text-mute">{p.category}</p>
        <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
        <p className="mt-3 text-mute">{p.description}</p>
        {p.technologies.length > 0 && <ul className="mt-4 flex flex-wrap gap-1.5">{p.technologies.slice(0, 7).map(t => <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-mute">{t}</li>)}</ul>}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/projects/${p.id}`} className="btn btn-p">View project</Link>
          <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-s"><Github size={16} />GitHub</a>
          {p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noreferrer" className="btn btn-s">Live demo</a>}
        </div>
      </div>
    </motion.article>
  )
}
