import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import {Frame34} from "../components/Layout/Frame34";
import styled from "styled-components";
import QRGenerator from "../components/QRGenerator";

export const Finish = () => {
    return <BaseElement>
        <ChildrenTitle mt="63px">사진이 다음과 같이 출력중입니다</ChildrenTitle>
        <ChildrenSubTitle>
            {localStorage.getItem('checkSave') !== "true"? "사진을 바로 저장하고 싶다면 앱에서 QR코드를 인식해주세요":"앱에서도 확인할 수 있습니다."}
        </ChildrenSubTitle>
        <Container>
            <Frame34 cnt={3} imgArray={localStorage.getItem('selectIdx').split(',')}/>
            {localStorage.getItem('checkSave') !== "true" && <QRGenerator info={Frame34}/>}
        </Container>
    </BaseElement>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: auto;
  gap: 100px;
  height: 90%;
`
