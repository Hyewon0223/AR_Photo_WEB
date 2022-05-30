import {useLocation, useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle, RelativeContainer} from "./PeopleNumPage";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Frame34} from "../components/Layout/Frame34";

export const FirstResult = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [select, setSelect] = useState([]);

    useEffect(()=>{

    },[select])

    const onImgClick = (idx) => {
        if (select.length < 4) {
            setSelect([...select, idx]);
        }
    }

    const onSelectClick = (idx) => {
        if (select.indexOf(idx) !== -1) {
            setSelect(select.filter((value) => value !== idx));
        }
    }

    const onNextClick = () => {
        console.log(select);
        if (select.length === 3){
            localStorage.setItem("selectIdx",select);
            navigate('/SelectFrame', {state: location.state});
        }
    }

    return <>
        <BaseElement etc="다음" onEtcClick={onNextClick}>
            <ChildrenTitle mt="57px">출력할 사진을 선택하세요</ChildrenTitle>
            <ChildrenSubTitle/>
            <Container>
                <Frame34 cnt={3} imgArray={select}/>
                <Wrapper>
                    {location.state.map((imgUrl, idx)=>{
                        return <RelativeContainer>
                            <ResultImg key={`photo-result-${imgUrl}`} imgSrc={imgUrl} onClick={()=>onImgClick(idx)}/>
                            {select.indexOf(idx) !== -1?
                                <SelectImg onClick={()=>onSelectClick(idx)}>{select.indexOf(idx)+1}</SelectImg>
                                : null
                            }
                        </RelativeContainer>
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
  padding-top: 120%;
  border-radius: 24px;
  background-size: cover;
  background-image: url(${props=>props.imgSrc});
  cursor: pointer;
`
const SelectImg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(119, 152, 201, 0.78);
  border: 5px solid #678AC0;
  border-radius: 24px;
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;
`