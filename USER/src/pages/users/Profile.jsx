import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import patient from "../../assets/img/patients/patient.jpg";

const Profile = () => {
  const { user } = useSelector((state) => state?.auth);
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
                  <h4 className="user-name mb-1">
                    {user.Username}
                  </h4>
                  <h6 className="text-muted">
                    {user.Email}
                  </h6>
                </div>
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
                            <p className="col-sm-10">{user.Name}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">User Name</p>
                            <p className="col-sm-10">
                              {user.Username}
                            </p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Gender</p>
                            <p className="col-sm-10">
                              {/* {user.gender} */} Male
                            </p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Email ID</p>
                            <p className="col-sm-10">
                              {user.Email}
                            </p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted">Mobile</p>
                            <p className="col-sm-10">
                              {/* {user.number} */}
                              305-310-5857</p>
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
        {/* </>
          )
        })} */}
      </div>
    </div>
  );
};

export default Profile;
