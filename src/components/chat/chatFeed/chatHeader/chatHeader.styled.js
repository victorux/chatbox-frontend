import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 78px;
    padding: 0px 40px;
    background-color: ${({ theme }) => theme.color.white};
    border-bottom: 1px solid ${({ theme }) => theme.color.grayBorder};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    user-select: none;
`

export const ChatWith = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Label = styled.span`
    font-size: ${({ theme }) => theme.fontSize._300};
    font-weight: 600;
`
