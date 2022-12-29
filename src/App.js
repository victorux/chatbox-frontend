import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Chat from "./components/pages/Chat"
import Profile from "./components/pages/Profile"
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"
import Header from "./components/header/Header"

import GlobalStyles from "./components/styles/Global";
import { theme } from "./components/styles/Theme";
import { ThemeProvider } from 'styled-components';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
    </ThemeProvider>
  );
}

export default App
