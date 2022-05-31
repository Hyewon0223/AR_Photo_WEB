import styled from "styled-components";
import {useLocation} from "react-router-dom";
import frame1 from '../../assets/background2.jpeg'

export const Frame34 = ({cnt, imgArray}) => {
    const location = useLocation();
    const [...number] = [...Array(cnt).keys()];

    return <Frame imgUrl={frame1}>
        <Layout>
            {number.map((n)=>{
                return <ImgContainer imgUrl={location.state[imgArray[n]]}>
                    {!location.state[imgArray[n]] && <Count>{n+1}</Count>}
                </ImgContainer>
            })}
        </Layout>
    </Frame>
}

const Frame = styled.div`
  width: 35%;
  height: 90%;
  background: url(${props=>props.imgUrl}) no-repeat #C3D2EF;
  background-size : cover;
  border-radius: 12px;
  margin: auto 0;
`
const Layout = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`
const ImgContainer = styled.div`
  position: relative;
  border-radius: 10px;
  width: 100%;
  padding-top: 120%;
  background: url(${props=>props.imgUrl}) #ffffff;
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