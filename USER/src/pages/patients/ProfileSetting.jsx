import React from "react";
import patient from "../../assets/img/patients/patient.jpg";
import { Link } from "react-router-dom";

const ProfileSetting = () => {
  return (
    <div>
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Profile Settings</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Profile Settings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="mb-3">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img src={patient} alt="User Image" />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <input type="file" className="upload" />
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
                            defaultValue="Richard"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">User Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Wilson"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Mobile</label>
                          <input
                            type="text"
                            defaultValue="+1 202-555-0125"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Email ID</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="richard@example.com"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label className="mb-2">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="806 Twin Willow Lane"
                          />
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
  );
};

export default ProfileSetting;
