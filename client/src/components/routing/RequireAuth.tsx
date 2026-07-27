import { Navigate, Outlet, useLocation } from "react-router";
import { useSession } from "../../services/authClient";
import Loading from "../atoms/Loading";


export default function RequireAuth() {
  const {data: session, isPending} = useSession();
  const location = useLocation();

  // Session check is async. Rendering anything decisive before it settles will bounce signed-in users to login page on refresh
  if (isPending){
    return <Loading />
  }

  if (!session){
    return <Navigate to="/signin" state={{from:location.pathname}} replace />
  }

  return (
    <Outlet/>
  )

}