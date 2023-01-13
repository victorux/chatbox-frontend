import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
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

  console.log(user);
  return (
    <CardContainer>

      { 
        user ?
          <CardContent>
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