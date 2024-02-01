import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {
  AssignDoctors,
  getAHospital,
  resetState,
} from "../../features/hospital/hospitalSlice";
import { useEffect } from "react";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";
import { getAllDoctors } from "../../features/doctor/doctorSlice";

import { Link, useNavigate } from "react-router-dom";

import * as yup from "yup";
let schema = yup.object().shape({
  hospital: yup.string().required("Hospital Name is Required"),
  doctor: yup.string().required("Doctor is Required"),
  category: yup.string().required("Category is Required"),
  amount: yup.number().required("Amount is Required"),
});

const AssignDoctor = () => {
  const hospitalId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(allDoctorCategory());
    dispatch(getAllDoctors());
    dispatch(getAHospital(hospitalId));

    dispatch(resetState());
  }, [hospitalId, dispatch]);
  const allDoctors = useSelector((state) => state?.doctor?.doctors);


  const hospitalState = useSelector((state) => state.hospital);
  const { SingleData , isSuccess ,assign } = hospitalState;


if(isSuccess ===true && assign){
  
  setTimeout(() => {

    
    navigate("/admin/all-hospital");
  }, 300);
}

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      hospital: SingleData?.hospitalname || "",
      doctor: SingleData?.assign[0]?.doctor?.doctorName || "",
      category: SingleData?.assign[0]?.category || "",
      amount: SingleData?.assign[0]?.amount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(AssignDoctors(values));
      
    },
  });
  console.log("SingleData", SingleData);

  



  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex justify-content-between  py-3">
            <h3>Assign Doctor</h3>
            <Link to={`/admin/all-hospital`} className="btn btn-primary mb-3">
              Add New Hospital
            </Link>{" "}
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="mb-4 row align-items-center "
          >
            <div className="col-sm-3">
              <select
                name="hospital"
                placeholder="Select hospital"
                onChange={formik.handleChange("hospital")}
                onBlur={formik.handleBlur("hospital")}
                value={formik.values.hospital}
                className="form-control form-select py-3 px-4 "
              >
                <option value="">Select Hospital</option>
                <option value={SingleData?._id}>
                  {SingleData?.hospitalname}
                </option>
              </select>
              <div className="error">
                {formik.touched.hospital && formik.errors.hospital}
              </div>
            </div>
            <div className="col-sm-3">
              <select
                name="category"
                placeholder="Select category"
                onChange={formik.handleChange("category")}
                onBlur={formik.handleBlur("category")}
                value={formik.values.category}
                className="form-control form-select py-3 px-4 "
              >
                <option value="">Select Category</option>
                {SingleData?.category?.map((e, i) => {
                  console.log(e);
                  return (
                    <>
                      <option key={i} value={e}>
                        {e}
                      </option>
                    </>
                  );
                })}
              </select>
              <div className="error">
                {formik.touched.category && formik.errors.category}
              </div>
            </div>
            <div className="col-sm-3">
              <select
                name="doctor"
                placeholder="Select doctor"
                onChange={formik.handleChange("doctor")}
                onBlur={formik.handleBlur("doctor")}
                value={formik.values.doctor}
                className="form-control form-select py-3 px-4 "
                // style={{fontSize:'small',fontWeight:'light'}}
              >
                <option value="">Select Doctor</option>
                {allDoctors?.map((e, i) => {
                  return (
                    <>
                      <option key={i} value={e?._id}>
                        {e?.doctorName}
                      </option>
                    </>
                  );
                })}
              </select>
              <div className="error">
                {formik.touched.doctor && formik.errors.doctor}
              </div>
            </div>
            <div className="col-sm-3">
              <CustomInput
                type="number"
                label="Enter amount "
                i_class="py-3 px-4 "
                name="amount"
                onChng={formik.handleChange("amount")}
                onBlr={formik.handleBlur("amount")}
                val={formik.values.amount}
              />
              <div className="error">
                {formik.touched.amount && formik.errors.amount}
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignDoctor;
