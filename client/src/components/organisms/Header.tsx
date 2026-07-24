import './Header.css'
import HeaderLinks from '../molecules/header/HeaderLinks'
import Logo from '../atoms/header/Logo'
import Profile from '../atoms/header/Profile'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-header px-4 py-2">
      <Logo/>
      <HeaderLinks/>
      <Profile url={null}/>
    </header>
  )
}