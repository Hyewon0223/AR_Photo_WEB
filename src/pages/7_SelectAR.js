import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import {useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import styled from "styled-components";
import {ARChoice} from "../components/ARChoice";
import Phone from "../assets/Phone.png";
import ChooseAR from "../assets/ChooseAR.png";

export const SelectAR = () => {
    const navigate = useNavigate();

    return <>
        <BaseElement isTimer etc="소품 없이 촬영" onEtcClick={()=>navigate("/Camera")}>
            <ChildrenTitle>촬영을 시작해요!</ChildrenTitle>
            <ChildrenSubTitle>포토버블에서만 만나는 안전하고 다양한 소품을 활용해보세요</ChildrenSubTitle>
            <Wrapper>
                <ARChoice name="APP에서 불러오기" imgSrc={Phone} onClick={()=>navigate('/SelectAR/App')}/>
                <ARChoice name="AR소품 고르기" imgSrc={ChooseAR} onClick={()=>navigate('/SelectAR/Choose')}/>
            </Wrapper>
        </BaseElement>
    </>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin: auto;
`