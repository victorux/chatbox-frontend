import { useEffect, useState, useRef } from "react";
import { socket } from "../../../../socketClient";
import { useSelector } from "react-redux";
import { useFormik } from "formik"
import axios from "axios";
import MessageBubble from "../messageBubble/MessageBubble"
import { Container, MessagesContainer, CustomFrom, ComposeMessageContainer, TextArea, Button} from "./chatconversation.styled"

function ChatConversation() {

  const currentChat = useSelector(state => state.user.currentChat);
  const user = useSelector(state => state.user.currentUser);
  const [messages, setMessages] = useState(null);
  const [arivalMessage, setArivalMessage] = useState(null);
  const BASE_URL = "http://localhost:8800/api/messages/"
  const scrollRef = useRef();

  useEffect(() => {
    socket.emit("addUser", user._id)
    socket.on("getUsers", users => {
      // console.log(users);
    })
  }, [user]);

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

    const receiverId = currentChat.members.find((member) => member !== user._id);

    socket.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: msg.text,
    });

    try {
      const res = await axios.post(BASE_URL, msg);
      setMessages([...messages, res.data])
    } catch (err) {
      console.log(err);
    }
    formik.resetForm();
  }

  useEffect(() => {
    socket.on("getMessage", data => {
      setArivalMessage({
        sender: data.senderId,
        text: data.text,
      });
    })
  }, []);

  useEffect(() => {
    arivalMessage && currentChat?.members.includes(arivalMessage.sender) && 
    setMessages(prev => [...prev, arivalMessage]);
  }, [arivalMessage, currentChat]);

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
                  <div key={m._id} ref={scrollRef}><MessageBubble message={m} fromMe={m.sender === user._id ? true : false} /></div>) 
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
      : null}
    </Container>
  )
}

export default ChatConversation