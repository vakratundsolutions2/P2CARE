import img2 from '../assets/img/about-img2.jpg'
import img1 from '../assets/img/about-img1.jpg'
import BreadCrum from '../components/BreadCrum';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"About "} heading={"About Us "} />

        <section className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-img-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-inner-img">
                        <div className="about-img">
                          <img
                            src={img1}
                            className="img-fluid"
                            alt="about-image"
                          />
                        </div>
                        <div className="about-img">
                          <img
                            src={img2}
                            className="img-fluid"
                            alt="about-image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-inner-img">
                        <div className="about-box">
                          <h4>Over 25+ Years Experience</h4>
                        </div>
                        <div className="about-img">
                          <img
                            src="/src/assets/img/about-img3.jpg"
                            className="img-fluid"
                            alt="about-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="section-inner-header about-inner-header">
                  <h6>About Our Company</h6>
                  <h2>
                    We Are Always Ensure Best Medical Treatment For Your Health
                  </h2>
                </div>
                <div className="about-content">
                  <div className="about-content-details">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus sit voluptatem
                      accusantium doloremque eaque ipsa quae architecto beatae
                      vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <div className="about-contact">
                    <div className="about-contact-icon">
                      <span>
                        <img
                          src="/src/assets/img/icons/phone-icon.svg"
                          alt="phone-image"
                        />
                      </span>
                    </div>
                    <div className="about-contact-text">
                      <p>Need Emergency?</p>
                      <h4>+1 315 369 5943</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-choose-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h2>Why Choose Us</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card why-choose-card w-100">
                  <div className="card-body">
                    <div className="why-choose-icon">
                      <span>
                        <img
                          src="/src/assets/img/icons/choose-01.svg"
                          alt="choose-image"
                        />
                      </span>
                    </div>
                    <div className="why-choose-content">
                      <h4>Qualified Staff of Doctors</h4>
                      <p>
                        Lorem ipsum sit amet consectetur incididunt ut labore et
                        exercitation ullamco laboris nisi dolore magna enim
                        veniam aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card why-choose-card w-100">
                  <div className="card-body">
                    <div className="why-choose-icon">
                      <span>
                        <img
                          src="/src/assets/img/icons/choose-02.svg"
                          alt="choose-image"
                        />
                      </span>
                    </div>
                    <div className="why-choose-content">
                      <h4>Qualified Staff of Doctors</h4>
                      <p>
                        Lorem ipsum sit amet consectetur incididunt ut labore et
                        exercitation ullamco laboris nisi dolore magna enim
                        veniam aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card why-choose-card w-100">
                  <div className="card-body">
                    <div className="why-choose-icon">
                      <span>
                        <img
                          src="/src/assets/img/icons/choose-03.svg"
                          alt="choose-image"
                        />
                      </span>
                    </div>
                    <div className="why-choose-content">
                      <h4>Qualified Staff of Doctors</h4>
                      <p>
                        Lorem ipsum sit amet consectetur incididunt ut labore et
                        exercitation ullamco laboris nisi dolore magna enim
                        veniam aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card why-choose-card w-100">
                  <div className="card-body">
                    <div className="why-choose-icon">
                      <span>
                        <img
                          src="/src/assets/img/icons/choose-04.svg"
                          alt="choose-image"
                        />
                      </span>
                    </div>
                    <div className="why-choose-content">
                      <h4>Qualified Staff of Doctors</h4>
                      <p>
                        Lorem ipsum sit amet consectetur incididunt ut labore et
                        exercitation ullamco laboris nisi dolore magna enim
                        veniam aliqua.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="way-section">
          <div className="container">
            <div className="way-bg">
              <div className="way-shapes-img">
                <div className="way-shapes-left">
                  <img src="/src/assets/img/shape-06.png" alt="shape-image" />
                </div>
                <div className="way-shapes-right">
                  <img src="/src/assets/img/shape-07.png" alt="shape-image" />
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-lg-7 col-md-12">
                  <div className="section-inner-header way-inner-header mb-0">
                    <h2>Be on Your Way to Feeling Better with the Doccure</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                      Contact With Us
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="way-img">
                    <img
                      src="/src/assets/img/way-img.png"
                      className="img-fluid"
                      alt="doctor-way-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="doctors-section professional-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h2>Best Doctors</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
<Link to="/doctor-profile">                      <div className="doctor-profile-img">
                        <img
                          src="/src/assets/img/doctors/doctor-03.jpg"
                          className="img-fluid"
                          alt="Ruby Perrin"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 200</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
<Link to="/doctor-profile">                          Dr. Ruby Perrin</Link>
                        <p>Cardiology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star"></i> 4.5
                          </span>{" "}
                          (35)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin"></i> Newyork, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
<Link to="/doctor-profile">                      <div className="doctor-profile-img">
                        <img
                          src="/src/assets/img/doctors/doctor-04.jpg"
                          className="img-fluid"
                          alt="Darren Elder"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 360</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
<Link to="/doctor-profile">                          Dr. Darren Elder</Link>
                        <p>Neurology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star"></i> 4.0
                          </span>{" "}
                          (20)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin"></i> Florida, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
<Link to="/doctor-profile">                      <div className="doctor-profile-img">
                        <img
                          src="/src/assets/img/doctors/doctor-05.jpg"
                          className="img-fluid"
                          alt="Sofia Brient"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 450</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/doctor-profile">Dr. Sofia Brient</Link>
                        <p>Urology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star"></i> 4.5
                          </span>{" "}
                          (30)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin"></i> Georgia, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
<Link to="/doctor-profile">                      <div className="doctor-profile-img">
                        <img
                          src="/src/assets/img/doctors/doctor-02.jpg"
                          className="img-fluid"
                          alt="Paul Richard"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 570</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/doctor-profile">Dr. Paul Richard</Link>
                        <p>Orthopedic</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star"></i> 4.3
                          </span>{" "}
                          (45)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin"></i> Michigan, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="testimonial-shape-img">
            <div className="testimonial-shape-left">
              <img src="/src/assets/img/shape-04.png" alt="shape-image" />
            </div>
            <div className="testimonial-shape-right">
              <img src="/src/assets/img/shape-05.png" alt="shape-image" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="testimonial-slider slick">
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="/src/assets/img/clients/client-01.jpg"
                          className="img-fluid"
                          alt="client-image"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-inner-header testimonial-header">
                          <h6>Testimonials</h6>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>John Doe</span> New York
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="/src/assets/img/clients/client-02.jpg"
                          className="img-fluid"
                          alt="client-image"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-inner-header testimonial-header">
                          <h6>Testimonials</h6>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Amanda Warren</span> Florida
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="/src/assets/img/clients/client-03.jpg"
                          className="img-fluid"
                          alt="client-image"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-inner-header testimonial-header">
                          <h6>Testimonials</h6>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Betty Carlson</span> Georgia
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="/src/assets/img/clients/client-04.jpg"
                          className="img-fluid"
                          alt="client-image"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-inner-header testimonial-header">
                          <h6>Testimonials</h6>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Veronica</span> California
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <img
                          src="/src/assets/img/clients/client-05.jpg"
                          className="img-fluid"
                          alt="client-image"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-inner-header testimonial-header">
                          <h6>Testimonials</h6>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                          </p>
                          <h6>
                            <span>Richard</span> Michigan
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section faq-section-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h6>Get Your Answer</h6>
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="faq-img">
                  <img
                    src="/src/assets/img/faq-img.png"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="faq-patients-count">
                    <div className="faq-smile-img">
                      <img
                        src="/src/assets/img/icons/smiling-icon.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="faq-patients-content">
                      <h4>
                        <span className="count-digit">95</span>k+
                      </h4>
                      <p>Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="faq-info">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <a
                          to="javascript:void(0)"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </a>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <a
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </a>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <a
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </a>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <a
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </a>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- /FAQ Item -->

								<!-- FAQ Item --> */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <a
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </a>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About