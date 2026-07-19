interface StatDisplayProps {
  label: string;
  stat: number;
}

export default function StatDisplay({ label, stat }: StatDisplayProps) {
  return (
    <div className="stat-display">
      {label + ": " + stat}
    </div>

  )
}
