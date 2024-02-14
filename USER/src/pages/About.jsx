import img2 from "../assets/img/about-img2.jpg";
import img1 from "../assets/img/about-img1.jpg";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import BestDoctor from "../components/BestDoctor";
import Testimonial from "../components/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllAbout, GetAllFAQ } from "../features/content/ContentSlice";
import { baseUrl } from "../utils/baseUrl";
const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllFAQ());
    dispatch(GetAllAbout());
  }, []);
  const { FAQList, about } = useSelector((state) => state.content);
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
                  <h2>{about?.title}</h2>
                </div>
                <div className="about-content">
                  <div className="about-content-details">
                    <p>{about?.description}.</p>
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
              {about?.whychoseus?.map((el, i) => {
                return (
                  <>
                    <div className="col-lg-3 col-md-6 d-flex">
                      <div className="card why-choose-card w-100">
                        <div className="card-body">
                          <div className="why-choose-icon">
                            <span>
                              <img
                                src={`${baseUrl}content/${el?.icon}`}
                                alt="choose-image"
                              />
                            </span>
                          </div>
                          <div className="why-choose-content">
                            <h4>{el.shorttitle}</h4>
                            <p>{el.shortdescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
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
                    <h2>{about?.bennertitle}</h2>
                    <p>{about?.bennerdescription}</p>
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

        <BestDoctor />

        <Testimonial />
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
                    {FAQList?.map((el, i) => {
                      return (
                        <>
                          <div className="accordion-item" key={i}>
                            <h2 className="accordion-header" id={`heading${i}`}>
                              <a
                                to="#"
                                className="accordion-button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${i}`}
                                aria-expanded="true"
                                aria-controls={`collapse${i}`}
                              >
                                {el?.question}
                              </a>
                            </h2>
                            <div
                              id={`collapse${i}`}
                              className="accordion-collapse collapse show"
                              aria-labelledby={`heading${i}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="accordion-content">
                                  <p>{el?.answer}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
