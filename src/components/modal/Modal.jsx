import { createPortal } from "react-dom"

import styled from "styled-components"
const ModalBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100vw;
    height: 100vh;
    z-index: 100 !important;
    color: ${({theme}) => theme.color.dark};
`

const ModalBox = styled.div`
    position: relative;
    max-width: 480px;
    height: fit-content;
    max-height: 560px;
    background-color: white;
    border-radius: 12px;
    padding: 40px;
`

const Close = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 400;
    cursor: pointer;
    user-select: none;
    color: ${({theme}) => theme.color.white};
    border-radius: 8px;
    padding: 5px 12px;
    background-color: ${({theme}) => theme.color.dark};

    &:hover {
        background-color: ${({theme}) => theme.color.primary};
        color: ${({theme}) => theme.color.dark};
    }
`

const BodyWrapper = styled.div`
    max-height: 500px;
    height: fit-content;
    overflow: hidden;
`

const Title = styled.h4`
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 20px;
`



function Modal({label, isOpened, closeModal, children }) {
    if(!isOpened){ 
        return null; 
    }
    return createPortal(
    <ModalBg>
        <ModalBox>
           <Close onClick={closeModal}>x</Close>
            <Title>{label}</Title>
           <BodyWrapper>
            {children}
           </BodyWrapper>
        </ModalBox>
    </ModalBg>,
    document.getElementById("modal")
  )
}

export default Modal