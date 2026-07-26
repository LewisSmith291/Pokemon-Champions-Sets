import './App.css'
import {useSession} from './services/authClient.ts'
import CreateSet from './components/organisms/CreateSet.tsx'
import Header from './components/organisms/Header.tsx';


function App() {
  const {data: session, isPending} = useSession(); // datta:session renames the 'data' element in useSession to 'session'

  /*
  // If there is a session check running (check before seeing if there is a session to avoid flashing elements)
  if (isPending){
    return (
      <>
        <Header />
        <div className='flex justify-center items-center'>
          <p>Loading...</p>
        </div>
      </>
    )
  }
  */

  /*
  // If there is no session
  if (!session){
    return (
      <>
        <Header />
        <AuthForm authMode="signin"/>
      </>
    )
  }
  */

  return (
    <div>
      {!session ? <Header isSignedIn={true}/> : <Header isSignedIn={false}/> }
      <div id="header-gap" className="py-2"></div>
      <CreateSet />
    </div>
  )

}

export default App
