import ChatHeader from "./chatHeader/ChatHeader"
import ChatConversation from "./chatConversation/ChatConversation"
import { ChatFeedContainer } from "./chatFeed.styled"
import { useSelector } from "react-redux"


function ChatFeed() {
  const currentChat = useSelector(state => state.user.currentChat);

  return (
    <ChatFeedContainer>
      { currentChat ? <ChatHeader /> : null}  
      <ChatConversation />
    </ChatFeedContainer>
  )
}

export default ChatFeed