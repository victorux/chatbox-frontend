import { useEffect } from "react"
import Avatar from "../../../avatar/Avatar"
import moreIcon from "../../../../assets/icons/threedots.svg"
import { asyncEmit } from "../../../../socketClient"
import axios from "axios"

import {
  ChatWith,
  Container,
  Label,
  LabelAvatar
} from "./chatHeader.styled"
import { useSelector } from "react-redux"
import { useState } from "react"

function ChatHeader({ currentChat }) {
  const user = useSelector(state => state.user.currentUser);
  const [isOnline, setIsOnline] = useState(null);
  const [receiverUser, setReceiverUser] = useState(null);
  const receiver = currentChat?.members.find((member)=> member !== user._id);


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/users?userId=" + receiver);
        setReceiverUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [currentChat.members, user._id, receiver]);

useEffect(() => {

    const getOnlineUsers = async (clientData) => {
      const onlineUsers = await asyncEmit("getOnlineUsers", clientData);
      // if receiver is in the list set the status to online 
      if (onlineUsers.some((usr) => usr.userId === receiver)){
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
   }

   getOnlineUsers();

  }, [receiver, currentChat]);

  return (
    <Container>
      { receiverUser 
      ? <><ChatWith>
        {
              receiverUser?.profilePicture ? <Avatar src={receiverUser.profilePicture} alt='user'  size='medium' /> : <LabelAvatar><span>{`${receiverUser?.firstName[0]}${receiverUser?.lastName[0]}`}</span></LabelAvatar>
        }
        
        <Label>{receiverUser.firstName + " " + receiverUser?.lastName}</Label>
        {
          isOnline ? <p style={{color: "green"}}>(Online)</p> : <p>(Offline)</p>
        }
      </ChatWith>
      <div>
        <img src={moreIcon} alt="more options" />
      </div></>
      :  null
    }
      
    </Container>
  )
}

export default ChatHeader