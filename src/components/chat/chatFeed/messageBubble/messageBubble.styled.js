import styled from "styled-components";

const handlerContainer = (isFromMe) => {
    if(isFromMe) {
        return "margin-left: auto;"
    } else return null;
}

const handlerBubble = (isFromMe) => {
    if(isFromMe) {
        return `
            border-radius: 17px 17px 0px 17px;
            background-color: #111416;
            color: #FFFFFF;
            
        `
    } else {
        return `
            border-radius: 17px 17px 17px 0px;
            background-color: #FFFFFF;
            box-shadow: 2px 4px 5px 0 rgba(213,213,213,0.50);
        `
    }
}


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: fit-content;
    gap: 10px;
    
    ${({ fromMe, theme }) => handlerContainer(fromMe, theme.color.dark)}
`

export const CustomBubble = styled.div`
    padding: 16px;
    max-width: 360px;
    letter-spacing: 0.4px;
    ${({ fromMe }) => handlerBubble(fromMe)}
`