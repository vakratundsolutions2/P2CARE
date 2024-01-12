import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
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

import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

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
            <Route path="hospital-profile" element={<HospitalProfile />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
