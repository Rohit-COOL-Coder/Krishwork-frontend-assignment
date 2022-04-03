import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calender from "./Calender";
import Navbar from "./Navbar";
import Overview from "./Overview";
import PatientList from "./PatientList";
import Messages from "./Messages";
import Settings from "./Settings";
import PaymentInformation from "./PaymentInformation";
import UpcomingAppointments from "./patientInfo/UpcomingAppointments"
import PastAppointments from "./patientInfo/PastAppointments"
import MedicalRecord from "./patientInfo/MedicalRecord"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="overview" element={<Overview/>}/>
        <Route path="calender" element={<Calender/>}/>
        <Route path="patientList" element={<PatientList/>}>
          <Route path="UpcomingAppointments" element={<UpcomingAppointments/>}/>
          <Route path="PastAppointments" element={<PastAppointments/>}/>
          <Route path="MedicalRecords" element={<MedicalRecord/>}/>
        </Route>
        <Route path="messages" element={<Messages/>}/>
        <Route path="paymentInformation" element={<PaymentInformation/>}/>
        <Route path="settings" element={<Settings/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
