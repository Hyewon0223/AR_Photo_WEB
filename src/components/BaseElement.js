import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import BaseButton from "./BaseButton";

export const BaseElement = ({isTimer, onBackClick, etc, onEtcClick, children}) => {
    const [min, setMin] = useState(4);
    const [sec, setSec] = useState(59);
    const time = useRef(299);
    const timerID = useRef(null);

    useEffect(()=>{
        timerID.current = setInterval(()=>{
            setMin(parseInt(time.current / 60));
            const second = time.current % 60;
            if (second < 10) setSec(`0${second}`);
            else setSec(second);
            time.current -= 1;
        },1000);
        return () => clearInterval(timerID.current);
    }, []);

    // 제한시간 종료시
    useEffect(()=>{
        if (time.current <= 0){
            console.log("제한 시간 종료");
            clearInterval(timerID.current);
        }
    },[sec]);

    return <Container>
        <Header>
            <Text>AR PHOTO</Text>
            {isTimer && <Text>{min}:{sec}</Text>}
        </Header>
        <Wrapper>
            {children}
        </Wrapper>
        <Footer>
            {onBackClick && <BaseButton name="이전" onClick={onBackClick}/>}
            {etc && <BaseButton name={etc} onClick={onEtcClick}/>}
        </Footer>
    </Container>
}

export default BaseElement;

const Container = styled.div`
  margin: 39px 40px 40px 40px;
`
const Header = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34.3007px;
  line-height: 41px;
  color: #000000;
`
const Text = styled.div`

`
const Wrapper = styled.div`
  height: calc(100vh - 190px);
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`
const Footer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
`