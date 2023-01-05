import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, StyledFormContainer } from './forms.styled.js';

function PersonalInfoForm() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Email address is required').email(),
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
            placeholder='new@email.com'
          />
          <ButtonStyled type='submit'>Update Personal Info</ButtonStyled>
        </Form>
      </Formik>
    </StyledFormContainer>
  )
}

export default PersonalInfoForm