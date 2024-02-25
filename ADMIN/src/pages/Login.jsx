import { useFormik } from "formik";

const MyImage = (await import("../assets/images/pages/login-v2.svg")).default;

import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const { isSuccess } = authState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (isSuccess === true) {
    navigate("/admin");
  }

  let schema = yup.object().shape({
    loginSelect: yup.string(),
    phoneNumber: yup.string().when("loginSelect", (loginSelect, schema) => {
      console.log(loginSelect);
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
      // dispatch(login(values));
      // dispatch({ type: "Login" });
      // dispatch(resetState());
    },
  });

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-8 border-end">
          <img src={MyImage} className="img-fluid" alt="Banner Image" />
        </div>
        <div className="col-md-4 d-flex  flex-column my-4 justify-content-center">
          <h4 className="h4">Welcome to P2CARE!👋</h4>
          <p className="#">
            Please Sign-in to your account and start the <br /> adventure
          </p>

          <form className="form-group mt-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <select
                onChange={(e) =>
                  formik.setFieldValue("loginSelect", e.target.value)
                }
                className="form-select"
                name="loginSelect"
                style={{ padding: "12px 12px" }}
              >
                <option value="phoneNumber"> Phone Number</option>
                <option value="Email"> Email</option>
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
                    onChange={(el) => formik.setFieldValue("phoneNumber", el)}
                  />

                  <div className="error ">
                    {formik.touched.phoneNumber && formik.errors.phoneNumber}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-3">
                  <CustomInput
                    type="email"
                    label="Enter Email"
                    name="Email"
                    onChng={formik.handleChange("Email")}
                    onBlr={formik.handleBlur("Email")}
                    val={formik.values.Email}
                  />
                  <div className="error">
                    {formik.touched.Email && formik.errors.Email}
                  </div>
                </div>
              </>
            )}
            <div className="mb-3">
              <CustomInput
                type="password"
                label="Enter Password "
                name="password"
                onChng={formik.handleChange("Password")}
                onBlr={formik.handleBlur("Password")}
                val={formik.values.Password}
              />
              <div className="error">
                {formik.touched.Password && formik.errors.Password}
              </div>
            </div>

            <div className="d-grid col-12 mx-auto">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <div>
              <p className="text-center mt-3">
                Register new admin ?{" "}
                <Link to={"/register"} className="text-primary">
                  create an new account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
