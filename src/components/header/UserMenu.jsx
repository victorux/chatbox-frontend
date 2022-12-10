import { Container, LabelAvatar, Menu, StyledUser } from "./userMenu.styled"
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


function UserMenu() {
const [showMenu, setShowMenu] = useState(false);
const ref = useRef();
const navigate = useNavigate();


const handleClickAvatar = () => setShowMenu(!showMenu);




useEffect(() => {
  const checkIfClickedOutside = (e) => {
    if(showMenu && ref.current && !ref.current.contains(e.target)){
      setShowMenu(false);
    }
  };
  document.addEventListener("click", checkIfClickedOutside);
  return () => {
    document.removeEventListener("click", checkIfClickedOutside);
  };
}, [showMenu]);

const handleClickMyProfile = () => {
  setShowMenu(false);
  navigate('/profile');
}


  return (
    <Container ref={ref}>
        <StyledUser>
            <LabelAvatar onClick={handleClickAvatar}><span>VB</span></LabelAvatar>
        </StyledUser>
        {
          showMenu
          ?
            <Menu >
              <ul>
                  <li onClick={handleClickMyProfile}>My Account</li>
                  <li>Log Out</li>
              </ul>
            </Menu>
          : null
        }
    </Container>
  )
}

export default UserMenu