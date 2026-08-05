import { signOut } from "@/services/authClient";
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
      <ul className="flex flex-row-reverse relative invisible-pre-wrap">
        {isSignedIn ? (
          <>
            <li className="hoverable-link" onClick={() => setIsOpen?.()}>
              <Link to="/profile">Profile</Link>
            </li>
            <li className="rounded-bl-xl hoverable-link" onClick={() => {signOut(); setIsOpen?.()}}>
              Sign Out
            </li>
          </>
        ) : (
          <>
            <li className="hoverable-link" onClick={() => setIsOpen?.()}>
              <Link to="/signin" state={{from:location.pathname}}>Sign In</Link>
            </li>
            <li className="rounded-bl-xl hoverable-link" onClick={() => setIsOpen?.()}>
              <Link to="/signup" state={{from:location.pathname}}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}