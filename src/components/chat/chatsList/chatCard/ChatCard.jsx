import axios from "axios";
import moment from 'moment';
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
  const dispatch = useDispatch();
  const currentChat = useSelector(state => state.user.currentChat);

  const [user, setUser] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);

  const handleClick = () => {
    dispatch(setCurrentChat(conversation));
  }
  
  useEffect(() => {
    const friendId = conversation.members.find(m => m !== currentUser._id);
    const getUser = async () => {
      try {
        const BASE_URL = "https://chabox-server.onrender.com/api"
        const res = await axios.get(BASE_URL + "/users?userId=" + friendId);
        const fetchLastMessage = await axios.post("https://chabox-server.onrender.com/api/messages/last/message",{
          conversationId: conversation?._id,
          sender: friendId
        });
        setUser(res.data);
        setLastMessage(fetchLastMessage.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [currentUser, conversation, currentChat?._id]);

  return (
    <CardContainer onClick={handleClick}>
      { 
        user ?
          <CardContent isActive={currentChat?._id === conversation?._id ? true : false}>
            {
              user?.profilePicture ? <Avatar src={user.profilePicture} alt='user'  size='medium' /> : <LabelAvatar><span>{`${user?.firstName[0]}${user?.lastName[0]}`}</span></LabelAvatar>
            }
            <CardLabelContainer>
              <span>{user?.firstName + " " + user?.lastName}</span>
              {
                lastMessage ? 
                <p>{lastMessage?.text}</p> 
                : <p> </p>
              }
            </CardLabelContainer>
            { lastMessage
              ? <span>{moment(lastMessage.createdAt).fromNow('m SS')}</span>
              : null
            }
          </CardContent>
        : null
      }

      <BottomBorder />
    </CardContainer>
  )
}

export default ChatCard