import {useNavigate} from "react-router-dom";
import BaseElement from "../components/BaseElement";
import {Camera} from "react-camera-pro";
import React, {useRef, useState} from "react";
import styled from "styled-components";
import {Category, CategoryContainer, SelectWrapper} from "./11_SelectFrame";
import {SelectCheck} from "./1_PeopleNumPage";
import check from "../assets/Check.png";
import arPink from "../assets/ar_pink.png";
import arPhotoBubble from "../assets/ar_photoBubble.png";
import arEx from "../assets/ar_ex.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import person from "../assets/Person.png";
import personActive from "../assets/ActivePerson.png"

export const ChooseARPage = () => {
    const navigate = useNavigate();
    const camera = useRef(null);
    const [category, setCategory] = useState(0);
    const [detail, setDetail] = useState([arPink,arPink,arPink,arPink,arPink,arPink]);
    const [select, setSelect] = useState();
    const [personActive, setPersonActive] = useState(0);
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
    };
    const data = [
        {
            category: "머리띠",
            detail : [arPink,arPink,arPink,arPink,arPink,arPink, arPink,arPink]
        },
        {
            category: "안경",
            detail : [arPhotoBubble,arPhotoBubble,arPhotoBubble]
        },
        {
            category: "이모지",
            detail : [arEx, arEx, arEx,arEx,arEx,arEx,arEx]
        },
    ]
    const onCategoryClick = (idx, detail) => {
        setCategory(idx);
        setDetail(detail)
    }
    const onBoxClick = (idx) => {
        setSelect(idx);
        localStorage.setItem("arCategory",category);
        localStorage.setItem("arDetail",detail);
        setTimeout(function () {
            // navigate("/SelectFilter", {state: location.state});
        }, 500);
    }
    return (
        <BaseElement isTimer onBackClick={()=>navigate("/SelectAR")} etc={select !== undefined && "다음"} onEtcClick={()=>navigate("/Camera")}>
            <CameraContainer>
                <CameraWrapper>
                    <Camera ref={camera} aspectRatio={5/3} errorMessages="error"/>
                </CameraWrapper>
                <ApplyContainer>
                    <MainText>누구에게 소품을 입힐까요?</MainText>
                    <SubText>서있는 순서대로 소품이 적용됩니다.</SubText>
                    <PersonWrapper>
                        {[0,1,2].map((active, idx)=>{
                            return <Person isActive={personActive===idx} onClick={()=>setPersonActive(idx)}>{idx}</Person>
                        })}
                    </PersonWrapper>
                </ApplyContainer>
            </CameraContainer>
            <SelectWrapper>
                <ARCategoryContainer mb="41px">
                    {data.map((data,idx)=>{
                        return <ARCategory isActive={category===idx} onClick={()=>onCategoryClick(idx, data.detail)}>{data.category}</ARCategory>
                    })}
                </ARCategoryContainer>

                <ARContainer>
                    {detail.map((data, idx)=>{
                        return <ARBox onClick={()=>onBoxClick(idx)} isActive={select===idx} imgUrl={data}>
                            <BackImg imgUrl={data}/>
                            {select===idx ?
                                <SelectCheck src={check}/>
                                : null
                            }
                        </ARBox>
                    })}
                </ARContainer>
                {/*<StyledSlider {...settings}>*/}
                {/*    {detail.map((img,idx)=>{*/}
                {/*        return <ARBox onClick={()=>onBoxClick(idx)} isActive={select===idx}>*/}
                {/*            <BackImg imgUrl={img}/>*/}
                {/*            {select===idx ?*/}
                {/*                <SelectCheck src={check}/>*/}
                {/*                : null*/}
                {/*            }*/}
                {/*        </ARBox>*/}
                {/*    })}*/}
                {/*</StyledSlider>*/}
            </SelectWrapper>
        </BaseElement>
    );
}

const CameraContainer = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CameraWrapper = styled.div`
  width: 50%;
  margin: auto;
`
const ApplyContainer = styled.div`
  background: #7798C9;
  backdrop-filter: blur(4px);
  border-radius: 50px;
  height: 420px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const PersonWrapper = styled.div`
  gap: 15px;
  margin-top: 45px;
  display: flex;
  justify-content: center;
`
const Person = styled.div`
  width: 120px;
  height: 132px;
  background: url(${props=>props.isActive? personActive:person}) no-repeat center;
  background-size: cover;
  font-family: 'ONE Mobile POP', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 50px;
  color: ${props=>props.isActive? "#5A79C7":"#FFFFFF"};
  display: flex;
  justify-content: center;
  padding-top: 10px;
  cursor: pointer;
`
const ARCategoryContainer = styled(CategoryContainer)`
  justify-content: flex-start;
`
const ARCategory = styled(Category)`
  width: 170px;
`
const ARBox = styled.div`
  position: relative;
  background: ${props=>props.isActive? 'rgba(119, 152, 201, 0.78)' : "linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%)"};
  border: 5px solid ${props=>props.isActive?"#678AC0":"#FFFFFF"};
  border-radius: 32px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`
const StyledSlider = styled(Slider)`
  .slider .slick-list {
    margin:0 -20px;
  }
  .slick-slide {
    margin:0 10px;
  }
`;
const BackImg = styled.div`
  position: relative;
  border-radius: 32px;
  width: 150px;
  padding-top: 150px;
  background: url(${props=>props.imgUrl}) no-repeat center;
  background-size: cover;
  margin: auto;
`
const ARContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: auto;
`