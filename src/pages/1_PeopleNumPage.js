import BaseElement from "../components/BaseElement";
import { useNavigate } from "react-router-dom";
import {SelectBox} from "../components/SelectBox";
import styled from "styled-components";
import {useState} from "react";
import check from "../assets/Check.png";

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
            <ChildrenTitle>몇명이서 찍을까요?</ChildrenTitle>
            <ChildrenSubTitle/>
            <SelectWrapper>
                {[null,1,2,3,null].map((num)=> {
                    return <RelativeContainer>
                        <SelectBox key={`peopleNum-${num}`} visible={!num}
                                   selectNum={selectNum} name={num} unit="명"
                                   onClick={()=>onBoxClick(num)}/>
                        {selectNum === num ?
                            <SelectCheck src={check}/>
                            : null
                        }
                    </RelativeContainer>
                })}
            </SelectWrapper>
        </BaseElement>
    </>
}

export default PeopleNumPage;

export const ChildrenTitle = styled.div`
  margin-top: ${props=>props.mt || "110px"};
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  letter-spacing: 0.03em;
  color: #000000;
  margin-bottom: 21px;
`

export const ChildrenSubTitle = styled.div`
  font-family: 'Pretendard', sans-serif;
  height: 45px;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  color: #2C2C2C;
`
export const SelectWrapper = styled.div`
  display: flex;
  gap: 36px;
  margin: auto;
  width: 90%;
`
export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`
export const SelectCheck = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`