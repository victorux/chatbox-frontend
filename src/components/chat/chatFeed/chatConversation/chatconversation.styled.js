import styled from "styled-components";
import { device } from "../../../styles/breakpoints";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
    height: calc(100% - 120px);
    width: calc(100% - 40px);
    overflow-y: auto;
    /* overflow-x: hidden; */

    @media ${device.tablet}{
        margin-left: 20px;
        padding-right: 20px;
        height: calc(100% - (78px + 172px + 40px));
    }
`

export const MessagesContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 20px;
    padding-right: 40px;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    gap: 10px;
    flex: 1 1 content;
`

export const CustomFrom = styled.form`
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    width: calc(100% - 40px);
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 20px;
    flex: 0 0 content;
`

export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    line-height: 1.7;
    font-family: ${({ theme }) => theme.font.openSans};
    font-size: ${({ theme }) => theme.fontSize._300};
    font-weight: 500;
    letter-spacing: 0.25px;

    ::placeholder{
        font-weight: 400;
    }
    
    :focus,
    :active {
        outline: none;
    }
`

export const Button = styled.button`
    padding: 16px 30px;
    background-color: ${({ theme}) => theme.color.primary};
    color: ${({ theme}) => theme.color.dark};
    border-radius: 12px;
    offset: 0;
    border: none;
    cursor: pointer;
    transition: all 0.33s ease-in-out;
    font-size: ${({theme}) => theme.fontSize._300};
    letter-spacing: 0.40px;

    :disabled {
        cursor: auto;
        opacity: 0.5;

        :hover {
            background-color: ${({ theme}) => theme.color.primary};
        }
    }

    :hover {
        background-color: ${({ theme}) => theme.color.primaryDark};
    }
`

export const ComposeMessageContainer = styled.div`
    width: 100%;
    
`

