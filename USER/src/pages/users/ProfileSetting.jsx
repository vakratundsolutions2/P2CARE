import React, { useEffect } from "react";
import patient from "../../assets/img/patients/patient.jpg";
import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { baseUrl } from "../../utils/baseUrl";
import { GetAUser, UpdateUser } from "../../features/auth/authSlice";
import Seo from "../../components/seo/Seo";

const ProfileSetting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   dispatch(GetAUser(user?._id));
  // }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Email: user?.Email || "",
      phoneNumber: user?.phoneNumber || "",
      Username: user?.Username || "",
      Name: user?.Name || "",
      Profile: user?.Profile || "",
      gender: user?.gender || "",
    },
    onSubmit: (value) => {
      const { Name, Email, phoneNumber, Profile, Username, gender } = value;

      const formData = new FormData();
      formData.append("Name", Name);
      formData.append("Username", Username);
      formData.append("Profile", Profile);
      formData.append("phoneNumber", phoneNumber);
      formData.append("Email", Email);
      formData.append("gender", gender);

      const DATA = {
        id: user?._id,
        FDATA: formData,
      };

      dispatch(UpdateUser(DATA));
    },
  });
  return (
    <>
      <Seo metaTitle={"My Profile - P2CARE"} />

      <div>
        <BreadCrum heading={"Profile"} location={"My Profile"} />

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={formik.handleSubmit}
                      encType="multipart/form-data"
                    >
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <div className="mb-3">
                            <div className="change-avatar">
                              <div className="profile-img w-25">
                                <img
                                  src={`${baseUrl}user/${user?.Profile}`}
                                  alt={formik.values.Name}
                                />
                              </div>
                              <div className="upload-img">
                                <div className="change-photo-btn">
                                  <span>
                                    <i className="fa fa-upload"></i> Upload
                                    Photo
                                  </span>
                                  <input
                                    type="file"
                                    className="upload"
                                    label="Doctor Image "
                                    accept="image/*"
                                    name="image"
                                    id="formFile"
                                    onChange={(e) =>
                                      formik.setFieldValue(
                                        "Profile",
                                        e.target.files[0]
                                      )
                                    }
                                  />
                                </div>
                                <small className="form-text text-muted">
                                  Allowed JPG, GIF or PNG. Max size of 2MB
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Full Name</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={formik.handleChange("Name")}
                              value={formik.values.Name}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">User Name</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={formik.handleChange("Username")}
                              value={formik.values.Username}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Mobile</label>
                            <input
                              type="text"
                              disabled={true}
                              className="form-control"
                              onChange={formik.handleChange("phoneNumber")}
                              value={formik.values.phoneNumber}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Email ID</label>
                            <input
                              type="email"
                              disabled={true}
                              className="form-control"
                              onChange={formik.handleChange("Email")}
                              value={formik.values.Email}
                            />
                          </div>
                        </div>

                        {/* <div className="col-12">
                        <div className="mb-3">
                          <label className="mb-2">Password</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="password"
                          />
                        </div>
                      </div> */}

                        <div className="col-12 col-md-6 mb-4">
                          <div className="mb-3">
                            <label className="mb-2">Gender</label>
                            <select
                              name="gender"
                              id="gender"
                              className="form-control form-select"
                              onChange={formik.handleChange("gender")}
                              value={formik.values.gender}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
