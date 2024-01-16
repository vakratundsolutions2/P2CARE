import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllHospitals,
  resetState,
} from "../../features/hospital/hospitalSlice";
import { useEffect } from "react";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";
import { getAllDoctors } from "../../features/doctor/doctorSlice";
import axios from "axios";
import { config } from "../../utils/axiosConfig";
import toast from "react-hot-toast";
import { addNewAssign, getAllAssign } from "../../features/assingn/assignSlice";
import { Link } from "react-router-dom";

const AssignDoctor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHospitals());
    dispatch(allDoctorCategory());
    dispatch(getAllDoctors());
    // dispatch(getAllAssign());


    dispatch(resetState());
  }, []);
  const HospitalState = useSelector((state) => state.hospital.hospitals);
  const dCategory = useSelector((state) => state?.dCategory?.dCategories);
  const allDoctors = useSelector((state) => state?.doctor?.doctors);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      hospital: "",
      doctor: "",
      category: "",
      amount: "",
    },
    onSubmit:async (values) => {
      dispatch(addNewAssign(values));
    },
  });
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
                // style={{fontSize:'small',fontWeight:'light'}}
              >
                <option value="">Select Hospital</option>
                {HospitalState?.map((e, i) => {
                  return (
                    <>
                      <option key={i} value={e?.hospitalname}>
                        {e?.hospitalname}
                      </option>
                    </>
                  );
                })}
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
                // style={{fontSize:'small',fontWeight:'light'}}
              >
                <option value="">Select category</option>
                {dCategory?.map((e, i) => {
                  return (
                    <>
                      <option key={i} value={e?.name}>
                        {e?.name}
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
                <option value="">Select doctor</option>
                {allDoctors?.map((e, i) => {
                  return (
                    <>
                      <option key={i} value={e?.doctorName}>
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
