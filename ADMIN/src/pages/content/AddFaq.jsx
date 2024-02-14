import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useEffect } from "react";
import {
  AddFAQ,
  GetFAQ,
  ResetState,
  UpdateFAQ,
} from "../../features/content/ContentSlice";
import dayjs from "dayjs";

import * as yup from "yup";
let schema = yup.object().shape({
  answer: yup.string().required("Answer is Required"),
  question: yup.string().required("Question is Required"),
});

const AddFaq = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ID = location.pathname.split("/")[3];

  useEffect(() => {
    if (ID) dispatch(GetFAQ(ID));
  }, []);

  const { FAQ, isSuccess, addFAQ, updateFAQ } = useSelector(
    (state) => state.content
  );
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      answer: FAQ?.answer || "",
      question: FAQ?.question || "",
      date: dayjs().format("DD/MM/YYYY"),
    },
    validationSchema: schema,

    onSubmit: (values) => {
      console.log(values);
      if (ID === undefined || ID === "") {
        dispatch(AddFAQ(values));
        setTimeout(() => {
          dispatch(ResetState());
        }, 200);
      } else {
        dispatch(UpdateFAQ({ id: ID, formData: values }));
        setTimeout(() => {
          dispatch(ResetState());
        }, 200);
      }
    },
  });
  
  if (
    (isSuccess === true && addFAQ !== null) ||
    (isSuccess === true && updateFAQ !== null)
  ) {
    setTimeout(() => {
      navigate("/admin/faq-list");
    }, 350);
  }
  return (
    <>
      <div className="my-3 mb-4 justify-content-center d-flex">
        <div className="col-sm-12">
          <div className="card p-5">
            <h3 className="  text-center mb-3 ">
              {" "}
              {ID !== undefined ? "Edit" : "Add"} FAQ
            </h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <CustomInput
                type="text"
                label="Question"
                name="question"
                onChng={formik.handleChange("question")}
                onBlr={formik.handleBlur("question")}
                val={formik.values.question}
              />
              <div className="error">
                {formik.touched.question && formik.errors.question}
              </div>

              <div className="col-12 form-group mb-3">
                <label
                  htmlFor="exampleFormControlTextarea3"
                  className=" m-1 mt-3"
                >
                  Answer
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="3"
                  onChange={formik.handleChange("answer")}
                  onBlur={formik.handleBlur("answer")}
                  value={formik.values.answer}
                />
                <div className="error">
                  {formik.touched.answer && formik.errors.answer}
                </div>
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

export default AddFaq;
