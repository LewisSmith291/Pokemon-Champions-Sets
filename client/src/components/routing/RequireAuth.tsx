import { Navigate, Outlet, useLocation } from "react-router";
import { useSession } from "@/services/authClient";
import Loading from "@/components/shared/Loading";


export default function RequireAuth() {
  const {data: session, isPending} = useSession();
  const location = useLocation();

  // Session check is async. Rendering anything decisive before it settles will bounce signed-in users to login page on refresh
  if (isPending){
    return <Loading />
  }

  if (!session){
    // pathname + search, not pathname alone: a create-set draft lives entirely in
    // the query string, and dropping it would lose the set on the way to sign-in
    return <Navigate to="/signin" state={{from:location.pathname + location.search}} replace />
  }

  return (
    <Outlet/>
  )

}