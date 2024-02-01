import { useFormik } from "formik";

const MyImage = (await import("../assets/images/pages/login-v2.svg")).default;
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../features/auth/authSlice";

let schema = yup.object().shape({
  Email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
    Name: yup.string().required("Name is Required"),
  Username: yup.string().required("Username is Required"),
  Password: yup
  .string()
  .required("No password provided.")
  .min(8, "Password is too short - should be 8 chars minimum."),
  // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
CPassword: yup
  .string()
  .oneOf([yup.ref("Password"), null], "Passwords must match"),
});
const Login = () => {
  const authState = useSelector((state) => state.auth);
  const { isSuccess } = authState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (isSuccess === true) {
    navigate("admin");
  }

  const formik = useFormik({
    initialValues: {
      Username: "",
      Name: "",
      Email: "",
      Password: "",
      CPassword: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {

      dispatch(register(values))

      // console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-8 border-end">
          <img src={MyImage} className="img-fluid" alt="Banner Image" />
        </div>
        <div className="col-md-4" style={{ marginTop: "6.5rem" }}>
          <h4
            className="h4"
            style={{ fontFamily: "sans-serif", justifyContent: "flex-start" }}
          >
            Welcome to Vuexy!👋
          </h4>
          <p className="#">
            Please Register to your account and start the <br /> adventure
          </p>

          <form className="form-group mt-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <div className="mb-3">
              <CustomInput
                  type="text"
                  label="Enater Name "
                  name="Name"
                  onChng={formik.handleChange("Name")}
                  onBlr={formik.handleBlur("Name")}
                  val={formik.values.Name}
                />
                <div className="error">
                  {formik.touched.Name && formik.errors.Name}
                </div>
              </div>

              <div className="mb-3">
              <CustomInput
                  type="text"
                  label="Username "
                  name="Username"
                  onChng={formik.handleChange("Username")}
                  onBlr={formik.handleBlur("Username")}
                  val={formik.values.Username}
                />
                <div className="error">
                  {formik.touched.Username && formik.errors.Username}
                </div>
              </div>

              <div className="mb-3">
                <CustomInput
                  type="text"
                  label="Enater Email "
                  name="Email"
                  onChng={formik.handleChange("Email")}
                  onBlr={formik.handleBlur("Email")}
                  val={formik.values.Email}
                />
                <div className="error">
                  {formik.touched.Email && formik.errors.Email}
                </div>
              </div>

              <div className="mb-3">
                <CustomInput
                  type="Password"
                  label="Enater Password "
                  name="Password"
                  onChng={formik.handleChange("Password")}
                  onBlr={formik.handleBlur("Password")}
                  val={formik.values.Password}
                />
                <div className="error">
                  {formik.touched.Password && formik.errors.Password}
                </div>
              </div>

              <div className="mb-3">
                <CustomInput
                  type="Password"
                  label="Confirm Password "
                  name="CPassword"
                  onChng={formik.handleChange("CPassword")}
                  onBlr={formik.handleBlur("CPassword")}
                  val={formik.values.CPassword}
                />
                <div className="error">
                  {formik.touched.CPassword && formik.errors.CPassword}
                </div>
              </div>
            </div>

            <div className="d-grid col-12 mx-auto">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div>
              <p className="text-center mt-3">
                <span className="text-primary">
                  <Link to="/">Already have an account?</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
