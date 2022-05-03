import BaseElement from "../components/BaseElement";
import { useNavigate } from "react-router-dom";
import {SelectBox} from "../components/SelectBox";
import styled from "styled-components";
import {useState} from "react";

export const PeopleNumPage = () => {
    const [selectNum, setSelectNum] = useState();
    const navigate = useNavigate();

    const onBoxClick = (num) => {
        setSelectNum(num);
        setTimeout(function () {
            navigate("/NumOfPrintPhoto");
        }, 500);
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/")}>
            <ChildrenTitle>몇명이 찍나요?</ChildrenTitle>
            <ChildrenSubTitle>인원수를 말해주세요</ChildrenSubTitle>
            <SelectWrapper>
                {[1,2,3,4,5].map((num)=> {
                    return <SelectBox key={`peopleNum-${num}`}
                                      selectNum={selectNum} name={num} unit="명"
                                      onClick={()=>onBoxClick(num)}/>
                })}
            </SelectWrapper>
        </BaseElement>
    </>
}

export default PeopleNumPage;

export const ChildrenTitle = styled.div`
  margin-top: ${props=>props.mt || "110px"};
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #2C2C2C;
  margin-bottom: 21px;
`

export const ChildrenSubTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #2C2C2C;
`
export const SelectWrapper = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 87px;
`