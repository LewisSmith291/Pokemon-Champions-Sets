interface Props {
  name: string;
  link: string
}

export default function NavDestination({name, link}: Props) {
  return (
    <li>
      <a 
        href={link}
        className="text-sm font-medium text-white/80 transition-colors hover:text-accent
        ">
        {name}
      </a>
    </li>
  )
}