import MessageBubble from "../messageBubble/MessageBubble"
import { Container } from "./chatconversation.styled"

import img1 from "../../../../assets/images/profile.jpg"
import img2 from "../../../../assets/images/avatar2.jpg"

function ChatConversation() {
  return (
    <Container>
      <MessageBubble message="Hi, how are you?" linkImg={img1} />
      <MessageBubble message="Hey! Thanks I'am fine" linkImg={img2} fromMe/>
    </Container>
  )
}

export default ChatConversation