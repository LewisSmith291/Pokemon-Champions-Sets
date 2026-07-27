import { useLocation, useNavigate } from "react-router"
import AuthForm from "../organisms/AuthForm"
import { useSession } from "../../services/authClient";
import { useEffect } from "react";

type Props = {
  signType: "signin" | "signup"
}

export default function AuthPage({signType}: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const {data:session} = useSession();

  // Where to return to once signed in/up
  const requested = location.state?.from;

  // Guard chain making sure the from variable can't be abused by attackers
  const from = 
    typeof requested === "string" && // location.state is any typed so this handles for ts and also handles null using direct visit
    requested.startsWith("/") && // must be in-app path
    !requested.startsWith("//") && // checks for another host as it would pass the first "/" check
    !requested.startsWith("/\\") && // prevents some parsers normalising \ to /
    requested !== "/signin" && 
    requested !== "/signup" // loop prevention
      ? requested 
      : "/";

  useEffect(() => {
    if (session) {
      navigate(from, {replace:true});
    }
  }, [session, from, navigate]);
  
  // Changes between sign in or sign up pages in the url, instead of using states
  function toggleMode() {
    navigate(signType === "signup" ? "/signin" : "/signup", {state: {from}});
  }

  return (
    <AuthForm authMode={signType} toggleMode={toggleMode}/>
  )
}