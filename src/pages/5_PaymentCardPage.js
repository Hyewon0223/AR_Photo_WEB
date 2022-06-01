
import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import BaseElement from "../components/BaseElement";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState} from "react";

export const PaymentCardPage = () => {
    const [money, setMoney] = useState(4000);
    const navigate = useNavigate();

    useEffect(()=>{
        if (money === 0) navigate("/SelectAR");
    },[money, navigate])

    return <div>
        <BaseElement isTimer onBackClick={()=>navigate("/SelectPayment")}>
            <ChildrenTitle>카드를 하단에 투입해주세요</ChildrenTitle>
            <ChildrenSubTitle>불빛이 나는 곳에 넣어주세요</ChildrenSubTitle>
            <Wrapper>
                <MoneyBox onClick={()=>setMoney(money-1000)}>{money}</MoneyBox>
                <Text>원이 결제됩니다.</Text>
            </Wrapper>
        </BaseElement>
    </div>
}

export default PaymentCardPage;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

const MoneyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 412px;
  height: 209px;
  background: #7798C9;
  border: 5px solid #678AC0;
  border-radius: 50px;
  font-family: 'ONE Mobile POP',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 104px;
  line-height: 114px;
  color: #FFFFFF;
  cursor: pointer;
`
const Text = styled.div`
  font-family: 'ONE Mobile POP',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 88px;
  color: #2C2C2C;

`