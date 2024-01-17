import { Field, FieldArray, Formik, useFormik } from "formik";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  allDoctorCategory,
  resetState,
} from "../../features/dCategory/dCategorySlice";
import { getAllServices } from "../../features/service/serviceSlice";
import Select from "react-dropdown-select";
import {
  AddHospital,
  getAHospital,
  updateAHospital,
} from "../../features/hospital/hospitalSlice";
import { deleteAssign, getAllAssign } from "../../features/assingn/assignSlice";

const AddDoctor = () => {
  const hospitalId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
  if (hospitalId !== undefined || "") {
    // dispatch(resetState());
    dispatch(getAHospital(hospitalId));
  } else {
    dispatch(resetState());
  }
}, [hospitalId]);
  useEffect(() => {
    dispatch(allDoctorCategory());
    dispatch(getAllServices());
    dispatch(getAllAssign());

  }, []);
  const DoctorCategory = useSelector((state) => state.dCategory?.dCategories);
  const AllService = useSelector((state) => state.service?.Services);
  const AsignData = useSelector((state) => state.assign?.AllAsignDoctor);

  const hospitalState = useSelector((state) => state.hospital);
  const {SingleData } = hospitalState;

  
  const newAsignData = AsignData?.filter((el) => {
    return el.hospital === SingleData?.hospitalname;
  });

  const handleDelete = (data) => {
    console.log(data);
    dispatch(deleteAssign(data));
    setTimeout(() => {
      dispatch(getAllAssign());
    }, 100);
  };
  console.log(SingleData);
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          hospitalname: SingleData?.hospitalname||'',
          hospitaladdress: SingleData?.hospitaladdress || "",
          description: SingleData?.description || "",
          shortdescription: SingleData?.shortdescription || "",
          openingtime: SingleData?.openingtime || "",
          closingtime: SingleData?.closingtime || "",
          service: SingleData?.service || "",
          category: SingleData?.category || "",
          status: SingleData?.status || "",
          hospitallogo: SingleData?.hospitallogo || "",
          // assignDRname: "",
          // assignHOSname: "",
          // assignAMT: "",
        }}
        // validationSchema: schema,
        onSubmit={(values) => {
          const {
            hospitalname,
            hospitaladdress,
            description,
            shortdescription,
            openingtime,
            closingtime,
            service,
            category,
            status,
            hospitallogo,
          } = values;
          console.log(values);
          const formData = new FormData();
          formData.append("hospitalname", hospitalname);
          formData.append("hospitaladdress", hospitaladdress);
          formData.append("description", description);
          formData.append("shortdescription", shortdescription);
          formData.append("openingtime", openingtime);
          formData.append("closingtime", closingtime);
          formData.append("service", JSON.stringify(service));
          // formData.append("service", service);
          // formData.append("category", category);
          formData.append("category", JSON.stringify(category));
          formData.append("status", status);
          formData.append("hospitallogo", hospitallogo);
          if (hospitalId === undefined || "") {
            dispatch(AddHospital(formData));
          } else {
            dispatch(updateAHospital({ id: hospitalId, formData: formData }));
          }
        }}
      >
        {(formik) => (
          <>
            <div className="my-4">
              <button
                className="ms-3 fs-2 btn  bg-transparent border-0"
                onClick={() => navigate(-1)}
              >
                <IoArrowBack />
              </button>
            </div>

            <div className="container-xxl">
              <div className="title">
                <h3>
                  {" "}
                  {hospitalId !== undefined || "" ? "Edit" : "Add"} Hospital
                </h3>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className=" my-4"
                encType="multipart/form-data"
              >
                <div className="row align-items-center justify-content-center">
                  <div className="col-12">
                    <CustomInput
                      type="text"
                      label="Hospital Name "
                      name="hospitalname"
                      onChng={formik.handleChange("hospitalname")}
                      onBlr={formik.handleBlur("hospitalname")}
                      val={formik.values.hospitalname}
                    />
                    <div className="error">
                      {formik.touched.hospitalname &&
                        formik.errors.hospitalname}
                    </div>
                  </div>
                  <div className="col-12">
                    <CustomInput
                      type="text"
                      label="Hospital Address "
                      name="hospitaladdress"
                      onChng={formik.handleChange("hospitaladdress")}
                      onBlr={formik.handleBlur("hospitaladdress")}
                      val={formik.values.hospitaladdress}
                    />
                    <div className="error">
                      {formik.touched.hospitaladdress &&
                        formik.errors.hospitaladdress}
                    </div>
                  </div>
                  <div className="col-12">
                    <label
                      htmlFor="exampleFormControlTextarea4"
                      className=" m-1 mt-3 py-2"
                    >
                      Hospital Description
                    </label>{" "}
                    <ReactQuill
                      // readOnly={true}
                      id="exampleFormControlTextarea4"
                      theme="snow"
                      name="description"
                      onChange={formik.handleChange("description")}
                      value={formik.values.description}
                    />
                    <div className="error">
                      {formik.touched.description && formik.errors.description}
                    </div>
                  </div>
                  {/* <div className="col-12 gap-5 justify-content-center d-flex"> */}
                  <div className="col-6">
                    <CustomInput
                      type="time"
                      label="Hospital Opning Time "
                      name="openingtime"
                      onChng={formik.handleChange("openingtime")}
                      onBlr={formik.handleBlur("openingtime")}
                      val={formik.values.openingtime}
                    />
                    <div className="error">
                      {formik.touched.openingtime && formik.errors.openingtime}
                    </div>
                  </div>
                  <div className="col-6 ">
                    <CustomInput
                      type="time"
                      label="Hospital Closing Time "
                      name="closingtime"
                      onChng={formik.handleChange("closingtime")}
                      onBlr={formik.handleBlur("closingtime")}
                      val={formik.values.closingtime}
                    />
                    <div className="error">
                      {formik.touched.closingtime && formik.errors.closingtime}
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="col-12 form-group mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea5"
                      className=" m-1 mt-3"
                    >
                      Short Description
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea5"
                      rows="3"
                      name="shortdescription"
                      onChange={formik.handleChange("shortdescription")}
                      onBlur={formik.handleBlur("shortdescription")}
                      value={formik.values.shortdescription}
                    />
                    <div className="error">
                      {formik.touched.shortdescription &&
                        formik.errors.shortdescription}
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <Select
                      name="category"
                      labelField="name"
                      placeholder="Select Category ..."
                      valueField="_id"
                      onChange={(e) => formik.setFieldValue("category", e)}
                      className="form-control rounded p-3 mb-3"
                      multi
                      value={[formik.values.category]}
                      options={DoctorCategory}
                    />
                    <div className="error">
                      {formik.touched.category && formik.errors.category}
                    </div>
                  </div>{" "}
                  <div className="col-6 mt-3">
                    <Select
                      name="service"
                      labelField="title"
                      placeholder="Select service ..."
                      valueField="_id"
                      onChange={(e) => formik.setFieldValue("service", e)}
                      className="form-control rounded p-3 mb-3"
                      multi
                      value={[formik.values.service]}
                      options={AllService}
                    />
                    <div className="error">
                      {formik.touched.service && formik.errors.service}
                    </div>
                  </div>{" "}
                  <div className="col-6">
                    <select
                      name="status"
                      placeholder="Select Status..."
                      onChange={formik.handleChange("status")}
                      onBlur={formik.handleBlur("status")}
                      value={formik.values.status}
                      className="form-control form-select py-3 px-4 "
                    >
                      <option value="">Select Status</option>
                      <option value="draft">Draft</option>
                      <option value="publish">Publish</option>
                    </select>
                    <div className="error">
                      {formik.touched.status && formik.errors.status}
                    </div>
                  </div>
                  <div className="col-6">
                    <CustomInput
                      type="file"
                      label="Hospital Logo "
                      accept="image/*"
                      name="hospitallogo"
                      id="formFile"
                      onChng={(e) =>
                        formik.setFieldValue("hospitallogo", e.target.files[0])
                      }
                    />{" "}
                    <div className="error">
                      {formik.touched.hospitallogo &&
                        formik.errors.hospitallogo}
                    </div>
                  </div>
                </div>
                {hospitalId !== undefined || "" ? (
                  <>
                    <hr />

                    <div
                      className="col-12 py-5 px-4 rounded   mb-3"
                      // style={{ background: " rgba(0, 0, 0, 0.1)" }}
                    >
                      <h3 className="mb-3">Assign Doctor</h3>

                      {newAsignData?.map((e, i) => {
                        return (
                          <>
                            <div className=" gap-4 mb-2   d-flex" key={i}>
                              <div className="form-group">
                                <select
                                  disabled
                                  className="form-select  p-2 mb-2"
                                  style={{ width: "15vw" }}
                                >
                                  <option value={e?.hodpital}>
                                    {e?.hospital}
                                  </option>
                                </select>
                              </div>
                              <div className="form-group ">
                                <select
                                  className="form-select p-2   mb-2"
                                  disabled
                                  style={{ width: "15vw" }}
                                >
                                  <option value={e?.category}>
                                    {e?.category}
                                  </option>
                                </select>
                              </div>

                              <div className="form-group">
                                <select
                                  className="form-select p-2  mb-2"
                                  disabled
                                  style={{ width: "12vw" }}
                                >
                                  <option value={e?.doctor}>{e?.doctor}</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <input
                                  type="text"
                                  disabled
                                  placeholder="Amount"
                                  value={e?.amount}
                                  className="form-control   mb-2 "
                                  style={{ width: "12vw" }}
                                />
                              </div>
                              <div className="form-group d-flex align-items-center gap-2">
                                <div className="text-danger">
                                  <Link
                                    type="button"
                                    to={`/admin/assign-doctor/${e?._id}`}
                                    className="btn  btn-outline-primary"
                                    // onClick={() => handleDelete(e?._id)}
                                  >
                                    EDIT
                                  </Link>
                                </div>
                                <div className="">
                                  <button
                                    type="button"
                                    className="btn  btn-outline-danger"
                                    onClick={() => handleDelete(e?._id)}
                                  >
                                    DELETE
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}

                      <div className="float-end mx-4 px-5">
                        <Link
                          to={"/admin/assign-doctor"}
                          className="btn btn-info"
                        >
                          Assign Doctor{" "}
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <button className="btn btn-primary m-4" type="submit">
                  {hospitalId !== undefined || "" ? "Edit" : "Add"} Hospital
                </button>
              </form>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddDoctor;
