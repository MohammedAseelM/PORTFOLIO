const bar = 'rounded bg-line'
export default function ProjectVisual({ type }) {
  if (type === 'ide') return (
    <div className="grid h-full grid-cols-[28%_1fr] gap-px overflow-hidden rounded-md border border-line bg-line text-[10px] text-mute" role="img" aria-label="Illustrative mockup of the IDE interface">
      <div className="bg-bg2 p-3 leading-5"><p>src/</p><p className="pl-3">App.jsx</p><p className="pl-3 text-accent">server.js</p><p className="pl-3">socket.js</p><p>package.json</p></div>
      <div className="grid grid-rows-[1fr_32%] gap-px">
        <div className="bg-card p-3 font-mono leading-5"><p>io.on('connection', socket =&gt; {'{'}</p><p className="pl-3">socket.join(room)</p><p>{'}'})</p><p className="mt-2 text-accent">● 2 collaborators</p></div>
        <div className="bg-bg p-3 font-mono">$ npm run dev</div>
      </div>
    </div>
  )
  if (type === 'ai') return (
    <div className="grid h-full grid-cols-2 gap-3 text-[10px] text-mute" role="img" aria-label="Illustrative mockup of the dashboard, values are not real data">
      <div className="rounded-md border border-line bg-bg2 p-3"><p>Risk map (illustrative)</p><div className="mt-2 grid grid-cols-5 gap-1">{Array.from({ length: 15 }, (_, i) => <i key={i} className="h-4 rounded-sm bg-accent" style={{ opacity: 0.15 + ((i * 37) % 10) / 12 }} />)}</div></div>
      <div className="space-y-2 rounded-md border border-line bg-bg2 p-3"><p>SHAP factors (illustrative)</p>{[80, 55, 35, 20].map(w => <div key={w} className={bar} style={{ width: `${w}%`, height: 8, background: 'var(--accent)' }} />)}</div>
    </div>
  )
  return <div className="grid h-full place-items-center rounded-md border border-dashed border-line text-xs text-mute">Preview coming soon</div>
}
