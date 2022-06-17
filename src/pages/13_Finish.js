import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import styled from "styled-components";
import QRGenerator from "../components/QRGenerator";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import {useEffect, useState} from "react";
import {Frame41} from "../components/Layout/Frame41";

export const Finish = () => {
    const [QRInfo, setQRInfo] = useState();
    const onDownloadBtn = () => {
        domtoimage
            .toBlob(document.querySelector('.frame'))
            .then((blob) => {
                saveAs(blob, 'PhotoBubble.png')
            });
    };
    useEffect(()=>{
        domtoimage.toPng(document.querySelector('.frame'))
            .then(function(dataUrl) {
                setQRInfo(dataUrl)
        })
        onDownloadBtn()
    },[])

    return <BaseElement>
        <ChildrenTitle mt="63px">사진이 다음과 같이 출력중입니다</ChildrenTitle>
        <ChildrenSubTitle>
            {localStorage.getItem('checkSave') !== "true"? "사진을 바로 저장하고 싶다면 앱에서 QR코드를 인식해주세요":"앱에서도 확인할 수 있습니다."}
        </ChildrenSubTitle>
        <Container>
            <FrameWrapper className='frame'>
                <Frame41 backgroundImg={localStorage.getItem('frame2')} cnt={4} imgArray={localStorage.getItem('selectIdx').split(',')}/>
            </FrameWrapper>
            {localStorage.getItem('checkSave') !== "true" && <QRGenerator info={QRInfo}/>}
        </Container>
    </BaseElement>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 100px;
`
const FrameWrapper = styled.div`
  width: 350px;
  height: 530px
`
