/* eslint-disable no-unused-vars */

import { Field, FieldArray, Formik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import { Switch } from "antd";
import Select from "react-dropdown-select";
import { doctorProfileUpdate } from "../../features/auth/authSlice";
import CustomInput from "../../components/CustomFormGroup";
import { Link, useNavigate } from "react-router-dom";
import { allDoctorCategory } from "../../features/category/dCategorySlice";
import { Col, Container, Row } from "react-bootstrap";

let schema = yup.object().shape({
  doctorName: yup.string().required("Doctor Name is Required"),
  gender: yup.string().required("Doctor's Gender is Required"),
  doctorCode: yup.string().required("Doctor Code is Required"),
  departmentName: yup.string().required("Department Name  is Required"),
  departmentCode: yup.string().required("Department Code is Required"),
  designation: yup.string().required("Designation is Required"),

  experties: yup.array(),
  location: yup.string().required("Location is Required"),
  description: yup.string(),
  shortDescription: yup.string().required("Short Description is Required"),
  specialities: yup.string(),

  price: yup.string().required("Doctor Price is Required"),
  // image: yup.string().required("Doctor image is Required"),
  availabileforappointment: yup.string(),
  yearofexperience: yup.number().required("year of experience is Required"),
  status: yup.string().required("status is Required"),
});

const ProfileSetting = () => {
  const { isError, isSuccess, user } = useSelector((state) => state?.auth);
  const DoctorCategory = useSelector(
    (state) => state.doctorCategory?.dCategories
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = user;

  useEffect(() => {
    dispatch(allDoctorCategory());
  }, [dispatch]);

  const DRdata = useSelector((state)=>state?.auth?.user?.DRdata)
  
  return (
    <div className="main-wrapper">
      {/* <!-- Breadcrumb --> */}
      <div className="breadcrumb-bar-two">
        <Container>
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Profile Details</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/doctor">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Profile Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </Container>
      </div>
      {/* <!-- /Breadcrumb --> */}

      {/* <!-- Page Content --> */}
      <div className="content">
        <Container>
          <Row>
            <div className="col-md-12 col-lg-12 col-xl-12">
              <Formik
                enableReinitialize={true}
                initialValues={{
                  doctorName: userData?.DRdata?.doctorName || "",
                  gender: userData?.DRdata?.gender || "",
                  doctorCode: userData?.DRdata?.doctorCode || "",
                  departmentName: userData?.DRdata?.departmentName || "",
                  departmentCode: userData?.DRdata?.departmentCode || "",
                  designation: userData?.DRdata?.designation || "",
                  experties: userData?.DRdata?.experties || [],

                  location: userData?.DRdata?.location || "",
                  description: userData?.DRdata?.description || "",
                  shortDescription: userData?.DRdata?.shortDescription || "",
                  experienceInfo: userData?.DRdata?.experienceInfo || [],
                  specialities: userData?.DRdata?.specialities || "",
                  awardAndAchivementsInfo:
                    userData?.DRdata?.awardAndAchivementsInfo || [],
                  talkPublicationInfo:
                    userData?.DRdata?.talkPublicationInfo || [],
                  languageInfo: userData?.DRdata?.languageInfo || [],
                  educationInfo: userData?.DRdata?.educationInfo || [],
                  fellowShipInfo: userData?.DRdata?.fellowShipInfo || [],

                  price: userData?.DRdata?.price || "",
                  image: userData?.DRdata?.image || "",
                  availabileforappointment:
                    userData?.DRdata?.availabileforappointment || false,
                  yearofexperience: userData?.DRdata?.yearofexperience || "",
                  status: userData?.DRdata?.status || "",
                }}
                validationSchema={schema}
                onSubmit={(values) => {
                  console.log(values);
                  const {
                    doctorName,
                    gender,
                    doctorCode,
                    departmentName,
                    departmentCode,
                    designation,
                    experties,

                    location,
                    description,
                    shortDescription,
                    experienceInfo,
                    specialities,
                    awardAndAchivementsInfo,
                    talkPublicationInfo,
                    languageInfo,
                    educationInfo,
                    fellowShipInfo,

                    price,
                    image,

                    availabileforappointment,
                    yearofexperience,
                    status,
                  } = values;

                  const expertiesName = [];
                  for (let index = 0; index < experties.length; index++) {
                    expertiesName.push(experties[index]?.name);
                  }

                  const formData = new FormData();

                  console.log(image);
                  

                  // formData.append("doctorName", doctorName);
                  // formData.append("doctorCode", doctorCode);
                  // formData.append("departmentName", departmentName);
                  // formData.append("departmentCode", departmentCode);
                  // formData.append("designation", designation);
                  // formData.append("experties", JSON.stringify(expertiesName));
                  // formData.append("specialities", specialities);

                  // formData.append("location", location);
                  // formData.append("experienceInfo", experienceInfo);
                  // formData.append("description", description);
                  // formData.append("shortDescription", shortDescription);
                  // formData.append(
                  //   "awardAndAchivementsInfo",
                  //   awardAndAchivementsInfo
                  // );
                  // formData.append("talkPublicationInfo", talkPublicationInfo);
                  // formData.append("languageInfo", languageInfo);
                  // formData.append("educationInfo", educationInfo);
                  // formData.append("fellowShipInfo", fellowShipInfo);
                  // formData.append(
                  //   "availabileforappointment",
                  //   availabileforappointment
                  // );
                  // formData.append("yearofexperience", yearofexperience);
                  // formData.append("status", status);
                  // formData.append("gender", gender);
                  // formData.append("price", price);=
                  formData?.append('image',image)
                
                    const DATA = {
                      id: DRdata?._id,
                      formData: formData
                    };

                    console.log(formData);



                  dispatch(doctorProfileUpdate(DATA));
                }}
              >
                {(formik) => (
                  <div>
                    <h3 className="mb-4 title">
                      {/* {doctorId !== undefined || "" ? "Edit" : "Add"} Doctor */}
                    </h3>
                    <div>
                      <form
                        onSubmit={formik.handleSubmit}
                        className="mb-4 "
                        encType="multipart/form-data"
                      >
                        <div className="row align-items-center ">
                          <div className="col-6">
                            {/*doctorName -------------------------------------------------------- */}
                            <CustomInput
                              type="text"
                              label="Doctor Name "
                              name="doctorName"
                              onChng={formik.handleChange("doctorName")}
                              onBlr={formik.handleBlur("doctorName")}
                              val={formik.values.doctorName}
                            />
                            <div className="error">
                              {formik.touched.doctorName &&
                                formik.errors.doctorName}
                            </div>
                          </div>

                          {/* doctorCode -------------------------------------------------------- */}
                          <div className="col-6">
                            <CustomInput
                              type="number"
                              label="Doctor Code "
                              name="doctorCode"
                              onChng={formik.handleChange("doctorCode")}
                              onBlr={formik.handleBlur("doctorCode")}
                              val={formik.values.doctorCode}
                            />
                            <div className="error">
                              {formik.touched.doctorCode &&
                                formik.errors.doctorCode}
                            </div>
                          </div>

                          {/* departmentName -------------------------------------------------------- */}
                          <div className="col-6">
                            <CustomInput
                              type="text"
                              label="Doctor Dept. Name "
                              name="departmentName"
                              onChng={formik.handleChange("departmentName")}
                              onBlr={formik.handleBlur("departmentName")}
                              val={formik.values.departmentName}
                            />
                            <div className="error">
                              {formik.touched.departmentName &&
                                formik.errors.departmentName}
                            </div>
                          </div>

                          {/* departmentCode -------------------------------------------------------- */}
                          <div className="col-6">
                            <CustomInput
                              type="text"
                              label="Doctor Dept. Code "
                              name="departmentCode"
                              onChng={formik.handleChange("departmentCode")}
                              onBlr={formik.handleBlur("departmentCode")}
                              val={formik.values.departmentCode}
                            />
                            <div className="error">
                              {formik.touched.departmentCode &&
                                formik.errors.departmentCode}
                            </div>
                          </div>

                          {/* designation -------------------------------------------------------- */}

                          <div className="col-6">
                            <CustomInput
                              type="text"
                              label="Designation "
                              name="designation"
                              onChng={formik.handleChange("designation")}
                              onBlr={formik.handleBlur("designation")}
                              val={formik.values.designation}
                            />

                            <div className="error">
                              {formik.touched.designation &&
                                formik.errors.designation}
                            </div>
                          </div>

                          {/* experties -------------------------------------------------------- */}

                          <div className="col-6 mt-3">
                            <Select
                              name="experties"
                              labelField="name"
                              placeholder="Select Experties ..."
                              valueField="_id"
                              onChange={(e) =>
                                formik.setFieldValue("experties", e)
                              }
                              className="form-control rounded p-3 mb-3"
                              multi
                              value={[
                                formik.values?.experties[0],
                                formik.values?.experties[1],
                              ]}
                              defaultValue={[
                                formik.values?.experties[0],
                                formik.values?.experties[1],
                              ]}
                              options={DoctorCategory}
                            />

                            <div className="error">
                              {formik.touched.experties &&
                                formik.errors.experties}
                            </div>
                          </div>

                          {/* location -------------------------------------------------------- */}
                          <div className="col-6">
                            <CustomInput
                              type="text"
                              label="Doctor location "
                              name="location"
                              onChng={formik.handleChange("location")}
                              onBlr={formik.handleBlur("location")}
                              val={formik.values.location}
                            />
                            <div className="error">
                              {formik.touched.location &&
                                formik.errors.location}
                            </div>
                          </div>

                          {/* gender -------------------------------------------------------- */}
                          <div className="col-6">
                            <select
                              name="gender"
                              placeholder="Select Gender..."
                              onChange={formik.handleChange("gender")}
                              onBlur={formik.handleBlur("gender")}
                              value={formik.values.gender}
                              className="form-control form-select py-3 px-4 "
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                            <div className="error">
                              {formik.touched.gender && formik.errors.gender}
                            </div>
                          </div>

                          {/* description -------------------------------------------------------- */}
                          {/* <div className="col-12 rounded my-3">
                      <label
                        htmlFor="exampleFormControlTextarea3"
                        className=" m-1 mt-3 py-2">
                        Description
                      </label>{" "}
                      <ReactQuill
                        // readOnly={true}
                        id="exampleFormControlTextarea3"
                        theme="snow"
                        name="description"
                        onChange={formik.handleChange("description")}
                        value={formik.values.description}
                      />
                      <div className="error">
                        {formik.touched.description &&
                          formik.errors.description}
                      </div>
                    </div> */}
                          {/* short description -------------------------------------------------------- */}
                          <div className="col-12 form-group mb-3">
                            <label
                              htmlFor="exampleFormControlTextarea2"
                              className=" m-1 mt-3"
                            >
                              Short Description
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea2"
                              rows="3"
                              onChange={formik.handleChange("shortDescription")}
                              onBlur={formik.handleBlur("shortDescription")}
                              value={formik.values.shortDescription}
                            />
                            <div className="error">
                              {formik.touched.shortDescription &&
                                formik.errors.shortDescription}
                            </div>
                          </div>
                          {/* specialities -------------------------------------------------------- */}
                          <div className="col-6">
                            <label
                              htmlFor="exampleFormControlTextarea2"
                              className=" m-1 mt-3"
                            >
                              Specialities
                            </label>
                            <select
                              name="specialities"
                              placeholder="Select Specialities"
                              onChange={formik.handleChange("specialities")}
                              onBlur={formik.handleBlur("specialities")}
                              value={formik.values.specialities}
                              className="form-control form-select py-3 px-4 mb-3"
                              // style={{fontSize:'small',fontWeight:'light'}}
                            >
                              <option value="">Select specialities</option>
                              {DoctorCategory?.map((e, i) => {
                                return (
                                  <option key={i} value={e?.name}>
                                    {e?.name}
                                  </option>
                                );
                              })}
                            </select>
                            <div className="error">
                              {formik.touched.specialities &&
                                formik.errors.specialities}
                            </div>
                          </div>
                          {/* yearofexperience -------------------------------------------------------- */}
                          <div className="col-6">
                            <CustomInput
                              type="number"
                              label="Year of experience "
                              name="yearofexperience"
                              onChng={formik.handleChange("yearofexperience")}
                              onBlr={formik.handleBlur("yearofexperience")}
                              val={formik.values.yearofexperience}
                            />

                            <div className="error">
                              {formik.touched.yearofexperience &&
                                formik.errors.yearofexperience}
                            </div>
                          </div>
                          {/* experienceInfo -------------------------------------------------------- */}
                          <div
                            className="col-12  p-3 rounded mb-3 mb-3"
                            style={{ background: " rgba(0, 0, 0, 0.1)" }}
                          >
                            <div className="my-3">Add experienceInfo</div>
                            <FieldArray
                              name="experienceInfo"
                              render={(arrayHelpers) => {
                                return (
                                  <>
                                    <div className="row">
                                      {formik.values.experienceInfo?.map(
                                        (e, i) => {
                                          return (
                                            <>
                                              <div key={i}>
                                                {i > 0 && (
                                                  <div
                                                    className="float-end"
                                                    key={i}
                                                  >
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger"
                                                      onClick={() =>
                                                        arrayHelpers.remove(i)
                                                      }
                                                    >
                                                      X
                                                    </button>
                                                  </div>
                                                )}

                                                <div className="form-group  ">
                                                  <Field
                                                    type="text"
                                                    placeholder={`experienceInfo-${
                                                      i + 1
                                                    }`}
                                                    className="form-control  mb-2"
                                                    style={{ width: "95%" }}
                                                    name={`experienceInfo.${i}`}
                                                  />
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                    <div className="form-group  float-end">
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            formik.values.experienceInfo
                                              ?.length + 1,
                                            []
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </>
                                );
                              }}
                            />
                            <div className="error">
                              {formik.touched.experienceInfo &&
                                formik.errors.experienceInfo}
                            </div>
                          </div>

                          {/* awardAndAchivementsInfo -------------------------------------------------------- */}
                          <div
                            className="col-12 p-3 rounded mb-3 "
                            style={{ background: " rgba(0, 0, 0, 0.1)" }}
                          >
                            <div className="my-3">
                              Add Award And AchivementsInfo
                            </div>
                            <FieldArray
                              name="awardAndAchivementsInfo"
                              render={(arrayHelpers) => {
                                return (
                                  <>
                                    <div className="row">
                                      {formik.values.awardAndAchivementsInfo?.map(
                                        (e, i) => {
                                          return (
                                            <>
                                              <div key={i}>
                                                {i > 0 && (
                                                  <div
                                                    className="float-end"
                                                    key={i}
                                                  >
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger"
                                                      onClick={() =>
                                                        arrayHelpers.remove(i)
                                                      }
                                                    >
                                                      X
                                                    </button>
                                                  </div>
                                                )}

                                                <div className="form-group  ">
                                                  <Field
                                                    type="text"
                                                    placeholder={`awardAndAchivementsInfo-${
                                                      i + 1
                                                    }`}
                                                    className="form-control  mb-2"
                                                    style={{ width: "95%" }}
                                                    name={`awardAndAchivementsInfo.${i}`}
                                                  />
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                    <div className="form-group  float-end">
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            formik.values
                                              .awardAndAchivementsInfo?.length +
                                              1,
                                            []
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </>
                                );
                              }}
                            />
                            <div className="error">
                              {formik.touched.awardAndAchivementsInfo &&
                                formik.errors.awardAndAchivementsInfo}
                            </div>
                          </div>
                          {/* talkPublicationInfo -------------------------------------------------------- */}
                          <div
                            className="col-12 rounded p-3 mb-3 "
                            style={{ background: " rgba(0, 0, 0, 0.1)" }}
                          >
                            <div className="my-3">Talk Publication Info</div>
                            <FieldArray
                              name="talkPublicationInfo"
                              render={(arrayHelpers) => {
                                return (
                                  <>
                                    <div className="row">
                                      {formik.values.talkPublicationInfo?.map(
                                        (e, i) => {
                                          return (
                                            <>
                                              <div key={i}>
                                                {i > 0 && (
                                                  <div
                                                    className="float-end"
                                                    key={i}
                                                  >
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger"
                                                      onClick={() =>
                                                        arrayHelpers.remove(i)
                                                      }
                                                    >
                                                      X
                                                    </button>
                                                  </div>
                                                )}

                                                <div className="form-group  ">
                                                  <Field
                                                    type="text"
                                                    placeholder={`Talk Publication Info-${
                                                      i + 1
                                                    }`}
                                                    className="form-control  mb-2"
                                                    style={{ width: "95%" }}
                                                    name={`talkPublicationInfo.${i}`}
                                                  />
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                    <div className="form-group  float-end">
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            formik.values.talkPublicationInfo
                                              ?.length + 1,
                                            []
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </>
                                );
                              }}
                            />
                            <div className="error">
                              {formik.touched.talkPublicationInfo &&
                                formik.errors.talkPublicationInfo}
                            </div>
                          </div>
                          {/* languageInfo -------------------------------------------------------- */}
                          <div
                            className="col-12 rounded p-3 mb-3 "
                            style={{ background: " rgba(0, 0, 0, 0.1)" }}
                          >
                            <div className="my-3">Talk Language Info</div>
                            <FieldArray
                              name="languageInfo"
                              render={(arrayHelpers) => {
                                return (
                                  <>
                                    <div className="row">
                                      {formik.values.languageInfo?.map(
                                        (e, i) => {
                                          return (
                                            <>
                                              <div key={i}>
                                                {i > 0 && (
                                                  <div
                                                    className="float-end"
                                                    key={i}
                                                  >
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger"
                                                      onClick={() =>
                                                        arrayHelpers.remove(i)
                                                      }
                                                    >
                                                      X
                                                    </button>
                                                  </div>
                                                )}

                                                <div className="form-group  ">
                                                  <Field
                                                    type="text"
                                                    placeholder={`Talk Language Info-${
                                                      i + 1
                                                    }`}
                                                    className="form-control  mb-2"
                                                    style={{ width: "95%" }}
                                                    name={`languageInfo.${i}`}
                                                  />
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>

                                    <div className="form-group  float-end">
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            formik.values.languageInfo?.length +
                                              1,
                                            []
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </>
                                );
                              }}
                            />
                            <div className="error">
                              {formik.touched.languageInfo &&
                                formik.errors.languageInfo}
                            </div>
                          </div>
                          <div
                            className="col-12 rounded p-3 mb-3 "
                            style={{ background: " rgba(0, 0, 0, 0.1)" }}
                          >
                            <div className="my-3"> Education Info</div>
                            <FieldArray
                              name="educationInfo"
                              render={(arrayHelpers) => {
                                return (
                                  <>
                                    <div className="row">
                                      {formik.values.educationInfo?.map(
                                        (e, i) => {
                                          return (
                                            <>
                                              <div key={i}>
                                                {i > 0 && (
                                                  <div
                                                    className="float-end"
                                                    key={i}
                                                  >
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger"
                                                      onClick={() =>
                                                        arrayHelpers.remove(i)
                                                      }
                                                    >
                                                      X
                                                    </button>
                                                  </div>
                                                )}

                                                <div className="form-group  ">
                                                  <Field
                                                    type="text"
                                                    placeholder={`Education Info-${
                                                      i + 1
                                                    }`}
                                                    className="form-control  mb-2"
                                                    style={{ width: "95%" }}
                                                    name={`educationInfo.${i}`}
                                                  />
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                    <div className="form-group  float-end">
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            formik.values.educationInfo
                                              ?.length + 1,
                                            []
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </>
                                );
                              }}
                            />
                            <div className="error">
                              {formik.touched.educationInfo &&
                                formik.errors.educationInfo}
                            </div>
                          </div>
                          <div
                            className="col-12 justify-content-center rounded p-3 mb-3 "
                            style={{ background: " rgba(0, 0, 0, 0.1)" }}
                          >
                            <div className="my-3"> FellowShip Info</div>
                            <FieldArray
                              name="fellowShipInfo"
                              render={(arrayHelpers) => {
                                return (
                                  <>
                                    <div className="row">
                                      {formik.values.fellowShipInfo?.map(
                                        (e, i) => {
                                          return (
                                            <>
                                              <div key={i}>
                                                {i > 0 && (
                                                  <div
                                                    className="float-end"
                                                    key={i}
                                                  >
                                                    <button
                                                      type="button"
                                                      className="btn btn-danger"
                                                      onClick={() =>
                                                        arrayHelpers.remove(i)
                                                      }
                                                    >
                                                      X
                                                    </button>
                                                  </div>
                                                )}

                                                <div className="form-group  ">
                                                  <Field
                                                    type="text"
                                                    placeholder={`FellowShip Info-${
                                                      i + 1
                                                    }`}
                                                    className="form-control  mb-2"
                                                    style={{ width: "95%" }}
                                                    name={`fellowShipInfo.${i}`}
                                                  />
                                                </div>
                                              </div>
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                    <div className="form-group  float-end">
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() =>
                                          arrayHelpers.insert(
                                            formik.values.fellowShipInfo
                                              ?.length + 1,
                                            []
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </>
                                );
                              }}
                            />
                            <div className="error">
                              {formik.touched.fellowShipInfo &&
                                formik.errors.fellowShipInfo}
                            </div>
                          </div>

                          <div className="col-6">
                            <CustomInput
                              type="number"
                              label="price "
                              name="price"
                              onChng={formik.handleChange("price")}
                              onBlr={formik.handleBlur("price")}
                              val={formik.values.price}
                            />
                            <div className="error">
                              {formik.touched.price && formik.errors.price}
                            </div>
                          </div>

                          <div className="col-6">
                            <CustomInput
                              type="file"
                              label="Doctor Image "
                              accept="image/*"
                              name="image"
                              id="formFile"
                              onChng={(e) =>
                                formik.setFieldValue("image", e.target.files[0])
                              }
                            />{" "}
                            <div className="error">
                              {formik.touched.image && formik.errors.image}
                            </div>
                          </div>

                          <div className="col-6 m-4 d-flex">
                            <div className="form-check-inline visits ">
                              <label className="">
                                <Switch
                                  type="checkbox"
                                  checkedChildren={<CheckOutlined />}
                                  name="availabileforappointment"
                                  unCheckedChildren={<CloseOutlined />}
                                  value={formik.values.availabileforappointment}
                                  onChange={(e) =>
                                    formik.setFieldValue(
                                      "availabileforappointment",
                                      e
                                    )
                                  }
                                />

                                <span className="px-3">
                                  Availabile For Appointment
                                </span>
                              </label>
                            </div>

                            <div className="error">
                              {formik.touched.availabileforappointment &&
                                formik.errors.availabileforappointment}
                            </div>
                          </div>

                          <div className="p-3 w-full ">
                            <button type="submit" className="btn btn-primary ">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </Row>
        </Container>
      </div>
      {/* <!-- /Page Content --> */}
    </div>
  );
};
export default ProfileSetting;
