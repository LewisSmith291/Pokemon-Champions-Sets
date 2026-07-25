import logo from '/Logo.png'

export default function Logo() {
  return (
    <a 
      href="#home"
      className="flex items-center">
      <img 
        id="logo"
        src={logo}
        alt="Champion Sets Logo"
        className="h-[96px] w-auto [image-rendering:pixelated]"
      />
    </a>
  )
}