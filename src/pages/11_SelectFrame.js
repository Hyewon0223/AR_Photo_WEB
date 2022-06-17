import BaseElement from "../components/BaseElement";
import {ChildrenTitle, SelectCheck} from "./1_PeopleNumPage";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import check from "../assets/Check.png";
import {Frame41} from "../components/Layout/Frame41";
import basic0 from "../assets/frameBackground/basic0.png";
import basic2 from "../assets/frameBackground/basic2.png";
import basic3 from "../assets/frameBackground/basic3.png";
import basic4 from "../assets/frameBackground/basic4.png";
import basic5 from "../assets/frameBackground/basic5.png";
import theme1 from "../assets/frameBackground/theme1.png";
import theme2 from "../assets/frameBackground/theme2.png";
import theme3 from "../assets/frameBackground/theme3.png";
import theme4 from "../assets/frameBackground/theme4.png";
import theme5 from "../assets/frameBackground/theme5.png";
import theme6 from "../assets/frameBackground/theme6.png";
import bubble1 from "../assets/frameBackground/bubble1.png";
import bubble2 from "../assets/frameBackground/bubble2.png";
import bubble3 from "../assets/frameBackground/bubble3.png";
import summer1 from "../assets/frameBackground/summer1.png";
import summer2 from "../assets/frameBackground/summer2.png";
import summer3 from "../assets/frameBackground/summer3.png";

export const SelectFrame = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [category, setCategory] = useState(0);
    const [detail, setDetail] = useState([basic0, basic2, basic3, basic4, basic5]);
    const [select, setSelect] = useState();
    const data = [
        {
            category: "기본",
            detail : [basic0, basic2, basic3, basic4, basic5]
        },
        {
            category: "테마",
            detail : [theme1, theme2, theme3, theme4, theme5, theme6]
        },
        {
            category: "버블",
            detail : [bubble1, bubble2, bubble3]
        },
        {
            category: "계절",
            detail : [summer1, summer2, summer3]
        },
    ]
    const onCategoryClick = (idx, detail) => {
        setCategory(idx);
        setDetail(detail)
    }
    const onBoxClick = (data) => {
        setSelect(data);
        localStorage.setItem("frame1",category);
        localStorage.setItem("frame2",data);
    }
    const onNextClick = () => {
        setTimeout(function () {
            navigate("/SelectFilter", {state: location.state});
        }, 500)
    }
    return <BaseElement onBackClick={()=>navigate("/ReResult", {state: location.state})} etc={select!==undefined && "다음"} onEtcClick={()=>onNextClick()}>
        <ChildrenTitle mt="50px">어떤 프레임에 사진을 담을까요?</ChildrenTitle>
        <Container>
            <Frame41 backgroundImg={select} cnt={4} imgArray={localStorage.getItem('selectIdx').split(',')}/>
            <SelectWrapper>
                <CategoryContainer>
                    {data.map((data,idx)=>{
                        return <Category w={25} isActive={category===idx} onClick={()=>onCategoryClick(idx, data.detail)}>{data.category}</Category>
                    })}
                </CategoryContainer>

                <DetailContainer>
                    {detail.map((data)=>{
                        return <DetailBox imgUrl={data} onClick={()=>onBoxClick(data)} isActive={select===data}>
                            {select===data ?
                                <SelectCheck isActive={select===data} src={check}/>
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
  gap: 100px;
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
  width: ${props=>props.w || 33}%;
  cursor: pointer;
`
export const DetailContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  margin: auto;
  column-gap: 40px;
  row-gap: 30px;
  width: 100%;
`
export const DetailBox = styled.div`
  position: relative;
  background: ${props=>props.isActive? 'rgba(119, 152, 201, 0.78)' : "linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%)"};
  border: 5px solid ${props=>props.isActive?"#678AC0":"#FFFFFF"};
  border-radius: 32px;
  width: 175px;
  height: 265px;
  //padding-top: 100%;
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
  background: url(${props=>props.imgUrl}) no-repeat center;
  background-size: 100% 100%;
`
