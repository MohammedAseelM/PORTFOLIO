import { motion } from 'framer-motion'
export default function Section({ id, title, sub, children }) {
  return (
    <motion.section id={id} className="sec" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-xl text-mute">{sub}</p>}
      <div className="mt-10">{children}</div>
    </motion.section>
  )
}
