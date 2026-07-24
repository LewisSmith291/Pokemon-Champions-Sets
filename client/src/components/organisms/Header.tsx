import Logo from '/Logo.png'
import './Header.css'

export default function Header() {
  return (
    <header>
      <img id="logo" src={Logo}/>
      <h1>Log in</h1>
    </header>
  )
}