import styled from "styled-components";

export const Choice = ({name, onClick}) => {
    return <Container onClick={onClick}>
        <Text>{name}</Text>
    </Container>
}

const Container = styled.div`
  background: #DCDCDC;
  border-radius: 36px;
  width: 100%;
  max-width: 474px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto;
  &:after{
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`
const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #2C2C2C;
  white-space: pre-line;
  text-align: center;
`