import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../features/doctor/doctorSlice";
import blogReducer from "../features/blog/blogSlice";
import dCategoryReducer from "../features/dCategory/dCategorySlice";
import patientReducer from "../features/patient/patientSlice";
import authReducer from "../features/auth/authSlice";
import testimonialReducer from "../features/testimonial/testimonialSlice";
import availableReducer from "../features/availablity/availablitySlice";
import serviceReducer from "../features/service/serviceSlice";
import blogcategoryReducer from "../features/blogCategory/BlogCategorySlice";


import hospitalReducer from "../features/hospital/hospitalSlice";
import inquarySlice from "../features/inquary/inquarySlice";
import contentReducer from "../features/content/ContentSlice";


const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    doctor: doctorReducer,
    available: availableReducer,

    patient: patientReducer,
    blog: blogReducer,
    blogcategory: blogcategoryReducer,
    hospital: hospitalReducer,
    dCategory: dCategoryReducer,
    testimonial: testimonialReducer,
    service: serviceReducer,
    inquary: inquarySlice,
    content:contentReducer
  },
});
export default reduxStore;
