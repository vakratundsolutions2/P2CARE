/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";


const PrivateRoute = ({children}) => {
    const user = sessionStorage.getItem("DOCTOR");
     if (!user) {
       return <Navigate to={"/"} />;

     }
     return children;
    // if (!user) {
    //     return <Navigate to='/login' state={{ from: history.location }} />
    // }
    // return <Outlet />;

}

export default PrivateRoute
