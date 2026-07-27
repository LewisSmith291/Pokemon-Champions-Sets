import { useNavigate } from "react-router"
import AuthForm from "../organisms/AuthForm"

type Props = {
  signType: "signin" | "signup"
}

export default function AuthPage({signType}: Props) {
  const navigate = useNavigate();

  // Changes between sign in or sign up pages in the url, instead of using states
  function toggleMode() {
    navigate(signType === "signup" ? "/signin" : "/signup")
  }

  // On successful sign in or sign up, send user 
  function onSuccess() {
    navigate("/", {replace: true});
  }

  return (
    <AuthForm authMode={signType} toggleMode={toggleMode} onSuccess={onSuccess}/>
  )
}