import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import BaseElement from "../components/BaseElement";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";

export const PaymentCashPage = () => {
    const [money, setMoney] = useState(4000);
    const [submit, setSubmit] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        if (money === 0) navigate("/SelectAR");
    },[money, navigate])

    const onMoneyClick = () => {
        setMoney(money-1000);
        setSubmit(submit+1000);
    }

    return <div>
        <BaseElement isTimer onBackClick={()=>navigate("/SelectPayment")}>
            <ChildrenTitle>현금을 하단에 투입해주세요</ChildrenTitle>
            <ChildrenSubTitle/>
            <Container>
                <Wrapper>
                    <MoneyBox isWhite>{submit}</MoneyBox>
                    <Text>원 입금되었습니다.</Text>
                </Wrapper>
                <Wrapper>
                    <MoneyBox onClick={()=>onMoneyClick()}>{money}</MoneyBox>
                    <Text>원 더 입금해주세요.</Text>
                </Wrapper>
            </Container>
        </BaseElement>
    </div>
}

export default PaymentCashPage;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 43px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
`

const MoneyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 412px;
  height: 209px;
  background: ${props=>props.isWhite? "linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%)": "#7798C9"};
  border: 5px solid ${props=>props.isWhite?"#FFFFFF":"#7798C9"};
  border-radius: 28px;
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 104px;
  line-height: 114px;
  color: ${props=>props.isWhite? "#7798C9": "#ffffff"};
  cursor: pointer;
`
const Text = styled.div`
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 60px;
  line-height: 66px;
  color: #000000;

`