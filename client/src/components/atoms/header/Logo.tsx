import logo from '/Logo.png'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link 
      id="logo"
      to="/"
      className="flex items-center hover:brightness-110">
      <img 
        src={logo}
        alt="Champion Sets Logo"
        className=" [image-rendering:pixelated] flex-1"
      />
    </Link>
  )
}