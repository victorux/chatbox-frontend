import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, StyledFormContainer } from './forms.styled.js';

function ChangePasswordForm() {

  const initialValues = {
    currentPassword: '',
    newPassword: '',
    reenterPassword: '',
  }
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Required'),
    newPassword: Yup.string().required('Required'),
    reenterPassword: Yup.string().required('Required'),
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
            type='password'
            label='Current Password'
            name='currentPassword'
            placeholder=''
          />
          <FormikControl
            control='input'
            type='password'
            label='New Password'
            name='newPassword'
            placeholder=''
          />
          <FormikControl
            control='input'
            type='password'
            label='Reenter Password'
            name='reenterPassword'
            placeholder=''
          />
          <ButtonStyled type='submit'>Change Password</ButtonStyled>
        </Form>
      </Formik>
    </StyledFormContainer>
  )
}

export default ChangePasswordForm