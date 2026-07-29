import './App.css'
import {useSession} from './services/authClient.ts'
import Header from './components/organisms/Header.tsx';
import {Routes, Route} from 'react-router';
import Home from './components/pages/Home.tsx';
import CreateSetPage from './components/pages/CreateSetPage.tsx';
import AuthPage from './components/pages/AuthPage.tsx';
import RequireAuth from './components/routing/RequireAuth.tsx';
import HeaderLayout from './components/organisms/HeaderLayout.tsx';
import NotFound from './components/pages/NotFound.tsx';
import ProfilePage from './components/pages/ProfilePage.tsx';



function App() {
  const {data: session} = useSession(); // data:session renames the 'data' element in useSession to 'session'
  
  // Home page doesn't have header, but rather a grid of traversial buttons
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      
      <Routes>
        {/* Home page doesn't have header */}
        <Route path="/" element={<Home/>}/>
        <Route element={<Header isSignedIn={!!session} />}/>
        
        {/* Everything else has header */}
        <Route element={<HeaderLayout/>}/>
        <Route path="/signin" element={<AuthPage signType="signin"/>}/>
        <Route path="/signup" element={<AuthPage signType="signup"/>}/>
        <Route path="*" element={<NotFound/>}/>
        {/* Signed in only pages */}
        <Route element={<RequireAuth/>}>
          <Route path="/create" element={<CreateSetPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </div>
  )

  // With Header
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
