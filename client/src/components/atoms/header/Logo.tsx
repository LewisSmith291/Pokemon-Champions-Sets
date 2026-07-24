import logo from '/Logo.png'

export default function Logo() {
  return (
    <img 
      src={logo}
      alt="Champion Sets Logo"
      className="h-24 [image-rendering:pixelated]"
    />
  )
}