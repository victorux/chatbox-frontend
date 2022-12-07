import { Link, NavLink, useNavigate } from "react-router-dom"
import Button from '../button/Button'
import { HeaderStyled, LogoStyled, LogoIcon, LogoLabel, LinksStyled, UserArea } from './header.styled'



function Header() {
  let activeStyle = {
    color: "#FFFFFF"
  }
  
  const navigate = useNavigate();

  const handleSignIn = () => navigate('/signin');
  const handleSignUp = () => navigate('/signup');

  return (
    <HeaderStyled>
      <Link to="/">
        <LogoStyled>
          <LogoIcon />
          <LogoLabel>ChatBox</LogoLabel>
        </LogoStyled>
      </Link>
      <LinksStyled>
        <NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined} >Home</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : undefined} >About</NavLink>
        <NavLink to="/chat" style={({isActive}) => isActive ? activeStyle : undefined} >Chat</NavLink>
      </LinksStyled>
      <UserArea>
        <Button onClick={handleSignIn}>Sign In</Button>
        <Button type="secondary" onClick={handleSignUp}>Sign Up</Button>
      </UserArea>
    </HeaderStyled>
  )
}

export default Header