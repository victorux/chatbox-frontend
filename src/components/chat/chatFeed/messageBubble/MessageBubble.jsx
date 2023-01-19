import Avatar from "../../../avatar/Avatar"

import {
  Container, 
  CustomBubble,
  LabelAvatar
} from "./messageBubble.styled"
import { useSelector } from "react-redux"

function MessageBubble({message, fromMe}) {

  const user = useSelector(state => state.user.currentUser);
  const receiver = useSelector(state => state.user.receiver);


  return (
    <Container fromMe={fromMe}>
      {
        (() => {
          if (fromMe) {
            if(user?.profilePicture){return(<Avatar src={user?.profilePicture} size="small" />)}else{return(<LabelAvatar><span>{`${user?.firstName[0]}${user?.lastName[0]}`}</span></LabelAvatar>)}
          } else {
            if(receiver?.profilePicture){return(<Avatar src={receiver?.profilePicture} size="small" />)}else{return(<LabelAvatar><span>{`${receiver?.firstName[0]}${receiver?.lastName[0]}`}</span></LabelAvatar>)}
          }
        })()
      }
      <CustomBubble fromMe={fromMe}>
       {message.text}
      </CustomBubble>
    </Container>
  )
}

export default MessageBubble