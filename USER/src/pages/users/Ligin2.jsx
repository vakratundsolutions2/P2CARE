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
import Seo from "../../components/seo/SEO";

let schema = yup.object().shape({
  phoneNumber: yup
    .string()
    // .email("Email should be valid")
    .required("Required"),
});
const Login2 = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userState = useSelector((state) => state.auth);
  const { isSuccess, user } = userState;

  //   if (isSuccess && user) {
  //     // navigate(-1);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 10);
  //   }

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const res = await axios.post(`${baseUrl}user/start-verification`, values);
      if (res?.data) {
        navigate(`/signin-verify?${values?.phoneNumber}`);
      } else {
        console.log(res.response.data);
      }
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
                        {/* <input
                          type="text"
                          name="phoneNumber"
                          onChange={formik.handleChange("phoneNumber")}
                          value={formik.values.phoneNumber}
                          className="form-control floating"
                        />
                        <label className="focus-label">Phone Number</label> */}
                        <PhoneInput
                          countrySelectProps={{ unicodeFlags: true }}
                          name="phoneNumber"
                          // className="form-control floating"
                          value={formik.values.phoneNumber}
                          onChange={(el) =>
                            formik.setFieldValue("phoneNumber", el)
                          }
                        />
                        <div className="text-danger">
                          {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber}
                        </div>
                      </div>

                      <div className="text-end ">
                        <Link className="forgot-link" to="/login">
                          Login via Password
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

export default Login2;
