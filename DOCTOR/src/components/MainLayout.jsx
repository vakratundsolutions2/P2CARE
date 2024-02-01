// import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import doc from "../assets/img/doctors/doctor-thumb-02.jpg";
import { useSelector } from "react-redux";
import { baseUrl } from "../utils/baseUrl";
// import doc from "../assets/img/doctors/doctor-thumb-02.jpg";
import { useDispatch } from "react-redux";
import { logoutData } from "../features/auth/authSlice";
import { Rate } from "antd";


const MainLayout = () => {
  const {user} = useSelector((state)=>state.auth)
  console.log(user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    sessionStorage.removeItem('DOCTOR')
    dispatch(logoutData());
    navigate("/")
  };
  return (
    <div className="container d-flex ">
      <div className="main-wrapper">
        <div className="container">
          <div className="row">
            <div className="profile-sidebar">
              <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                  <Link className="booking-doc-img">
                    <img
                      src={`${baseUrl}doctor/${user?.DRdata?.image}`}
                      alt="User Image"
                    />
                  </Link>
                  <div className="profile-det-info">
                    <h3>Dr. {user?.DRdata?.doctorName}</h3>

                    <div className="patient-details">
                      <h5 className="mb-0 px-4">
                        {user?.DRdata?.specialities}
                      </h5>
                      <div className="d-flex justify-content-around p-2">
                        <Rate value={user?.DRdata?.totalratings} />(
                        {user?.DRdata?.ratings?.length})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-widget">
                <nav className="dashboard-menu">
                  <ul>
                    <li className="active">
                      <Link to="doctor-dashboard">
                        <i className="fas fa-columns"></i>
                        <span>Dashboard</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="appointment">
                        <i className="fas fa-calendar-check"></i>
                        <span>Appointments</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="my-patient">
                        <i className="fas fa-user-injured"></i>
                        <span>My Patients</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="schedule-time">
                        <i className="fas fa-hourglass-start"></i>
                        <span>Schedule Timings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="available-timing">
                        <i className="fas fa-clock"></i>
                        <span>Available Timings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="invoice">
                        <i className="fas fa-file-invoice"></i>
                        <span>Invoices</span>
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="account">
                        <i className="fas fa-file-invoice-dollar"></i>
                        <span>Accounts</span>
                      </Link>
                    </li> */}
                    <li>
                      <Link to="review">
                        <i className="fas fa-star"></i>
                        <span>Reviews</span>
                      </Link>
                    </li>
                    {/* <li>
                          <Link to="chat-doctor">
                            <i className="fas fa-comments"></i>
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </Link>
                        </li> */}
                    <li>
                      <Link to="profile-setting">
                        <i className="fas fa-user-cog"></i>
                        <span>Profile Settings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="profile-details">
                        <i className="fas fa-user-cog"></i>
                        <span>Profile Details</span>
                      </Link>
                    </li>

                    <li></li>
                    <li onClick={() => handleLogout()}>
                      <Link to="login">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MainLayout;
