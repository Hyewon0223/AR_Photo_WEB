import BaseElement from "../components/BaseElement";
import { useNavigate } from "react-router-dom";
import {SelectBox} from "../components/SelectBox";
import {useState} from "react";
import {ChildrenTitle, ChildrenSubTitle, SelectWrapper} from "./PeopleNumPage";

export const PrintNumPage = () => {
    const [selectNum, setSelectNum] = useState(2);
    const navigate = useNavigate();

    const onBoxClick = (num) => {
        setSelectNum(num);
        navigate("/NumOfSelectPhoto");
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPeople")}>
            <ChildrenTitle>몇장 뽑을까요?</ChildrenTitle>
            <ChildrenSubTitle>사진의 출력장수를 말해주세요</ChildrenSubTitle>
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
