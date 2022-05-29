import styled from "styled-components";
import {useLocation} from "react-router-dom";

export const Frame34 = ({cnt, imgArray}) => {
    const location = useLocation();
    console.log(imgArray[0]);
    console.log(location.state[imgArray[0]]);
    const [...number] = [...Array(cnt).keys()];
    return <Frame>
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
  background: #C3D2EF;
  border-radius: 12px;
  margin: auto;
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