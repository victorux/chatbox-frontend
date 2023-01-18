import RegisterForm from '../forms/RegisterForm'
import { WrapperForm, Title, Description } from '../forms/forms.styled'

function SignIn() {
  return (
    <WrapperForm>
        <Title>Sign Up!</Title>
        <Description>Welcome to our registration page! Please fill out the form below to create your account.</Description>
        <RegisterForm />
    </WrapperForm>
  )
}

export default SignIn