import { StyledButton } from "./button.styled"

function Button({ children, type, onClick }) {
  return (
    <StyledButton
        type={type}
        onClick={onClick ? () => onClick() : null}   
    >
        {children}
    </StyledButton>
  )
}

export default Button