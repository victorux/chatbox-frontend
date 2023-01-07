import ChatFeed from "../chat/chatFeed/ChatFeed"
import ChatsList from "../chat/chatsList/ChatsList"
import styled from "styled-components"
import { device } from "../styles/breakpoints"

const Container = styled.div`
    color: ${({ theme }) => theme.color.dark};
    background-color: #fff;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    height: calc(100vh - 112px);
    overflow: hidden;
    display: flex;
    flex-direction: row;

    @media ${device.tablet}{
        height: calc(100vh - 88px);
    }
`



function Chat() {
  return (
    <Container>
      <ChatsList />
      <ChatFeed />
    </Container>
  )
}

export default Chat