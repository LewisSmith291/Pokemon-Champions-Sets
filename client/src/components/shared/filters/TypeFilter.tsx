import TypeDisplay from "@/components/shared/TypeDisplay";
import { TYPE_ORDER } from "@/data/types";
import "./filters.css";

interface Props {
  selected: string[];
  /** Past this many, the rest grey out - two, since nothing has three types */
  max: number;
  onToggle: (type: string) => void;
}

// A row of all 18 type notches that toggle on and off. The notch is the control:
// unselected types fade back rather than getting a chip around them.
export default function TypeFilter({ selected, max, onToggle }: Props) {
  return (
    <div className="filter-row filter-types">
      {TYPE_ORDER.map((type) => {
        const isOn = selected.includes(type);
        return (
          <button
            key={type}
            type="button"
            className="filter-type"
            aria-pressed={isOn}
            aria-label={type}
            // Past the limit, another type could never match anything
            disabled={!isOn && selected.length >= max}
            onClick={() => onToggle(type)}
          >
            <TypeDisplay type={type} />
          </button>
        );
      })}
    </div>
  );
}
