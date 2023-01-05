import LoginForm from '../forms/LoginForm'
import { WrapperForm, Title, Description } from '../forms/forms.styled'

function Login() {
  return (
    <WrapperForm>
        <Title>Log In</Title>
        <Description>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Description>
        <LoginForm />
    </WrapperForm>
  )
}

export default Login