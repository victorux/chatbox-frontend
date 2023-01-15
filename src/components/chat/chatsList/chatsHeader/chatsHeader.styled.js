import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
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
export const ChatsHeaderTools = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`
export const ToolButton = styled.button`
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

// Find a user (Modal)

export const Search = styled.div`
    width: 100%;
    height: fit-content;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    border: 1px solid ${({theme}) => theme.color.grayBorder};
    border-radius: 100px;

    &:focus-within {
        border-color: ${({theme}) => theme.color.gray};
    }
`

export const SearchInput = styled.input`
    width: 100%;
    height: fit-content;
    border: none;
    
    :focus {
        outline: none;
    }

    ::placeholder {
        letter-spacing: 0.2px;
    }

`

export const SearchIcon = styled.img`
    display: block;
    width: fit-content;
    outline: none;   
`

export const ListUsers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 300px;
    margin-top: 10px;
    overflow-y: auto;
`

export const UserCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid ${({theme}) => theme.color.grayBorder};
`

export const UserDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 20px;
`

export const ActionButton = styled.button`
    outline: none;
    outline-offset: 0;
    padding: 8px 20px;
    background-color: ${({theme}) => theme.color.dark};
    color: ${({theme}) => theme.color.white};
    cursor: pointer;
    border: 0;
    border-radius: 100px;
    font-size: ${({theme}) => theme.fontSize._200};
    font-weight: 400;
    margin-right: 10px;
    transition: all 0.2s ease-in-out;

    :hover {
        background-color: ${({theme}) => theme.color.primary};
        color: ${({theme}) => theme.color.dark};
    }
`


export const UserPicture = styled.img`
    display: block;
    width: 48px;
    height: 48px;
    object-fit: cover;
    margin: 0;
    padding: 0;
    border-radius: 50%;
`

export const Labels = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 500;
    
    span {
        max-width: 20ch;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`


