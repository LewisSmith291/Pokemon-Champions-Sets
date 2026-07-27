import { useLocation, useNavigate } from "react-router"
import AuthForm from "../organisms/AuthForm"

type Props = {
  signType: "signin" | "signup"
}

export default function AuthPage({signType}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  // Where to return to once signed in/up
  const requested = location.state?.from;
  // Guard chain making sure the from variable can't be abused by attackers
  const from = 
    typeof requested === "string" && // location.state is any typed so this handles for ts and also handles null using direct visit
    requested.startsWith("/") && // must be in-app path
    !requested.startsWith("//") && // checks for another host as it would pass the first "/" check
    !requested.startsWith("/\\") && // prevents some parsers normalising \ to /
    requested !== "signin" && 
    requested !== "signup" // loop prevention
      ? requested 
      : "/";

  // Changes between sign in or sign up pages in the url, instead of using states
  function toggleMode() {
    navigate(signType === "signup" ? "/signin" : "/signup", {state: {from}});
  }

  // On successful sign in or sign up, send user 
  function onSuccess() {
    navigate(from, {replace: true});
  }

  return (
    <AuthForm authMode={signType} toggleMode={toggleMode} onSuccess={onSuccess}/>
  )
}