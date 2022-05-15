import {useLocation, useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./PeopleNumPage";
import styled from "styled-components";
import {useState} from "react";

export const FirstResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [select, setSelect] = useState([]);

    const onImgClick = (idx) => {
        setSelect([...select, idx])
    }

    return <>
        <BaseElement onBackClick={()=>navigate('/')} etc="다음" onEtcClick={()=>navigate('/')}>
            <ChildrenTitle mt="57px">출력할 사진을 선택하세요</ChildrenTitle>
            <ChildrenSubTitle>선택 장수에 따라 프레임이 달라집니다.</ChildrenSubTitle>
            <Container>
                <Layout/>
                <Wrapper>
                    {location.state.map((imgUrl, idx)=>{
                        return <ResultImg key={`photo-result-${imgUrl}`} imgSrc={imgUrl}/>
                    })}
                </Wrapper>
            </Container>

        </BaseElement>
    </>
}

export default FirstResult;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  margin: auto;
  gap: 80px;
`
const Layout = styled.div`
  //width: 272px;
  //height : 410px;
  width: 35%;
  height: 100%;
  background: #C4C4C4;
  border-radius: 12px;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto;
  margin: auto;
  gap: 35px;
  width: 100%;
`
const ResultImg = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 24px;
  background-size: cover;
  background-image: url(${props=>props.imgSrc});
`