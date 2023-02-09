import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import { ButtonStyled, StyledFormContainer } from './forms.styled.js';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserPassword } from '../../redux/apiCall';

function ChangePasswordForm() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);

  const initialValues = {
    currentPassword: '',
    newPassword: '',
    reenterPassword: '',
  }
  const validationSchema = Yup.object({
    currentPassword: Yup.string().required('Required'),
    newPassword: Yup.string().required('Required'),
    reenterPassword: Yup.string().required('Required').when("newPassword", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Both password need to be the same"
      )
    })
  })

  const onSubmit = async (values) => {
    const res = await updateUserPassword(dispatch, user._id, values);
    if(res){
      alert("Password has been updated succesifuly!");
    } else {
      alert("Something went wrong!...");
    }
  }

  return (
    <StyledFormContainer>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values); 
          resetForm();}}
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