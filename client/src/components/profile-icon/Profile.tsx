import emptyProfile from "@/assets/images/profile-circle-gengar.svg"
import ProfileDropdown from "./ProfileDropdown";
import { useState } from "react";

interface Props{
  url:string | null;
  isSignedIn: boolean;
}


export default function Profile({url, isSignedIn}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function clickProfile(){
    setIsOpen(isOpen ? false : true);
    return;
  }

  return (
    <div id="profile-icon" className="flex">
        <img
          alt="profile picture icon"
          onClick={() => clickProfile()}
          src={url !== null ? url : emptyProfile}
          className="flex-1 hover:cursor-pointer hover:brightness-120"
        /> 
      <ProfileDropdown isSignedIn={isSignedIn} isOpen={isOpen} setIsOpen={clickProfile}/>
    </div>
  )
}