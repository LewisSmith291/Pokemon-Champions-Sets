import './Header.css'
import HeaderLinks from '../molecules/header/HeaderLinks'
import Logo from '../atoms/header/Logo'

export default function Header() {
  return (
    <header>
      <Logo/>
      <HeaderLinks/>
      
    </header>
  )
}