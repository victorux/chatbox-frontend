import { Container, LabelAvatar, Menu, StyledUser, Img } from "./userMenu.styled"
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import arrowDown from '../../assets/icons/arrowdown.svg'
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../redux/userRedux";

function UserMenu() {
const userPicture = useSelector(state => state.user.currentUser.profilePicture);
  
const [showMenu, setShowMenu] = useState(false);
const ref = useRef();
const navigate = useNavigate();

const dispatch = useDispatch();

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

const handleLogOut = () => {
  dispatch(userLogOut());
}


  return (
    <Container ref={ref}>
        <StyledUser onClick={handleClickAvatar}>
            {
              userPicture
              ? <Img src={userPicture} alt="profile img" />
              : <LabelAvatar><span>{`${firstName[0]}${lastName[0]}`}</span></LabelAvatar>
            }
            <img src={arrowDown}  alt="" />
        </StyledUser>
        {
          showMenu
          ?
            <Menu >
              <ul>
                  <li onClick={handleClickMyProfile}>My Account</li>
                  <li onClick={handleLogOut}>Log Out</li>
              </ul>
            </Menu>
          : null
        }
    </Container>
  )
}

export default UserMenu