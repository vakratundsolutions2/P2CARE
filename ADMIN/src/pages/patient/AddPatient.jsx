import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createAPatient, updateAPatient } from "../../features/patient/patientSlice";
import { useLocation } from "react-router-dom";

let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  username: yup.string().required("Username is Required"),
  phone: yup.number().required("Phone Number is Required"),
  zipcode: yup.number().required("Zipcode is Required"),
  city: yup.string().required("City is Required"),
  country: yup.string().required("Country is Required"),
  state: yup.string().required("State is Required"),
  address: yup.string().required("address is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
  passwordconfirm: yup.string().required("Confirm Password is Required"),
});
const AddPatient = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const USER = useSelector((state)=> state?.auth?.user?.data?.user?.Username)
  
  
  const patientId = location.pathname.split("/")[3];
  const patientUpdateData = useSelector((state)=>state?.patient?.Patients)
  const updateData = patientUpdateData?.filter((e)=>{
    return e._id === patientId;
  })  

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: updateData ? updateData[0]?.name : "",
      username: USER,
      email: updateData ? updateData[0]?.email : "",
      phone: updateData ? updateData[0]?.phone : "",
      country: updateData ? updateData[0]?.country : "",
      state: updateData ? updateData[0]?.state : "",
      city: updateData ? updateData[0]?.city : "",
      zipcode: updateData ? updateData[0]?.zipcode : "",
      address: updateData ? updateData[0]?.address : "",
      // password: updateData ? updateData[0]?.password : "",
      // passwordconfirm: updateData ? updateData[0]?.passwordconfirm : "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (patientId === undefined || "") {
        dispatch(createAPatient(values));
      } else {
        dispatch(updateAPatient({ id: patientId, values: values }));
      }
    },
  });


   
  return (
    <>
      <div>
        <h3 className="mb-4 title">
          {" "}
          {patientId !== undefined || "" ? "Edit" : "Add"} Patient
        </h3>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="d-flex mb-4 flex-column"
          >
            <CustomInput
              type="text"
              label="Enater Name "
              name="name"
              onChng={formik.handleChange("name")}
              onBlr={formik.handleBlur("name")}
              val={formik.values.name}
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            <CustomInput
              type="text"
              disabled={true}
              label=" Username "
              name="username"
              onChng={formik.handleChange("username")}
              onBlr={formik.handleBlur("username")}
              val={formik.values.username}
            />
            <div className="error">
              {formik.touched.username && formik.errors.username}
            </div>
            <CustomInput
              type="text"
              label="Enter Email Address"
              id="email"
              name="email"
              onChng={formik.handleChange("email")}
              onBlr={formik.handleBlur("email")}
              val={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>

            <CustomInput
              type="text"
              label="Enter Phone Number"
              name="phone"
              onChng={formik.handleChange("phone")}
              onBlr={formik.handleBlur("phone")}
              val={formik.values.phone}
            />
            <div className="error">
              {formik.touched.phone && formik.errors.phone}
            </div>

            <CustomInput
              type="text"
              label="Enter Country"
              name="country"
              onChng={formik.handleChange("country")}
              onBlr={formik.handleBlur("country")}
              val={formik.values.country}
            />
            <div className="error">
              {formik.touched.country && formik.errors.country}
            </div>

            <CustomInput
              type="text"
              label="Enter State"
              name="state"
              onChng={formik.handleChange("state")}
              onBlr={formik.handleBlur("state")}
              val={formik.values.state}
            />
            <div className="error">
              {formik.touched.state && formik.errors.state}
            </div>

            <CustomInput
              type="text"
              label="Enter City"
              name="city"
              onChng={formik.handleChange("city")}
              onBlr={formik.handleBlur("city")}
              val={formik.values.city}
            />
            <div className="error">
              {formik.touched.city && formik.errors.city}
            </div>

            <CustomInput
              type="text"
              label="Enter Zip Code"
              name="zipcode"
              onChng={formik.handleChange("zipcode")}
              onBlr={formik.handleBlur("zipcode")}
              val={formik.values.zipcode}
            />
            <div className="error">
              {formik.touched.zipcode && formik.errors.zipcode}
            </div>

            <CustomInput
              type="text"
              label="Enter Address"
              name="address"
              onChng={formik.handleChange("address")}
              onBlr={formik.handleBlur("address")}
              val={formik.values.address}
            />
            <div className="error">
              {formik.touched.address && formik.errors.address}
            </div>
            {/* <CustomInput
              type="password"
              label="Enter password"
              name="password"
              onChng={formik.handleChange("password")}
              onBlr={formik.handleBlur("password")}
              val={formik.values.password}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password}
            </div> */}
            {/* <CustomInput
              type="password"
              label="Enter Confirm password"
              name="passwordconfirm"
              onChng={formik.handleChange("passwordconfirm")}
              onBlr={formik.handleBlur("passwordconfirm")}
              val={formik.values.passwordconfirm}
            />
            <div className="error">
              {formik.touched.passwordconfirm && formik.errors.passwordconfirm}
            </div> */}
            <div className="p-3 w-full">
              <button type="submit" className="btn btn-primary ">
                {patientId !== undefined ? "Edit" : "Add"} Patient
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPatient;
