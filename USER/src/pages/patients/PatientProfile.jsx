import React from "react";
import { Link } from "react-router-dom";
import patient from "../../assets/img/patients/patient.jpg";

const PatientProfile = () => {
  return (
    <div>
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Patient Profile </h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Patient Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-header">
              <div className="row align-items-center">
                <div className="col-auto profile-image">
                  <Link to="#">
                    <img
                      className="rounded-circle"
                      alt="User Image"
                      src={patient}
                    />
                  </Link>
                </div>
                <div className="col ml-md-n2 profile-user-info">
                  <h4 className="user-name mb-0">Ryan Taylor</h4>
                  <h6 className="text-muted">
                    <Link
                      to="#"
                      className="email"
                      data-cfemail="24565d454a50455d484b56644540494d4a0a474b49"
                    >
                      [email&#160;protected]
                    </Link>
                  </h6>
                  <div className="user-Location">
                    <i className="fa-solid fa-location-dot"></i> Florida, United
                    States
                  </div>
                  <div className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="profile-menu">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-bs-toggle="tab"
                      to="#per_details_tab"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-bs-toggle="tab"
                      to="#password_tab"
                    >
                      Password{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="container-fluid">
              <div className="tab-content profile-tab-cont">
                <div className="tab-pane fade show active" id="per_details_tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                          </h5>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Name</p>
                            <p className="col-sm-10">John Doe</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">User Name</p>
                            <p className="col-sm-10">John Doe</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Date of Birth</p>
                            <p className="col-sm-10">24 Jul 1983</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Email ID</p>
                            <p className="col-sm-10">
                              <Link
                                to="#"
                                className="__cf_email__"
                                data-cfemail="6d070205030902082d08150c001d0108430e0200"
                              >
                                [email&#160;protected]
                              </Link>
                            </p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Mobile</p>
                            <p className="col-sm-10">305-310-5857</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Address</p>
                            <p className="col-sm-10 mb-0">
                              4663 Agriculture Lane,
                              <br />
                              Miami,
                              <br />
                              Florida - 33165,
                              <br />
                              United States.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="password_tab" className="tab-pane fade">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Change Password</h5>
                      <div className="row">
                        <div className="col-md-10 col-lg-6">
                          <form>
                            <div className="mb-3">
                              <label className="mb-2">Old Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="mb-3">
                              <label className="mb-2">New Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <div className="mb-3">
                              <label className="mb-2">Confirm Password</label>
                              <input type="password" className="form-control" />
                            </div>
                            <button className="btn btn-primary" type="submit">
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
