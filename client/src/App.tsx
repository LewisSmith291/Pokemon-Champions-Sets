import './App.css'
import {Routes, Route} from 'react-router';
import Home from './components/home/pages/Home.tsx';
import CreateSetPage from './components/create/pages/CreateSetPage.tsx';
import AuthPage from './components/auth/pages/AuthPage.tsx';
import RequireAuth from './components/routing/RequireAuth.tsx';
import HeaderLayout from './components/header/templates/HeaderLayout.tsx';
import NotFound from './components/not-found/NotFound.tsx';
import ProfilePage from './components/profile/ProfilePage.tsx';
import SetPage from './components/set-display/pages/SetPage.tsx';
import MySetsPage from './components/my-sets/pages/MySetsPage.tsx';
import BrowsePage from './components/browse/pages/BrowsePage.tsx';



function App() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}> {/* No path - Header wrapper for all pages*/}
        <Route index element={<Home/>} />
        <Route path="signin" element={<AuthPage signType='signin'/>}/>
        <Route path="signup" element={<AuthPage signType='signup'/>}/>
        {/* Building a set is open to anyone - the whole draft lives in the URL.
            Publishing it is gated inside CreateSet, and by requireAuth on the API. */}
        <Route path="create" element={<CreateSetPage/>}/>
        {/* Not behind RequireAuth - the API decides visibility, answering 404
            for a private set to anyone but its owner */}
        <Route path="set/:id" element={<SetPage/>}/>
        {/* Public sets only, so open to anyone */}
        <Route path="browse" element={<BrowsePage/>}/>
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<ProfilePage/>}/>
          {/* Lists private sets too, so it needs to know who's asking */}
          <Route path="my-sets" element={<MySetsPage/>}/>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
