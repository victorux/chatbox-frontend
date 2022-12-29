import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const HeaderStyled = styled.header`
    padding: 36px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
    }

    @media ${device.tablet} {
        padding: 24px 14px;
    }
`

export const LogoStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    user-select: none;
    cursor: pointer;
`

export const LogoIcon = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 9px;
    border: 4px solid ${({theme}) => theme.color.primary};
`

export const LogoLabel = styled.span`
    font-size: 1.2rem;
    font-family: ${({theme}) => theme.font.ubuntu};
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    color: #fff;
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;

  @media ${device.mobileL} {
        gap: 30px;
    }
`

export const ChatContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ChatLabel = styled.div`
    position: absolute;
    top: -4px;
    right: -4px;
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.primary};
`