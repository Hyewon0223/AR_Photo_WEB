
import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
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
  width: 408px;
  height: 237px;
  background: #656565;
  border-radius: 36px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 104px;
  line-height: 125px;
  color: white;
  cursor: pointer;
`
const Text = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  color: #2C2C2C;

`