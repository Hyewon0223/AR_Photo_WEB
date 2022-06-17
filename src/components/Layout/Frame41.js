import styled from "styled-components";
import {useLocation} from "react-router-dom";

export const Frame41 = ({backgroundImg, cnt, imgArray}) => {
    const location = useLocation();
    const [...number] = [...Array(cnt).keys()];

    return <Frame imgUrl={backgroundImg} className='frame'>
        <Layout>
            {number.map((n)=>{
                return <ImgContainer key={`frame-4-1-${n}`} imgUrl={location.state[imgArray[n]]}>
                    {!location.state[imgArray[n]] && <Count>{n+1}</Count>}
                </ImgContainer>
            })}
        </Layout>
    </Frame>
}

const Frame = styled.div`
  width: 350px;
  height: 530px;
  background: url(${props=>props.imgUrl}) no-repeat #C3D2EF;
  background-size : cover;
  border-radius: 12px;
`
const Layout = styled.div`
  margin: 0 10px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`
const ImgContainer = styled.div`
  position: relative;
  border-radius: 10px;
  width: 160px;
  height: 200px;
  background: url(${props=>props.imgUrl}) #ffffff no-repeat center;
  background-size: cover;
`
const Count = styled.div`
  font-family: 'ONE Mobile POP', sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;
  color: #C9C9C9;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
