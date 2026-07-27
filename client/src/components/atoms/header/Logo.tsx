import logo from '/Logo.png'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link 
      to="/"
      className="flex items-center hover:brightness-110">
      <img 
        id="logo"
        src={logo}
        alt="Champion Sets Logo"
        className="h-[96px] w-auto [image-rendering:pixelated]"
      />
    </Link>
  )
}