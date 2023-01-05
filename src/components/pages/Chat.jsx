import searchIcon from '../../assets/icons/search.svg'
import userAddIcon from '../../assets/icons/addUser.svg'

import { 
  ChatBg, 
  ConversationContainer, 
  HeaderMessages, 
  HeaderTools, 
  MessagesContainer,
  Button 
} from "../chat/chat.styled"

function Chat() {
  return (
    <ChatBg>
      <MessagesContainer>
        <HeaderMessages>
          <h1>Messages</h1>
          <HeaderTools>
            <Button><img src={userAddIcon} alt="Add" /><span>Invite</span></Button>
            <Button><img src={searchIcon} alt="Search" /></Button>
          </HeaderTools>
        </HeaderMessages>
      </MessagesContainer>
      <ConversationContainer>Conversation</ConversationContainer>
    </ChatBg>
  )
}

export default Chat