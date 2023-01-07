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