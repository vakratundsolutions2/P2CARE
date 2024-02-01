import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LIGO from "../assets/images/P2CARE.png";
import patient2 from "../assets/img/patients/patient2.jpg"
import './Header.css'

import { useState } from "react";

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const users = localStorage.getItem("USER");
  const { user } = useSelector((state) => state?.auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("USER");
    navigate("/");
    window.location.reload();
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="header header-custom header-fixed header-one">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">

            <div id="mobile_btn" className="menu-btn" onClick={handleToggle}>
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>

            </div>
              {/* {isMobile && ( */}
            <Link to="/" className="navbar-brand logo">

                <img
                  src={LIGO}
                  className="img-fluid"
                  style={{ height: "100px" }}
                  alt="Logo"
                />
            </Link>
              {/* )} */}
          </div>

          <div className={`main-menu-wrapper ${isMobile ? "mobile" : ""}`}>


            
            <ul className="main-nav">
              <li className="has-submenu megamenu   ">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="/doctor-list">All Doctors</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="hospitals">Hospitals</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="blogs">Blog</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="about">About Us</NavLink>
              </li>
              <li className="has-submenu">
                <NavLink to="contact">Contact Us</NavLink>
              </li>
              {users === null ? (
                <>
                  <li className="login-link">
                    <NavLink to="login">Login / Signup</NavLink>
                  </li>
                  <li className="register-btn">
                    <NavLink to="register" className="btn reg-btn">
                      <i className="fa-solid fa-user"></i>Register
                    </NavLink>
                  </li>
                  <li className="register-btn">
                    <NavLink to="login" className="btn btn-primary log-btn">
                      <i className="fa-solid fa-lock"></i>Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* <nav className="navbar navbar-expand-lg header-nav"> */}
                  <ul className="nav header-navbar-rht">
                    {/* <!-- User Menu --> */}
                    <li className="nav-item dropdown has-arrow logged-item">
                      <Link
                        to="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        <span className="user-img">
                          <img
                            className="rounded-circle"
                            src={patient2}
                            width="31"
                            alt="Darren Elder"
                          />
                        </span>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="user-header">
                          <div className="avatar avatar-sm">
                            <img
                              src={patient2}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="user-text mt-2">
                            <h6>{user?.Username}</h6>
                          </div>
                        </div>
                        <Link className="dropdown-item" to="profile">
                          Profile
                        </Link>
                        <Link className="dropdown-item" to="profile-setting">
                          Profile Settings
                        </Link>
                        <Link className="dropdown-item" to="BookAppointment">
                          Appointment
                        </Link>
                        <Link className="dropdown-item" to="login">
                          {/* <li className="register-btn"> */}
                          <Link
                            onClick={handleLogout}
                            className="btn btn-primary log-btn"
                          >
                            <i className="feather-lock"></i>Logout
                          </Link>
                          {/* </li> */}
                        </Link>
                      </div>
                    </li>
                    {/* <!-- /User Menu --> */}
                  </ul>
                  {/* </nav> */}
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
