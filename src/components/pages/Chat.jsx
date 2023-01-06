import searchIcon from '../../assets/icons/search.svg'
import userAddIcon from '../../assets/icons/addUser.svg'
import img1 from '../../assets/images/profile.jpg'
import img2 from '../../assets/images/avatar2.jpg'
import img3 from '../../assets/images/avatar3.jpg'
import img4 from '../../assets/images/avatar4.jpg'

import { 
  ChatBg, 
  ConversationContainer, 
  HeaderMessages, 
  HeaderTools, 
  MessagesContainer,
  Button, 
  ContactsContainer
} from "../chat/chat.styled"
import ContactCard from '../chat/cards/ContactCard'



function Chat() {
  return (
    <ChatBg>
      {/* Message (left side) */}
      <MessagesContainer>
        <HeaderMessages>
          <h1>Messages</h1>
          <HeaderTools>
            <Button><img src={userAddIcon} alt="Add" /><span>Invite</span></Button>
            <Button><img src={searchIcon} alt="Search" /></Button>
          </HeaderTools>
        </HeaderMessages>

        {/* Contacts */}
        <ContactsContainer>
          <ContactCard title="John Smilga" desc="Wow, that looks perfect!" lastDate="1h" imgSrc={img1} />
          <ContactCard title="Joseph Allison" desc="Awesome! looking forward to it :)" lastDate="4d" imgSrc={img2} />
          <ContactCard title="Chris Jr" desc="Happy Birthday! 🎉" lastDate="2w" imgSrc={img3} />
          <ContactCard title="Marry Debroune" desc="Hi, how are you today?" lastDate="4w" imgSrc={img4} />
        </ContactsContainer>
      </MessagesContainer>
      

      {/* Conversation (right side) */}
      <ConversationContainer>Conversation</ConversationContainer>
    </ChatBg>
  )
}

export default Chat