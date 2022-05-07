import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import {useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import styled from "styled-components";
import {Choice} from "../components/Choice";
import {useEffect, useState} from "react";

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
                <Choice name="카드" onClick={()=>navigate('/selectPayment/card')}/>
                <Choice name="현금" onClick={()=>navigate('/selectPayment/cash')}/>
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