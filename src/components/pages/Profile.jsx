import Accordion from "../myaccount/Accordion"
import { AccordionsContainer, BackgroundDiv, LogOutButton, PageTitle } from "../myaccount/myaccount.styled"
import PersonalInfoForm from "../forms/PersonalInfoForm"
import ChangePasswordForm from "../forms/ChangePasswordForm"
import ProfileImageForm from "../forms/ProfileImageForm";


function Profile() {
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
          <LogOutButton>Log Out</LogOutButton>
        </AccordionsContainer>
    </BackgroundDiv>
  )
}

export default Profile