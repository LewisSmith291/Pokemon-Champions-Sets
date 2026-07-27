import NavDestination from '../../atoms/header/NavDestination'

export default function HeaderLinks() {

  return (
    <nav className="md:flex md:flex-row md:place-content-evenly grid grid-rows-2 grid-cols-3 grid-flow-row w-full px-4 ">
      <NavDestination name={"Home"} link="/"/>
      <NavDestination name={"Create"} link="/create"/>
      <NavDestination name={"Browse"} link="/browse"/>
      <NavDestination name={"Discover"} link="/discover"/>
      <NavDestination name={"Search"} link="/search"/>
    </nav>
  )
}