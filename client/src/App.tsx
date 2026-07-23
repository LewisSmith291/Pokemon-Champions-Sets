import './App.css'
import {useSession, signOut} from './services/authClient.ts'
import AuthForm from './components/organisms/authForm.tsx'
import CreateSet from './components/organisms/CreateSet.tsx'


function App() {
  const {data: session, isPending} = useSession(); // datta:session renames the 'data' element in useSession to 'session'

  // If there is a session check running (check before seeing if there is a session to avoid flashing elements)
  if (isPending){
    return <p>Loading...</p>
  }

  // If there is no session
  if (!session){
    return <AuthForm authMode="signin"/>
  }

  // Finally, the user is logged in and there is a session
  return (
    <div>
      <header>
        <span>Signed in as {session.user.name}</span>
        <button onClick={() => signOut()}>Sign Out</button>
      </header>
      <CreateSet />
    </div>
  )

}

export default App
