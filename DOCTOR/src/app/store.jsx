
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import AppoinmentReducer from "../features/appoinment/appoinmentSlice";
import registerReducer from "../features/register/registerslice";
import availableReducer from "../features/availablity/availablitySlice";

import { thunk } from "redux-thunk";
import  doctorCategoryReducer  from "../features/category/dCategorySlice";

const middleware = thunk;
const reduxStore = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    available :availableReducer ,
    appoinment: AppoinmentReducer,



    doctorCategory: doctorCategoryReducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default reduxStore;
