interface Props {
  name: string;
  link: string
}

export default function NavDestination({name, link}: Props) {
  return (
      <a 
        href={link}
        className="flex text-white/80 transition-colors 
        hover:text-(--color-link-text) hover:bg-pink-500 
        h-24 w-full rounded-xl items-center justify-center
        ">
        {name}
      </a>
  )
}