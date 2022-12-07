import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding: 36px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
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

export const LinksStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({theme}) => theme.color.gray};
    gap: 30px;


    a {
        color: ${({ theme }) => theme.color.gray };
        text-decoration: none;
        font-size: ${({theme}) => theme.fontSize._300};
    
    }
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`