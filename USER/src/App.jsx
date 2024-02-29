import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import MyAppoinments from "./pages/users/MyAppoinments";
import ForgotPassword from "./pages/users/ForgotPassword";
import ResetPassword from "./pages/users/ResetPassword";
import LoginEmail from "./pages/users/LoginEmail";
import LoginPhone from "./pages/users/LoginPhone";

const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/users/Login"));

const About = lazy(async () => await import("./pages/About"));
const Error = lazy(() => import("./pages/Error"));
const Contact = lazy(() => import("./pages/Contact"));
const Doctorprofile = lazy(() => import("./pages/doctor/Doctorprofile"));
const DoctorList = lazy(() => import("./pages/doctor/DoctorList"));
const BookAppointment = lazy(() => import("./pages/doctor/BookAppointment"));
const CheckOut = lazy(() => import("./pages/doctor/CheckOut"));
const BookingComplete = lazy(() => import("./pages/doctor/BookingComplete"));
const BlogList = lazy(() => import("./pages/blog/BlogList"));
const BlogDetails = lazy(() => import("./pages/blog/BlogDetails"));
const HospitalProfile = lazy(() => import("./pages/hospital/Hospitalprofile"));
const HospitalList = lazy(() => import("./pages/hospital/HospitalList"));
const Layout = lazy(() => import("./components/layout/Layout"));
const Login2 = lazy(() => import("./pages/users/Login2"));
const Login3 = lazy(() => import("./pages/users/Login3"));
const ProfileSetting = lazy(() => import("./pages/users/ProfileSetting"));
const Register = lazy(() => import("./pages/users/Register"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={() => import("./components/Loading")}>
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
              <Route
                path="hospital-profile/:id"
                element={<HospitalProfile />}
              />

              <Route path="register" element={<Register />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="login" element={<LoginEmail />} />
              <Route path="login-phone" element={<LoginPhone />} />
              <Route path="signin" element={<Login2 />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="signin-verify" element={<Login3 />} />

              <Route path="profile-setting" element={<ProfileSetting />} />
              <Route path="appointments" element={<MyAppoinments />} />
              <Route path="privacypolicy" element={<PrivacyPolicy />} />
              <Route
                path="termsandconditions"
                element={<TermsAndConditions />}
              />

              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
          <Toaster />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
