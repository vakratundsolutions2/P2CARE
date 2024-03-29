import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddTestimonial,
  GetATestimonial,
  GetAllTestimonial,
  UpdateTestimonial,
  resetState,
} from "../../features/testimonial/testimonialSlice";

import { useFormik } from "formik";
import CustomInput from "../../components/CustomInput";

import * as yup from "yup";
import MyEditor from "../../components/MyEditor";
import { baseUrl } from "../../utils/baseUrl";
import UrlToFile from "../../utils/UrlToFile";
let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  designation: yup.string().required("Designation is Required"),
  description: yup.string().required("Description is Required"),
  image: yup.string().required("Image is Required"),
});

const AddTestimonials = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const testimonialId = location.pathname.split("/")[3];

  useEffect(() => {
    if (testimonialId !== undefined || "") {
      dispatch(GetATestimonial(testimonialId));
    } else {
      dispatch(resetState());
    }
  }, [testimonialId]);

  const testimonialState = useSelector((state) => state?.testimonial);
  const { SingleData } = testimonialState;
  const { dataUrl, ImgName } = useSelector((state) => state.IMAGE.imageData);

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: SingleData?.name || "",
      designation: SingleData?.designation || "",
      description: SingleData?.description || "",
      image: dataUrl
        ? dataUrl
        : `${baseUrl}testimonial/${SingleData?.image}` || "",
    },
    validationSchema: schema,

    onSubmit: (values) => {
      const { name, designation, description } = values;

      const formData = new FormData();

      var image = dataUrl ? UrlToFile(dataUrl, ImgName) : SingleData?.image;

      formData.append("name", name);
      formData.append("designation", designation);
      formData.append("description", description);
      formData.append("image", image);

      if (testimonialId === undefined || testimonialId === "") {
        dispatch(AddTestimonial(formData));
      } else {
        dispatch(UpdateTestimonial({ id: testimonialId, formData: formData }));
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
            <h3 className=" title  mb-3 ">
              {testimonialId !== undefined ? "Edit" : "Add"} Testimonial
            </h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <div className="col-12">
                <CustomInput
                  type="text"
                  label="Name"
                  name="name"
                  onChng={formik.handleChange("name")}
                  onBlr={formik.handleBlur("name")}
                  val={formik.values.name}
                />
                <div className="error">
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>
              <div className="col-12">
                <CustomInput
                  type="text"
                  label="Designation"
                  name="designation"
                  onChng={formik.handleChange("designation")}
                  onBlr={formik.handleBlur("designation")}
                  val={formik.values.designation}
                />
                <div className="error">
                  {formik.touched.designation && formik.errors.designation}
                </div>
              </div>

              <div className="col-12 form-floating mb-3">
                <textarea
                  type="text"
                  label="description"
                  name="description"
                  className="form-control"
                  rows="3"
                  onChange={formik.handleChange("description")}
                  value={formik.values.description}
                  placeholder=""
                />
                <label className="" htmlFor="floatingTextarea">
                  Description
                </label>
                <div className="error">
                  {formik.touched.description && formik.errors.description}
                </div>
              </div>

              <div className="col-6">
                {formik.values.image ? (
                  <>
                    <img src={formik.values.image} alt="" />
                  </>
                ) : (
                  ""
                )}
              </div>
              <MyEditor ImgName={"image"} Title={"testimonial image"} />
              <button className="btn btn-primary" type="submit">
                {testimonialId !== undefined ? "Edit" : "Add"} Testimonial
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTestimonials;
