import { Link } from "react-router";
import { useLocation } from "react-router";

interface Props {
  /** The route this tile links to, without the leading slash */
  name: string;
  colour?: string
  /** Shown text, for when the route isn't readable as-is ("my-sets") */
  label?: string;
}

export default function HomeButton({name, colour, label}: Props) {
  const location = useLocation();
  const bgColour = typeof colour === "string" ? colour : "#C6EFCE"


  return (
    <Link id={name} style={{backgroundColor: bgColour}} className={"home-tile"} to={"/"+name} state={{from:location.pathname}}>
      {label ?? name[0].toUpperCase() +""+ name.slice(1, name.length)}
    </Link>
  )
}