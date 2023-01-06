import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const ChatBg = styled.div`
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

// 

export const MessagesContainer = styled.div`
    flex: 1;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid ${({ theme }) => theme.color.grayBorder};
`

export const ConversationContainer = styled.div`
    flex: 2.6;
    height: 100%;
    background-color: ${({ theme }) => theme.color.grayBg};
`

// 


export const HeaderMessages = styled.div`
    margin-left: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.color.grayBorder};
    padding: 30px 30px 30px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: ${({ theme }) => theme.fontSize._600};
        letter-spacing: 0.7px;
    }

    @media ${device.tablet}{
        margin-left: 20px;
    }

`

export const HeaderTools = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`

export const Button = styled.button`
    padding: 16px 16px;
    border: 1px solid ${({ theme }) => theme.color.grayBorder};
    border-radius: 50px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
    font-weight: 500;
    letter-spacing: 0.4px;
    transition: all 0.3s ease-in-out;

    span {
        color: ${({ theme }) => theme.color.dark};
    }

    :hover {
        background-color: ${({ theme }) => theme.color.primary};
        border-color: ${({ theme }) => theme.color.primary};
    }
`

// 

export const ContactsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 112px - 113px);
    overflow-x: hidden;
    overflow-y: scroll;
`





