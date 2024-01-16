import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {

  createDoctorCategory,
  getADoctorCategory,
  resetState,
  updateDoctorCategory,
} from "../../features/dCategory/dCategorySlice.jsx";
import CustomInput from "../../components/CustomInput.jsx";
import { useFormik } from "formik";
import { IoArrowBack } from "react-icons/io5";
import Loding from "../../components/Loding.jsx";

const AddDoctorCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const catId = location.pathname.split("/")[3];
   useEffect(() => {
     if (catId !== undefined || "") {
       dispatch(getADoctorCategory(catId));
       dispatch(resetState());
     } else {
       dispatch(resetState());
     }
   }, [catId]);
  
  const dCategory = useSelector((state) => state?.dCategory);
   const {SingleData  , isLoading} = dCategory
   


  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: SingleData?.name || "",
      image: SingleData?.image || "",
      status: SingleData?.status || "",
    },

    onSubmit: async (values) => {
      const { image, status, name } = values;
      const formData = new FormData();
      formData.append("image", image);
      formData.append("status", status);
      formData.append("name", name);
      if (catId === undefined || "") {
        dispatch(createDoctorCategory(formData));
      } else {
        dispatch(updateDoctorCategory({ id: catId, formData: formData }));
      }
    },
  });

  return (
    <>
      <div className="">
        <button
          className="ms-3 fs-2 btn  bg-transparent border-0"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </button>
      </div>
      <div className="my-3 mb-4 justify-content-center d-flex">
        <div className="col-sm-8">
          <div className="card p-5">
            {isLoading === true && <Loding />}

            <h3 className=" title text-center mb-3 ">
              {catId !== undefined ? "Edit" : "Add"} Category
            </h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <CustomInput
                type="text"
                label="Category Name "
                name="name"
                onChng={formik.handleChange("name")}
                onBlr={formik.handleBlur("name")}
                val={formik.values.name}
              />
              <div className="error">
                {formik.touched.name && formik.errors.name}
              </div>
              <CustomInput
                type="file"
                label="Category Name "
                accept="image/*"
                name="image"
                id="formFile"
                onChng={(e) => formik.setFieldValue("image", e.target.files[0])}
              />{" "}
              <div className="error">
                {formik.touched.image && formik.errors.image}
              </div>
              <select
                name="status"
                onChange={formik.handleChange("status")}
                onBlur={formik.handleBlur("status")}
                value={formik.values.status}
                className="form-control py-3 mb-3"
              >
                <option value="">Select</option>
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
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

export default AddDoctorCategory;
