import React from "react";
import LoginBanner from "../assets/img/login-banner.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="main-wrapper container">
      {/* <!-- Breadcrumb --> */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Change Password</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Change Password
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb --> */}

      {/* <!-- Page Content --> */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-7 col-lg-8 col-xl-9"> */}
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                  {/* <!-- Change Password Form --> */}
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
                    <div className="submit-section">
                      <button type="submit" className="btn btn-primary submit-btn">
                        Save Changes
                      </button>
                    </div>
                  </form>
                  {/* <!-- /Change Password Form --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </div>
  );
};

export default ResetPassword;
