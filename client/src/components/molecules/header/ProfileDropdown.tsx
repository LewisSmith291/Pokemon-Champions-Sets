import { signOut } from "../../../services/authClient";
import { Link } from "react-router";
import { useLocation } from "react-router";

interface Props {
  isSignedIn:boolean;
  isOpen:boolean;
  setIsOpen?: () => void;
}

export default function ProfileDropdown({isSignedIn, isOpen, setIsOpen}: Props) {
  const location = useLocation();

  return (
    <div id="profile-dropdown" className={(!isOpen ? "invisible hidden" : "visible absolute")}>
      <ul className="flex flex-col relative invisible-pre-wrap">
        {isSignedIn ? (
          <>
            <li onClick={() => setIsOpen?.()}>
              <Link to="/profile">Profile</Link>
            </li>
            <li 
              className="rounded-bl-xl" 
              onClick={() => {signOut(); setIsOpen?.()}}>Sign Out
            </li>
          </>
        ) : (
          <>
            <li onClick={() => setIsOpen?.()}>
              <Link to="/signin" state={{from:location.pathname}}>Sign In</Link>
            </li>
            <li onClick={() => setIsOpen?.()} className="rounded-bl-xl">
              <Link to="/signup" state={{from:location.pathname}}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}