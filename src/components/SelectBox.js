import styled from "styled-components";

export const SelectBox = ({visible, selectNum, name, unit, onClick}) => {
    return <Container visible={visible} onClick={onClick} isColor={selectNum===name}>
        <Text>{name}{unit}</Text>
    </Container>
}

const Container = styled.div`
  width: 100%;
  background: ${props=>props.isColor? 'rgba(119, 152, 201, 0.78)' : "linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%)"};
  border: 5px solid ${props=>props.isColor?"##678AC0":"#FFFFFF"};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20%;
  padding-bottom: 20%;
  cursor: pointer;
  visibility: ${props=>props.visible && "hidden"};
`
const Text = styled.div`
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 57px;
  color: #4268A0;
`