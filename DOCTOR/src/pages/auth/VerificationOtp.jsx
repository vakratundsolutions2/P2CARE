
/* eslint-disable no-unused-vars */
import loginBanner from "../../assets/img/login-banner.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { LoginOTP,/* login, resetState*/ } from "../../features/auth/authSlice";
// import toast from "react-hot-toast";
// import { useEffect } from "react";

const VerificationOtp = () => {
  

  const location = useLocation();
  const phone = location.search.split("?")[1];
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let schema = yup.object().shape({
    phoneNumber: yup
      .string()

      .required("Phone Numberis Required"),
    otpCode: yup.string().required("OTP is Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      phoneNumber: phone || "",
      otpCode: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
        console.log(values);
      dispatch(LoginOTP(values));
      // if(res.data.status === "approved"){
      //     navigate('/')
      // }
    },
  });

  const { isError, user, isLoading, isSuccess ,  } = useSelector(
    (state) => state.auth
  );
//   if(isSuccess ===true && user){

//   } 


  return (
    <div
      className="main-wrapper d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="content top-space w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* <!-- Login Tab Content --> */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>P2CARE</span>
                      </h3>
                    </div>
                    <form action="doctor" onSubmit={formik.handleSubmit}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={formik.handleChange("phoneNumber")}
                          value={formik.values.phoneNumber}
                        />
                        <label className="focus-label">Phone Number</label>
                      </div>
                      <div className="mb-1">
                        <div className="text-danger">
                          {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber}
                        </div>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={formik.handleChange("otpCode")}
                          value={formik.values.otpCode}
                        />
                        <label className="focus-label">OTP Code</label>
                      </div>
                      <div className="mb-1">
                        <div className="text-danger">
                          {formik.touched.otpCode && formik.errors.otpCode}
                        </div>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/">
                          Login via OTP
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                      {/* <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="register">Register</Link>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- /Login Tab Content --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationOtp;
