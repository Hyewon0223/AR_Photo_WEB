import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import {useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import styled from "styled-components";
import {PaymentChoice} from "../components/PaymentChoice";
import {useEffect, useState} from "react";
import Card from "../assets/Card.png";
import Cash from "../assets/Cash.png";

export const SelectPayment = () => {
    const navigate = useNavigate();
    const [money, setMoney] = useState(0);

    useEffect(()=>{
        setMoney(4000);
    }, [])

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfSelectPhoto")}>
            <ChildrenTitle>결제 방법 선택해주세요</ChildrenTitle>
            <ChildrenSubTitle>결제금액은 {money}원 입니다.</ChildrenSubTitle>
            <Wrapper>
                <PaymentChoice name="카드" imgSrc={Card} onClick={()=>navigate('/selectPayment/card')}/>
                <PaymentChoice name="현금" imgSrc={Cash} onClick={()=>navigate('/selectPayment/cash')}/>
            </Wrapper>
        </BaseElement>
        </>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  width: 70%;
  margin: auto;
`