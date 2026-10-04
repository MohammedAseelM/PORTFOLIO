import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
const links = [['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Achievements', 'achievements'], ['Resume', 'resume'], ['Contact', 'contact']]
export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  const item = 'text-sm text-mute transition-colors hover:text-fg'
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display font-semibold tracking-tight">Mohammed Aseel</Link>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([l, id]) => <li key={id}><Link className={item} to={`/#${id}`}>{l}</Link></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="rounded-md p-2 hover:bg-bg2">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="rounded-md p-2 hover:bg-bg2 md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg px-5 py-3 md:hidden">
          {links.map(([l, id]) => <li key={id}><Link onClick={() => setOpen(false)} className="block py-3 text-mute" to={`/#${id}`}>{l}</Link></li>)}
        </ul>
      )}
    </header>
  )
}
