import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import BaseButton from "./BaseButton";
import CheckImg from "../assets/CheckBox.svg";
import PhotoBubble from "../assets/PHOTOBUBBLE.png";
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
            <Logo imgURL={PhotoBubble}/>
            {isTimer && <BaseButton font name={`남은 시간 ${min}:${sec}`}/>}
        </Header>
        <Wrapper isExist={onBackClick || etc || isCheck}>
            {children}
        </Wrapper>
        <Footer isExist={onBackClick || etc || isCheck}>
            {onBackClick && <BaseButton name="이전" onClick={onBackClick}/>}
            {etc && <><div/><BaseButton name={etc} onClick={onEtcClick}/></>}
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
  padding: 39px 40px 40px 40px;
  background: linear-gradient(198.19deg, rgba(212, 217, 255, 0.81) 3.45%, rgba(232, 236, 255, 0.81) 28.13%, rgba(145, 183, 255, 0.81) 75.96%), linear-gradient(180deg, rgba(229, 241, 255, 0.2) 0%, rgba(221, 229, 250, 0.2) 100%), #E1E0E0;
  background-blend-mode: overlay, normal, normal;
`
export const Header = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34.3007px;
  line-height: 41px;
  color: #000000;
`
export const Logo = styled.div`
  width: 348px;
  height: 35.16px;
  background: url(${props=>props.imgURL}) no-repeat;
  background-size: contain;
`
const Wrapper = styled.div`
  height: ${props=>props.isExist? "calc(100vh - 190px)" : "calc(100vh - 120px)"};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Footer = styled.div`
  height: ${props=>props.isExist && "70px"};
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
    background-color: #678AC0;
  }
\` 
`
