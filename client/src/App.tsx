import './App.css'
import {useSession} from './services/authClient.ts'
import Header from './components/organisms/Header.tsx';
import {Routes, Route} from 'react-router';
import Home from './components/pages/Home.tsx';
import CreateSetPage from './components/pages/CreateSetPage.tsx';
import AuthPage from './components/pages/AuthPage.tsx';
import RequireAuth from './components/routing/RequireAuth.tsx';
import ProfilePage from './components/pages/ProfilePage.tsx';


function App() {
  const {data: session} = useSession(); // data:session renames the 'data' element in useSession to 'session'
  return (
    <div>
      <Header isSignedIn={!!session}/>
      <div id="header-gap" className="py-2"></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route element={<RequireAuth/>}>
          <Route path="/create" element={<CreateSetPage/>} />
          <Route path="/create" element={<CreateSetPage/>} />
        </Route>
        <Route path="/signin" element={<AuthPage signType="signin"/>}></Route>
        <Route path="/signup" element={<AuthPage signType="signup"/>}></Route>
        <Route path="/*" element={<p className="m-4">Site Not Found</p>} />
        </Routes>
    </div>
  )
}

export default App
