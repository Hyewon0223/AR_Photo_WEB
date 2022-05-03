import BaseElement from "../components/BaseElement";
import { useNavigate } from "react-router-dom";
import {SelectBox} from "../components/SelectBox";
import styled from "styled-components";
import {useState} from "react";

export const PrintNumPage = () => {
    const [selectNum, setSelectNum] = useState(2);
    const navigate = useNavigate();

    const onBoxClick = (num) => {
        setSelectNum(num);
        navigate("/NumOfSelectPhoto");
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPeople")}>
            <ChildrenTitle>사진은 총 몇장 출력할까요?</ChildrenTitle>
            <ChildrenSubTitle>같은 사진이 총 {selectNum}장 선택됩니다.</ChildrenSubTitle>
            <SelectWrapper>
                {[1,2,3,4,5].map((num)=> {
                    return <SelectBox key={`printNum-${num}`}
                                      selectNum={selectNum} name={num} unit="장"
                                      onClick={()=>onBoxClick(num)}/>
                })}
            </SelectWrapper>
        </BaseElement>
    </>
}

export default PrintNumPage;

export const ChildrenTitle = styled.div`
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