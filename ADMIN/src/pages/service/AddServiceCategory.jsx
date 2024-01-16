import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { IoArrowBack } from "react-icons/io5";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addServiceCategory, getAServiceCategory, resetState, updateServiceCategory } from "../../features/serviceCategory/sCategorySlice";

const AddServiceCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const catId = location.pathname.split("/")[3];


  useEffect(() => {
    if (catId !== undefined || "") {
      dispatch(getAServiceCategory(catId));
    } else {
      dispatch(resetState());
    }
  }, [catId]);

  const sCategory = useSelector((state) => state?.sCategory);
  const {SingleData} = sCategory


  

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Name: SingleData?.Name ||"",
      ForService: SingleData?.ForService || "",
      Icon: SingleData?.Icon || "",
      status: SingleData?.status || "",
    },

    onSubmit: async (values) => {
      const { Icon, ForService, status, Name } = values;
      const formData = new FormData();
      formData.append("Icon", Icon);
      formData.append("status", status);
      formData.append("Name", Name);
      formData.append("ForService", ForService);
      if (catId === undefined || "") {
        dispatch(addServiceCategory(formData));
           setTimeout(() => {
             dispatch(resetState());
           }, 300);
      } else {
        dispatch(updateServiceCategory({ id: catId, formData: formData }));
           setTimeout(() => {
             dispatch(resetState());
           }, 300);
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
            <h3 className=" title text-center mb-3 ">
              {catId !== undefined ? "Edit" : "Add"} Service Category
            </h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <CustomInput
                type="text"
                label="Category Name "
                name="Name"
                onChng={formik.handleChange("Name")}
                onBlr={formik.handleBlur("Name")}
                val={formik.values.Name}
              />
              <div className="error">
                {formik.touched.Name && formik.errors.Name}
              </div>
              <select
                name="ForService"
                onChange={formik.handleChange("ForService")}
                onBlur={formik.handleBlur("ForService")}
                value={formik.values.ForService}
                className="form-control form-select py-3 mb-3"
              >
                <option selected>Add Service For</option>
                <option value="Hospital">Hospital</option>
                <option value="Doctor">Doctor</option>
              </select>
              <div className="error">
                {formik.touched.ForService && formik.errors.ForService}
              </div>
              <select
                name="status"
                onChange={formik.handleChange("status")}
                onBlur={formik.handleBlur("status")}
                value={formik.values.status}
                className="form-control form-select py-3 mb-3"
              >
                <option selected>Status</option>
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
              </select>
              <div className="error">
                {formik.touched.status && formik.errors.status}
              </div>
              <CustomInput
                type="file"
                label="Category Name "
                accept="image/*"
                name="Icon"
                id="formFile"
                onChng={(e) => formik.setFieldValue("Icon", e.target.files[0])}
              />{" "}
              <div className="error">
                {formik.touched.Icon && formik.errors.Icon}
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

export default AddServiceCategory;
