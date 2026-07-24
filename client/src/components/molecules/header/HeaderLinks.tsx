import NavDestination from '../../atoms/header/NavDestination'

export default function HeaderLinks() {

  return (
    <nav className="flex flex-row place-content-evenly w-full gap-4 px-4 ">
      <NavDestination name={"Home"} link="#home" />
      <NavDestination name={"Browse"} link="#browse"/>
      <NavDestination name={"Discover"} link="#discover"/>
      <NavDestination name={"Search"} link="#search"/>
      <NavDestination name={"Create"} link="#create"/>
    </nav>
  )
}