import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle, SelectWrapper} from "./PeopleNumPage";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import check from '../assets/Check.svg';

export const SelectNumPage = () => {
    const [selectNum, setSelectNum] = useState(2);
    const [selectLayout, setSelectLayout] = useState(2);
    const navigate = useNavigate();

    const onLayoutClick = (num) => {
        setSelectLayout(num);
        setTimeout(function () {
            navigate("/SelectPayment");
        }, 500);
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPrintPhoto")}>
            <ChildrenTitle mt="57px">몇컷으로 사진을 구성할까요?</ChildrenTitle>
            <ChildrenSubTitle>결제금액은 4000원 입니다.</ChildrenSubTitle>
            <SelectWrap>
                {[1,2,3,4,6,8].map((num)=>{
                    return <Select isSelect={selectNum===num} onClick={()=>setSelectNum(num)}>{num}컷</Select>
                })}
            </SelectWrap>
            <SelectLayoutWrap>
                {[1,2,3,4].map((num)=>{
                    return <LayoutContainer>
                        <Layout isLayout={selectLayout===num} onClick={()=>onLayoutClick(num)}/>
                        {selectLayout === num ?
                                <SelectLayout imgUrl={check}>
                                    <CheckImg src={check}/>
                                </SelectLayout>
                            : null
                        }
                    </LayoutContainer>
                })}
            </SelectLayoutWrap>
        </BaseElement>
    </>
}

export default SelectNumPage;

const SelectWrap = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Select = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 55px;
  border-bottom: 6px solid ${props=>props.isSelect?"#333333":"#F1F1F1"};
  font-family: 'Pretendard', sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  color: #333333;
`
const SelectLayoutWrap = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 74px;
`
const LayoutContainer = styled.div`
  position: relative;
`
const Layout = styled.div`
  width: 224px;
  height: 338px;
  background: ${props=>props.isLayout?"#FBFBFB":"#C4C4C4"};
  border-radius: 12px;
`
const SelectLayout = styled.div`
  position: absolute;
  top: 0;
  width: 224px;
  height: 338px;
  background-color: rgba(0, 0, 0, 0.62);
  border-radius: 8px;
`
const CheckImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`