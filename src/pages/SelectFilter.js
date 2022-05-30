import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";

export const SelectFilter = () => {
    return <BaseElement onBackClick={()=>console.log("이전")} etc="다음" onEtcClick={()=>console.log("다음")}>
        <ChildrenTitle>사진의 필터를 골라주세요</ChildrenTitle>
        <ChildrenSubTitle/>
    </BaseElement>
}