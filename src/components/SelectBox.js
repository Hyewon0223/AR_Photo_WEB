import styled from "styled-components";

export const SelectBox = ({selectNum, name, unit, onClick}) => {
    return <Container onClick={onClick} isColor={selectNum===name}>
        <Text>{name}{unit}</Text>
    </Container>
}

const Container = styled.div`
  width: 160px;
  height: 130px;
  background: ${props=>props.isColor && '#DBDBDB'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #B8B8B8;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
`
const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  color: #000000;

`