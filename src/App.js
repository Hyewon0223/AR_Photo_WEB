import {SplashPage} from "./pages/SplashPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PeopleNumPage from "./pages/PeopleNumPage";
import PrintNumPage from "./pages/PrintNumPage";
import SelectNumPage from "./pages/SelectNumPage";
import {SelectPayment} from "./pages/SelectPayment";
import PaymentCardPage from "./pages/PaymentCardPage";

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
          <Route path="/SelectPayment/cash" element={<SelectPayment/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;