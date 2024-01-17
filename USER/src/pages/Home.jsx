// Home Banner
import headerIcon from "../assets/img/icons/header-icon.svg";
import downArrow from "../assets/img/down-arrow-img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/img/banner-img.png";
import img1 from "../assets/img/banner-img1.png";
import img2 from "../assets/img/banner-img2.png";
import img3 from "../assets/img/banner-img3.png";
import Specialities from '../pages/Specialities';


// Specialities
import specialities01 from "../assets/img/specialities/specialities-01.svg";
import specialities02 from "../assets/img/specialities/specialities-02.svg";
import specialities03 from "../assets/img/specialities/specialities-03.svg";
import specialities04 from "../assets/img/specialities/specialities-04.svg";
import specialities05 from "../assets/img/specialities/specialities-05.svg";
// import specialities06 from "../assets/img/specialities/specialities-06.svg";

//Doctor
import doc1 from "../assets/img/doctors/doctor-01.jpg";
import doc2 from "../assets/img/doctors/doctor-02.jpg";
import doc3 from "../assets/img/doctors/doctor-03.jpg";
import doc4 from "../assets/img/doctors/doctor-04.jpg";
import doc5 from "../assets/img/doctors/doctor-05.jpg";

//price
// import price1 from "../assets/img/icons/price-icon1.svg";
// import price2 from "../assets/img/icons/price-icon2.svg";
// import price3 from "../assets/img/icons/price-icon3.svg";

//Work
import workImg1 from "../assets/img/work-img.png";
import work1 from "../assets/img/icons/work-01.svg";
import work2 from "../assets/img/icons/work-02.svg";
import work3 from "../assets/img/icons/work-03.svg";
import work4 from "../assets/img/icons/work-04.svg";

//Articles
import blog11 from "../assets/img/blog/blog-11.jpg";
import blog12 from "../assets/img/blog/blog-12.jpg";
import blog13 from "../assets/img/blog/blog-13.jpg";
import blog14 from "../assets/img/blog/blog-14.jpg";

//App
// import scanImg from "../assets/img/scan-img.png";
// import googlePlay from "../assets/img/google-play.png";
// import appStore from "../assets/img/app-store.png";
// import mobileImg from "../assets/img/mobile-img.png";

//FAQ
// import faqImg from "../assets/img/faq-img.png";
// import smileIcon from "../assets/img/icons/smiling-icon.svg";

// Testimonial
import client01 from "../assets/img/clients/client-01.jpg";
import client02 from "../assets/img/clients/client-02.jpg";
import client03 from "../assets/img/clients/client-03.jpg";
import client04 from "../assets/img/clients/client-04.jpg";




import BestDoctor from '../pages/BestDoctor';
import Testimonial from "../components/Testimonial";
import Articles from "../components/Articles";

// import { useRef } from "react";

//Partner
// import partner1 from "../assets/img/partners/partners-1.svg";
// import partner2 from "../assets/img/partners/partners-2.svg";
// import partner3 from "../assets/img/partners/partners-3.svg";
// import partner4 from "../assets/img/partners/partners-4.svg";
// import partner5 from "../assets/img/partners/partners-5.svg";
// import partner6 from "../assets/img/partners/partners-6.svg";

const Home = () => {
  


  return (
    <div className="main-wrapper">
      {/* <!-- Home Banner --> */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  Consult <span>Best Doctors</span> Your Nearby Location.
                </h1>

                <img
                  src={headerIcon}
                  className="header-icon"
                  alt="header-icon"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <a href="booking.jsx" className="btn">
                  Start a Consult
                </a>
                <div className="banner-arrow-img">
                  <img src={downArrow} className="img-fluid" alt="down-arrow" />
                </div>
              </div>
              <div className="search-box-one aos" data-aos="fade-up">
                <form action="/doctor-list" >
                  <div className="search-input search-line">
                    <i className="feather-search bficon"></i>
                    <div className="mb-0">
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        placeholder="Search doctors, clinics, hospitals, etc"
                      />
                    </div>
                  </div>
                  <div className="search-input search-map-line">
                    <i className="feather-map-pin"></i>
                    <div className="mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                        name="location"
                      />
                      {/* <a
                        className="current-loc-icon current_location"
                        href="javascript:void(0);"
                      > */}
                        <i className="feather-crosshair"></i>
                        {/* </a> */}
                    </div>
                  </div>
                  <div className="search-input search-calendar-line">
                    <i className="feather-calendar"></i>
                    <div className="mb-0">
                      <input
                        type="date"
                        className="form-control datetimepicker"
                        name="date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div className="form-search-btn">
                    <button className="btn" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img aos" data-aos="fade-up">
                <img src={img} className="img-fluid" alt="patient-image" />
                <div className="banner-img1">
                  <img src={img1} className="img-fluid" alt="checkup-image" />
                </div>
                <div className="banner-img2">
                  <img src={img2} className="img-fluid" alt="doctor-slide" />
                </div>
                <div className="banner-img3">
                  <img src={img3} className="img-fluid" alt="doctors-list" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Specialities/>

      <BestDoctor/>

      {/* <!-- Pricing --> */}
      {/* <section className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center aos" data-aos="fade-up">
              <div className="section-header-one">
                <h2 className="section-title">Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src={price1} alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For individuals</p>
                        <h4>Basic</h4>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $99 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.jsx" className="btn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
              <div className="card pricing-card pricing-card-active">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src={price2} alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For startups</p>
                        <h4>Pro</h4>
                      </div>
                      <div className="pricing-tag">
                        <span>Popular</span>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $199 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Neque porro quisquam est, qui dolorem</li>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Sed ut perspiciatis unde</li>
                        <li>Nemo enim ipsam voluptatem</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.jsx" className="btn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src={price3} alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For big companies</p>
                        <h4>Enterprise</h4>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $399 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.jsx" className="btn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- /Pricing --> */}

      {/* <!-- Work Section --> */}
      <section className="work-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 work-img-info aos"
              data-aos="fade-up"
            >
              <div className="work-img">
                <img src={workImg1} className="img-fluid" alt="doctor-image" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 work-details">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>How it Works</h5>
                <h2 className="section-title">
                  4 easy steps to get your solution
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img src={work1} alt="search-doctor-icon" />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Search Doctor</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img src={work2} alt="doctor-profile-icon" />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Check Doctor Profile</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img src={work3} alt="calendar-icon" />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Schedule Appointment</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img src={work4} alt="solution-icon" />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Get Your Solution</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Work Section --> */}

      {/* <!-- Articles Section --> */}
      <Articles/>
      {/* <!-- /Articles Section --> */}

      {/* <!-- App Section --> */}
      {/* <section className="app-section">
        <div className="container">
          <div className="app-bg">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="app-content">
                  <div className="app-header aos" data-aos="fade-up">
                    <h5>Working for Your Better Health.</h5>
                    <h2>Download the Doccure App today!</h2>
                  </div>
                  <div className="app-scan aos" data-aos="fade-up">
                    <p>Scan the QR code to get the app now</p>
                    <img src={scanImg} alt="scan-image" />
                  </div>
                  <div className="google-imgs aos" data-aos="fade-up">
                    <a href="javascript:void(0);">
                      <img src={googlePlay} alt="img" />
                    </a>
                    <a href="javascript:void(0);">
                      <img src={appStore} alt="img" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                <div className="mobile-img">
                  <img src={mobileImg} className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- /App Section --> */}

      <Testimonial/>

      
      {/* <!-- Partners Section --> */}
      {/* <section className="partners-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header-one text-center aos"
                data-aos="fade-up"
              >
                <h2 className="section-title">Our Partners</h2>
              </div>
            </div>
          </div>
          <div className="partners-info aos" data-aos="fade-up">
            <ul className="owl-carousel partners-slider d-flex">
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner1} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner2} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner3} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner4} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner5} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner6} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner1} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner2} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner3} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner4} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner5} alt="partners" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <img className="img-fluid" src={partner6} alt="partners" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* <!-- /Partners Section --> */}

      {/* <!-- Cursor --> */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      {/* <!-- /Cursor --> */}
    </div>
  );
};

export default Home;
