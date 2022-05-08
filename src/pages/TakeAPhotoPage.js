import {useNavigate} from "react-router-dom";
import React, {useState, useRef, useEffect} from "react";
import {Camera} from "react-camera-pro";
import BaseElement from "../components/BaseElement";
import styled from "styled-components";
import BaseButton from "../components/BaseButton";

export const TakeAPhotoPage = () => {
    const photoSec = 3;
    const navigate = useNavigate();
    const camera = useRef(null);
    const [image, setImage] = useState([]);
    const [cnt, setCnt] = useState(0);
    const [sec, setSec] = useState(photoSec);
    const photoTime = useRef(photoSec);
    const photoTimerID = useRef(null);
    console.log(image);
    useEffect(() => {
        photoTimerID.current = setInterval(() => {
            const second = photoTime.current;
            if (second < 10) setSec(`0${second}`);
            else setSec(second);
            photoTime.current -= 1;
            console.log(photoTime);
        }, 1000);
        return () => clearInterval(photoTimerID.current);
    }, []);

    // 제한시간 종료시
    useEffect(() => {
        if (photoTime.current <= 0) {
            setImage([...image,camera.current.takePhoto()]);
            setCnt(cnt + 1);
            console.log("제한 시간 종료");
            console.log(image.length);
            if (cnt < 3) {
                setInterval(()=> photoSec);
                photoTime.current = photoSec;
                setSec(photoSec);
            }
            else {
                clearInterval(photoTimerID.current);
                navigate('/result', {state: image});
            }

        }
    }, [sec, cnt, image, navigate]);

    return <>
        <BaseElement>
            <CameraWrapper>
                <Camera ref={camera} aspectRatio={16 / 8}/>
            </CameraWrapper>
            {/*<button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>*/}
            {/*<img src={image} alt='Taken photo'/>*/}
            <BaseButton name={`4컷중 ${cnt+1}번째`}/>
        </BaseElement>
    </>
}

const CameraWrapper = styled.div`
  margin: auto;
  width: 100%;
`