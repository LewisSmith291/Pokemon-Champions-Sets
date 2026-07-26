import { signOut } from "better-auth/api";

interface Props {
  isSignedIn:boolean;
  isOpen:boolean
}

export default function ProfileDropdown({isSignedIn, isOpen}: Props) {
  
  return (
    <div id="profile-dropdown" className={(!isOpen ? "invisible hidden" : "visible absolute")}>
      <ul className="flex flex-col relative">
        {isSignedIn ? (
          <>
            <li>Profile</li>
            <li onClick={() => {
              signOut(); 
              console.log(isOpen);
            }}>Sign Out</li>
          </>
        ) : (
          <>
          <li></li>
          <li>Sign In</li>
          </>
        )}
      </ul>
    </div>
  )
}