import {  Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetPrivacyPolicy,
  UpdatePrivacyPolicy,
} from "../../features/content/ContentSlice";
import ReactQuill from "react-quill";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const ID = "65d47a69bec33d8dfa5f34b0";
  useEffect(() => {
    dispatch(GetPrivacyPolicy(ID));
  }, []);
  const { privacypolicy } = useSelector((state) => state.content);

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          description: privacypolicy?.description || "",
        }}
        onSubmit={(values) => {

          const data = { id: ID, formData: values };
          dispatch(UpdatePrivacyPolicy(data));
        }}
      >
        {(formik) => (
          <>
            <div>
              <h3 className="mb-4 title">
                {ID !== undefined || "" ? "Edit" : "Add"} Privacy Policy
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

export default PrivacyPolicy;
