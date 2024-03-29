import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { updateUserConversations } from "../../../redux/userRedux"
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
const Info = styled.div`
  max-width: 380px;
  margin: 40px auto;
  text-align: center;
  line-height: 1.8;
  letter-spacing: 0.45px;
`

function ChatsList() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useSelector(state => state.user.currentUser);
  const newConversation = useSelector(state => state.user.newConv);
  const dispatch = useDispatch();

  useEffect(()=>{
    setLoading(true);
    const BASE_URL = "https://chabox-server.onrender.com/api"
    const getConversations = async () => {
      try {
        const res = await axios(BASE_URL + "/conversations/" + user._id);
        setConversations(res.data);
        dispatch(updateUserConversations(res.data));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getConversations();
    // eslint-disable-next-line
  }, [user._id, newConversation])

  
  return (
    <Container>
      <ChatsHeader />
      { loading 
      ? <Info>Loading..</Info> 
      : <ChatsContainer>
        { conversations.length >= 1 
          ? conversations.map(c => <ChatCard key={c._id} conversation={c} currentUser={user} />) 
          : <Info>Seems like you dont have any conversations. <br />To start first conversation click the search button above.</Info>
        }
      </ChatsContainer>
      }
    </Container>
  )
}

export default ChatsList