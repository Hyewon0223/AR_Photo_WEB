import styled from "styled-components";

export const BaseButton = ({dark, name, onClick}) => {
    return <Container dark={dark} onClick={onClick}>
        <Text dark={dark}>{name}</Text>
    </Container>
}

export default BaseButton

const Container = styled.div`
  padding: 0 35px;
  height: 70px;
  background: ${props=>props.dark? "#A3A3A3": "#F5F5F5"};
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
  color: ${props=>props.dark? "#FFFFFF":"#676767"};
`