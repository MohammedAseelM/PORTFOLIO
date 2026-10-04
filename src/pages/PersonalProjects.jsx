import { useEffect } from 'react'
import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PersonalProjectCard from '../components/PersonalProjectCard'
import personalProjects from '../data/personalProjects'

export default function PersonalProjects() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    document.title = 'Personal Projects | Mohammed Aseel M'
    description?.setAttribute('content', 'Explore personal projects by Mohammed Aseel M, including Meglev Cubing and KS Chess Academy.')

    return () => {
      document.title = previousTitle
      if (description && previousDescription !== null) description.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="sec"
    >
      <nav aria-label="Personal projects navigation" className="flex items-center justify-between gap-4">
        <Link to="/" aria-label="Return to homepage" className="btn btn-s min-h-11">
          <Home size={16} aria-hidden="true" />
          HOME
        </Link>
      </nav>

      <header className="mt-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Personal work</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">PERSONAL PROJECTS</h1>
        <p className="mt-4 text-xl text-fg">Beyond coursework. Built from curiosity.</p>
        <p className="mt-4 leading-7 text-mute">
          These projects represent my personal interests and experiments across web development, education, and interactive digital experiences.
        </p>
      </header>

      <div className="mt-12 space-y-7">
        {personalProjects.map((project, index) => (
          <PersonalProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}
