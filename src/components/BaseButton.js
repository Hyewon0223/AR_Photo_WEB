import styled from "styled-components";

export const BaseButton = ({font, dark, name, onClick}) => {
    return <Container dark={dark} onClick={onClick}>
        <Text font={font} dark={dark}>{name}</Text>
    </Container>
}

export default BaseButton

const Container = styled.div`
  padding: 0 35px;
  height: 70px;
  background: ${props=>props.dark? "#7798C9": "rgba(23, 71, 195, 0.06)"};
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Text = styled.div`
  font-family: ${props=>props.font? 'ONE Mobile POP':'Pretendard'}, sans-serif;
  font-style: normal;
  font-weight: ${props=>props.font? 400:700};
  font-size: 40px;
  line-height: 44px;
  color: ${props=>props.dark? "#FFFFFF":"#7798C9"};
`