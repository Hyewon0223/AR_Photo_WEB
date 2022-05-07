import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import BaseButton from "./BaseButton";
import CheckImg from "../assets/CheckBox.svg";
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const BaseElement = ({isTimer, onBackClick, etc, onEtcClick, children, isCheck}) => {
    const [min, setMin] = useState(4);
    const [sec, setSec] = useState(59);
    const [checkSave, setCheckSave] = useState(false);
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

    const onCheckChange = (e) => {
        setCheckSave(!e.target.checked);
    }

    return <Container>
        <Header>
            <div>AR PHOTO</div>
            {isTimer && <div>{min}:{sec}</div>}
        </Header>
        <Wrapper>
            {children}
        </Wrapper>
        <Footer>
            {onBackClick && <BaseButton name="이전" onClick={onBackClick}/>}
            {etc && <BaseButton name={etc} onClick={onEtcClick}/>}
            {isCheck &&
                <CheckWrapper>
                    <CheckBox type="checkbox" imgUrl={CheckImg}
                              value={checkSave} onChange={(event)=>onCheckChange(event)}
                    />
                    <div>촬영 후에 자동으로 어플에도 저장됩니다.</div>
                </CheckWrapper>
            }
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
const Wrapper = styled.div`
  height: calc(100vh - 190px);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Footer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
`
const CheckWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #7C7C7C;
  gap: 12px;
`
const CheckBox = styled.input`
  appearance: none;
  border: 1.5px solid #7D7D7D;
  border-radius: 12px;
  width: 64px;
  height: 64px;
  &:checked {
    border-color: transparent;
    background-image: url(${props=>props.imgUrl});
    background-size: 80% 80%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #7D7D7D;
  }

\` ;
`