import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import {useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import styled from "styled-components";
import {Choice} from "../components/Choice";

export const SelectAR = () => {
    const navigate = useNavigate();

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/SelectPayment")}
                     etc="소품 없이 촬영" onEtcClick={()=>navigate("/Camera")}>
            <ChildrenTitle>촬영을 시작해요!</ChildrenTitle>
            <ChildrenSubTitle>ㅇㅇ에서만 만나는 안전하고 다양한 소품을 활용해보세요</ChildrenSubTitle>
            <Wrapper>
                <Choice name={"APP 에서\n불러오기"} onClick={()=>navigate('/SelectAR/App')}/>
                <Choice name={"AR 소품\n고르러가기"} onClick={()=>navigate('/SelectAR/Choose')}/>
            </Wrapper>
        </BaseElement>
    </>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  width: 50%;
  margin: auto;
`