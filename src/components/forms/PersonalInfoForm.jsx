import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, StyledFormContainer } from './forms.styled.js';
import { updateUserInfo } from '../../redux/apiCall';
import { useSelector, useDispatch } from "react-redux";

function PersonalInfoForm() {
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  })

  const onSubmit = (values) => {
      updateUserInfo(dispatch, user._id, values);
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
          <ButtonStyled type='submit'>Update Personal Info</ButtonStyled>
        </Form>
      </Formik>
    </StyledFormContainer>
  )
}

export default PersonalInfoForm