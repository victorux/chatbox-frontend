import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from '../../redux/apiCall';
import FormikControl from './FormikControl';
import { ButtonStyled, ErrorStyled, OtherOptions, StyledFormContainer } from './forms.styled.js';

function LoginForm() {
  
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().required('Email address is required').email(),
    password: Yup.string().required('Password required')
  })

  const onSubmit = async ({email, password}) => {
    await login(dispatch, {email, password});
  };
  
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
          <ButtonStyled type='submit' disabled={isFetching}>Login</ButtonStyled>
          {error ? <ErrorStyled>Something went wrong...</ErrorStyled> : null}
        </Form>
      </Formik>
      <OtherOptions>
        <span>Don't have an account yet?</span>
        <Link to='/register'>Sign up now!</Link>
      </OtherOptions>
    </StyledFormContainer>
  )
}

export default LoginForm