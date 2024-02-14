
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Appointments from "./pages/Appointments";
import Login from "./pages/auth/Login";
import MyPatients from "./pages/MyPatients";
// <<<<<<< HEAD
// =======
// import PatientProfile from "./pages/PatientProfile";
// >>>>>>> 75b01684bdfd4f358b9c023d918022061abfed2c
import ScheduleTime from "./pages/ScheduleTime";
import AvailableTime from "./pages/AvailableTime";
import Invoice from "./pages/Invoice";
import Accounts from "./pages/Accounts";
import ProfileSettings from "./pages/doctorinfo/ProfileSettings";
import { Toaster } from "react-hot-toast";
import Review from "./pages/Review";
import Register from "./pages/auth/Register";
import VerificationUser from "./pages/auth/VerificationUser";
import VerificationOtp from "./pages/auth/VerificationOtp";
// import ProfileDetails from "./pages/doctorinfo/ProfileDetails";
import NotFound from "./pages/private/NotFound";

import InvoiceView from "./pages/InvoiceView";

import ProfileSetting from "./pages/doctorinfo/ProfileSetting";
import DoctorDashboard from "./pages/DoctorDashbord";
import PatientProfile from "./pages/patientProfile";
// import PrivateRoute from "./pages/private/PrivateRoute";
// import PrivateRoute from "./pages/private/PrivateRoute
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route> */}
          <Route path="/signin" element={<VerificationUser />} />
          <Route path="/signin-verify" element={<VerificationOtp />} />

          <Route index path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/doctor" element={ sessionStorage.getItem("DOCTOR") ?  <MainLayout /> : <PrivateRoute /> }> */}
          {/* <Route path="/" element={<PrivateRoute />}> */}

          {/* <Route index element={<Dashboard />} /> */}

          {/* <Route index element={<Dashboard />} /> */}
          <Route path="/doctor" element={<MainLayout />}>
            <Route path="doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="appointment" element={<Appointments />} />
            <Route path="my-patient" element={<MyPatients />} />
            <Route path="patient-profile" element={<PatientProfile />} />
            <Route path="schedule-time" element={<ScheduleTime />} />
            <Route path="available-timing" element={<AvailableTime />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="invoice-view" element={<InvoiceView />} />
            <Route path="account" element={<Accounts />} />
            <Route path="profile-setting" element={<ProfileSettings />} />
            <Route path="review" element={<Review />} />
            <Route path="profile-details" element={<ProfileSetting />} />

            {/* <Route path="reset-password" element={<ResetPassword />} /> */}

            {/* <Route path="account" element={<Accounts />} /> */}
            {/* <Route path="logout" element={<Logout />} /> */}
          </Route>
          {/* </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
