interface StatDisplayProps {
  label: string;
  stat: number;
}

export default function StatDisplay({ label, stat }: StatDisplayProps) {
  return (
    <div className="stat-display">
      <span className="stat-label">{label}</span>
      <span className="stat-value">{stat}</span>
    </div>
  )
}
