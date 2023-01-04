import { useFormik } from "formik"
import { Link } from "react-router-dom";
import { ButtonStyled, InputStyled, LabelStyled, InputFlex, OtherOption } from "./forms.styled";

function SignInForm() {
  const {values, handleChange}= useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      createPassword: "",
      reenterPassword: "",
    }  
  })
  return (
    <>
      <form>

        <InputFlex>
          {/* First Name */}
          <div>
            <LabelStyled htmlFor="firstName">First Name</LabelStyled>
            <InputStyled 
              type="text" 
              value={values.firstName}
              onChange={handleChange}
              id="firstName"
              placeholder="John" />
          </div>
          {/* Last Name */}
          <div>
            <LabelStyled htmlFor="lastName">Last Name</LabelStyled>
            <InputStyled 
              type="text" 
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
              placeholder="Doe" />
          </div>
          {/* Email */}
          <div>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputStyled 
              type="email" 
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="johndoe@example.com" />
          </div>
          {/* Create Password */}
          <div>
            <LabelStyled htmlFor="createPassword">Create a Password</LabelStyled> 
            <InputStyled 
              type="password" 
              value={values.createPassword}
              onChange={handleChange}
              id="createPassword"
              placeholder="Create your password" />
          </div>

          {/* Reenter Password */}
          <div>
            <LabelStyled htmlFor="createPassword">Reenter password</LabelStyled> 
            <InputStyled 
              type="password" 
              value={values.reenterPassword}
              onChange={handleChange}
              id="reenterPassword"
              placeholder="Reenter password" />
          </div>

        </InputFlex>

        <ButtonStyled>Sign Up</ButtonStyled>

      </form>

      <OtherOption>
        <span>or</span>
        <Link to="/signin" alt="dd">Sign In</Link>
      </OtherOption>

    </>
  )
}

export default SignInForm