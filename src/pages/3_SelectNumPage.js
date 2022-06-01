import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import check from '../assets/Check.png';

export const SelectNumPage = () => {
    const [selectNum, setSelectNum] = useState(3);
    const [selectLayout, setSelectLayout] = useState();
    const navigate = useNavigate();

    const onLayoutClick = (num) => {
        setSelectLayout(num);
        setTimeout(function () {
            navigate("/SelectPayment");
        }, 500);
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPrintPhoto")}>
            <ChildrenTitle mt="57px">어떻게 사진을 구성할까요?</ChildrenTitle>
            <ChildrenSubTitle/>
            <SelectWrap>
                {[1,2,3,4,6,8].map((num)=>{
                    return <Select key={`selectNumPrint-${num}`} isSelect={selectNum===num} onClick={()=>setSelectNum(num)}>{num}컷</Select>
                })}
            </SelectWrap>
            <SelectLayoutWrap>
                {[1,2,3,4].map((num)=>{
                    return <LayoutContainer key={`selectLayout-${num}`} >
                        <Layout isLayout={selectLayout===num} onClick={()=>onLayoutClick(num)}/>
                        {selectLayout === num ?
                            <SelectLayout>
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
  border-bottom: 6px solid ${props=>props.isSelect?"#3B537C":"#C1C8DA"};
  font-family: 'Pretendard', sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  color: ${props=>props.isSelect?"#3B537C":"#C1C8DA"};
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
  background: #C3D2EF;
  border-radius: 12px;
`
const SelectLayout = styled.div`
  position: absolute;
  top: 0;
  width: 222px;
  height: 336px;
  background: rgba(119, 152, 201, 0.78);
  border: 5px solid #678AC0;
  border-radius: 8px;
`
const CheckImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`