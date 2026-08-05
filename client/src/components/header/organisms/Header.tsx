import './Header.css'
import HeaderLinks from '../molecules/header/HeaderLinks'
import Logo from '../atoms/header/Logo'
import Profile from '../molecules/header/Profile'

interface Props{
  isSignedIn: boolean;
}

export default function Header({isSignedIn}:Props) {
  return (
    <header className="bg-header sticky top-0">
      <Logo />
      <HeaderLinks />
      <Profile isSignedIn={isSignedIn} url={null}/>
    </header>
  )
}