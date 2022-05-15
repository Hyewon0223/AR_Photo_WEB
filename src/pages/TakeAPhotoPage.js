import {useLocation, useNavigate} from "react-router-dom";
import React, {useState, useRef, useEffect} from "react";
import {Camera} from "react-camera-pro";
import BaseElement from "../components/BaseElement";
import styled from "styled-components";
import BaseButton from "../components/BaseButton";

export const TakeAPhotoPage = () => {
    const location = useLocation();
    const photoSec = 5;
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
            // if (cnt > 3) return;
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

    return <>
        <BaseElement>
            <CameraWrapper>
                <Camera ref={camera} aspectRatio={16 / 8}/>
            </CameraWrapper>
            <BaseButton name={`4컷중 ${cnt}번째`}/>
        </BaseElement>
    </>
}

const CameraWrapper = styled.div`
  //margin: auto auto 25px;
  width: 100%;
  margin: auto;
`