import { Field, FieldArray, Formik } from "formik";
import React, { useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {
  AddHome,
  GetHome,
  UpdateHome,
} from "../../features/content/ContentSlice";

const Home = () => {
  const dispatch = useDispatch();
  const ID = "65cbeaf40c59cc6417dc7e7d";
  useEffect(() => {
    dispatch(GetHome(ID));
  }, []);
  const { home } = useSelector((state) => state.content);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          bennertitle: home?.bennertitle || "",
          bennerdescription: home?.bennerdescription || "",
          howitworks: home?.howitworks || [
            { shorttitle: "", shortdescription: "", icon: "" },
          ],
        }}
        onSubmit={(values) => {
          console.log(values);
          const { bennerdescription, bennertitle, howitworks } = values;

          const formData = new FormData();
          formData.append("bennerdescription", bennerdescription);
          formData.append("bennertitle", bennertitle);
          formData.append("howitworks", JSON.stringify(howitworks));

          const data = { id: ID, formData: values };
          dispatch(UpdateHome(data));
        }}
      >
        {(formik) => (
          <>
            <div>
              <h3 className="mb-4 title">
                {ID !== undefined || "" ? "Edit" : "Add"} Home Page
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
                      label="Benner description"
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
                      <div className="my-3">Add how it works</div>
                      <FieldArray
                        name="howitworks"
                        render={(arrayHelpers) => {
                          return (
                            <>
                              <div className="row">
                                {formik.values.howitworks?.map((e, i) => {
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
                                            name={`howitworks.${i}.shorttitle`}
                                            id={`howitworks.${i}.shorttitle`}
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
                                            name={`howitworks.${i}.shortdescription`}
                                            id={`howitworks.${i}.shortdescription`}
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
                                                `howitworks.${i}.icon`,
                                                e.target.files[0]
                                              )
                                            }
                                            accept="image/*"
                                            name={`howitworks.${i}.icon`}
                                            id={`howitworks.${i}.icon`}
                                          /> */}
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                              {/* <div className="form-group  float-end">
                                <button
                                  disabled={
                                    formik.values.howitworks?.length >= 4
                                  }
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() =>
                                    arrayHelpers.insert(
                                      formik.values.howitworks?.length + 1
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div> */}
                            </>
                          );
                        }}
                      />
                      <div className="error">
                        {formik.touched.howitworks && formik.errors.howitworks}
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

export default Home;
