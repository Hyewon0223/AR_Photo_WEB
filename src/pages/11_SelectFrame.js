import BaseElement from "../components/BaseElement";
import {ChildrenTitle, SelectCheck} from "./1_PeopleNumPage";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {Frame34} from "../components/Layout/Frame34";
import {useState} from "react";
import check from "../assets/Check.png";

export const SelectFrame = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [category, setCategory] = useState(0);
    const [detail, setDetail] = useState(["버블1", "버블2", "버블3", "버블4", "버블5", "버블6"]);
    const [select, setSelect] = useState();

    const data = [
        {
            category: "AR 프레임",
            detail : ["버블1", "버블2", "버블3", "버블4", "버블5", "버블6"]
        },
        {
            category: "기본",
            detail : ["벚꽃1", "벚꽃2", "벚꽃3", "벚꽃4", "벚꽃5", "벚꽃6"]
        },
        {
            category: "어쩌구",
            detail : ["어쩌구1", "어쩌구2", "어쩌구3", "어쩌구4", "어쩌구5", "어쩌구6"]
        },
    ]
    const onCategoryClick = (idx, detail) => {
        setCategory(idx);
        setDetail(detail)
    }
    const onBoxClick = (idx) => {
        setSelect(idx);
        setTimeout(function () {
            navigate("/SelectFilter", {state: location.state});
        }, 500);
    }
    return <BaseElement onBackClick={()=>navigate("/ReResult", {state: location.state})} etc="다음" onEtcClick={()=>console.log("다음")}>
        <ChildrenTitle>어떤 프레임에 사진을 담을까요?</ChildrenTitle>
        <Container>
            <Frame34 cnt={3} imgArray={localStorage.getItem('selectIdx').split(',')}/>
            <SelectWrapper>
                <CategoryContainer>
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
        </Container>
    </BaseElement>
}

const Container = styled.div` 
  display: flex;
  justify-content: center;
  width: 85%;
  margin: auto;
  gap: 140px;
`
export const SelectWrapper = styled.div`
  width: 80%;
`
export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%);
  border-radius: 26px;
  width: 100%;
  height: 66px;
  margin-bottom: ${props=>props.mb || "52px"};
`
export const Category = styled.div`
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.03em;
  height: 66px;
  border-radius: 26px;
  background: ${props=>props.isActive && "linear-gradient(0deg, #678AC0, #678AC0), linear-gradient(80.77deg, rgba(251, 251, 253, 0.66) 27.85%, rgba(251, 251, 253, 0) 91.1%)"};
  color: ${props=>props.isActive? "#ffffff":"#B7B7B7"};
  width: 33%;
  cursor: pointer;
`
export const DetailContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  margin: auto;
  column-gap: 70px;
  row-gap: 50px;
  width: 100%;
`
export const DetailBox = styled.div`
  position: relative;
  background: ${props=>props.isActive? 'rgba(119, 152, 201, 0.78)' : "linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%)"};
  border: 5px solid ${props=>props.isActive?"#678AC0":"#FFFFFF"};
  border-radius: 32px;
  width: 90%;
  padding-top: 35%;
  padding-bottom: 35%;
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.03em;
  color: #B7B7B7;
  cursor: pointer;
`