import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import AchievementCard from '../components/AchievementCard'
import Education from '../components/Education'
import Resume from '../components/Resume'
import PersonalProjectCTA from '../components/PersonalProjectCTA'
import Contact from '../components/Contact'
import { projects } from '../data/projects'
import { achievements } from '../data/achievements'
export default function Home() {
  const { hash } = useLocation()
  useEffect(() => { if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50) }, [hash])
  const [featured, ...rest] = projects
  return (
    <>
      <Hero /><About /><Skills />
      <Section id="projects" title="Featured projects" sub="Selected projects demonstrating my approach to software engineering.">
        <div className="space-y-6"><ProjectCard p={featured} large /><div className="grid gap-6 md:grid-cols-2">{rest.slice(0, 1).map(p => <ProjectCard key={p.id} p={p} />)}</div>
          <Link to="/projects" className="btn btn-s">All projects</Link></div>
      </Section>
      <Section id="achievements" title="Achievements"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{achievements.map(a => <AchievementCard key={a.label} {...a} />)}</div></Section>
      <Education /><Resume /><PersonalProjectCTA /><Contact />
    </>
  )
}
