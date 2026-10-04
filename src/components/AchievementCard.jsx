export default function AchievementCard({ big, label }) {
  return <div className="rounded-lg border border-line bg-card p-6"><p className="font-display text-3xl font-semibold text-accent">{big}</p><p className="mt-2 text-mute">{label}</p></div>
}
