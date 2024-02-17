// Home Banner
import headerIcon from "../assets/img/icons/header-icon.svg";
import downArrow from "../assets/img/down-arrow-img.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/img/banner-img.png";
import img1 from "../assets/img/banner-img1.png";
import img2 from "../assets/img/banner-img2.png";
import img3 from "../assets/img/banner-img3.png";
import Specialities from "../components/Specialities";

// locationsearch

// import specialities06 from "../assets/img/specialities/specialities-06.svg";

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

//App
// import scanImg from "../assets/img/scan-img.png";
// import googlePlay from "../assets/img/google-play.png";
// import appStore from "../assets/img/app-store.png";
// import mobileImg from "../assets/img/mobile-img.png";

//FAQ
// import faqImg from "../assets/img/faq-img.png";
// import smileIcon from "../assets/img/icons/smiling-icon.svg";

import Testimonial from "../components/Testimonial";
import Articles from "../components/Articles";
import { Link } from "react-router-dom";
import BestDoctor from "../components/BestDoctor";
import { useDispatch, useSelector } from "react-redux";
import { GetAllHome } from "../features/content/ContentSlice";
import { useEffect } from "react";
import { baseUrl } from "../utils/baseUrl";
import { useState } from "react";
import { useRef } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "./constants/Constants";
import { useFormik } from "formik";
import {
  FilterDoctor,
  FilterDoctor2,
  getAllDoctors,
  resetState,
} from "../features/doctor/doctorSlice";
import { Modal, Pagination } from "antd";

const Home = () => {
  const [valuePrice, setvaluePrice] = useState([0, 2000]);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState("");
  
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
    city: "",
    locality: "",
    pincode: "",
  });
  const [Open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllHome());
  }, []);

  const { home } = useSelector((state) => state.content);

  // ======================google Map =============================

  let autoComplete;

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      {
        // types: ["(cities)"],
        componentRestrictions: { country: "IN" },
      }
    );

    autoComplete.addListener("place_changed", () => {
      handlePlaceSelect(updateQuery);
    });
  };

  const handlePlaceSelect = async (updateQuery) => {
    const addressObject = await autoComplete.getPlace();

    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log({ query });

    const latLng = {
      lat: addressObject?.geometry?.location?.lat(),
      lng: addressObject?.geometry?.location?.lng(),
      city: " ",
      locality: " ",
      pincode: " ",
    };

    for (const component of addressObject.address_components) {
      if (component.types.includes("sublocality_level_1")) {
        latLng.locality = component.long_name;
      } else if (
        component.types.includes("administrative_area_level_3") ||
        component.types.includes("locality")
      ) {
        latLng.city = component.long_name;
      } else if (component.types.includes("postal_code")) {
        latLng.pincode = component.long_name;
      }
    } //check
    console.log(
      "addressObject.address_components",
      addressObject.address_components
    );
    console.log("latln", latLng);
    setSelectedLocation(latLng);
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  const handleSubmit = (el) => {
    el.preventDefault();
    console.log(query);
    console.log(search);

    setOpen(true);
    dispatch(
      FilterDoctor2({
        location: query,
        name: search,
        city: selectedLocation?.city,
        pincode: selectedLocation?.pincode,
        locality: selectedLocation?.locality,
      })
    );
  };
  const handleOK = () => {
    setOpen(false);
    dispatch(getAllDoctors());
  };

  console.log(Open);
  const { doctors, doctorsFilter, allDoctors } = useSelector(
    (state) => state.doctor
  );
  console.log(doctors);
  console.log("selectedLocation", selectedLocation);

  return (
    <div className="main-wrapper">
      {/* <!-- Home Banner --> */}

      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  {/* Consult <span>Best Doctors</span> Your Nearby Location. */}
                  {home?.bennertitle}
                </h1>

                <img
                  src={headerIcon}
                  className="header-icon"
                  alt="header-icon"
                />
                <p>{home?.bennerdescription},</p>
                <Link to="/doctor-list" className="btn">
                  Start a Consult
                </Link>
                <div className="banner-arrow-img">
                  <img src={downArrow} className="img-fluid" alt="down-arrow" />
                </div>
              </div>

              <div className="search-box-one aos " data-aos="fade-up">
                <form onSubmit={handleSubmit}>
                  <div className="search-input search-line ">
                    <i className="feather-search bficon"></i>
                    <div className="mb-0">
                      <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        className="form-control"
                        placeholder="Search doctors, clinics, hospitals, etc"
                      />
                    </div>
                  </div>
                  <div className="search-input ">
                    <i className="feather-map-pin"></i>
                    <div className="mb-0">
                      <input
                        ref={autoCompleteRef}
                        type="text"
                        onChange={(event) => setQuery(event.target.value)}
                        value={query}
                        className="form-control"
                        placeholder="Location"
                        name="location"
                      />

                      <i className="feather-crosshair"></i>
                    </div>
                  </div>

                  <div className="form-search-btn">
                    <button
                      className="btn"
                      type={search !== "" && query !== "" ? "submit" : "button"}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <Modal
              title={`${allDoctors?.length} Doctors found`}
              open={Open}
              onOk={handleOK}
              width={1000}
              onCancel={handleOK}
            >
              <div className="my-3">
                {allDoctors?.length === 0 ? (
                  <>
                    <div className="row justify-content-center py-5">
                      no data available
                    </div>
                  </>
                ) : (
                  <>
                    {allDoctors?.map((e, i) => {
                      return (
                        <>
                          <div className="card doctor-card" key={i}>
                            <div className="card-body">
                              <div className="doctor-widget-one">
                                <div className="doc-info-left">
                                  <div className="doctor-img">
                                    <Link to={`/doctor-profile/${e._id}`}>
                                      <img
                                        src={`${baseUrl}doctor/${e.image}`}
                                        className="img-fluid"
                                        alt="John Doe"
                                      />
                                    </Link>
                                  </div>
                                  <div className="doc-info-cont">
                                    <h4 className="doc-name">
                                      <Link to={`/doctor-profile/${e._id}`}>
                                        {e?.doctorName}
                                      </Link>
                                    </h4>
                                    <p className="doc-speciality">
                                      {e?.specialities}
                                    </p>
                                    <div className="clinic-details">
                                      <p className="doc-location">
                                        <i className="fa fa-location"></i>
                                        {e.location}
                                        <a href="">Get Direction</a>
                                      </p>
                                    </div>
                                    <div className="reviews-ratings">
                                      <p>
                                        <span>
                                          <i className="fas fa-star"></i>{" "}
                                          {e?.totalratings}
                                        </span>{" "}
                                        ({e.ratings?.length} Reviews)
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="doc-info-right">
                                  <div className="clini-infos">
                                    <ul>
                                      <li>
                                        <i className="feather-clock available-icon"></i>
                                        <span className="available-date available-today">
                                          Available Today
                                        </span>
                                      </li>

                                      <li>
                                        <i className="feather-dollar-sign available-icon"></i>{" "}
                                        &#x20B9; {e?.price}{" "}
                                        <i className="feather-info available-info-icon"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="clinic-booking book-appoint">
                                    <Link
                                      className="btn btn-primary"
                                      to={`/doctor-profile/${e?._id}`}
                                    >
                                      View Profile
                                    </Link>
                                    <Link
                                      className="btn btn-primary-light"
                                      to={`/bookappointment/${e?._id}`}
                                    >
                                      Book Appointment
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}

                {/* <nav className="d-flex justify-content-end w-full px-5 py-2">
                  <Pagination
                    current={page}
                    onChange={(e) => setPage(e)}
                    total={doctorsFilter?.total}
                    pageSize={doctorsFilter?.limit}
                  />
                </nav> */}
              </div>
            </Modal>

            <div className="col-lg-6">
              <div className="banner-img aos" data-aos="fade-up">
                <img src={img} className="img-fluid" alt="patient-image" />
                <div className="banner-img1">
                  <img src={img1} className="img-fluid" alt="checkup-image" />
                </div>
                {/* <div className="banner-img2">
                  <img src={img2} className="img-fluid" alt="doctor-slide" />
                </div> */}
                <Link to={"/doctor-list"} className="banner-img3">
                  <img src={img3} className="img-fluid" alt="doctors-list" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Specialities />
      <BestDoctor />

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
                {home?.howitworks?.map((el, i) => {
                  return (
                    <>
                      <div
                        className="col-lg-6 col-md-6 aos"
                        data-aos="fade-up"
                        key={i}
                      >
                        <div className="work-info">
                          <div className="work-icon">
                            <span>
                              <img
                                src={`${baseUrl}content/${el?.icon}`}
                                alt="search-doctor-icon"
                              />
                            </span>
                          </div>
                          <div className="work-content">
                            <h5>{el?.shorttitle}</h5>
                            <p>{el?.shortdescription}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}

                {/* <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Work Section --> */}

      {/* <!-- Articles Section --> */}
      <Articles />
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
                    <h2>Download the p2Care App today!</h2>
                  </div>
                  <div className="app-scan aos" data-aos="fade-up">
                    <p>Scan the QR code to get the app now</p>
                    <img src={scanImg} alt="scan-image" />
                  </div>
                  <div className="google-imgs aos" data-aos="fade-up">
                    <a href="#">
                      <img src={googlePlay} alt="img" />
                    </a>
                    <a href="#">
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

      <Testimonial />

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
                <a href="#">
                  <img className="img-fluid" src={partner1} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner2} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner3} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner4} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner5} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner6} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner1} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner2} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner3} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner4} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner5} alt="partners" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img className="img-fluid" src={partner6} alt="partners" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* <!-- /Partners Section --> */}
    </div>
  );
};

export default Home;
