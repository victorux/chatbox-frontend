import profileImg from "../../assets/images/profile.jpg"
import Accordion from "../myaccount/Accordion"
import Button from "../button/Button"
import { AccordionsContainer, BackgroundDiv, ContainerProfilePhoto, LogOutButton, PageTitle } from "../myaccount/myaccount.styled"
import PersonalInfoForm from "../forms/PersonalInfoForm"
import ChangePasswordForm from "../forms/ChangePasswordForm"

function Profile() {
  return (
    <BackgroundDiv>
      <PageTitle>My Account</PageTitle>
        <AccordionsContainer>
          {/* Profile Photo */}
          <Accordion label="Profile photo">
            <ContainerProfilePhoto>
              <img src={profileImg} alt="img" />
              <Button type="primaryWhiteBg">Upload Photo</Button>
            </ContainerProfilePhoto>
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