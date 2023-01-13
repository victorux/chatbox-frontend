import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik"
import axios from "axios";
import MessageBubble from "../messageBubble/MessageBubble"
import { Container, MessagesContainer, CustomFrom, ComposeMessageContainer, TextArea, Button} from "./chatconversation.styled"

function ChatConversation() {
  const currentChat = useSelector(state => state.user.currentChat);
  const user = useSelector(state => state.user.currentUser);
  const [messages, setMessages] = useState(null);
  const BASE_URL = "http://localhost:8800/api/messages/"
  const scrollRef = useRef();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const chatId = currentChat?._id;
        const res = await axios.get(BASE_URL + chatId);
        setMessages(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (values) => {
    const msg = {
      text: values.message,
      sender: user._id,
      conversationId: currentChat._id,
    }
    try {
      const res = await axios.post(BASE_URL, msg);
      console.log(res.data);
      setMessages([...messages, res.data])
    } catch (err) {
      console.log(err);
    }
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      message: ''
    },
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      { currentChat
       ? <><MessagesContainer>
              { messages?.map((m) => 
                  <div ref={scrollRef}><MessageBubble key={m._id} message={m} fromMe={m.sender === user._id ? true : false} /></div>) 
              }
            </MessagesContainer>
            
            <CustomFrom onSubmit={formik.handleSubmit} autoComplete="off">
              <ComposeMessageContainer>
                <TextArea 
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  id="message"
                  name="message"
                  placeholder="Type something..."
                  rows={4}
                />
              </ComposeMessageContainer>
              <div>
                <Button type="submit">Send</Button>
              </div>
            </CustomFrom></>
      : "Open a conversation to start a chat"}
    </Container>
  )
}

export default ChatConversation