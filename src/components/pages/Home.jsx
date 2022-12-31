import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import heroImage from '../../assets/images/homeShapes.svg';

import styled from 'styled-components';
import { device } from '../styles/breakpoints';


const Wrapper = styled.div`
  width:  100vw;
  height: calc(100vh - 112px);
  padding: 0 40px;
  overflow: hidden;

  @media ${device.tablet}{
    height: calc(100vh - 88px);
  }

  @media ${device.mobileL}{
    height: auto;
  }
`

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 1400px;
  pad: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet}{
    margin-top: 40px;
    flex-direction: column-reverse;
    gap: 60px;
    height: auto;
  }

  @media ${device.tablet}{
    gap: 90px;
  }

`

const Content = styled.div`
  flex: 5 1;
  transform: translateY(-66px);

  @keyframes content {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  animation-name: content;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;

  @media ${device.tablet}{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: ${({theme}) => theme.fontSize._1000};

    @media ${device.laptopL}{
      font-size: ${({theme}) => theme.fontSize._900};
    }

    @media ${device.laptop}{
      font-size: ${({theme}) => theme.fontSize._800};
    }

    @media ${device.tablet}{
      text-align: center;
      font-size: ${({theme}) => theme.fontSize._700};
    }
  }

  p {
    font-size: ${({theme}) => theme.fontSize._400};
    max-width: 560px;
    margin: 34px 0;
    color: ${({theme}) => theme.color.gray};
    flex-grow: 1;

    @media ${device.laptopL}{
     max-width: 470px;
    }

    @media ${device.tablet}{
      text-align: center;
      font-size: ${({theme}) => theme.fontSize._300};
    }
  }
`

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3 1;
  transform: translateY(-50px);

  @media ${device.tablet}{
    transform: none;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  img {

    animation-name: rotate;
    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

    @media ${device.laptopL}{
      transform: scale(0.8);
    }

    @media ${device.tablet}{
      transform: scale(0.6);
    }

    @media ${device.mobileL}{
      transform: none;
      width: 50%;
    }
  }
`


function Home() {
  const navigate = useNavigate();
  const handlerButton = () => navigate('/signin');

  return (
    <Wrapper>
      <Container>
        <Content>
          <h1>Welcome to ChatBox App!</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <Button type="primary" onClick={handlerButton}>Start Chat Now. It's Free!</Button>
        </Content>
        <HeroImage>
          <img src={heroImage} alt="" />
        </HeroImage>
      </Container>
    </Wrapper>
  )
}

export default Home;