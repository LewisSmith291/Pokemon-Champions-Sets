import { Link } from "react-router";
import { useLocation } from "react-router";
import "./Home.css"

export default function Home() {
  const location = useLocation();
  return (
    <div
      id="home-canvas"
      className=" bg-blue-400 border-2 grid"
    >
        <Link 
          id="create"
          to="/create" state={{from:location.pathname}}
          className="flex flex-1 bg-red-400 
          "
        >
          Create
        </Link>
        <Link 
          id="browse"
          to="/browse" state={{from:location.pathname}}
          className="flex bg-red-400" 
        >
          Browse
        </Link>
    </div>
  )
}