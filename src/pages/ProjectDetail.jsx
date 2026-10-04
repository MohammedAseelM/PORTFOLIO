import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import ProjectVisual from '../components/ProjectVisual'
import { projects } from '../data/projects'
const Block = ({ id, title, children }) => <section id={id} className="scroll-mt-24 border-t border-line py-8"><h2 className="text-2xl font-semibold">{title}</h2><div className="mt-4 text-mute">{children}</div></section>
const List = ({ items }) => items.length ? <ul className="list-disc space-y-1.5 pl-5">{items.map(i => <li key={i}>{i}</li>)}</ul> : <p>Details coming soon.</p>
export default function ProjectDetail() {
  const { projectId } = useParams()
  const p = projects.find(x => x.id === projectId)
  if (!p) return <Navigate to="/404" replace />
  const nav = [['overview', 'Overview'], ['problem', 'Problem'], ['solution', 'Approach'], ['architecture', 'Architecture'], ['tech', 'Technology'], ['features', 'Features'], ['challenges', 'Challenges'], ['learnings', 'Learnings'], ['future', 'Future']]
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[180px_1fr]">
      <aside className="hidden lg:block"><ol className="sticky top-24 space-y-2 border-l border-line text-sm">{nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="-ml-px block border-l border-transparent pl-4 text-mute hover:border-accent hover:text-fg">{l}</a></li>)}</ol></aside>
      <article>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-mute hover:text-fg"><ArrowLeft size={14} />Back to projects</Link>
        <p className="mt-6 text-sm text-mute">{p.category}</p>
        <h1 className="text-4xl font-bold sm:text-5xl">{p.title}</h1>
        <div className="mt-6 flex flex-wrap gap-3"><a href={p.github} target="_blank" rel="noreferrer" className="btn btn-s"><Github size={16} />GitHub</a>{p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noreferrer" className="btn btn-s"><ExternalLink size={16} />Live demo</a>}</div>
        <div className="mt-8 h-56"><ProjectVisual type={p.visual} /></div>
        <Block id="overview" title="Overview"><p>{p.description}</p></Block>
        <Block id="problem" title="What was the problem?"><p>{p.problem}</p></Block>
        <Block id="solution" title="What did I build?"><p>{p.solution}</p></Block>
        <Block id="architecture" title="Architecture">
          {p.architecture.length ? p.architecture.map((row, r) => (
            <div key={r} className="mb-4 flex flex-wrap items-center gap-2">{row.map((n, i) => <span key={n} className="flex items-center gap-2"><span className="rounded border border-line bg-card px-3 py-1.5 text-sm text-fg">{n}</span>{i < row.length - 1 && <motion.span aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="inline-block h-px w-8 origin-left bg-accent" />}</span>)}</div>
          )) : <p>Details coming soon.</p>}
        </Block>
        <Block id="tech" title="Technology">{p.technologies.length ? <ul className="flex flex-wrap gap-2">{p.technologies.map(t => <li key={t} className="rounded border border-line px-2.5 py-1 text-sm">{t}</li>)}</ul> : <p>Details coming soon.</p>}</Block>
        <Block id="features" title="Features"><List items={p.features} /></Block>
        <Block id="challenges" title="Challenges"><List items={p.challenges} /></Block>
        <Block id="learnings" title="What did I learn?"><List items={p.learnings} /></Block>
        <Block id="future" title="What would I improve next?"><List items={p.futureImprovements} /></Block>
        <div className="mt-8 rounded-lg border border-line bg-card p-8"><h2 className="text-2xl font-semibold">Looking for a developer?</h2><p className="mt-2 text-mute">Let's build something useful.</p>
          <div className="mt-5 flex gap-3"><Link to="/#contact" className="btn btn-p">Contact me</Link><Link to="/projects" className="btn btn-s">View projects</Link></div></div>
      </article>
    </div>
  )
}
