import NavDestination from '../../atoms/header/NavDestination'

export default function HeaderLinks() {

  return (
    <nav className="flex place-content-center w-full">
      <ul className="flex flex-row place-content-evenly w-full gap-6">
        <NavDestination name={"Home"} link="#home"/>
        <NavDestination name={"Browse"} link="#browse"/>
        <NavDestination name={"Discover"} link="#discover"/>
        <NavDestination name={"Search"} link="#search"/>
        <NavDestination name={"Create"} link="#create"/>
      </ul>
    </nav>
  )
}