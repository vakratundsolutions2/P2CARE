/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import LoginBanner from "../../assets/img/login-banner.png";
import * as yup from 'yup';
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, resetState } from "../../features/register/registerslice";
import toast from "react-hot-toast";

const Register = () => {

  const { isSuccess, user, isLoading } = useSelector((state) => state.register);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let registerSchema = yup.object().shape({
    Username: yup.string().required("Username is required!"),
    Name: yup.string().required("Name is required"),
    Email: yup.string().email().required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is Required"),
    Password: yup.string().required("Password is Required")
  });

  const formik = useFormik({
    initialValues: {
      Username: "",
      Name: "",
      Email: "",
      phoneNumber: "",
      Password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      dispatch(register(values)).then((data) => {
        if(data != null && isSuccess === true && user != null){
           toast.success("Regsiter successful");
           navigate("/login");
        }
      })
      dispatch(resetState());
      
    },
  });
  


  return (
    <div className="main-wrapper d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="content top-space w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* <!-- Register Content --> */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={LoginBanner}
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Doctor Register{" "}
                        {/* <Link to="/doctor">Are you a Doctor?</Link> */}
                        {/* <Link to="doctor-register">Are you a Doctor?</Link> */}
                      </h3>
                    </div>

                    {/* <!-- Register Form --> */}
                    <form  onSubmit={formik.handleSubmit}>
                      {/* username */}
                      <div className="mb-3 form-focus">
                        <input type="text" className="form-control floating"
                          onChange={formik.handleChange("Username")}
                          value={formik.values.Username}
                        />
                        <label className="focus-label">Username</label>
                      </div>
                      <div className="mb-1">
                        <div className="text-danger">
                          {formik.touched.Username &&
                            formik.errors.Username}
                        </div>
                      </div>

                      {/* Name */}
                      <div className="mb-3 form-focus">
                        <input type="text" className="form-control floating"
                          onChange={formik.handleChange("Name")}
                          value={formik.values.Name}
                        />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="mb-1">
                        <div className="text-danger">
                          {formik.touched.Name &&
                            formik.errors.Name}
                        </div>
                      </div>

                      {/* Email address */}
                      <div className="mb-3 form-focus">
                        <input type="text" className="form-control floating"
                          onChange={formik.handleChange("Email")}
                          value={formik.values.Email}
                        />
                        <label className="focus-label">Email Address</label>
                      </div>
                      <div className="mb-1">
                        <div className="text-danger">
                          {formik.touched.Email &&
                            formik.errors.Email}
                        </div>
                      </div>

                      {/* phone Number */}
                      <div className="mb-3 form-focus">
                        <input type="text" className="form-control floating"
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

                      {/* password */}
                      <div className="mb-3 form-focus">
                        <input type="password" className="form-control floating"
                          onChange={formik.handleChange("Password")}
                          value={formik.values.Password}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="mb-1">
                        <div className="text-danger">
                          {formik.touched.Password &&
                            formik.errors.Password}
                        </div>
                      </div>





                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                       {isLoading ? "Loading .." :  "Signup" }
                      </button>
                      
                    </form>
                    {/* <!-- /Register Form --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /Register Content --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
