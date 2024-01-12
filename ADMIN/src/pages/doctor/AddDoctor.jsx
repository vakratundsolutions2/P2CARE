import { Field, FieldArray, Formik } from "formik";
import CustomInput from "../..//components/CustomInput";
import * as yup from "yup";
import Select from "react-dropdown-select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";

import { getAllHospitals } from "../../features/hospital/hospitalSlice";
import ReactQuill from "react-quill";
import {
  createDoctor,
  getAllDoctors,
  resetState,
  updateDoctor,
} from "../../features/doctor/doctorSlice";

let schema = yup.object().shape({
  doctorName: "",
  doctorCode: "",
  departmentName: "",
  departmentCode: "",
  designation: "",

  experties: [],
  slug: "",
  location: "",
  description: "",
  shortDescription: "",
  experienceInfo: [],
  awardAndAchivementsInfo: [],
  specialities: "",
  talkPublicationInfo: [],
  languageInfo: [],
  educationInfo: [],
  fellowShipInfo: [],
  metaTitle: "",
  ogMetaTitle: "",
  metaDescription: "",
  ogMetaDescription: "",
  metaTags: "",
  price: "",
  image: "",
  availabileforappointment: false,
  hospital: "",
  status: "",
});

const AddDoctor = () => {
  const DoctorCategory = useSelector((state) => state.dCategory?.dCategories);
  const allDoctors = useSelector((state) => state?.doctor?.allDoctors);

  const doctorId = location.pathname.split("/")[3];
  const updateData = allDoctors?.filter((e) => {
    return e._id === doctorId;
  });

  const AllHospitals = useSelector((state) => state.hospital?.AllHospitals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDoctorCategory());
    dispatch(getAllHospitals());
    dispatch(getAllDoctors());

    dispatch(resetState());
  }, []);




  return (
    <>
      <Formik
        initialValues={{
          doctorName: updateData ? updateData[0]?.doctorName : "",
          doctorCode: updateData ? updateData[0]?.doctorCode : "",
          departmentName: updateData ? updateData[0]?.departmentName : "",
          departmentCode: updateData ? updateData[0]?.departmentCode : "",
          designation: updateData ? updateData[0]?.designation : "",
          experties: updateData ? updateData[0]?.experties : [],
          slug: updateData ? updateData[0]?.slug : "",
          location: updateData ? updateData[0]?.location : "",
          description: updateData ? updateData[0]?.description : "",
          shortDescription: updateData ? updateData[0]?.shortDescription : "",
          experienceInfo: updateData ? updateData[0]?.experienceInfo : [],
          specialities: updateData ? updateData[0]?.specialities : "",
          awardAndAchivementsInfo: updateData
            ? updateData[0]?.awardAndAchivementsInfo
            : [],
          talkPublicationInfo: updateData
            ? updateData[0]?.talkPublicationInfo
            : [],
          languageInfo: updateData ? updateData[0]?.languageInfo : [],
          educationInfo: updateData ? updateData[0]?.educationInfo : [],
          fellowShipInfo: updateData ? updateData[0]?.fellowShipInfo : [],
          metaTitle: updateData ? updateData[0]?.metaTitle : "",
          ogMetaTitle: updateData ? updateData[0]?.ogMetaTitle : "",
          metaDescription: updateData ? updateData[0]?.metaDescription : "",
          ogMetaDescription: updateData ? updateData[0]?.ogMetaDescription : "",
          metaTags: updateData ? updateData[0]?.metaTags : "",
          price: updateData ? updateData[0]?.price : "",
          image: updateData ? updateData[0]?.image : "",
          availabileforappointment: updateData
            ? updateData[0]?.availabileforappointment
            : false,
          hospital: updateData ? updateData[0]?.hospital : "",
          status: updateData ? updateData[0]?.status : "",
        }}
        onSubmit={(values) => {
          const {
            doctorName,
            doctorCode,
            departmentName,
            departmentCode,
            designation,
            experties,
            slug,
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
            hospital,
            status,
          } = values;

          const formData = new FormData();
          formData.append("doctorName", doctorName);
          formData.append("doctorCode", doctorCode);
          formData.append("departmentName", departmentName);
          formData.append("departmentCode", departmentCode);
          formData.append("designation", designation);
          formData.append("experties", JSON.stringify(experties));
          formData.append("specialities", specialities);
          formData.append("slug", slug);
          formData.append("location", location);
          formData.append("experienceInfo", experienceInfo);
          formData.append("description", description);
          formData.append("shortDescription", shortDescription);
          formData.append("awardAndAchivementsInfo", awardAndAchivementsInfo);
          formData.append("talkPublicationInfo", talkPublicationInfo);
          formData.append("languageInfo", languageInfo);
          formData.append("educationInfo", educationInfo);
          formData.append("fellowShipInfo", fellowShipInfo);
          formData.append("image", image);
          formData.append("availabileforappointment", availabileforappointment);
          formData.append("hospital", JSON.stringify(hospital));
          formData.append("status", status);
          formData.append("price", price);
          formData.append("metaTags", metaTags);
          formData.append("ogMetaDescription", ogMetaDescription);
          formData.append("metaDescription", metaDescription);
          formData.append("ogMetaTitle", ogMetaTitle);
          formData.append("metaTitle", metaTitle);
          if (doctorId === undefined || "") {
            dispatch(createDoctor(formData));
          } else {
            dispatch(updateDoctor({ id: doctorId, formData: formData }));
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
                <form onSubmit={formik.handleSubmit} className="mb-4 ">
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

                    <div className="col-6">
                      <CustomInput
                        type="text"
                        label="Doctor slug "
                        name="slug"
                        onChng={formik.handleChange("slug")}
                        onBlr={formik.handleBlur("slug")}
                        val={formik.values.slug}
                      />
                      <div className="error">
                        {formik.touched.slug && formik.errors.slug}
                      </div>
                    </div>
                    <div className="col-6 mt-3">
                      <Select
                        name="experties"
                        labelField="name"
                        placeholder="Select Experties ..."
                        valueField="_id"
                        onChange={(e) => formik.setFieldValue("experties", e)}
                        className="form-control rounded p-3 mb-3"
                        multi
                        defaultValue={formik.values.experties}
                        options={DoctorCategory}
                      />
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
                      <Select
                        name="hospital"
                        labelField="hospitalname"
                        placeholder="Select hospital ..."
                        valueField="_id"
                        className="form-control rounded p-3 mb-3"
                        options={AllHospitals}
                        defaultValue={formik.values.hospital}
                        onChange={(e) => formik.setFieldValue("hospital", e)}
                        multi
                      />
                      <div className="error">
                        {formik.touched.hospital && formik.errors.hospital}
                      </div>
                    </div>

                    <div
                      className="col-11  p-3 rounded mb-3 mb-3"
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
                      className="col-11 p-3 rounded mb-3 "
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
                      className="col-11 rounded p-3 mb-3 "
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
                      className="col-11 rounded p-3 mb-3 "
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
                      className="col-11 rounded p-3 mb-3 "
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
                      className="col-11 rounded p-3 mb-3 "
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

                    <div className="col-6 m-4 d-flex">
                      <div className="form-check  form-switch ">
                        <input
                          className="form-check-input  "
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          name="availabileforappointment"
                          value={formik.values.availabileforappointment}
                          onChange={formik.handleChange(
                            "availabileforappointment"
                          )}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Availabile For Appointment
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
