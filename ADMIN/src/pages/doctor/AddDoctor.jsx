import { Field, FieldArray, Formik } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomInput from "../../components/CustomInput";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import {
  createDoctor,
  getADoctor,
  getAllDoctors,
  resetState,
  updateDoctor,
} from "../../features/doctor/doctorSlice";
import { Switch } from "antd";
import Select from "react-dropdown-select";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../utils/baseUrl";

let schema = yup.object().shape({
  doctorName: yup.string().required("Doctor Name is Required"),
  gender: yup.string().required("Doctor's Gender is Required"),
  doctorCode: yup.string().required("Doctor Code is Required"),
  departmentName: yup.string().required("Department Name  is Required"),
  departmentCode: yup.string().required("Department Code is Required"),
  designation: yup.string().required("Designation is Required"),

  experties: yup.array().required("Experties is Required"),
  location: yup.string().required("Location is Required"),
  description: yup.string().required("Description is Required"),
  shortDescription: yup.string().required("Short Description is Required"),
  // experienceInfo: [],
  // awardAndAchivementsInfo: [],
  specialities: yup.string().required("Specialities is Required"),
  // talkPublicationInfo: [],
  // languageInfo: [],
  // educationInfo: [],
  // fellowShipInfo: [],
  metaTitle: yup.string().required("metaTitle is Required"),
  ogMetaTitle: yup.string().required("ogMetaTitle is Required"),
  metaDescription: yup.string().required("metaDescription is Required"),
  ogMetaDescription: yup.string().required("ogMetaDescription is Required"),
  metaTags: yup.string().required("metaTags is Required"),
  price: yup.string().required("Doctor Price is Required"),
  image: yup.string().required("Doctor image is Required"),
  availabileforappointment: yup
    .string()
    .required("availabile for appointment Name is Required"),
  yearofexperience: yup.number().required("year of experience is Required"),
  status: yup.string().required("status is Required"),
});

const AddDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doctorId = location.pathname.split("/")[3];
  useEffect(() => {
    dispatch(allDoctorCategory());
    dispatch(getAllDoctors());

    dispatch(resetState());
  }, [dispatch]);

  const DoctorCategory = useSelector((state) => state.dCategory?.dCategories);

  useEffect(() => {
    if (doctorId !== undefined || "") {
      dispatch(resetState());
      dispatch(getADoctor(doctorId));
    } else {
      dispatch(resetState());
    }
  }, [dispatch, doctorId]);

  const DoctorState = useSelector((state) => state?.doctor);
  const { SingleData, updatedDoctor, isSuccess } = DoctorState;

  if (isSuccess === true && updatedDoctor) {
    navigate("/admin/all-doctors");
  }

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          doctorName: SingleData?.doctorName || "",
          gender: SingleData?.gender || "",
          doctorCode: SingleData?.doctorCode || "",
          departmentName: SingleData?.departmentName || "",
          departmentCode: SingleData?.departmentCode || "",
          designation: SingleData?.designation || "",
          experties: SingleData?.experties || [],

          location: SingleData?.location || "",
          description: SingleData?.description || "",
          shortDescription: SingleData?.shortDescription || "",
          experienceInfo: SingleData?.experienceInfo || [],
          specialities: SingleData?.specialities || "",
          awardAndAchivementsInfo: SingleData?.awardAndAchivementsInfo || [],
          talkPublicationInfo: SingleData?.talkPublicationInfo || [],
          languageInfo: SingleData?.languageInfo || [],
          educationInfo: SingleData?.educationInfo || [],
          fellowShipInfo: SingleData?.fellowShipInfo || [],
          metaTitle: SingleData?.metaTitle || "",
          ogMetaTitle: SingleData?.ogMetaTitle || "",
          metaDescription: SingleData?.metaDescription || "",
          ogMetaDescription: SingleData?.ogMetaDescription || "",
          metaTags: SingleData?.metaTags || "",
          price: SingleData?.price || "",
          image: SingleData?.image || "",
          availabileforappointment:
            SingleData?.availabileforappointment || false,
          yearofexperience: SingleData?.yearofexperience || "",
          status: SingleData?.status || "",
          Username: SingleData?.userId?.Username || "",
          Email: SingleData?.userId?.Email || "",
          phoneNumber: SingleData?.userId?.phoneNumber || "",
          Password: SingleData?.userId?.Password || "",
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
            metaTitle,
            ogMetaTitle,
            metaDescription,
            ogMetaDescription,
            metaTags,
            price,
            image,

            availabileforappointment,
            yearofexperience,
            status,

            Username,
            Email,
            Password,
            phoneNumber,
          } = values;

          console.log("values", values);
          const expertiesName = [];
          for (let index = 0; index < experties.length; index++) {
            expertiesName.push(experties[index]?.name);
          }

          const formData = new FormData();

          formData.append("doctorName", doctorName);
          formData.append("doctorCode", doctorCode);
          formData.append("departmentName", departmentName);
          formData.append("departmentCode", departmentCode);
          formData.append("designation", designation);
          formData.append("experties", JSON.stringify(expertiesName));
          formData.append("specialities", specialities);
          formData.append("location", location);
          formData.append("description", description);
          formData.append("shortDescription", shortDescription);
          formData.append("image", image);

          formData.append("experienceInfo", JSON.stringify(experienceInfo));
          formData.append(
            "awardAndAchivementsInfo",
            JSON.stringify(awardAndAchivementsInfo)
          );
          formData.append(
            "talkPublicationInfo",
            JSON.stringify(talkPublicationInfo)
          );
          formData.append("languageInfo", JSON.stringify(languageInfo));
          formData.append("educationInfo", JSON.stringify(educationInfo));
          formData.append("fellowShipInfo", JSON.stringify(fellowShipInfo));

          formData.append("availabileforappointment", availabileforappointment);
          formData.append("yearofexperience", yearofexperience);
          formData.append("status", status);
          formData.append("gender", gender);
          formData.append("price", price);
          formData.append("metaTags", metaTags);
          formData.append("ogMetaDescription", ogMetaDescription);
          formData.append("metaDescription", metaDescription);
          formData.append("ogMetaTitle", ogMetaTitle);
          formData.append("metaTitle", metaTitle);

          formData.append("phoneNumber", phoneNumber);
          formData.append("Password", Password);
          formData.append("Email", Email);
          formData.append("Username", Username);

          if (doctorId === undefined || "") {
            dispatch(createDoctor(formData));

            setTimeout(() => {
              dispatch(resetState());
            }, 300);
          } else {
            dispatch(updateDoctor({ id: doctorId, formData: formData }));

            setTimeout(() => {
              dispatch(resetState());
            }, 300);
          }
        }}
      >
        {(formik) => (
          <>
            <div>
              <h3 className="mb-4 title">
                {doctorId !== undefined || "" ? "Edit" : "Add"} Doctor
              </h3>
              <div>
                <form
                  onSubmit={formik.handleSubmit}
                  className="mb-4 "
                  encType="multipart/form-data"
                >
                  <div className="row align-items-center ">
                    <div className="col-6">
                      <CustomInput
                        type="text"
                        label="Doctor Name "
                        name="doctorName"
                        onChng={formik.handleChange("doctorName")}
                        onBlr={formik.handleBlur("doctorName")}
                        val={formik.values.doctorName}
                      />
                      <div className="error">
                        {formik.touched.doctorName && formik.errors.doctorName}
                      </div>
                    </div>
                    <div className="col-6">
                      <CustomInput
                        type="text"
                        label="User Name "
                        name="Username"
                        onChng={formik.handleChange("Username")}
                        onBlr={formik.handleBlur("Username")}
                        val={formik.values.Username}
                      />
                      <div className="error">
                        {formik.touched.Username && formik.errors.Username}
                      </div>
                    </div>
                    <div className="col-6">
                      <CustomInput
                        type="text"
                        label="Email Address"
                        name="Email"
                        onChng={formik.handleChange("Email")}
                        onBlr={formik.handleBlur("Email")}
                        val={formik.values.Email}
                      />
                      <div className="error">
                        {formik.touched.Email && formik.errors.Email}
                      </div>
                    </div>
                    <div className="col-6">
                      <PhoneInput
                        countrySelectProps={{ unicodeFlags: true }}
                        className="form-control phoneINP"
                        value={formik.values.phoneNumber}
                        onChange={(el) =>
                          formik.setFieldValue("phoneNumber", el)
                        }
                      />

                      <div className="error">
                        {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber}
                      </div>
                    </div>
                    <div className="col-6">
                      <CustomInput
                        type="password"
                        label="Password "
                        name="Password"
                        onChng={formik.handleChange("Password")}
                        onBlr={formik.handleBlur("Password")}
                        val={formik.values.Password}
                      />
                      <div className="error">
                        {formik.touched.Password && formik.errors.Password}
                      </div>
                    </div>
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
                        {formik.touched.doctorCode && formik.errors.doctorCode}
                      </div>
                    </div>
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
                    <div className="col-6 mt-3">
                      <Select
                        name="experties"
                        placeholder="Select Experties ..."
                        labelField="name"
                        valueField="_id"
                        onChange={(e) => formik.setFieldValue("experties", e)}
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

                      {/* <Select
                        name="experties"
                        mode="multiple"
                        placeholder="Select Experties ..."
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        value={[
                          formik.values?.experties[0],
                          formik.values?.experties[1],
                        ]}
                        // defaultValue={["a10", "c12"]}
                        onChange={(e) => formik.setFieldValue("experties", e)}
                        options={nameCategory}
                      /> */}

                      <div className="error">
                        {formik.touched.experties && formik.errors.experties}
                      </div>
                    </div>
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
                        {formik.touched.location && formik.errors.location}
                      </div>
                    </div>
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
                    <div className="col-12 rounded my-3">
                      <label
                        htmlFor="exampleFormControlTextarea3"
                        className=" m-1 mt-3 py-2"
                      >
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
                    </div>
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
                    <div className="col-6">
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
                            <>
                              <option key={i} value={e?.name}>
                                {e?.name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      <div className="error">
                        {formik.touched.specialities &&
                          formik.errors.specialities}
                      </div>
                    </div>
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
                                {formik.values.experienceInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
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
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.experienceInfo?.length + 1,
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
                    <div
                      className="col-12 p-3 rounded mb-3 "
                      style={{ background: " rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="my-3">Add Award And AchivementsInfo</div>
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
                                            <div className="float-end" key={i}>
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
                                      formik.values.awardAndAchivementsInfo
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
                        {formik.touched.awardAndAchivementsInfo &&
                          formik.errors.awardAndAchivementsInfo}
                      </div>
                    </div>
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
                                            <div className="float-end" key={i}>
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
                                {formik.values.languageInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
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
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.languageInfo?.length + 1,
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
                                {formik.values.educationInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
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
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.educationInfo?.length + 1,
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
                                {formik.values.fellowShipInfo?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 0 && (
                                          <div className="float-end" key={i}>
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
                                })}
                              </div>
                              <div className="form-group  float-end">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.fellowShipInfo?.length + 1,
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
                        type="text"
                        label="Meta Title "
                        name="metaTitle"
                        onChng={formik.handleChange("metaTitle")}
                        onBlr={formik.handleBlur("metaTitle")}
                        val={formik.values.metaTitle}
                      />
                      <div className="error">
                        {formik.touched.metaTitle && formik.errors.metaTitle}
                      </div>
                    </div>
                    <div className="col-6">
                      <CustomInput
                        type="text"
                        label="OG Meta Title "
                        name="ogMetaTitle"
                        onChng={formik.handleChange("ogMetaTitle")}
                        onBlr={formik.handleBlur("ogMetaTitle")}
                        val={formik.values.ogMetaTitle}
                      />
                      <div className="error">
                        {formik.touched.ogMetaTitle &&
                          formik.errors.ogMetaTitle}
                      </div>
                    </div>
                    <div className="col-6 form-group">
                      <label
                        htmlFor="exampleFormControlTextarea"
                        className=" m-1 mt-3"
                      >
                        Meta Description
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea"
                        rows="3"
                        onChange={formik.handleChange("metaDescription")}
                        onBlur={formik.handleBlur("metaDescription")}
                        value={formik.values.metaDescription}
                      />
                      <div className="error">
                        {formik.touched.metaDescription &&
                          formik.errors.metaDescription}
                      </div>
                    </div>
                    <div className="col-6 form-group">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className=" m-1 mt-3"
                      >
                        OG Meta Description
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={formik.handleChange("ogMetaDescription")}
                        onBlur={formik.handleBlur("ogMetaDescription")}
                        value={formik.values.ogMetaDescription}
                      />
                      <div className="error">
                        {formik.touched.ogMetaDescription &&
                          formik.errors.ogMetaDescription}
                      </div>
                    </div>
                    <div className="col-6">
                      <CustomInput
                        type="text"
                        label="metaTags "
                        name="metaTags"
                        onChng={formik.handleChange("metaTags")}
                        onBlr={formik.handleBlur("metaTags")}
                        val={formik.values.metaTags}
                      />
                      <div className="error">
                        {formik.touched.metaTags && formik.errors.metaTags}
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
                    <div className="col-6 ">
                      <img
                        src={`${baseUrl}doctor/${formik.values.image}`}
                        alt={formik.values.doctorName}
                        className="img-fluid"
                      />
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
                        {doctorId !== undefined || "" ? "Edit" : "Add"} Doctor
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddDoctor;
