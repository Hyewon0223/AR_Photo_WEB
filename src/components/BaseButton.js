import styled from "styled-components";

export const BaseButton = ({name, onClick}) => {
    return <Container onClick={onClick}>
        <Text>{name}</Text>
    </Container>
}

export default BaseButton

const Container = styled.div`
  padding: 0 35px;
  height: 70px;
  background: #F5F5F5;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36.4583px;
  line-height: 44px;
  color: #676767;
`