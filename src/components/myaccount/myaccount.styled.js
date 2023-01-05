import styled from "styled-components";

export const BackgroundDiv = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    min-height: calc(100vh - 112px);
    padding: 100px 0 40px 0;
    color: ${({ theme }) => theme.color.dark};
`

export const PageTitle = styled.h1`
    text-align: center;
`

export const AccordionsContainer = styled.div`
    margin: 40px auto 0 auto;
    padding: 0 20px;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AccordionItem = styled.div`
    width: 100%;
`

export const AccordionHeader = styled.div`
    transition: all 0.22s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: ${({ isOpen, theme }) => isOpen ? theme.color.grayBorder : theme.color.grayBg};
    border-radius: 7px;
    width: 100%;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
    user-select: none;
`

export const AccordionLabel = styled.h2`
    font-size: ${({ theme }) => theme.fontSize._300};
    font-family: ${({ theme }) => theme.font.openSans};
    font-weight: 600;
`

export const AccordionIcon = styled.div`
    margin-top: 3px;
    transition: all 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
`

export const AccordionContent = styled.div`
    transition: opacity .22s ease-in-out;
    transition-delay: .1s;
    transform-origin: top center;
    height: ${({ isOpen }) => isOpen ? 'auto' : '0px'};
    padding: ${({ isOpen }) => isOpen ? '10px 24px' : 'none'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    overflow: hidden;

`

export const LogOutButton = styled.div`
    width: 100%;
    padding: 18px 0;
    border: 2px solid ${({ theme }) => theme.color.danger};
    border-radius: 7px;
    color: ${({ theme }) => theme.color.danger};
    text-align: center;
    cursor: pointer;
    user-select: none;

    :hover {
			color: ${({ theme }) => theme.color.white};
			background-color: ${({ theme }) => theme.color.danger};
			transition: all 0.22s ease;
    }
`


export const ContainerProfilePhoto = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	justify-content: center;

	img {
		width: 98px;
		height: 98px;
		border-radius: 50%;
	}
`

