import {useNavigate} from "react-router-dom";
import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import BaseElement from "../components/BaseElement";
import QRScanner from "../components/QRScanner";
import {useEffect, useState} from "react";

export const GetQRPage = () => {
    const navigate = useNavigate();
    const [qrScan, setQrScan] = useState('');

    useEffect(()=>{
        console.log(qrScan);
        if (qrScan !== '') navigate("/Camera")
    },[qrScan, navigate])
    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/SelectPayment")} isCheck>
            <ChildrenTitle>APP 에서 AR필터를 불러오세요!</ChildrenTitle>
            <ChildrenSubTitle>아래 카메라에 QR 코드를 인식해주세요</ChildrenSubTitle>
            <QRScanner qrScan={qrScan} setQrScan={(result)=>setQrScan(result)}/>
        </BaseElement>
    </>
}