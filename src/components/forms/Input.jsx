import { Field, ErrorMessage } from "formik"
import { StyledControl } from "./forms.styled"
import TextError from "./TextError"

function Input(props) {
	const { label, name, type, placeholder, ...rest} = props
  return (
    <StyledControl>
			<label htmlFor={name}>{label}</label>
			<Field id={name} name={name} type={type} placeholder={placeholder} {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</StyledControl>
  )
}

export default Input