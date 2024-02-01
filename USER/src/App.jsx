import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

import Doctorprofile from "./pages/doctor/Doctorprofile";
import DoctorList from "./pages/doctor/DoctorList";
import BookAppointment from "./pages/doctor/BookAppointment";
import CheckOut from "./pages/doctor/CheckOut";
import BookingComplete from "./pages/doctor/BookingComplete";

import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";

import HospitalProfile from "./pages/hospital/Hospitalprofile";
import HospitalList from "./pages/hospital/HospitalList";

import { Toaster } from "react-hot-toast";
import Layout from "./components/layout/Layout";

// <<<<<<< HEAD
// import ProfileSetting from "./pages/patients/ProfileSetting";
// import PatientProfile from "./pages/patients/PatientProfile";
import Login2 from "./pages/users/Ligin2";
import Login3 from "./pages/users/Ligin3";

import ProfileSetting from "./pages/users/ProfileSetting";
import Profile from "./pages/users/Profile";
import Register from "./pages/users/Register";
import Login from "./pages/users/Login";
// >>>>>>> 47eabf479ad0dbea27ada0c810b34c6ad9190c16

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="doctor-list" element={<DoctorList />} />
            <Route path="doctor-profile/:id" element={<Doctorprofile />} />
            <Route path="bookappointment/:id" element={<BookAppointment />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="booking-complete" element={<BookingComplete />} />

            <Route path="blogs" element={<BlogList />} />
            <Route path="blog-details/:id" element={<BlogDetails />} />

            <Route path="hospitals" element={<HospitalList />} />
            <Route path="hospital-profile/:id" element={<HospitalProfile />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Login2 />} />
            <Route path="signin-verify" element={<Login3 />} />

            <Route path="profile-setting" element={<ProfileSetting />} />
            <Route path="profile" element={<Profile />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
