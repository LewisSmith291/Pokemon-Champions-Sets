import './Header.css'
import HeaderLinks from '../molecules/HeaderLinks'
import Logo from '../atoms/Logo'
import Profile from '@/components/profile-icon/Profile'

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