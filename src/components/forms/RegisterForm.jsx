import { Formik, Form } from 'formik';
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, OtherOptions, StyledFormContainer } from './forms.styled.js';
import axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reenterPassword: '',

  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Email address is required').email(),
    password: Yup.string().required('Password required'),
    reenterPassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
      })
  })

  const onSubmit = (values, { resetForm }) => {
    
    const { reenterPassword, ...otherOptions } = values;
    const data = {...otherOptions};
  
    const makeRequest = (data) => {
      axios.post(
        'http://localhost:8800/api/auth/register', data)
        .then( function (response){
          if(response.status === 200){
            resetForm();
            navigate("/login");
          }
        })
        .catch(function(err){
          console.log(err);
        })
    }
    makeRequest(data);
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
            type='text'
            label='First Name'
            name='firstName'
						placeholder='John'
          />

					<FormikControl
            control='input'
            type='text'
            label='Last Name'
            name='lastName'
						placeholder='Doe'
          />

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
						placeholder='Create a password'
          />
					<FormikControl
            control='input'
            type='password'
            label='Reenter Password'
            name='reenterPassword'
						placeholder='Reenter the password'
          />
          <ButtonStyled type='submit'>Register</ButtonStyled>
        </Form>
      </Formik>
      <OtherOptions>
        <span>or</span>
        <Link to='/login'>Log In</Link>
      </OtherOptions>
    </StyledFormContainer>
  )
}

export default RegisterForm