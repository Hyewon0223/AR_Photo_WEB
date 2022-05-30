import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

export const SelectFrame = () => {
    const location = useLocation();

    return <BaseElement onBackClick={()=>console.log("이전")} etc="다음" onEtcClick={()=>console.log("다음")}>
        <ChildrenTitle>어떤 프레임에 사진을 담을까요?</ChildrenTitle>
        <ChildrenSubTitle/>
        <Container>

        </Container>
    </BaseElement>
}

const Container = styled.div` 
  display: flex;
  justify-content: center;
  width: 85%;
  margin: auto;
  gap: 80px;
`