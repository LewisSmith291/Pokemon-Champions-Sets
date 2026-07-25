import emptyProfile from "../../../assets/images/profile-circle-gengar.svg"

interface Props{
  url:string | null;
}


export default function Profile({url}: Props) {
  return (
    <div>
      <img 
        id="profile-icon"
        src={url !== null ? url : emptyProfile}
        className="rounded-full"
      /> 
    </div>
  )
}