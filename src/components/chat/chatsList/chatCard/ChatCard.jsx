import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentChat } from "../../../../redux/userRedux";
import Avatar from "../../../avatar/Avatar"
import { 
  CardContainer,
  BottomBorder,
  CardContent,
  CardLabelContainer,
  LabelAvatar
} from "./chatCard.styled"

function ChatCard({conversation, currentUser}) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const currentChat = useSelector(state => state.user.currentChat);

  const handleClick = () => {
    dispatch(setCurrentChat(conversation));
  }
  
  useEffect(() => {
    const friendId = conversation.members.find(m => m !== currentUser._id);
    const getUser = async () => {
      try {
        const BASE_URL = "http://localhost:8800/api"
        const res = await axios(BASE_URL + "/users?userId=" + friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [currentUser, conversation]);

  
  return (
    <CardContainer onClick={handleClick}>
      { 
        user ?
          <CardContent isActive={currentChat._id === conversation._id ? true : false}>
            {
              user?.profilePicture ? <Avatar src="" alt='user'  size='medium' /> : <LabelAvatar><span>{`${user?.firstName[0]}${user?.lastName[0]}`}</span></LabelAvatar>
            }
            <CardLabelContainer>
              <span>{user?.firstName + " " + user?.lastName}</span>
              <p>last message goes here</p>
            </CardLabelContainer>
            <span>0d</span>
          </CardContent>
        : null
      }

      <BottomBorder />
    </CardContainer>
  )
}

export default ChatCard