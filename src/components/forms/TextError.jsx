import { StyledError } from "./forms.styled"


function TextError(props) {
  return (
    <StyledError>{props.children}</StyledError>
  )
}

export default TextError