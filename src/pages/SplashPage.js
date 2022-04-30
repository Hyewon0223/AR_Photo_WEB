import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const SplashPage = () => {
    const navigate = useNavigate();

    return <Container onClick={()=>navigate('/NumOfPeople')}>
        <Title>AR PHOTO</Title>
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
`

const Title = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 178.196px;
  line-height: 214px;
  color: #000000;
`

const SubTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #787878;
`