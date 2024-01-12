import LIGO from "../assets/images/P2CARE.png";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-one pt-5">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <a to="index.html">
                      <img src={LIGO} className="w-50" alt="logo" />
                    </a>
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
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
                          <a to="search.html">Search for Doctors</a>
                        </li>
                        <li>
                          <a to="login.html">Login</a>
                        </li>
                        <li>
                          <a to="register.html">Register</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">For Doctors</h2>
                      <ul>
                        <li>
                          <a to="appointments.html">Appointments</a>
                        </li>
                        <li>
                          <a to="chat.html">Chat</a>
                        </li>
                        <li>
                          <a to="login.html">Login</a>
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
                            <i className="feather-map-pin"></i> 3556 Beech
                            Street, USA
                          </p>
                        </div>
                        <div className="footer-address">
                          <p>
                            <i className="feather-phone-call"></i> +1 315 369
                            5943
                          </p>
                        </div>
                        <div className="footer-address mb-0">
                          <p>
                            <i className="feather-mail"></i>{" "}
                            <a
                              to="/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="294d464a4a5c5b4c694c51484459454c074a4644"
                            >
                              [email&#160;protected]
                            </a>
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
                        <a to="javascript:void(0);">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a to="javascript:void(0);">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a to="javascript:void(0);">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a to="javascript:void(0);">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
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
                        <a to="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a to="terms-condition.html">Terms and Conditions</a>
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
