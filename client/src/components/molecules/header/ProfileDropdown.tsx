import { signOut } from "better-auth/api";

interface Props {
  isSignedIn:boolean;
  isOpen:boolean
}

export default function ProfileDropdown({isSignedIn, isOpen}: Props) {
  
  return (
    <div id="profile-dropdown" className={(!isOpen ? "invisible hidden" : "visible absolute")}>
      <ul className="flex flex-col relative invisible-pre-wrap">
        {!isSignedIn ? (
          <>
            <li>Profile</li>
            <li className="rounded-bl-xl" 
            onClick={() => {
              signOut(); 
              console.log(isOpen);
            }}>Sign Out</li>
          </>
        ) : (
          <>
          <li>Sign In</li>
          <li className="rounded-bl-xl">Sign Up</li>
          </>
        )}
      </ul>
    </div>
  )
}