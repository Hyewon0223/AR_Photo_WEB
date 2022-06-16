import {useLocation, useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import {Camera} from "react-camera-pro";
import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Category, CategoryContainer, DetailBox, DetailContainer, SelectWrapper} from "./11_SelectFrame";
import {SelectCheck} from "./1_PeopleNumPage";
import check from "../assets/Check.png";

export const ChooseARPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState(0);
    const [detail, setDetail] = useState(["밝음", "어두움", "기본"]);
    const [select, setSelect] = useState();

    const data = [
        {
            category: "머리띠",
            detail : ["밝음", "어두움", "기본"]
        },
        {
            category: "안경",
            detail : ["흑백1","흑백2","흑백3"]
        },
        {
            category: "이모지",
            detail : ["어쩌구1", "어쩌구2", "어쩌구3"]
        },
    ]
    const onCategoryClick = (idx, detail) => {
        setCategory(idx);
        setDetail(detail)
    }
    const onBoxClick = (idx) => {
        setSelect(idx);
        localStorage.setItem("filter1",category);
        localStorage.setItem("filter2",detail);
        setTimeout(function () {
            // navigate("/SelectFilter", {state: location.state});
        }, 500);
    }
    return (
        <BaseElement isTimer onBackClick={()=>navigate("/SelectAR")}>
            <CameraContainer>
                <CameraWrapper>
                    <Camera ref={camera} aspectRatio={4/3} errorMessages="error"/>
                </CameraWrapper>
                <ApplyContainer>
                    <MainText>누구에게 소품을 입힐까요?</MainText>
                    <SubText>서있는 순서대로 소품이 적용됩니다.</SubText>
                </ApplyContainer>
            </CameraContainer>
            <SelectWrapper>
                <CategoryContainer mb="93px">
                    {data.map((data,idx)=>{
                        return <Category isActive={category===idx} onClick={()=>onCategoryClick(idx, data.detail)}>{data.category}</Category>
                    })}
                </CategoryContainer>

                <DetailContainer>
                    {detail.map((data, idx)=>{
                        return <DetailBox onClick={()=>onBoxClick(idx)} isActive={select===idx}>
                            {data}
                            {select===idx ?
                                <SelectCheck src={check}/>
                                : null
                            }
                        </DetailBox>
                    })}
                </DetailContainer>
            </SelectWrapper>
        </BaseElement>
    );
}

const CameraContainer = styled.div`
  margin: auto;
  height: 30%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CameraWrapper = styled.div`
  //margin: auto auto 25px;
  width: 100%;
  max-height: 90vh;
  margin: auto;
`
const ApplyContainer = styled.div`
  background: #7798C9;
  backdrop-filter: blur(4px);
  border-radius: 50px;
`
const MainText = styled.div`
  font-family: 'ONE Mobile POP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 42px;
  color: #FFFFFF;
`
const SubText = styled.div`
  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: rgba(255, 255, 255, 0.61);
`
