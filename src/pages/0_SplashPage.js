import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import SplashImg from '../assets/SplashBackground.png';
import PhotoBubble from '../assets/PHOTOBUBBLE.png';

export const SplashPage = () => {
    const navigate = useNavigate();

    return <Container onClick={()=>navigate('/NumOfPeople')}>
        <BackgroundImg imgURL={SplashImg} />
        <Title imgURL={PhotoBubble}/>
        <SubTitle>화면을 터치해주세요!</SubTitle>
    </Container>
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  cursor: pointer;
  background: 40% 25%, linear-gradient(198.19deg, rgba(212, 217, 255, 0.81) 3.45%, rgba(232, 236, 255, 0.81) 28.13%, rgba(145, 183, 255, 0.81) 75.96%), linear-gradient(180deg, rgba(229, 241, 255, 0.2) 0%, rgba(221, 229, 250, 0.2) 100%), #E1E0E0;
  background-blend-mode: overlay, normal, normal;
`
const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: url(${props=>props.imgURL}) no-repeat center 20%;
`
const Title = styled.div`
  height: 110px;
  width: 971px;
  background-size: cover;
  background: url(${props=>props.imgURL}) no-repeat;
  z-index: 10;
`

const SubTitle = styled.div`
  font-family: 'ONE Mobile POP',sans-serif;
  font-weight: 500;
  font-size: 50px;
  line-height: 60px;
  margin-top: 50px;
  color: #787878;
`