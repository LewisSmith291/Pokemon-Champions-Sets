import MagnifyingGlass from '/magnifying-glass.svg'
import userPrefersDark from '@/hooks/userPrefersDark';
interface Props {
  
}

export default function SearchAndFilter({}: Props) {
  const isDark = userPrefersDark();
  const isDarkTailwind = isDark ? "" : "invert"

    return (
    <div id="search-and-filter" className="flex flex-row items-center justify-center">
      <input className="" type="text" placeholder="Search">
      </input>
      <img src={MagnifyingGlass} className={'w-6 h-6 bright ' + isDarkTailwind}></img>
    </div>
  )
}