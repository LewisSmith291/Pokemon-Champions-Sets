import NavDestination from '../atoms/NavDestination'

export default function HeaderLinks() {

  return (
    <nav id="nav-links">
      <NavDestination name={"Home"} link="/"/>
      <NavDestination name={"Create"} link="/create"/>
      <NavDestination name={"Browse"} link="/browse"/>
      <NavDestination name={"My Sets"} link="/my-sets"/>
    </nav>
  )
}