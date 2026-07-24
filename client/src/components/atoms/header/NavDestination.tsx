interface Props {
  name: string;
  link: string
}

export default function NavDestination({name, link}: Props) {
  return (
      <a 
        href={link}
        className="flex md:text-4xl text-white/80 transition-colors 
        hover:text-(--color-link-text) hover:bg-pink-500 
        h-24 w-full p-4 rounded-xl items-center justify-center"  >
        {name}
      </a>
  )
}