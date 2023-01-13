// import Avatar from "../../../avatar/Avatar"

import {
  Container, 
  CustomBubble
} from "./messageBubble.styled"

function MessageBubble({message, fromMe}) {

  return (
    <Container fromMe={fromMe}>
      {/* <Avatar src={} size="small" /> */}
      <CustomBubble fromMe={fromMe}>
       {message.text}
      </CustomBubble>
    </Container>
  )
}

export default MessageBubble