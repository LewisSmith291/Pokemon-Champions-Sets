import NavDestination from '../../atoms/header/NavDestination'

export default function HeaderLinks() {

  return (
    <nav className="flex flex-row place-content-evenly w-full px-4 ">
      <NavDestination name={"Home"} link="#home" />
      <NavDestination name={"Create"} link="#create"/>
      <NavDestination name={"Browse"} link="#browse"/>
      <NavDestination name={"Discover"} link="#discover"/>
      <NavDestination name={"Search"} link="#search"/>
    </nav>
  )
}