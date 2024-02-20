import { Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetTermsAndConditions,
  UpdateTermsAndConditions,
} from "../../features/content/ContentSlice";
import ReactQuill from "react-quill";

const TermsAndConditions = () => {
  const dispatch = useDispatch();
  const ID = "65d48541b6b6ef774eb170b9";

  useEffect(() => {
    dispatch(GetTermsAndConditions(ID));
  }, []);
  const { termsandconditions } = useSelector((state) => state.content);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          description: termsandconditions?.description || "",
        }}
        onSubmit={(values) => {
          

          const data = { id: ID, formData: values };
          dispatch(UpdateTermsAndConditions(data));
        }}
      >
        {(formik) => (
          <>
            <div>
              <h3 className="mb-4 title">
                {ID !== undefined || "" ? "Edit" : "Add"} Terms And Conditions
              </h3>
              <div>
                <form onSubmit={formik.handleSubmit} className="mb-4 ">
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
                      className="quill-height mb-3"
                      onChange={formik.handleChange("description")}
                      value={formik.values.description}
                    />
                    <div className="error">
                      {formik.touched.description && formik.errors.description}
                    </div>
                  </div>

                  <div className="mt-5">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
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

export default TermsAndConditions;
