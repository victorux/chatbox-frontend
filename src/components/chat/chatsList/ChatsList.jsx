import ChatCard from "./chatCard/ChatCard"
import ChatsHeader from "./chatsHeader/ChatsHeader"
import styled from "styled-components"
// imgs
import img1 from '../../../assets/images/profile.jpg'
import img2 from '../../../assets/images/avatar2.jpg'
import img3 from '../../../assets/images/avatar3.jpg'
import img4 from '../../../assets/images/avatar4.jpg'

const Container = styled.div`
    flex: 1;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid ${({ theme }) => theme.color.grayBorder};
`

const ChatsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 112px - 113px);
    overflow-x: hidden;
    overflow-y: auto;
`

function ChatsList() {
  return (
    <Container>
      <ChatsHeader />
      <ChatsContainer>
          <ChatCard title="John Smilga" desc="Wow, that looks perfect!" lastDate="1h" imgSrc={img1} />
          <ChatCard title="Joseph Allison" desc="Awesome! looking forward to it :)" lastDate="4d" imgSrc={img2} />
          <ChatCard title="Chris Jr" desc="Happy Birthday! 🎉" lastDate="2w" imgSrc={img3} />
          <ChatCard title="Marry Debroune" desc="Hi, how are you today?" lastDate="4w" imgSrc={img4} />
      </ChatsContainer>
    </Container>
  )
}

export default ChatsList