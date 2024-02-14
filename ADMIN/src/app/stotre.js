import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dCategoryReducer from "../features/dCategory/dCategorySlice";
import doctorReducer from "../features/doctor/doctorSlice";
import serviceCategoryReducer from "../features/serviceCategory/sCategorySlice";
import serviceReducer from "../features/service/serviceSlice";
import hospitalReducer from "../features/hospital/hospitalSlice";
import timeReducer from "../features/time/timeSlice";
import blogCategoryReducer from "../features/blogCategory/BlogCategorySlice";
import blogReducer from "../features/blog/blogSlice";
import testimonialReducer from "../features/testimonial/testimonialSlice";
import assignReducer from "../features/assingn/assignSlice";
import availablityReducer from "../features/availablity/availablitySlice";
import reportReducer from "../features/report/reportSlice";
import contentReducer from "../features/content/ContentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dCategory: dCategoryReducer,
    doctor: doctorReducer,
    sCategory: serviceCategoryReducer,
    service: serviceReducer,
    hospital: hospitalReducer,
    time: timeReducer,
    blogCategory: blogCategoryReducer,
    blog: blogReducer,
    testimonial: testimonialReducer,
    assign: assignReducer,
    available: availablityReducer,
    report: reportReducer,
    content: contentReducer,
  },
});
