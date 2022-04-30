import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle, SelectWrapper} from "./PeopleNumPage";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {SelectBox} from "../components/SelectBox";
import styled from "styled-components";

export const SelectNumPage = () => {
    const [selectNum, setSelectNum] = useState(2);
    const navigate = useNavigate();

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPrintPhoto")} etc={selectNum && "다음"} onEtcClick={()=>selectNum && navigate("/SelectPayment")}>
            <ChildrenTitle>사진은 총 몇개의 컷으로 구성할까요??</ChildrenTitle>
            <ChildrenSubTitle>하나의 사진이 {selectNum}개의 컷으로 구성됩니다</ChildrenSubTitle>
            <Wrapper>
                <ExampleLayout/>
                <SelectGridWrapper>
                    {[1,2,3,4,5,6].map((num)=> {
                        return <SelectBox key={`peopleNum-${num}`}
                                          selectNum={selectNum} name={num} unit="장"
                                          onClick={()=>setSelectNum(num)}/>
                    })}
                </SelectGridWrapper>
            </Wrapper>
        </BaseElement>
    </>
}

export default SelectNumPage;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 140px;
  align-items: center;
  justify-content: center;
`
const ExampleLayout = styled.div`
  background: black;
  width: 300px;
  height: 400px;
`
const SelectGridWrapper = styled(SelectWrapper)`
  margin-top: 0;
  display: grid;
  grid-template-columns: auto auto auto;
`
