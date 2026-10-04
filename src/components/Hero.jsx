import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from 'lucide-react'
import { profile, socials } from '../data/profile'
export default function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(n => (n + 1) % profile.rotating.length), 2200); return () => clearInterval(t) }, [])
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-20 lg:grid-cols-2 lg:pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm text-mute"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />Open to internships and software engineering opportunities</p>
        <h1 className="mt-6 whitespace-nowrap text-[clamp(1.75rem,4.5vw,3.375rem)] font-bold uppercase">{profile.name}</h1>
        <p className="mt-3 text-xl text-accent">{profile.role}</p>
        <p className="mt-6 text-2xl font-medium leading-snug">{profile.headline}</p>
        <p className="mt-4 max-w-lg text-mute">{profile.summary}</p>
        <p className="mt-6 text-sm text-mute" aria-live="off">Working with <span className="font-mono text-fg">{profile.rotating[i]}</span></p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="btn btn-p">View my work</Link>
          <a href="/resume.pdf" download className="btn btn-s"><Download size={16} />Download resume</a>
          <a href={socials.github} target="_blank" rel="noreferrer" className="btn btn-s"><Github size={16} />GitHub</a>
          {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-s"><Linkedin size={16} />LinkedIn</a>}
        </div>
      </motion.div>
      <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="rounded-lg border border-line bg-card p-5 font-mono text-xs leading-6 text-mute">
        <div className="mb-3 flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /></div>
        <p><span className="text-accent">const</span> developer = {'{'}</p>
        <p className="pl-4">stack: ['React', 'Node.js', 'MongoDB'],</p>
        <p className="pl-4">realtime: ['Socket.IO'],</p>
        <p className="pl-4">ai: ['XGBoost', 'SHAP'],</p>
        <p className="pl-4">graduating: 2027</p>
        <p>{'}'}</p>
      </motion.div>
    </section>
  )
}
