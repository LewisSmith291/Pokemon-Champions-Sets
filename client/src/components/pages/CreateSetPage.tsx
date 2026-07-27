import CreateSet from "../organisms/CreateSet";
import { useSession } from "../../services/authClient";
import AuthPage from "./AuthPage";
import Loading from "../atoms/Loading";

export default function CreateSetPage() {
  const {data: session, isPending} = useSession(); 

  // If there is a session check running (check before seeing if there is a session to avoid flashing elements)
  if (isPending){
    return (
      <>
        <div className='flex justify-center items-center'>
          <Loading/>
        </div>
      </>
    )
  }

  if(!session){
    return(
      <AuthPage signType="signin"></AuthPage>
    )
  }

  return (
    <>
      <CreateSet />
      <Loading/>
    </>
  )
}