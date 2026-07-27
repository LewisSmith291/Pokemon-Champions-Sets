import type {ReactNode} from "react";
import { Navigate, useLocation } from "react-router";
import { useSession } from "../../services/authClient";
import Loading from "../atoms/Loading";

interface Props{
  children: ReactNode
}

export default function RequireAuth({children}:Props) {
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
    <>{children}</>
  )

}