
import {
    SplashPage, PeopleNumPage, PrintNumPage,
    SelectNumPage, SelectPayment, PaymentCardPage,
    PaymentCashPage, ChooseARPage, GetQRPage,
    SelectAR, TakeAPhotoPage, FirstResult,
    ReResult, SelectFrame, SelectFilter, Finish
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/font/font.css"

function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" element={<SplashPage/>}/>
          <Route path="/NumOfPeople" element={<PeopleNumPage/>}/>
          <Route path="/NumOfPrintPhoto" element={<PrintNumPage/>}/>
          <Route path="/NumOfSelectPhoto" element={<SelectNumPage/>}/>
          <Route path="/SelectPayment/*" element={<SelectPayment/>}/>
          <Route path="/SelectPayment/card" element={<PaymentCardPage/>}/>
          <Route path="/SelectPayment/cash" element={<PaymentCashPage/>}/>
          <Route path="/SelectAR/*" element={<SelectAR/>}/>
          <Route path="/SelectAR/App" element={<GetQRPage/>}/>
          <Route path="/SelectAR/Choose" element={<ChooseARPage/>}/>
          <Route path="/Camera" element={<TakeAPhotoPage/>}/>
          <Route path="/Result" element={<FirstResult/>}/>
          <Route path="/ReResult" element={<ReResult/>}/>
          <Route path="/SelectFrame" element={<SelectFrame/>}/>
          <Route path="/SelectFilter" element={<SelectFilter/>}/>
          <Route path="/Finish" element={<Finish/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
