import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { message } from "antd";
import { useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

let schema = yup.object().shape({
  phoneNumber: yup.number().required("Email is Required"),
  Password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userState = useSelector((state) => state.auth);
  const { isSuccess, user } = userState;

  if (isSuccess && user) {
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      Password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(login(values));
      dispatch(resetState());
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
                      alt="p2Care Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login to <span>P2CARE</span>
                      </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3 form-focus">
                        {/* <input
                          type="text"
                          name="phoneNumber"
                          onChange={formik.handleChange("phoneNumber")}
                          value={formik.values.phoneNumber}
                          className="form-control floating"
                        /> */}

                        <PhoneInput
                          countrySelectProps={{ unicodeFlags: true }}
                          name="phoneNumber"
                          // className="form-control floating"
                          value={formik.values.phoneNumber}
                          onChange={(el) =>
                            formik.setFieldValue("phoneNumber", el)
                          }
                        />
                        {/* <label className="focus-label">Phone Number</label> */}

                        <div className="text-danger">
                          {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber}
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
                        <Link className="forgot-link" to="/signin">
                          Login via OTP
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
