import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
    background-color: yellow;
    margin: 40px;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: calc(100% - 80px);
    height: fit-content;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-shadow: 2px 4px 5px 0 rgba(15,15,15,0.05);
    border-radius: 17px;

    @media ${device.tablet}{
        margin: 20px;
        width: calc(100% - 40px);
    }
`

export const CustomFrom = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
`

export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
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
    align-self: flex-start;
`

