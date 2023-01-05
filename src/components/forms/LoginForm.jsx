import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, OtherOptions, StyledFormContainer } from './forms.styled.js';

function LoginForm() {

  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email address is required').email(),
    password: Yup.string().required('Password required')
  })

  const onSubmit = values => console.log('Form data', values);

  return (
    <StyledFormContainer>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormikControl
            control='input'
            type='email'
            label='Email'
            name='email'
            placeholder='example@email.com'
          />
          <FormikControl
            control='input'
            type='password'
            label='Password'
            name='password'
            placeholder='Your Password'
          />
          <ButtonStyled type='submit'>Login</ButtonStyled>
        </Form>
      </Formik>
      <OtherOptions>
        <span>or</span>
        <Link to='/register'>Register</Link>
      </OtherOptions>
    </StyledFormContainer>
  )
}

export default LoginForm