import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";

import Dashbord from "./pages/Dashbord";


import DoctorList from "./pages/doctor/DoctorList";
import AddDoctor from "./pages/doctor/AddDoctor";
import DoctorCategory from "./pages/doctor/DoctorCategory";
import AddDoctorCategory from "./pages/doctor/AddDoctorCategory";
import BookDoctor from "./pages/doctor/BookDoctor";

import BlogList from "./pages/blog/BlogList";

import AddBlog from "./pages/blog/AddBlog";
import BlogCatList from "./pages/blog/BlogCatList";
import AddBlogCategory from "./pages/blog/AddBlogCategory";

import HospitalList from "./pages/hospital/HospitalList";
import HospitalBlog from "./pages/hospital/HospitalBlog";
import AddHospital from "./pages/hospital/AddHospital";
// import HospitalReview from "./pages/hospital/HospitalReview";
import AssignDoctor from "./pages/hospital/AssignDoctor";

import ServiceList from "./pages/service/ServiceList";
import AddService from "./pages/service/AddService";
import ServiceCategoryList from "./pages/service/ServiceCategoryList";
import AddServiceCategory from "./pages/service/AddServiceCategory";

import DoctorProfile from "./pages/profile/DoctorProfile";
import HospitalProfile from "./pages/profile/HospitalProfile";

import Testimonial from "./pages/testimonials/TestimonialList";
import AddTestimonial from "./pages/testimonials/AddTestimonials";
import BookDoctorList from "./pages/doctor/BookDoctorList";

import InvoiceReport from "./pages/reports/InvoiceReport";

import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import Appoinments from "./pages/reports/Appoinments";
import Inquary from "./pages/reports/Inquary";
import EditInquary from "./pages/reports/EditInquary";
import Users from "./pages/users/Users";
import AddUsers from "./pages/users/AddUsers";
import RequesrDoctor from "./pages/doctor/RequesrDoctor";

function App() {

  return (
    <>
      <BrowserRouter>
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
            <Route index element={<Dashbord />} />

            {/* Doctor Routes */}

            <Route path="doctor" element={<AddDoctor />} />
            <Route path="doctor/:id" element={<AddDoctor />} />
            <Route path="all-doctors" element={<DoctorList />} />
            <Route path="doctor-category-list" element={<DoctorCategory />} />
            <Route path="doctor-category" element={<AddDoctorCategory />} />
            <Route path="doctor-category/:id" element={<AddDoctorCategory />} />
            <Route path="doctor-booking" element={<BookDoctor />} />
            <Route path="doctor-booking/:id" element={<BookDoctor />} />
            <Route path="doctor-booking-list" element={<BookDoctorList />} />
            <Route path="doctor-request" element={<RequesrDoctor />} />

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
            <Route path="blog-hospital" element={<HospitalBlog />} />
            {/* <Route path="hospital/all-review" element={<HospitalReview />} /> */}
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
            <Route path="testimonial-list" element={<Testimonial />} />

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
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
