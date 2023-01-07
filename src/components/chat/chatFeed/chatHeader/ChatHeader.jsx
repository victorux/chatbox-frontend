import Avatar from "../../../avatar/Avatar"
import img1 from "../../../../assets/images/profile.jpg"
import moreIcon from "../../../../assets/icons/threedots.svg"

import {
  ChatWith,
  Container,
  Label,
} from "./chatHeader.styled"

function ChatHeader() {
  return (
    <Container>
      <ChatWith>
        <Avatar src={img1} alt="" size="medium" />
        <Label>John Smilga</Label>
      </ChatWith>
      <div>
        <img src={moreIcon} alt="more options" />
      </div>
    </Container>
  )
}

export default ChatHeader