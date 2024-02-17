import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/content/Home";
import Contact from "./pages/content/Contact";
import About from "./pages/content/About";
import Faq from "./pages/content/Faq";
import AddFaq from "./pages/content/AddFaq";
import AddDoctor from "./pages/doctor/AddDoctor";
import EditProfile from "./pages/users/EditProfile";

const Login = lazy(() => import("./pages/Login"));
const MainLayout = lazy(() => import("./components/MainLayout"));
const Dashbord = lazy(() => import("./pages/Dashbord"));
const DoctorList = lazy(() => import("./pages/doctor/DoctorList"));

// const AddDoctor = lazy(() => import("./pages/doctor/AddDoctor"));
const DoctorCategory = lazy(() => import("./pages/doctor/DoctorCategory"));
const AddDoctorCategory = lazy(() =>
  import("./pages/doctor/AddDoctorCategory")
);
const BookDoctor = lazy(() => import("./pages/doctor/BookDoctor"));

const BlogList = lazy(() => import("./pages/blog/BlogList"));

const AddBlog = lazy(() => import("./pages/blog/AddBlog"));
const BlogCatList = lazy(() => import("./pages/blog/BlogCatList"));
const AddBlogCategory = lazy(() => import("./pages/blog/AddBlogCategory"));

const HospitalList = lazy(() => import("./pages/hospital/HospitalList"));
const HospitalBlog = lazy(() => import("./pages/hospital/HospitalBlog"));
const AddHospital = lazy(() => import("./pages/hospital/AddHospital"));
// import HospitalReview = lazy(() => import "./pages/hospital/HospitalReview";
const AssignDoctor = lazy(() => import("./pages/hospital/AssignDoctor"));

const ServiceList = lazy(() => import("./pages/service/ServiceList"));
const AddService = lazy(() => import("./pages/service/AddService"));
const ServiceCategoryList = lazy(() =>
  import("./pages/service/ServiceCategoryList")
);
const AddServiceCategory = lazy(() =>
  import("./pages/service/AddServiceCategory")
);

const DoctorProfile = lazy(() => import("./pages/profile/DoctorProfile"));
const HospitalProfile = lazy(() => import("./pages/profile/HospitalProfile"));

const Testimonial = lazy(() => import("./pages/testimonials/TestimonialList"));
const AddTestimonial = lazy(() =>
  import("./pages/testimonials/AddTestimonials")
);
const BookDoctorList = lazy(() => import("./pages/doctor/BookDoctorList"));

const InvoiceReport = lazy(() => import("./pages/reports/InvoiceReport"));

const Register = lazy(() => import("./pages/Register"));
const PrivateRoute = lazy(() => import("./utils/PrivateRoute"));
const PublicRoute = lazy(() => import("./utils/PublicRoute"));
const Appoinments = lazy(() => import("./pages/reports/Appoinments"));
const Inquary = lazy(() => import("./pages/reports/Inquary"));
const EditInquary = lazy(() => import("./pages/reports/EditInquary"));
const Users = lazy(() => import("./pages/users/Users"));
const AddUsers = lazy(() => import("./pages/users/AddUsers"));
const RequesrDoctor = lazy(() => import("./pages/doctor/RequesrDoctor"));

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
              <Route index element={<Dashbord />} />

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
              {/* content */}

              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq-list" element={<Faq />} />
              <Route path="faq" element={<AddFaq />} />
              <Route path="faq/:id" element={<AddFaq />} />
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
