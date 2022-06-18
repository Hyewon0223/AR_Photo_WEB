import styled from "styled-components";

export const ARChoice = ({name, imgSrc, onClick}) => {
    return <Container>
        <ImgWrapper onClick={onClick}>
            <ImgContainer src={imgSrc}/>
        </ImgWrapper>
        <Text>{name}</Text>
    </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ImgWrapper = styled.div`
  background: linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%);
  border: 5px solid #FFFFFF;
  border-radius: 50px;
  width: 412px;
  height: 314px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1224px){
    width: 280px;
    height: 210px;
  }
`
const ImgContainer = styled.img`
  @media only screen and (max-width: 1224px){
    width: 100px;
  }
`
const Text = styled.div`
  margin: 28px auto auto;
  font-family: 'ONE Mobile POP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  color: #2C2C2C;
  white-space: pre-line;
  text-align: center;
  @media only screen and (max-width: 1224px){
    font-size: 40px;
  }
`
