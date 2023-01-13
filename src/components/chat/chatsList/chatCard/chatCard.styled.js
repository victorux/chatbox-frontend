import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const CardContainer = styled.div`
    width: 100%;
    height: fit-content;
`

export const BottomBorder = styled.div`
    margin-left: 40px;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.grayBorder};

    @media ${device.tablet}{
        margin-left: 20px;
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    cursor: pointer;
    width: 100%;
    padding-left: 40px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 20px 20px 20px 40px;
    margin: 0;
    transition: all 0.33s cubic-bezier(0.165, 0.84, 0.44, 1);

    > span {
        margin-left: auto;
        font-size: ${({ theme }) => theme.fontSize._100};
        color: ${({ theme }) => theme.color.gray};
    }

    :hover {
        background-color: ${({ theme }) => theme.color.primaryLight};
    }

    @media ${device.tablet}{
        padding-left: 20px;
    }
`

export const CardLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
    height: 56px;

    span {
        text-overflow: ellipsis;
        max-width: 24ch;
        overflow: hidden;
        white-space: nowrap;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize._200};
    }

    p {
        color: ${({ theme }) => theme.color.gray};
        text-overflow: ellipsis;
        max-width: 24ch;
        overflow: hidden;
        white-space: nowrap;
        font-size: ${({ theme }) => theme.fontSize._200};
    }
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