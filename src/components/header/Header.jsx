
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom"
import Button from '../button/Button'
import { HeaderStyled, LogoStyled, LogoIcon, LogoLabel, UserArea, ChatContainer, ChatLabel } from './header.styled'
import UserMenu from "./UserMenu";
import chatIcon from '../../assets/icons/chat.svg'



function Header() {

  let isUserLoggedIn = true;
  
  const navigate = useNavigate();

  const handlerGetStarted = () => navigate('/login');
  const handlerChat = () => navigate('/chat');

  return (
    <HeaderStyled>
      <Link to="/">
        <LogoStyled>
          <LogoIcon />
          <LogoLabel>ChatBox</LogoLabel>
        </LogoStyled>
      </Link>
      <UserArea>
        { 
          isUserLoggedIn
            ?
            <Fragment>
              <ChatContainer onClick={handlerChat}>
                <img src={chatIcon} alt="" />
                <ChatLabel />
              </ChatContainer>
              <UserMenu />
            </Fragment> 
            : <Button type="secondary" onClick={handlerGetStarted}>Get Started</Button>
        }
      </UserArea>
    </HeaderStyled>
  )
}

export default Header