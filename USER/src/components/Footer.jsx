import { Link } from "react-router-dom";
<<<<<<< HEAD
import LIGO from "../assets/images/p2c_logo.jpg";
=======
import LIGO from "../assets/images/p2Care.png";
import { useEffect } from "react";
import { GetContact } from "../features/content/ContentSlice";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> 29d82bb342b1f237fc514dd48b913d279a506ded

const Footer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetContact());
  }, []);
  const { contact } = useSelector((state) => state.content);

  return (
    <>
      <footer className="footer footer-one pt-5">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <Link to="index.html">
                      <img src={LIGO} className="w-50" alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-about-content">
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Patients</h2>
                      <ul>
                        <li>
                          <Link to="doctor-list">Search for Doctors</Link>
                        </li>
                        <li>
                          <Link to="login">Login</Link>
                        </li>
                        <li>
                          <Link to="register">Register</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Doctors</h2>
                      <ul>
                        <li>
                          <Link to="appointments">Appointments</Link>
                        </li>
                        <li>
                          <Link to="blogs">Blog</Link>
                        </li>
                        <li>
                          <Link to="login">Login</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4">
                    <div className="footer-widget footer-contact">
                      <h2 className="footer-title">Contact Us</h2>
                      <div className="footer-contact-info">
                        <div className="footer-address">
                          <p>
                            <i className="fa-solid fa-map-pin"></i>{" "}
                            {contact?.address}
                          </p>
                        </div>
                        <div className="footer-address">
                          <p>
                            <i className="fa-solid fa-phone"></i>{" "}
                            {contact?.phone}
                          </p>
                        </div>
                        <div className="footer-address mb-0">
                          <p>
                            <i className="fa-solid fa-envelope"></i>{" "}
                            {contact?.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-7">
                <div className="footer-widget">
                  <h2 className="footer-title">Join Our Newsletter</h2>

                  <div className="social-icon">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fab fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      {" "}
                      Copyright © 2023 All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="terms-condition.html">
                          Terms and Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
