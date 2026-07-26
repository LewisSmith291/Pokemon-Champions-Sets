import emptyProfile from "../../../assets/images/profile-circle-gengar.svg"
import ProfileDropdown from "../../molecules/header/ProfileDropdown";
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
    <div>
      <img 
        id="profile-icon"
        onClick={() => clickProfile()}
        src={url !== null ? url : emptyProfile}
        className="rounded-full hover:cursor-pointer hover:brightness-105"
      /> 
      <ProfileDropdown isSignedIn={isSignedIn} isOpen={isOpen}/>
    </div>
  )
}