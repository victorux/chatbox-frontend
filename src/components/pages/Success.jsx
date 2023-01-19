import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/Button";
import successImg from "../../assets/images/success.png"

const Wrapper = styled.div`
  max-width: 480px;
  margin: auto auto;
  display: flex;
  height: fit-content;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text-align: center;

  h1{
    letter-spacing: 0.5px;
    color: ${({theme}) => theme.color.primary};
  }

  p {
    letter-spacing: 0.35px;
    color: ${({theme}) => theme.color.gray};
  }
`

function Success() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }
  return (
    <Wrapper>
      <img src={successImg} alt="success" />
      <h1>Congratulation!</h1>
      <p>You have now successfully created an accout.</p>
      <Button onClick={handleClick}>Sign in here</Button>
    </Wrapper>
  )
}

export default Success;