import { QrReader } from 'react-qr-reader';
import styled from "styled-components";

export const QRScanner = ({qrScan, setQrScan}) => {
    const handleScan = data => {
        if (data) {
            setQrScan(data)
        }
    }
    const handleError = err => {
        console.error(err)
    }
    return <>
        <QRReaderWrapper
            delay={300}
            onError={handleError}
            onScan={handleScan}
            onResult={(result) => {
                if (!!result) {
                    setQrScan(result?.text);
                    if (result !== '') console.log(qrScan);
                }
            }}
        />
    </>
};

export default QRScanner

const QRReaderWrapper = styled(QrReader)`
  width: 40%;
  margin: auto;
  border-radius: 50px;
`
