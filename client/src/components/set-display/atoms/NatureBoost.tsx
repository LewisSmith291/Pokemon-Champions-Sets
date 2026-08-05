
interface Props {
  isBoost: boolean;
}

export default function NatureBoost({isBoost}: Props) {
  const output = isBoost ? "↑" : "↓";
  return (
    <div className={isBoost ? "nature-up" : "nature-down"}>{output}</div>
  )
}