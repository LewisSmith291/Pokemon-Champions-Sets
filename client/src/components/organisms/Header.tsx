import './Header.css'
import HeaderLinks from '../molecules/header/HeaderLinks'
import Logo from '../atoms/header/Logo'
import Profile from '../molecules/header/Profile'

interface Props{
  isSignedIn: boolean;
}

export default function Header({isSignedIn}:Props) {
  return (
    <header className="flex items-center justify-between bg-header px-4 py-2 fixed top-0 w-full">
      <Logo/>
      <HeaderLinks />
      <Profile isSignedIn={isSignedIn} url={null}/>
    </header>
  )
}