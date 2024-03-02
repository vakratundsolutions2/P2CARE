import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LIGO from "../assets/images/P2CARE.png";
import LIGO2 from "../assets/images/p2c_logo.jpg";
import patient2 from "../assets/img/patients/patient2.jpg";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import WP from "../assets/images/WP.svg";

import { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { GetContact } from "../features/content/ContentSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const { user } = useSelector((state) => state?.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("USER");
    navigate("/");
    window.location.reload();
  };

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    dispatch(GetContact());
  }, []);

  const { contact } = useSelector((state) => state.content);

  return (
    <>
      <header className="header header-custom header-fixed header-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <div id="mobile_btn" className="menu-btn">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <Link to="/" className="navbar-brand logo">
                <img
                  src={LIGO}
                  className="img-fluid"
                  style={{ height: "100px" }}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className={`main-menu-wrapper `}>
              <ul className="main-nav">
                <li className="has-submenu megamenu  position-relative menu-btn  ">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="has-submenu megamenu  position-relative menu-btn ">
                  <NavLink to="/doctor-list">All Doctors</NavLink>
                </li>
                <li className="has-submenu megamenu  position-relative  menu-btn">
                  {" "}
                  <NavLink to="/hospitals">Hospitals</NavLink>
                </li>
                <li className="has-submenu megamenu  position-relative menu-btn ">
                  {" "}
                  <NavLink to="/blogs">Blog</NavLink>
                </li>
                <li className="has-submenu megamenu  position-relative menu-btn  ">
                  {" "}
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li className="has-submenu megamenu  position-relative  menu-btn">
                  {" "}
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>

                {user === null ? (
                  <>
                    <li className="login-link position-relative menu-btn">
                      <NavLink to="/login">Login / Signup</NavLink>
                    </li>
                    <li className="register-btn">
                      <NavLink to="/register" className="btn reg-btn">
                        <i className="fa-solid fa-user"></i>Register
                      </NavLink>
                    </li>
                    <li className="register-btn">
                      <NavLink to="/login" className="btn btn-primary log-btn">
                        <i className="fa-solid fa-lock"></i>Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="login-link position-relative menu-btn">
                      {" "}
                      <NavLink to="/profile-setting">Profile Settings</NavLink>
                    </li>
                    <li
                      className="login-link position-relative"
                      id="mobile_btn"
                    >
                      {" "}
                      <NavLink to="/appointments">Appointment</NavLink>
                    </li>
                    <li className="login-link position-relative menu-btn">
                      {" "}
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                    <ul className="  nav header-navbar-rht">
                      {/* <!-- User Menu --> */}
                      <li className="nav-item dropdown has-arrow logged-item">
                        <Link
                          to="#"
                          className="dropdown-toggle nav-link"
                          data-bs-toggle="dropdown"
                        >
                          <span className="user-img">
                            {user?.Profile ? (
                              <>
                                <img
                                  className="rounded-circle"
                                  src={`${baseUrl}user/${user?.Profile}`}
                                  width="31"
                                  alt={user.Name}
                                />
                              </>
                            ) : (
                              <>
                                {" "}
                                <FaUser className="fs-4 rounded-circle" />
                              </>
                            )}
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <div className="user-header">
                            <div className="avatar avatar-sm pt-2">
                              {user?.Profile ? (
                                <>
                                  <img
                                    src={`${baseUrl}user/${user?.Profile}`}
                                    alt={user.Name}
                                    className="avatar-img rounded-circle"
                                  />
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <FaUser className="fs-4 rounded-circle" />
                                </>
                              )}
                            </div>
                            <div className="user-text mt-2">
                              <h6>{user?.Username}</h6>
                            </div>
                          </div>
                          <Link className="dropdown-item" to="/profile-setting">
                            Profile Settings
                          </Link>
                          <Link className="dropdown-item" to="/appointments">
                            Appointment
                          </Link>
                          <Link className="dropdown-item" to="/login">
                            <div
                              onClick={handleLogout}
                              className="btn btn-primary log-btn"
                            >
                              <i className="fa fa-lock"></i>Logout
                            </div>
                          </Link>
                        </div>
                      </li>
                      {/* <!-- /User Menu --> */}
                    </ul>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
