import {Outlet} from "react-router";
import { useSession } from "../../services/authClient";
import Header from "./Header";



export default function HeaderLayout() {
  const {data: session} = useSession();
  
  return (
    <>
      <Header isSignedIn={!!session} />
      <div id="header-gap" className="py-2"></div>
      <Outlet />
    </>
  )
}