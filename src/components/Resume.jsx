import { Download, Github } from 'lucide-react'
import Section from './Section'
import { socials } from '../data/profile'

export default function Resume() {
  return (
    <Section id="resume" title="Resume" sub="Download my resume for a detailed overview of my technical skills, projects, education and achievements.">
      <div className="flex flex-wrap gap-3">
        <a href="/resume.pdf" download className="btn btn-p"><Download size={16} />Download resume</a>
        <a href={socials.github} target="_blank" rel="noreferrer" className="btn btn-s"><Github size={16} />View GitHub</a>
      </div>
    </Section>
  )
}
