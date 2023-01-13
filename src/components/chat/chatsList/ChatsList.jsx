import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
import ChatCard from "./chatCard/ChatCard"
import ChatsHeader from "./chatsHeader/ChatsHeader"
import styled from "styled-components"

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
  const [conversations, setConversations] = useState([]);
  const user = useSelector(state => state.user.currentUser);

  useEffect(()=>{
    const BASE_URL = "http://localhost:8800/api"
    const getConversations = async () => {
      try {
        const res = await axios(BASE_URL + "/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id])

  return (
    <Container>
      <ChatsHeader />
      <ChatsContainer>
      {
        conversations.map(c => 
          <ChatCard key={c._id} conversation={c} currentUser={user} />
        )
      }
      </ChatsContainer>
    </Container>
  )
}

export default ChatsList