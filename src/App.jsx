import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import Home from './pages/Home'
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const PersonalProjects = lazy(() => import('./pages/PersonalProjects'))
const NotFound = lazy(() => import('./pages/NotFound'))
export default function App() {
  const [dark, toggle] = useTheme()
  const loc = useLocation()
  useEffect(() => { if (!loc.hash) window.scrollTo(0, 0) }, [loc.pathname, loc.hash])
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3">Skip to content</a>
      <Navbar dark={dark} toggle={toggle} />
      <main id="main">
        <AnimatePresence mode="wait">
          <motion.div key={loc.pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: loc.pathname === '/personal-projects' ? 0.4 : 0.25 }}>
            <Suspense fallback={<p className="sec text-mute">Loading project…</p>}>
              <Routes location={loc}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/personal-projects" element={<PersonalProjects />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </MotionConfig>
  )
}
