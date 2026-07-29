import { Link } from "react-router";
import { useLocation } from "react-router";

interface Props {
  name: string;
  colour?: string
}

export default function HomeButton({name, colour}: Props) {
  const location = useLocation();
  const bgColour = typeof colour === "string" ? colour : "#C6EFCE"


  return (
    <Link id={name} style={{backgroundColor: bgColour}} className={"home-tile"} to={"/"+name} state={{from:location.pathname}}>
      {name[0].toUpperCase() +""+ name.slice(1, name.length)} 
    </Link>
  )
}