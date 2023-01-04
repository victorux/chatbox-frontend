import SignUpForm from '../forms/SignUpForm';
import { WrapperForm, Title, Description } from '../forms/forms.styled'

function SignUp() {
  return (
    <WrapperForm>
        <Title>Sign Up</Title>
        <Description>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Description>
        <SignUpForm />
    </WrapperForm>
  )
}

export default SignUp