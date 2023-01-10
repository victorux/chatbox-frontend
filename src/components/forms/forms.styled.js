import styled from "styled-components";

export const WrapperForm = styled.div`
    margin: 0 auto;
    padding: 40px 0;
    max-width: 340px;
`

export const Title = styled.h1`
    color: ${({theme}) => theme.color.white};
    font-family: ${({theme}) => theme.font.ubuntu};
    font-size: ${({theme}) => theme.fontSize._900};
    text-align: center;
    letter-spacing: 1px;
`

export const Description = styled.p`
    color: ${({theme}) => theme.color.gray};
    font-family: ${({theme}) => theme.font.openSans};
    text-align: center;
    margin: 20px 0;
`

export const StyledFormContainer = styled.div`
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`

export const StyledControl = styled.div`

	label {
		display: block;
		width: 100%;
		color: ${({ theme }) => theme.color.gray};
		font-size: ${({ theme }) => theme.fontSize._100};
		letter-spacing: 0.30px;
	}

	input {
		width: 100%;
    padding: 18px 20px;
    border-radius: 7px;
    margin-top: 8px;
    font-size: ${({ theme }) => theme.fontSize._200};
    border: 2px solid ${({ theme }) => theme.color.gray};
    outline: none;

    :focus,
    :active {
			background-color: azure;
			border: 2px solid ${({ theme }) => theme.color.gray};
    }
	}

`

export const StyledError = styled.div`
	color: ${({ theme }) => theme.color.danger};
	font-size: ${({ theme }) => theme.fontSize._100};
	margin-top: 4px;
	letter-spacing: 0.30px;
`


export const ButtonStyled = styled.button`
    width: 100%;
    padding: 18px 26px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.dark};
    border: none;
    cursor: pointer;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize._300};
    transition: all 0.25s ease-in-out;

    :disabled{
        opacity: 0.5;
        cursor: auto;
    }

    :hover {
        background-color: ${({ theme }) => theme.color.primaryDark};
    }
`

export const ErrorStyled = styled.div`
    color: ${({ theme}) => theme.color.danger};
`

export const OtherOptions = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
`