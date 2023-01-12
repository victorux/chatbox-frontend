import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, StyledFormContainer } from './forms.styled.js';
import { updateUserInfo } from '../../redux/apiCall';
import { useSelector, useDispatch } from "react-redux";

function PersonalInfoForm() {
  
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  
  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required').min(2, "Minimum 2 characters required").max(20, "Maximum characters required"),
    lastName: Yup.string().required('Required').min(2, "Minimum 2 characters required").max(20, "Maximum characters required"),
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
          />
          <FormikControl
            control='input'
            type='text'
            label='Last Name'
            name='lastName'
          />
           <ButtonStyled type='submit'>Update Personal Info</ButtonStyled>
        </Form>
      </Formik>
    </StyledFormContainer>
  )
}

export default PersonalInfoForm