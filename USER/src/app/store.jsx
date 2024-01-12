import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../features/doctor/doctorSlice";
import blogReducer from "../features/blog/blogSlice";
import dCategoryReducer from "../features/dCategory/dCategorySlice";
import patientReducer from "../features/patient/patientSlice";
import authReducer from "../features/auth/authSlice";
import testimonialReducer from "../features/testimonial/testimonialSlice";


import hospitalReducer from "../features/hospital/hospitalSlice";


const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    doctor: doctorReducer,
    patient: patientReducer,
    blog: blogReducer,
    hospital: hospitalReducer,
    dCategory: dCategoryReducer,
    testimonial: testimonialReducer,
  },
});
export default reduxStore;
