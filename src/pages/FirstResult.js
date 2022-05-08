import {useLocation} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import styled from "styled-components";
import BaseButton from "../components/BaseButton";

export const FirstResult = () => {
    const location = useLocation();
    console.log(location);
    return <>
        <BaseElement>
            <ChildrenTitle mt="57px">촬영 결과를 확인해주세요</ChildrenTitle>
            <ChildrenSubTitle>1번 다시 찍을 기회가 있습니다</ChildrenSubTitle>
            <Wrapper>
                {location.state.map((imgUrl)=>{
                   return <ResultImg key={`photo-result-${imgUrl}`} imgSrc={imgUrl}/>
                })}
            </Wrapper>
            <ButtonContainer>
                <BaseButton name="한 번 다시 촬영 하기" onClick={()=>console.log("재촬영")}/>
                <BaseButton dark name="프레임 선택하러 가기" onClick={()=>console.log("프레임 선택")}/>
            </ButtonContainer>
        </BaseElement>
    </>
}

export default FirstResult;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 46px;
  width: 100%;
`
const ResultImg = styled.div`
  width: 100%;
  padding-top: 30%;
  border-radius: 24px;
  background-size: cover;
  background-image: url(${props=>props.imgSrc});
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  padding-bottom: 50px;
`