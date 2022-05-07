import {useNavigate} from "react-router-dom";
import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import BaseElement from "../components/BaseElement";

export const GetQRPage = () => {
    const navigate = useNavigate();

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/SelectPayment")} isCheck>
            <ChildrenTitle>APP 에서 AR필터를 불러오세요!</ChildrenTitle>
            <ChildrenSubTitle>아래 카메라에 QR 코드를 인식해주세요</ChildrenSubTitle>
            
        </BaseElement>
    </>
}