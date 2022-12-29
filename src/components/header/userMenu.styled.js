import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledUser = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`

export const LabelAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff9933;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: ${({theme}) => theme.font.ubuntu};
    color: white;
    font-size: ${({theme}) => theme.fontSize._200};
    letter-spacing: 1px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    user-select: none;
    cursor: pointer;
`

export const Menu = styled.div`
    z-index: 99;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: white;
    width: 140px;
    border-radius: 12px;
    padding: 16px;

    ::after {
        content: '';
        display: block;
        position: absolute;
        top: -2px;
        right: 16px;
        width: 10px;
        height: 10px;
        background-color: white;
        transform: rotate(45deg);
    }

    ul {
        list-style: none;
        transition: all 50000ms ease;

        li {
            color: ${({theme}) => theme.color.dark};
            padding: 10px 0 0 0;
            cursor: pointer;
            user-select: none;
            font-size: ${({theme}) => theme.fontSize._300};


            &:hover {
                color:${({theme}) => theme.color.gray};
                text-decoration: underline;
            }

            &:first-child {
                border-bottom: 1px solid ${({ theme }) => theme.color.grayBorder};
                padding-top: 0px;
                padding-bottom: 10px;
            }

            &:last-child {
                color: ${({ theme }) => theme.color.danger};
            }
        }
    }
`