import {SplashPage} from "./pages/SplashPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleNumPage from "./pages/PeopleNumPage";
import PrintNumPage from "./pages/PrintNumPage";
import SelectNumPage from "./pages/SelectNumPage";
import {SelectPayment} from "./pages/SelectPayment";
import PaymentCardPage from "./pages/PaymentCardPage";
import PaymentCashPage from "./pages/PaymentCashPage";
import {SelectAR} from "./pages/SelectAR";
import {GetQRPage} from "./pages/GetQRPage";
import {ChooseARPage} from "./pages/ChooseARPage";
import {TakeAPhotoPage} from "./pages/TakeAPhotoPage";
import FirstResult from "./pages/FirstResult";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;