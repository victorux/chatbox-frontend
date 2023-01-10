import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./components/pages/Home"
import Chat from "./components/pages/Chat"
import Profile from "./components/pages/Profile"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Header from "./components/header/Header"

import GlobalStyles from "./components/styles/Global";
import { theme } from "./components/styles/Theme";
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector(state => state.user.currentUser);

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Chat' element={user ? <Chat /> : <Navigate to="/" />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
          <Route path='/register' element={user ? <Navigate to="/" />: <Register />} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
    </ThemeProvider>
  );
}

export default App
