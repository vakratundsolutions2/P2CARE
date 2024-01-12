import { useFormik } from "formik";

// const MyImage = (await import("../assets/images/pages/login-v2.svg")).default;

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { message } from "antd";
import { useEffect } from "react";

let schema = yup.object().shape({
  Email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  Password: yup.string().required("Password is Required"),
});
const Login = () => {
  const dispatch = useDispatch();

  
  const navigate = useNavigate();
  const user = useSelector((state)=>state.auth)
  const {isSuccess } = user
  
  if(isSuccess === true){
    navigate('/')
  }

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
        dispatch(login(values));
    },
  });
   
  return (
    <>
      <div className="content top-space m-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="/src/assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3 form-focus">
                        <input
                          type="email"
                          name="Email"
                          onChange={formik.handleChange("Email")}
                          value={formik.values.Email}
                          className="form-control floating"
                        />
                        <label className="focus-label">Email</label>

                        <div className="text-danger">
                          {formik.touched.Email && formik.errors.Email}
                        </div>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          name="Password"
                          type="Password"
                          onChange={formik.handleChange("Password")}
                          value={formik.values.Password}
                          className="form-control floating"
                        />

                        <label className="focus-label">Password</label>
                        <div className="text-danger">
                          {formik.touched.Password && formik.errors.Password}
                        </div>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="forgot-password">
                          Forgot Password ?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                    
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
