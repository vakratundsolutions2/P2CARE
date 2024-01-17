import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { register, resetState } from "../features/auth/authSlice";
import { useEffect } from "react";
let schema = yup.object().shape({
  Email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  Password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  CPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match"),
  Name: yup.string().required("Name is Required"),
  Username: yup.string().required("Username is Required"),
});
function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const { isSuccess } = user;

    if (isSuccess === true) {
      navigate("/login");
    }
    const formik = useFormik({
      initialValues: {
        Name: "",
        Username: "",
        Email: "",
        Password: "",
        CPassword: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        console.log(values);
        dispatch(register(values));
        dispatch(resetState());
      },
    });
    //  useEffect(() => {
    //    dispatch(resetState());
    //  }, []);

  return (
    <>
      <div className="content top-space  m-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="/src/assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Login Banner"
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
                          type="text"
                          name="Name"
                          onChange={formik.handleChange("Name")}
                          value={formik.values.Name}
                          className="form-control floating"
                        />
                        <label className="focus-label">Name</label>

                        <div className="text-danger">
                          {formik.touched.Name && formik.errors.Name}
                        </div>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          name="Username"
                          onChange={formik.handleChange("Username")}
                          value={formik.values.Username}
                          className="form-control floating"
                        />
                        <label className="focus-label">Username</label>

                        <div className="text-danger">
                          {formik.touched.Username && formik.errors.Username}
                        </div>
                      </div>
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
                      <div className="mb-3 form-focus">
                        <input
                          name="CPassword"
                          type="Password"
                          onChange={formik.handleChange("CPassword")}
                          value={formik.values.CPassword}
                          className="form-control floating"
                        />

                        <label className="focus-label">Confirm Password</label>
                        <div className="text-danger">
                          {formik.touched.CPassword && formik.errors.CPassword}
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
                        Register
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
}

export default Register
