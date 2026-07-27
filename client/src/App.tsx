import './App.css'
import {useSession} from './services/authClient.ts'
import Header from './components/organisms/Header.tsx';
import {Routes, Route} from 'react-router';
import Home from './components/pages/Home.tsx';
import CreateSetPage from './components/pages/CreateSetPage.tsx';
import AuthPage from './components/pages/AuthPage.tsx';
import RequireAuth from './components/routing/RequireAuth.tsx';


function App() {
  const {data: session} = useSession(); // datta:session renames the 'data' element in useSession to 'session'
  //const {data: session, isPending} = useSession(); 

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
      <Header isSignedIn={!!session}/>
      <div id="header-gap" className="py-2"></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<RequireAuth><CreateSetPage/></RequireAuth>} />
        <Route path="/signin" element={<AuthPage signType="signin"/>}></Route>
        <Route path="/signup" element={<AuthPage signType="signup"/>}></Route>
        <Route path="/*" element={<p className="m-4">Site Not Found</p>} />
        </Routes>
    </div>
  )

}

export default App
