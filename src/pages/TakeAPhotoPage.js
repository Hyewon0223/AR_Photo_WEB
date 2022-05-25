import {useLocation, useNavigate} from "react-router-dom";
import React, {useState, useRef, useEffect} from "react";
import {Camera} from "react-camera-pro";
import BaseElement, {Header, Logo} from "../components/BaseElement";
import styled from "styled-components";
import BaseButton from "../components/BaseButton";
import PhotoBubble from "../assets/PHOTOBUBBLE.png";

export const TakeAPhotoPage = () => {
    const location = useLocation();
    const photoSec = 10;
    const navigate = useNavigate();
    const camera = useRef(null);
    const [image, setImage] = useState([]);
    const [cnt, setCnt] = useState(1);
    const [sec, setSec] = useState(photoSec);
    const photoTime = useRef(photoSec);
    const photoTimerID = useRef(null);
    useEffect(() => {
        if (location.state != null) setImage(location.state);
        photoTimerID.current = setInterval(() => {
            const second = photoTime.current;
            if (second < 10) setSec(`0${second}`);
            else setSec(second);
            photoTime.current -= 1;
        }, 1000);
        return () => clearInterval(photoTimerID.current);
    }, []);

    // 제한시간 종료시
    useEffect(() => {
        if (photoTime.current <= 0) {
            setImage([...image,camera.current.takePhoto()]);
            setCnt(cnt + 1);
            if (cnt < 4) {
                photoTime.current = photoSec;
                setSec(photoSec);
            }
            else {
                if (image.length <= 4) {
                    navigate('/result', {state: [...image, camera.current.takePhoto()]});
                }
                else {
                    navigate('/reResult', {state: [...image, camera.current.takePhoto()]});
                }
            }
        }
    }, [sec, cnt, image, navigate]);

    return <Container>
        <Header>
            <Logo imgURL={PhotoBubble}/>
            <BaseButton font name={`${sec}초`}></BaseButton>
        </Header>
        <CameraContainer>
            <CameraWrapper>
                <Camera ref={camera} aspectRatio={4/5}/>
            </CameraWrapper>
            <ShowCnt>4컷중 {cnt}번째</ShowCnt>
        </CameraContainer>
    </Container>
}
const Container = styled.div`
  padding: 39px 40px 40px 40px;
  height: calc( 100vh - 80px );
`
const CameraContainer = styled.div`
  //margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CameraWrapper = styled.div`
  //margin: auto auto 25px;
  width: 30%;
  max-height: 90vh;
  margin: auto;
`
const ShowCnt = styled.div`
  width: 246px;
  height: 70px;
  background: rgba(23, 71, 195, 0.06);
  border-radius: 18.2292px;
  margin: 25px auto auto;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 36.4583px;
  line-height: 44px;
  color: #676767;
  display: flex;
  justify-content: center;
  align-items: center;
`