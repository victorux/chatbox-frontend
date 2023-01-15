import { useEffect } from "react"
import Avatar from "../../../avatar/Avatar"
import img1 from "../../../../assets/images/profile.jpg"
import moreIcon from "../../../../assets/icons/threedots.svg"
import { socket } from "../../../../socketClient"

import {
  ChatWith,
  Container,
  Label,
} from "./chatHeader.styled"
import { useSelector } from "react-redux"
import { useState } from "react"

function ChatHeader() {
  const user = useSelector(state => state.user.currentUser);
  const currentChat = useSelector(state => state.user.currentChat);
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const receiverId = currentChat?.members.find((member)=> member !== user._id);
  
    socket.on("getUsers", users => {
    users.find((user) => user.userId === receiverId) && setIsOnline(true);
    });
  }, [user, currentChat]);


  return (
    <Container>
      <ChatWith>
        <Avatar src={img1} alt="" size="medium" />
        <Label>John Smilga</Label>
        {
          isOnline ? <p>(Online)</p> : <p>(Offline)</p>
        }
      </ChatWith>
      <div>
        <img src={moreIcon} alt="more options" />
      </div>
    </Container>
  )
}

export default ChatHeader