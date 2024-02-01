import { useFormik } from "formik";
import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { EditInq, GetInquary } from "../../features/report/reportSlice";

const EditInquary = () => {
    const dispatch = useDispatch()
  const ID = location.pathname.split("/")[3];
  useEffect(() => {
    dispatch(GetInquary(ID));
  }, [])
  
  const { SingleInquary } = useSelector((state) => state.report);
  const formik = useFormik({
    initialValues: {
      name: SingleInquary?.name || "",
      email: SingleInquary?.email || "",
      mobile: SingleInquary?.mobile || "",
      comment: SingleInquary?.comment || "",
      status: SingleInquary?.status || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
        dispatch(EditInq({id:ID,formData:values}));
        
    },
  });
  return (
    <>
      <div className="my-3 mb-4 justify-content-center d-flex">
        <div className="col-sm-8">
          <div className="card p-5">
            <h3 className=" title text-center mb-3 ">Inquary</h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <CustomInput
                type="text"
                label="Name "
                name="name"
                onChng={formik.handleChange("name")}
                onBlr={formik.handleBlur("name")}
                val={formik.values.name}
              />
              <div className="error">
                {formik.touched.name && formik.errors.name}
              </div>

              <CustomInput
                type="text"
                label="Email "
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
                label="Mobile "
                name="mobile"
                onChng={formik.handleChange("mobile")}
                onBlr={formik.handleBlur("mobile")}
                val={formik.values.mobile}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
              </div>

              <CustomInput
                type="text"
                label="comment "
                name="comment"
                onChng={formik.handleChange("comment")}
                onBlr={formik.handleBlur("comment")}
                val={formik.values.comment}
              />
              <div className="error">
                {formik.touched.comment && formik.errors.comment}
              </div>
              <select
                name="status"
                onChange={formik.handleChange("status")}
                onBlur={formik.handleBlur("status")}
                value={formik.values.status}
                className="form-control form-select py-3 mb-3"
              >
                <option selected>Status</option>
                <option value="Submitted">Submitted</option>
                <option value="Resolved">Resolved</option>
              </select>
              <div className="error">
                {formik.touched.status && formik.errors.status}
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditInquary;
