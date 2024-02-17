import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import * as yup from "yup";
import { Modal } from "antd";
import axios from "axios";
import { IconPicker } from "react-fa-icon-picker";
let schema = yup.object().shape({
  name: yup.string().required("Category Name is Required"),
  image: yup.string().required("Image is Required"),
  status: yup.string().required("Status is Required"),
});

const AddDoctorCategory = () => {
  const dispatch = useDispatch();
  const [Open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [Response, setResponse] = useState("");
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
  const { SingleData, isLoading } = dCategory;

  useEffect(() => {
    if (search) {
      console.log(search);}
  }, [search]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: SingleData?.name || "",
      image: SingleData?.image || "",
      status: SingleData?.status || "",
    },
    validationSchema: schema,
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

  console.log(Response);
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
              {/* <div className="form-group">
                <button
                  className="btn btn-primary"
                  onClick={() => setOpen(true)}
                  type="button"
                >
                  Upload Image
                </button>
                <Modal
                  onOk={() => setOpen(false)}
                  open={Open}
                  width={800}
                  onCancel={() => setOpen(false)}
                >
                  <div className="form-group w-75 m-auto py-4">
                    <CustomInput
                      type="text"
                      label="Search icon ... "
                      name="search"
                      onChng={(e) => setSearch(e.target.value)}
                      val={search}
                    />
                    <IconPicker value={search} onChange={(v) => setSearch(v)} />
                    <div className="box"></div>
                  </div>
                </Modal>
              </div> */}
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
