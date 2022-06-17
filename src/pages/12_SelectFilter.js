import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle, SelectCheck} from "./1_PeopleNumPage";
import check from "../assets/Check.png";
import {useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import {Category, CategoryContainer, DetailBox, DetailContainer, SelectWrapper} from "./11_SelectFrame";
import {Frame41} from "../components/Layout/Frame41";

export const SelectFilter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [category, setCategory] = useState(0);
    const [detail, setDetail] = useState(["밝음", "어두움", "기본"]);
    const [select, setSelect] = useState();

    const data = [
        {
            category: "밝기",
            detail : ["밝음", "어두움", "기본"]
        },
        {
            category: "흑백",
            detail : ["흑백1","흑백2","흑백3","흑백1","흑백2","흑백3"]
        },
        {
            category: "어쩌구",
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
            navigate("/SelectFilter", {state: location.state});
        }, 500);
    }

    return <BaseElement onBackClick={()=>navigate("/SelectFrame", {state: location.state})} etc="다음" onEtcClick={()=>navigate("/Finish", {state: location.state})}>
        <ChildrenTitle>사진의 필터를 골라주세요</ChildrenTitle>
        <ChildrenSubTitle/>
        <Container>
            <Frame41 className='frame' backgroundImg={localStorage.getItem('frame2')} cnt={4} imgArray={localStorage.getItem('selectIdx').split(',')}/>
            <SelectWrapper>
                <CategoryContainer mb="93px">
                    {data.map((data,idx)=>{
                        return <Category isActive={category===idx} onClick={()=>onCategoryClick(idx, data.detail)}>{data.category}</Category>
                    })}
                </CategoryContainer>

                <DetailContainer>
                    {detail.map((data, idx)=>{
                        return <FilterBox onClick={()=>onBoxClick(idx)} isActive={select===idx}>
                            {data}
                            {select===idx ?
                                <SelectCheck src={check}/>
                                : null
                            }
                        </FilterBox>
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
  height: 70%;
`
const FilterBox = styled(DetailBox)`
  background: ${props=>props.isActive? "rgba(119, 152, 201, 0.78)" : "linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%)"};
  height: 160px;
`
