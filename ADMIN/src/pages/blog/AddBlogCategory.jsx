import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import CustomInput from "../../components/CustomInput.jsx";
import { useFormik } from "formik";
import { IoArrowBack } from "react-icons/io5";
import { AddblogCategory, GetAllBlogCategory, UpdateBlogCategory, resetState } from "../../features/blogCategory/BlogCategorySlice.jsx";

const AddBlogCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bCategory = useSelector((state) => state?.blogCategory?.BlogCategories);

  const catId = location.pathname.split("/")[3];

  useEffect(() => {
    dispatch(GetAllBlogCategory());
    dispatch(  resetState());
  }, []);

  const updateData = bCategory?.filter((e) => {
    return e._id === catId;
  });

  const formik = useFormik({
    initialValues: {
      name: updateData ? updateData[0]?.name : "",
      status: updateData ? updateData[0]?.status : "",
    },

    onSubmit:  (values) => {  



      if (catId === undefined || catId === "") {
        dispatch(AddblogCategory(values));
      } 
      else {
        dispatch(UpdateBlogCategory({ id: catId, formData: values }));
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
        <div className="col-sm-12">
          <div className="card p-5">
            <h3 className=" title text-center mb-3 ">
              {catId !== undefined ? "Edit" : "Add"} Blog Category
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

export default AddBlogCategory;
