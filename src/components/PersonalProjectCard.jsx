import { motion } from 'framer-motion'
import { Box, ExternalLink } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

function ProjectPreview({ visual, title, logo }) {
  return (
    <div aria-label={`${title} project logo preview`} role="img" className="group/preview relative flex min-h-64 items-center justify-center overflow-hidden rounded-lg border border-line bg-bg2 sm:min-h-80">
      <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:32px_32px]" />
      {visual === 'chess' && (
        <div aria-hidden="true" className="absolute grid aspect-square w-48 grid-cols-8 overflow-hidden rounded-md border border-line opacity-40 sm:w-56">
          {Array.from({ length: 64 }, (_, index) => (
            <span key={index} className={Math.floor(index / 8) % 2 === index % 2 ? 'bg-card' : 'bg-accent/15'} />
          ))}
        </div>
      )}
      {visual === 'cube' && <Box aria-hidden="true" className="absolute -bottom-5 -right-5 h-20 w-20 rotate-12 text-accent/25" strokeWidth={1} />}
      <img
        src={logo}
        alt=""
        loading="lazy"
        className={`relative z-10 max-h-56 rounded-md object-contain shadow-xl transition-transform duration-300 group-hover/preview:scale-[1.02] sm:max-h-64 ${visual === 'chess' ? 'aspect-square w-48 sm:w-56' : 'h-auto w-[92%] max-w-[420px]'}`}
      />
    </div>
  )
}

function DetailList({ title, items }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-mute">
        {items.map(item => <li key={item} className="flex gap-2"><span aria-hidden="true" className="text-accent">—</span><span>{item}</span></li>)}
      </ul>
    </div>
  )
}

export default function PersonalProjectCard({ project, index }) {
  const { title, category, description, built, features, technologies, focus, visual, logo, liveDemo } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className="group grid overflow-hidden rounded-xl border border-line bg-card transition-[border-color,box-shadow] duration-200 hover:border-accent/70 hover:shadow-xl hover:shadow-black/10 md:grid-cols-5"
    >
      <div className="p-4 sm:p-6 md:col-span-2">
        <ProjectPreview visual={visual} title={title} logo={logo} />
      </div>
      <div className="flex flex-col gap-7 p-6 sm:p-8 md:col-span-3">
        <header className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Personal project {String(index + 1).padStart(2, '0')}</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-mute">{category}</p>
            <p className="mt-5 leading-7 text-mute">{description}</p>
          </div>
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`QR code for ${title}; opens the project website in a new tab when clicked`}
              className="group/qr flex shrink-0 flex-col items-center gap-1 rounded-md border border-line bg-white p-1.5 text-center text-[10px] font-medium uppercase tracking-wide text-gray-700 transition-colors hover:border-accent focus-visible:outline-offset-4 sm:p-2"
            >
              <QRCodeSVG value={liveDemo} size={72} level="M" marginSize={2} title={`${title} website QR code`} />
              <span>Scan to visit</span>
            </a>
          )}
        </header>

        <div className="grid gap-7 sm:grid-cols-2">
          <section aria-label={`${title} overview`}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">Overview · What I Built</h3>
            <p className="mt-3 text-sm leading-6 text-mute">{built}</p>
          </section>
          <DetailList title="Key Features" items={features} />
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          <DetailList title="Technologies" items={technologies} />
          <DetailList title="Project Focus" items={focus} />
        </div>

        <div className="mt-auto border-t border-line pt-5">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-mute">Project Link</h3>
          <div className="mt-4">
            {liveDemo ? (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} website (opens in a new tab)`}
                className="btn btn-p min-h-11"
              >
                VISIT PROJECT <ExternalLink size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <button type="button" disabled aria-label={`${title} website coming soon`} className="btn btn-s min-h-11 cursor-not-allowed opacity-60">
                WEBSITE COMING SOON
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
