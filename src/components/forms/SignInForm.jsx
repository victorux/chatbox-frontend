import { useFormik } from "formik"
import { Link } from "react-router-dom";
import { ButtonStyled, InputStyled, LabelStyled, InputFlex, OtherOption } from "./forms.styled";

function SignInForm() {
  const {values, handleChange}= useFormik({
    initialValues: {
      email: "",
      password: "",
    }  
  })
  return (
    <>
      <form>

        <InputFlex>
          <div>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputStyled 
              type="email" 
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your Email" />
          </div>
          <div>
            <LabelStyled htmlFor="password">Password</LabelStyled> 
            <InputStyled 
              type="password" 
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your password" />
          </div>

        </InputFlex>

        <ButtonStyled>Sign In</ButtonStyled>

      </form>

      <OtherOption>
        <span>or</span>
        <Link to="/signup" alt="dd">Sign Up</Link>
      </OtherOption>

    </>
  )
}

export default SignInForm