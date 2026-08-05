import {Outlet} from "react-router";
import { useSession } from "@/services/authClient";
import Header from "../organisms/Header";



export default function HeaderLayout() {
  const {data: session} = useSession();
  
  return (
    <>
      <Header isSignedIn={!!session} />
      <Outlet />
    </>
  )
}