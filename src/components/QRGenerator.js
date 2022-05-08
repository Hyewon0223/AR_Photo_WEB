import QRcode from 'qrcode.react'
import {useState} from "react";

function QRGenerator() {
    const [qr, setQr] = useState('lintangwisesa');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
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

    return (
        <div>

            <div style={{marginTop:30}}>
                <input onChange={handleChange} style={{width:320}}
                       value={qr} label="QR content" size="large" variant="outlined" color="primary"
                />
            </div>

            <div>
                {
                    qr ?
                        <QRcode
                            id="myqr"
                            value={qr}
                            size={320}
                            includeMargin={true}
                        /> :
                        <p>No QR code preview</p>
                }
            </div>
            <div>
                {
                    qr ?
                        <textarea
                            style={{fontSize:18, width:250, height:100}}
                            rowsMax={4}
                            defaultValue={qr}
                            value={qr}
                        />
                        // <div onClick={downloadQR} style={{marginLeft:10}} color="primary">
                        // </div>
                        :
                        ''
                }
            </div>
        </div>
    );
}

export default QRGenerator;