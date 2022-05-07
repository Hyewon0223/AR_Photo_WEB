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
            <ChildrenSubTitle>불빛이 나는 곳에 넣어주세요</ChildrenSubTitle>
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
  width: 315px;
  height: 183px;
  background: ${props=>props.isWhite? "#F5F5F5": "#656565"};
  border-radius: 28px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  color: ${props=>props.isWhite? "#696969": "#ffffff"};
  cursor: pointer;
`
const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 62px;
  line-height: 74px;
  color: #2C2C2C;

`