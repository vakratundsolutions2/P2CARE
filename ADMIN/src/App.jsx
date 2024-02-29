import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashbord";
import MainLayout from "./components/MainLayout";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import AddDoctorCategory from "./pages/doctor/AddDoctorCategory";
import DoctorCategory from "./pages/doctor/DoctorCategory";
import AddDoctor from "./pages/doctor/AddDoctor";
import DoctorList from "./pages/doctor/DoctorList";
import TermsAndConditions from "./pages/content/TermsAndConditions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BlogList from "./pages/blog/BlogList";
import AddBlog from "./pages/blog/AddBlog";
import AddBlogCategory from "./pages/blog/AddBlogCategory";
import BlogCatList from "./pages/blog/BlogCatList";
import HospitalList from "./pages/hospital/HospitalList";
import AddHospital from "./pages/hospital/AddHospital";
import AssignDoctor from "./pages/hospital/AssignDoctor";
import AddService from "./pages/service/AddService";
import AddServiceCategory from "./pages/service/AddServiceCategory";
import ServiceCategoryList from "./pages/service/ServiceCategoryList";
import ServiceList from "./pages/service/ServiceList";
import AddTestimonial from "./pages/testimonials/AddTestimonials";
import TestimonialList from "./pages/testimonials/TestimonialList";
import DoctorProfile from "./pages/profile/DoctorProfile";
import HospitalProfile from "./pages/profile/HospitalProfile";
import AddUsers from "./pages/users/AddUsers";
import InvoiceReport from "./pages/reports/InvoiceReport";
import Appoinments from "./pages/reports/Appoinments";
import EditInquary from "./pages/reports/EditInquary";
import Inquary from "./pages/reports/Inquary";
import Users from "./pages/reports/Users";
import About from "./pages/content/About";
import Home from "./pages/content/Home";
import AddFaq from "./pages/content/AddFaq";
import Contact from "./pages/content/Contact";
import Faq from "./pages/content/Faq";
import PrivacyPolicy from "./pages/content/PrivacyPolicy";
import EditProfile from "./pages/users/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={() => import("./components/Loding")}>
          <Routes>
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Login />{" "}
                </PublicRoute>
              }
            />
            {/* <Route path="/reset-password" element={<Resetpassword />} /> */}
            {/* <Route path="/forgot-password" element={<Forgotpassword />} /> */}

            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <MainLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />} />

              {/* Doctor Routes */}

              <Route path="doctor" element={<AddDoctor />} />
              <Route path="doctor/:id" element={<AddDoctor />} />
              <Route path="all-doctors" element={<DoctorList />} />
              <Route path="doctor-category-list" element={<DoctorCategory />} />
              <Route path="doctor-category" element={<AddDoctorCategory />} />
              <Route
                path="doctor-category/:id"
                element={<AddDoctorCategory />}
              />

              {/* Blog Routes */}

              <Route path="all-blog" element={<BlogList />} />
              <Route path="blog-cat" element={<AddBlogCategory />} />
              <Route path="blog-cat/:id" element={<AddBlogCategory />} />
              <Route path="blog-category-list" element={<BlogCatList />} />
              <Route path="blog" element={<AddBlog />} />
              <Route path="blog/:id" element={<AddBlog />} />

              {/* Hospital Routes */}

              <Route path="all-hospital" element={<HospitalList />} />
              <Route path="hospital" element={<AddHospital />} />
              <Route path="hospital/:id" element={<AddHospital />} />
              <Route path="assign-doctor/:id" element={<AssignDoctor />} />

              {/* Service Routes */}

              <Route path="service" element={<AddService />} />
              <Route path="service/:id" element={<AddService />} />
              <Route path="service-list" element={<ServiceList />} />
              <Route
                path="service-categiry-list"
                element={<ServiceCategoryList />}
              />
              <Route path="service-categiry" element={<AddServiceCategory />} />
              <Route
                path="service-categiry/:id"
                element={<AddServiceCategory />}
              />

              {/* Testimonial Routes */}

              <Route path="testimonial" element={<AddTestimonial />} />
              <Route path="testimonial/:id" element={<AddTestimonial />} />
              <Route path="testimonial-list" element={<TestimonialList />} />

              {/* Profile Routes */}

              <Route path="doctor-profile/:id" element={<DoctorProfile />} />
              <Route path="HospitalProfile" element={<HospitalProfile />} />

              {/* InvoiceReport Route */}

              <Route path="invoice" element={<InvoiceReport />} />
              <Route path="users-list" element={<Users />} />
              <Route path="users/:id" element={<AddUsers />} />
              <Route path="users" element={<AddUsers />} />
              <Route path="appointment" element={<Appoinments />} />
              <Route path="inquary-list" element={<Inquary />} />
              <Route path="inquary/:id" element={<EditInquary />} />
              {/* content */}

              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq-list" element={<Faq />} />
              <Route path="faq" element={<AddFaq />} />
              <Route path="faq/:id" element={<AddFaq />} />
              <Route path="privacypolicy" element={<PrivacyPolicy />} />
              <Route
                path="termsandconditions"
                element={<TermsAndConditions />}
              />
              <Route path="profile-settings" element={<EditProfile />} />
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
