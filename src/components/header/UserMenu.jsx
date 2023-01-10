import { Container, LabelAvatar, Menu, StyledUser } from "./userMenu.styled"
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import arrowDown from '../../assets/icons/arrowdown.svg'
import { useSelector } from "react-redux";

function UserMenu() {
  
const [showMenu, setShowMenu] = useState(false);
const ref = useRef();
const navigate = useNavigate();


const handleClickAvatar = () => setShowMenu(!showMenu);
const { firstName, lastName } = useSelector(state => state.user.currentUser);

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
        <StyledUser onClick={handleClickAvatar}>
            <LabelAvatar>
              <span>{`${firstName[0]}${lastName[0]}`}</span>
              </LabelAvatar>
            <img src={arrowDown}  alt="" />
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