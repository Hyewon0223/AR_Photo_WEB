import QRcode from 'qrcode.react'
import {useState} from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";

function QRGenerator() {
    const [qr, setQr] = useState("zzzz");

    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return <Container>
        {
            qr ?
                <QRcode
                    id="myqr"
                    value={qr}
                    size={300}
                /> :
                <p>No QR code preview</p>
        }
    </Container>
}

export default QRGenerator;

const Container = styled.div`
  background: linear-gradient(196.1deg, rgba(255, 255, 255, 0.61) -15.99%, rgba(255, 255, 255, 0.352657) 101.75%, rgba(255, 255, 255, 0) 142.09%), linear-gradient(80.77deg, #FBFBFD 27.85%, rgba(251, 251, 253, 0) 91.1%);
  border: 5px solid #FFFFFF;
  border-radius: 50px;
  padding: 20px;
`