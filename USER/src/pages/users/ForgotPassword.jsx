import { useFormik } from "formik";

// const MyImage = (await import("../assets/images/pages/login-v2.svg")).default;

import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import loginBanner from "../../assets/img/login-banner.png";
import Seo from "../../components/seo/Seo";
import { forgotPassword } from "../../features/auth/authSlice";

let schema = yup.object().shape({
  Email: yup
    .string()
    .email()
    // .email("Email should be valid")
    .required("Email required"),
});
const ForgotPassword = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userState = useSelector((state) => state.auth);
  const { isSuccess, user } = userState;

  const formik = useFormik({
    initialValues: {
      Email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
  });

  return (
    <>
      <Seo metaTitle={"Login - P2CARE"} />
      <div className="content top-space m-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="p2Care Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Forgot Password?</h3>
                      <p className="small text-muted">
                        Enter your email to get a password reset link
                      </p>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3 form-focus">
                        <input
                          name="Email"
                          type="email"
                          onChange={formik.handleChange("Email")}
                          value={formik.values.Email}
                          className="form-control floating"
                        />

                        <label className="focus-label">Email Address</label>
                        <div className="text-danger ">
                          {formik.touched.Email && formik.errors.Email}
                        </div>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Remember your password?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Reset Password
                      </button>
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

export default ForgotPassword;
