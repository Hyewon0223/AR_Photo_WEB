import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import BaseElement from "../components/BaseElement";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

export const PaymentCardPage = () => {
    const [money, setMoney] = useState(4000);
    const navigate = useNavigate();

    return <Container onClick={()=>navigate('/')}>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfSelectPhoto")}>
            <ChildrenTitle>카드를 하단에 투입해주세요</ChildrenTitle>
            <ChildrenSubTitle>불빛이 나는 곳에 넣어주세요</ChildrenSubTitle>
            <Wrapper>
                <MoneyBox>{money}</MoneyBox>
                <Text>원이 결제됩니다.</Text>
            </Wrapper>
        </BaseElement>
    </Container>
}

export default PaymentCardPage;

const Container = styled.div`

`
const Wrapper = styled.div`

`

const MoneyBox = styled.div`

`
const Text = styled.div`

`