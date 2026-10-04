import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'

export default function PersonalProjectCTA() {
  const projectPageUrl = `${window.location.origin}/personal-projects`

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="sec"
      aria-labelledby="personal-projects-cta-title"
    >
      <div className="relative overflow-hidden rounded-xl border border-line bg-card px-6 py-10 sm:px-10 sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex items-center justify-between gap-5 sm:gap-8">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Explore beyond the portfolio</p>
            <h2 id="personal-projects-cta-title" className="mt-3 text-3xl font-semibold sm:text-4xl">PERSONAL PROJECTS</h2>
            <p className="mt-3 max-w-xl text-mute">Explore the projects I've built beyond my academic and professional work.</p>
            <Link to="/personal-projects" className="btn btn-s group mt-7 min-h-11 border-accent/50 hover:bg-accent hover:text-white">
              EXPLORE PERSONAL PROJECTS
              <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          <Link
            to="/personal-projects"
            aria-label="Scan or open QR code to visit the Personal Projects page"
            className="shrink-0 rounded-md border border-line bg-white p-2 text-center text-[10px] font-medium uppercase tracking-wide text-gray-700 transition-colors hover:border-accent focus-visible:outline-offset-4"
          >
            <QRCodeSVG value={projectPageUrl} size={80} level="M" marginSize={2} title="QR code for the Personal Projects page" />
            <span className="mt-1 block">Scan to explore</span>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
