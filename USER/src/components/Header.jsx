import { Link, useNavigate } from "react-router-dom";
import LIGO from "../assets/images/P2CARE.png"
import './Header.css';
import { useState } from "react";



const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const user = localStorage.getItem('USER');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('USER');
    navigate('/');
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
            <Link to="/" className="navbar-brand logo">
              <img
                src={LIGO}
                className="img-fluid"
                style={{ height: '100px' }}
                alt="Logo"
              />
            </Link>
          </div>

          <div className={`main-menu-wrapper ${isMobile ? 'mobile' : ''}`}>
            <ul className="main-nav">
              <li className="has-submenu megamenu active">
                <Link to="/">Home</Link>
              </li>
              <li className="has-submenu">
                <Link to="/doctor-list">All Doctors</Link>
              </li>
              <li className="has-submenu">
                <Link to="hospitals">Hospitals</Link>
              </li>
              <li className="has-submenu">
                <Link to="blogs">Blog</Link>
              </li>
              <li className="has-submenu">
                <Link to="about">About Us</Link>
              </li>
              <li className="has-submenu">
                <Link to="contact">Contact Us</Link>
              </li>
              {user === null ? (
                <>
                  <li className="login-link">
                    <Link to="login">Login / Signup</Link>
                  </li>
                  <li className="register-btn">
                    <Link to="register" className="btn reg-btn">
                      <i className="feather-user"></i>Register
                    </Link>
                  </li>
                  <li className="register-btn">
                    <Link to="login" className="btn btn-primary log-btn">
                      <i className="feather-lock"></i>Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="register-btn">
                    <button
                      onClick={handleLogout}
                      className="btn btn-primary log-btn"
                    >
                      <i className="feather-lock"></i>Logout
                    </button>
                  </li>
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
