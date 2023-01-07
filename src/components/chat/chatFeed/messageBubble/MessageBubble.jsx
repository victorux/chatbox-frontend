import Avatar from "../../../avatar/Avatar"

import {
  Container, 
  CustomBubble
} from "./messageBubble.styled"

function MessageBubble({ message, linkImg, fromMe }) {
  return (
    <Container fromMe={fromMe}>
      <Avatar src={linkImg} size="small" />
      <CustomBubble fromMe={fromMe}>
        {message}
      </CustomBubble>
    </Container>
  )
}

export default MessageBubble