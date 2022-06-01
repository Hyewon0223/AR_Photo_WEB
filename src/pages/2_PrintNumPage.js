import BaseElement from "../components/BaseElement";
import { useNavigate } from "react-router-dom";
import {SelectBox} from "../components/SelectBox";
import {useState} from "react";
import {ChildrenTitle, ChildrenSubTitle, SelectWrapper, SelectCheck, RelativeContainer} from "./1_PeopleNumPage";
import check from "../assets/Check.png";

export const PrintNumPage = () => {
    const [selectNum, setSelectNum] = useState();
    const navigate = useNavigate();

    const onBoxClick = (num) => {
        setSelectNum(num);
        setTimeout(function () {
            navigate("/NumOfSelectPhoto");
        }, 500);
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPeople")}>
            <ChildrenTitle>몇장 뽑을까요?</ChildrenTitle>
            <ChildrenSubTitle>원하시는 출력장수를 선택해주세요.</ChildrenSubTitle>
            <SelectWrapper>
                {[1,2,3,4,5].map((num)=> {
                    return <RelativeContainer>
                        <SelectBox key={`printNum-${num}`}
                                   selectNum={selectNum} name={num} unit="장"
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

export default PrintNumPage;
