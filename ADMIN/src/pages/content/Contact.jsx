import { useFormik } from "formik";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { GetContact, UpdateContact } from "../../features/content/ContentSlice";

const Contact = () => {
  const ID = "65ca130f8cea85c2dff194dc";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetContact(ID));
  }, []);

  const { contact } = useSelector((state) => state.content);
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: contact?.email || "",
      phone: contact?.phone || "",
      address: contact?.address || "",
      map: contact?.map || "",
    },
    // validationSchema: schema,

    onSubmit: (values) => {
      dispatch(UpdateContact({ id: ID, formData: values }));
    },
  });

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
        <div className="col-sm-12">
          <div className="card p-5">
            <h3 className="  text-center mb-3 ">Edit Contact Information</h3>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <CustomInput
                type="text"
                label="Email Address"
                name="email"
                onChng={formik.handleChange("email")}
                onBlr={formik.handleBlur("email")}
                val={formik.values.email}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>

              <CustomInput
                type="text"
                label="Phone Number"
                name="phone"
                onChng={formik.handleChange("phone")}
                onBlr={formik.handleBlur("phone")}
                val={formik.values.phone}
              />
              <div className="error">
                {formik.touched.phone && formik.errors.phone}
              </div>

              <CustomInput
                type="text"
                label="Address"
                name="address"
                onChng={formik.handleChange("address")}
                onBlr={formik.handleBlur("address")}
                val={formik.values.address}
              />
              <div className="error">
                {formik.touched.address && formik.errors.address}
              </div>
              <CustomInput
                type="text"
                label="Map Location"
                name="map"
                onChng={formik.handleChange("map")}
                onBlr={formik.handleBlur("map")}
                val={formik.values.map}
              />
              <div className="error">
                {formik.touched.map && formik.errors.map}
              </div>
              <div className="mb-4 px-4 m-auto d-flex ">
                <iframe
                  src={`${formik.values.map}`}
                  width="1000"
                  height="450"
                  style={{ Border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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

export default Contact;
