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
`

const Content = styled.div`
  flex: 5 1;

  h1 {
    font-size: ${({theme}) => theme.fontSize._1000};
  }

  p {
    font-size: ${({theme}) => theme.fontSize._400};
    max-width: 560px;
    margin: 34px 0;
    color: ${({theme}) => theme.color.gray};
    flex-grow: 1;
  }

  
`

const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3 1;
`


function Home() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <h1>Welcome to ChatBox App!</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <Button type="primary">Start Chat Now. It's Free!</Button>
        </Content>
        <HeroImage>
          <img src={heroImage} alt="" />
        </HeroImage>
      </Container>
    </Wrapper>
  )
}

export default Home;