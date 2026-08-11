import { Link } from "react-router";

interface Props {
  name: string;
  link: string
}

export default function NavDestination({name, link}: Props) {
  return (
      <Link
        to={link}
        className="flex text-white/80 transition-colors
        hover:text-(--color-on-accent) hover:bg-(--color-accent)
        items-center justify-center
        ">
        {name}
      </Link>
  )
}