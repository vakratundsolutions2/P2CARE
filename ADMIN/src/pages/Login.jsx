import { useFormik } from "formik";

const MyImage = (await import("../assets/images/pages/login-v2.svg")).default;

import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  Cred: yup
    .string()
    .required("Required"),
  Password: yup.string().required("Password is Required"),
});
const Login = () => {
  const authState = useSelector((state) => state.auth);
  const { isSuccess } = authState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (isSuccess === true) {
    navigate("/admin");
  }


  

  const formik = useFormik({
    initialValues: {
      Cred: "",
      Password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
      dispatch({type: "Login"});
      dispatch(resetState())
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
          {/* <div
            className="alert alert-info"
            role="alert"
            style={{ color: "blue" }}
          >
            Admin : admin@gmail.com | admin <br />
            Client : client@gmail.com | client
          </div> */}

          <form className="form-group mt-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <CustomInput
                type="text"
                label="Enater Email / Phone Number"
                name="Cred"
                onChng={formik.handleChange("Cred")}
                onBlr={formik.handleBlur("Cred")}
                val={formik.values.Cred}
              />
              <div className="error">
                {formik.touched.Cred && formik.errors.Cred}
              </div>
            </div>
            
            <div className="mb-3">
              <CustomInput
                type="password"
                label="Enater Password "
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
