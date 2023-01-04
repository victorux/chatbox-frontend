import SignInForm from '../forms/SignInForm'
import { WrapperForm, Title, Description } from '../forms/forms.styled'

function SignIn() {
  return (
    <WrapperForm>
        <Title>Sign In</Title>
        <Description>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Description>
        <SignInForm />
    </WrapperForm>
  )
}

export default SignIn