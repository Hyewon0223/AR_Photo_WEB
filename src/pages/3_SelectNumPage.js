import styled from "styled-components";
import BaseElement from "../components/BaseElement";
import {ChildrenSubTitle, ChildrenTitle} from "./1_PeopleNumPage";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import check from '../assets/Check.png';
import frame1_1 from '../assets/frame1_1.png';
import frame2_1 from '../assets/frame2_1.png';
import frame2_2 from '../assets/frame2_2.png';
import frame2_3 from '../assets/frame2_3.png';
import frame4_1 from '../assets/frame4_1.png';
import frame6_1 from '../assets/frame6_1.png';
import frame6_2 from '../assets/frame6_2.png';
import frame6_3 from '../assets/frame6_3.png';
import frame8_1 from '../assets/frame8_1.png';

export const SelectNumPage = () => {
    const [selectNum, setSelectNum] = useState(4);
    const [detail, setDetail] = useState([frame4_1]);
    const [selectLayout, setSelectLayout] = useState();
    const navigate = useNavigate();
    const data = [
        {
            category: 1,
            detail : [frame1_1]
        },
        {
            category: 2,
            detail : [frame2_1, frame2_2, frame2_3]
        },
        {
            category: 4,
            detail : [frame4_1]
        },
        {
            category: 6,
            detail : [frame6_1, frame6_2, frame6_3]
        },
        {
            category: 8,
            detail : [frame8_1]
        },
    ]

    const onCategoryClick = (category, detail) => {
        setSelectNum(category)
        setDetail(detail)
    }

    const onLayoutClick = (num) => {
        setSelectLayout(num);
        localStorage.setItem('layout1',selectNum);
        localStorage.setItem('layout2',num);
        setTimeout(function () {
            navigate("/SelectPayment");
        }, 500);
    }

    return <>
        <BaseElement isTimer onBackClick={()=>navigate("/NumOfPrintPhoto")}>
            <ChildrenTitle mt="57px">어떻게 사진을 구성할까요?</ChildrenTitle>
            <ChildrenSubTitle/>
            <SelectWrap>
                {data.map((data)=>{
                    return <Select key={`selectNumPrint-${data.category}`} isSelect={selectNum===data.category} onClick={()=>onCategoryClick(data.category, data.detail)}>{data.category}컷</Select>
                })}
            </SelectWrap>
            <SelectLayoutWrap>
                {detail.map((data,idx)=>{
                    return <LayoutContainer key={`selectLayout-${data}`} >
                        <Layout imgUrl={data} isLayout={selectLayout===data} onClick={()=>onLayoutClick(idx)}/>
                        {selectLayout === data ?
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
  background: url(${props=>props.imgUrl}) no-repeat center;
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
