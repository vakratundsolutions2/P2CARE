import { useFormik } from "formik";
import { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { EditUser, register, resetState } from "../../features/auth/authSlice";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const EditProfile = () => {
  const { admin } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      Name: admin?.Name || "",
      Username: admin?.Username || "",
      Email: admin?.Email || "",
      phoneNumber: admin?.phoneNumber || "",
      Role: admin?.Role || "",
      isBlocked: admin?.isBlocked || false,
      ProfilePic: admin?.ProfilePic || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const {
        Name,
        Username,
        Email,
        phoneNumber,
        Role,
        isBlocked,
        ProfilePic,
      } = values;

      console.log(values);
      const formData = new FormData();
      formData.append("Name", Name);

      formData.append("phoneNumber", phoneNumber);
      formData.append("Email", Email);
      formData.append("Username", Username);
      formData.append("Name", Name);
      formData.append("Role", Role);
      formData.append("isBlocked", isBlocked);
      formData.append("ProfilePic", ProfilePic);

      dispatch(EditUser({ formData: values, id: admin?._id }));
    },
  });

  return (
    <>
      <div className="container-xxl mb-5">
        <div className="mb-4">
          <button
            className="ms-3 fs-2 btn  bg-transparent border-0"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack />
          </button>
        </div>
        <div className="row ">
          <div className="card p-4 px-5">
            <h3 className="px-4 py-4 my-4">Edit Profile</h3>
            <form
              onSubmit={formik.handleSubmit}
              className="m-5"
              encType="multipart/form-data"
            >
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-6">
                    <CustomInput
                      type="text"
                      label="Enter Name "
                      name="Name"
                      onChng={formik.handleChange("Name")}
                      onBlr={formik.handleBlur("Name")}
                      val={formik.values.Name}
                    />
                    <div className="error">
                      {formik.touched.Name && formik.errors.Name}
                    </div>
                  </div>

                  <div className="col-6">
                    <CustomInput
                      type="text"
                      label="Enter Email "
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
                    <CustomInput
                      type="text"
                      label="Enter Username "
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
                    <PhoneInput
                      countrySelectProps={{ unicodeFlags: true }}
                      className="form-control phoneINP"
                      value={formik.values.phoneNumber}
                      onChange={(el) => formik.setFieldValue("phoneNumber", el)}
                    />
                    <div className="error">
                      {formik.touched.phoneNumber && formik.errors.phoneNumber}
                    </div>
                  </div>

                  <div className="col-6">
                    <CustomInput
                      type="file"
                      label="Doctor Image "
                      accept="image/*"
                      name="ProfilePic"
                      id="formFile"
                      onChng={(e) =>
                        formik.setFieldValue("ProfilePic", e.target.files[0])
                      }
                    />{" "}
                    <div className="error">
                      {formik.touched.ProfilePic && formik.errors.ProfilePic}
                    </div>
                  </div>
                  <div className="col-6">
                    <select
                      name="Role"
                      placeholder="Select Role..."
                      onChange={formik.handleChange("Role")}
                      onBlur={formik.handleBlur("Role")}
                      value={formik.values.Role}
                      className="form-control form-select py-3 px-4 "
                    >
                      <option value="">Select Role</option>
                      <option value="USER">USER</option>
                      {/* <option value="DOCTOR">DOCTOR</option> */}
                      <option value="ADMIN">ADMIN</option>
                    </select>
                    <div className="error">
                      {formik.touched.Role && formik.errors.Role}
                    </div>
                  </div>
                  <div className="col-6 m-4 d-flex">
                    {/* <div className="form-check-inline visits ">
                      <label className="">
                        <Switch
                          type="checkbox"
                          checkedChildren={<CheckOutlined />}
                          name="isBlocked"
                          unCheckedChildren={<CloseOutlined />}
                          value={formik?.values?.isBlocked}
                          onChange={(e) => formik.setFieldValue("isBlocked", e)}
                        />

                        <span className="px-3">Block account</span>
                      </label>
                    </div> */}

                    <div className="error">
                      {formik.touched.isBlocked && formik.errors.isBlocked}
                    </div>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-sm btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
