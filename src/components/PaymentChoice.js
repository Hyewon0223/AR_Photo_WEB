import styled from "styled-components";

export const PaymentChoice = ({name, imgSrc, onClick}) => {
    return <Container onClick={onClick}>
        <ImgWrapper>
            <ImgContainer src={imgSrc}/>
        </ImgWrapper>
        <Text>{name}</Text>
    </Container>
}

const Container = styled.div`
  background: linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%);
  border: 5px solid #FFFFFF;
  border-radius: 50px;
  width: 412px;
  height: 412px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: auto;
  @media only screen and (max-width: 1224px){
    width: 300px;
    height: 300px;
  }
`
const ImgWrapper = styled.div`
  margin: auto auto 0;
`
const Text = styled.div`
  margin: 60px auto auto;
  font-family: 'ONE Mobile POP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  color: #2C2C2C;
  white-space: pre-line;
  text-align: center;
  @media only screen and (max-width: 1224px){
    margin: 30px auto auto;
  }
`
const ImgContainer = styled.img`
  @media only screen and (max-width: 1224px){
    width: 180px;
  }
`
