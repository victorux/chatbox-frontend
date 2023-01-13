// Components
import ChatHeader from "./chatHeader/ChatHeader"
import ChatConversation from "./chatConversation/ChatConversation"
// import SendMessageForm from './sendMessageForm/SendMessageForm'

// Styled Elements
import { ChatFeedContainer } from "./chatFeed.styled"


function ChatFeed() {
  return (
    <ChatFeedContainer>
      <ChatHeader />
      <ChatConversation />
    </ChatFeedContainer>
  )
}

export default ChatFeed