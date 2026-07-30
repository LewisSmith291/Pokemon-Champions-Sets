import './App.css'
import {Routes, Route} from 'react-router';
import Home from './components/pages/Home.tsx';
import CreateSetPage from './components/pages/CreateSetPage.tsx';
import AuthPage from './components/pages/AuthPage.tsx';
import RequireAuth from './components/routing/RequireAuth.tsx';
import HeaderLayout from './components/organisms/HeaderLayout.tsx';
import NotFound from './components/pages/NotFound.tsx';
import ProfilePage from './components/pages/ProfilePage.tsx';



function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}> {/* No path - Header wrapper for all pages*/}
        <Route index element={<Home/>} />
        <Route path="signin" element={<AuthPage signType='signin'/>}/>
        <Route path="signup" element={<AuthPage signType='signup'/>}/>
        <Route element={<RequireAuth />}>
          <Route path="create" element={<CreateSetPage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
