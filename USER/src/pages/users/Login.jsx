import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { message } from "antd";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import loginBanner from "../../assets/img/login-banner.png";
import Seo from "../../components/seo/SEO";

const Login = () => {
  const dispatch = useDispatch();
  const [Select, setSelect] = useState("phoneNumber");

  const navigate = useNavigate();

  const userState = useSelector((state) => state.auth);
  const { isSuccess, user } = userState;

  if (isSuccess && user) {
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  let schema = yup.object().shape({
    loginSelect: yup.string(),
    phoneNumber: yup.string().when("loginSelect", (loginSelect, schema) => {
      if (loginSelect === "phoneNumber")
        return schema.required("Phone Number is required");
      return schema;
    }),
    Email: yup.string().when("loginSelect", (loginSelect, schema) => {
      if (loginSelect === "Email") {
        return schema.required("Must enter email address");
      }
      return schema;
    }),
    Password: yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      Password: "",
      Email: "",
      loginSelect: "phoneNumber",
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
                      <h3>
                        Login to <span>P2CARE</span>
                      </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-3 form-focus">
                        <select
                          onChange={(e) =>
                            formik.setFieldValue("loginSelect", e.target.value)
                          }
                          className="form-select"
                          name="loginSelect"
                          style={{ padding: "12px 12px" }}
                        >
                          <option value="phoneNumber">Phone Number</option>
                          <option value="Email">Email Address</option>
                        </select>
                      </div>

                      {formik.values.loginSelect === "phoneNumber" ? (
                        <>
                          <div className="mb-3 form-focus">
                            <PhoneInput
                              countrySelectProps={{ unicodeFlags: true }}
                              name="phoneNumber"
                              // className="form-control floating"
                              value={formik.values.phoneNumber}
                              onChange={(el) =>
                                formik.setFieldValue("phoneNumber", el)
                              }
                            />

                            <div className="text-danger ">
                              {formik.touched.phoneNumber &&
                                formik.errors.phoneNumber}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}

                      <div className="mb-3 form-focus">
                        <input
                          name="Password"
                          type="Password"
                          onChange={formik.handleChange("Password")}
                          value={formik.values.Password}
                          className="form-control floating"
                        />

                        <label className="focus-label">Password</label>
                        <div className="text-danger ">
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
