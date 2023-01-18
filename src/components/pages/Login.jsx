import LoginForm from '../forms/LoginForm'
import { WrapperForm, Title, Description } from '../forms/forms.styled'

function Login() {
  return (
    <WrapperForm>
        <Title>Log In</Title>
        <Description>Please enter your email and password to access your account..</Description>
        <LoginForm />
    </WrapperForm>
  )
}

export default Login