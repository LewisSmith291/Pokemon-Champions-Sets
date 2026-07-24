import NavDestination from '../../atoms/header/NavDestination'

export default function HeaderLinks() {

  return (
    <div>
      <NavDestination name={"Home"} link="#home"/>
      <NavDestination name={"Browse"} link="#browse"/>
      <NavDestination name={"Discover"} link="#discover"/>
      <NavDestination name={"Search"} link="#search"/>
      <NavDestination name={"Create"} link="#create"/>
    </div>
  )
}