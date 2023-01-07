import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home"
import Chat from "./components/pages/Chat"
import Profile from "./components/pages/Profile"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
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
          <Route path='/Chat' element={<Chat />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
    </ThemeProvider>
  );
}

export default App
