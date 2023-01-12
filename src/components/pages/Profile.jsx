import Accordion from "../myaccount/Accordion"
import { AccordionsContainer, BackgroundDiv, LogOutButton, PageTitle } from "../myaccount/myaccount.styled"
import PersonalInfoForm from "../forms/PersonalInfoForm"
import ChangePasswordForm from "../forms/ChangePasswordForm"
import ProfileImageForm from "../forms/ProfileImageForm";
import { userLogOut } from "../../redux/userRedux";
import { useDispatch } from "react-redux";


function Profile() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(userLogOut());
  }

  return (
    <BackgroundDiv>
      <PageTitle>My Account</PageTitle>
        <AccordionsContainer>
          {/* Profile Photo */}
          <Accordion label="Profile photo">
            <ProfileImageForm />
          </Accordion>
          {/* Personal Info */}
          <Accordion label="Personal info">
           <PersonalInfoForm />
          </Accordion>
          {/* Change Password */}
          <Accordion label="Change password">
           <ChangePasswordForm />
          </Accordion>
          <LogOutButton type="button" onClick={handleClick}>Log Out</LogOutButton>
        </AccordionsContainer>
    </BackgroundDiv>
  )
}

export default Profile