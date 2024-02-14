import { Field, FieldArray, Formik, useFormik } from "formik";
import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import {
  AddAbout,
  GetAbout,
  UpdateAbout,
} from "../../features/content/ContentSlice";

const About = () => {
  const ID = "65cb4c03297c66d95a61dc44";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAbout(ID));
  }, []);

  const { about } = useSelector((state) => state.content);

  return (
    <>
      
      <Formik
        enableReinitialize={true}
        initialValues={{
          title: about?.title || "",
          description: about?.description || "",
          bennertitle: about?.bennertitle || "",
          bennerdescription: about?.bennerdescription || "",
          whychoseus: about?.whychoseus || [
            { shorttitle: "", shortdescription: "" },
          ],
        }}
        onSubmit={(values) => {
          console.log(values);
          const {
            title,
            description,
            bennerdescription,
            bennertitle,
            whychoseus,
          } = values;

          // const formData = new FormData();
          // formData.append("title", title);
          // formData.append("description", description);
          // formData.append("bennerdescription", bennerdescription);
          // formData.append("bennertitle", bennertitle);
          // formData.append("whychoseus", JSON.stringify(whychoseus));

          const data = { id: ID, formData: values };

          dispatch(UpdateAbout(data));
        }}
      >
        {(formik) => (
          <>
            <div>
              <h3 className="mb-4 title">
                {ID !== undefined || "" ? "Edit" : "Add"} About Page
              </h3>
              <div>
                <form
                  onSubmit={formik.handleSubmit}
                  className="mb-4 "
                  encType="multipart/form-data"
                >
                  <div className=" ">
                    <CustomInput
                      type="text"
                      label="Title"
                      name="title"
                      onChng={formik.handleChange("title")}
                      onBlr={formik.handleBlur("title")}
                      val={formik.values.title}
                    />
                    <div className="error">
                      {formik.touched.title && formik.errors.title}
                    </div>

                    <CustomInput
                      type="text"
                      label="Description"
                      name="description"
                      onChng={formik.handleChange("description")}
                      onBlr={formik.handleBlur("description")}
                      val={formik.values.description}
                    />
                    <div className="error">
                      {formik.touched.description && formik.errors.description}
                    </div>

                    <CustomInput
                      type="text"
                      label="Benner Title"
                      name="bennertitle"
                      onChng={formik.handleChange("bennertitle")}
                      onBlr={formik.handleBlur("bennertitle")}
                      val={formik.values.bennertitle}
                    />
                    <div className="error">
                      {formik.touched.bennertitle && formik.errors.bennertitle}
                    </div>
                    <CustomInput
                      type="text"
                      label="Benner Description "
                      name="bennerdescription"
                      onChng={formik.handleChange("bennerdescription")}
                      onBlr={formik.handleBlur("bennerdescription")}
                      val={formik.values.bennerdescription}
                    />
                    <div className="error">
                      {formik.touched.bennerdescription &&
                        formik.errors.bennerdescription}
                    </div>
                    <div
                      className="col-12  p-5 rounded mb-3 "
                      style={{ background: " rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="my-3">Add whychoseus</div>
                      <FieldArray
                        name="whychoseus"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.whychoseus?.map((e, i) => {
                                  return (
                                    <>
                                      <div key={i}>
                                        {i > 4 && (
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
                                            placeholder={`Short Title-${i + 1}`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`whychoseus.${i}.shorttitle`}
                                            id={`whychoseus.${i}.shorttitle`}
                                          />
                                        </div>
                                        <div className="form-group  ">
                                          <Field
                                            type="text"
                                            placeholder={`Shortdescription-${
                                              i + 1
                                            }`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            name={`whychoseus.${i}.shortdescription`}
                                            id={`whychoseus.${i}.shortdescription`}
                                          />
                                        </div>
                                        <div className="form-group mb-5  ">
                                          {/* <Field
                                            type="file"
                                            placeholder={`Icon-${i + 1}`}
                                            className="form-control  mb-2"
                                            style={{ width: "95%" }}
                                            onChng={(e) =>
                                              formik.setFieldValue(
                                                `whychoseus.${i}.icon`,
                                                e.target.files[0]
                                              )
                                            }
                                            accept="image/*"
                                            name={`whychoseus.${i}.icon`}
                                            id={`whychoseus.${i}.icon`}
                                          /> */}
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              <div className="form-group  float-end">
                                {/* <button
                                  disabled={
                                    formik.values.whychoseus?.length >= 4
                                  }
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.whychoseus?.length + 1
                                    )
                                  }
                                >
                                  +
                                </button> */}
                              </div>
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.whychoseus && formik.errors.whychoseus}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default About;
