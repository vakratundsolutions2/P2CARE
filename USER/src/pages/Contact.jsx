import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";

function Contact() {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"Contact  "} heading={"Contact Us "} />

        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="section-inner-header contact-inner-header">
                  <h6>Get in touch</h6>
                  <h2>Have Any Question?</h2>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="feather-map-pin"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Address</h4>
                      <p>8432 Mante Highway, Aminaport, USA</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="feather-phone"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Phone Number</h4>
                      <p>+1 315 369 5943</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="feather-mail"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Email Address</h4>
                      <p>
                        <a
                          to="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="0c68636f6f797e694c69746d617c6069226f6361"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 d-flex">
                <div className="card contact-form-card w-100">
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Email Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Services</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Services"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="mb-2">Message</label>
                            <textarea
                              className="form-control"
                              placeholder="Enter your comments"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group-btn mb-0">
                            <button
                              type="submit"
                              className="btn btn-primary prime-btn"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-map d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact
