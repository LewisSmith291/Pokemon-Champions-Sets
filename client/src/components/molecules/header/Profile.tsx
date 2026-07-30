import emptyProfile from "../../../assets/images/profile-circle-gengar.svg"
import ProfileDropdown from "../../molecules/header/ProfileDropdown";
import { useState } from "react";
import { Link } from "react-router";

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
      <Link to="/profile" className="flex flex-1">
        <img
          alt="profile picture icon"
          src={url !== null ? url : emptyProfile}
          className="flex-1 hover:cursor-pointer hover:brightness-120"
        /> 
      </Link >
      <ProfileDropdown isSignedIn={isSignedIn} isOpen={isOpen} setIsOpen={clickProfile}/>
    </div>
  )
}