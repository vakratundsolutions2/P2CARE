import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHospitals, resetState } from "../../features/hospital/hospitalSlice";
import { baseUrl } from "../../utils/baseUrl";

const HospitalList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHospitals());
    dispatch(resetState());
  }, []);

  const HospitalState = useSelector((state) => state.hospital?.hospitals);
  console.log(HospitalState);
  return (
    <div>
      <div className="main-wrapper search-page">
        <BreadCrum location={"Hospitals "} heading={"All hospitals "} />

        <div className="doctor-content content">
          <div className="container">
            {/* <!-- Doctor Search List --> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 map-view">
                <div className="row">
                  <div className="col-lg-3  theiaStickySidebar">
                    <div className="filter-contents">
                      <div className="filter-header">
                        <h4 className="filter-title">Filter</h4>
                      </div>
                      <div className="filter-details">
                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapseone" data-bs-toggle="collapse">
                              Gender
                            </Link>
                          </h4>
                          <div id="collapseone" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="gender" />
                                    <span className="checkmark"></span>
                                    Male Gender
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="gender" />
                                    <span className="checkmark"></span>
                                    Female Gender
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}

                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapsetwo" data-bs-toggle="collapse">
                              Availability
                            </Link>
                          </h4>
                          <div id="collapsetwo" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark"></span>
                                    Available Today
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark"></span>
                                    Available Tomorrow
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark"></span>
                                    Available in Next 7 Days
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input
                                      type="checkbox"
                                      name="availability"
                                    />
                                    <span className="checkmark"></span>
                                    Available in Next 30 Days
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}

                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapsethree" data-bs-toggle="collapse">
                              Consultation Fee
                            </Link>
                          </h4>
                          <div id="collapsethree" className="collapse show">
                            <div className="filter-collapse">
                              <div className="filter-content filter-content-slider">
                                <p>
                                  $10 <span>$10000</span>
                                </p>
                                <div className="slider-wrapper">
                                  <div id="price-range"></div>
                                </div>
                                <div className="price-wrapper">
                                  <h6>
                                    Price:
                                    <span>
                                      $<span id="pricerangemin"></span>- $
                                      <span id="pricerangemax"></span>
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}
                        {/*  */}
                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapsefour" data-bs-toggle="collapse">
                              Speciality
                            </Link>
                          </h4>
                          <div id="collapsefour" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="speciality" />
                                    <span className="checkmark"></span>
                                    Urology
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="speciality" />
                                    <span className="checkmark"></span>
                                    Ophthalmology
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="speciality" />
                                    <span className="checkmark"></span>
                                    Cardiology
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}

                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapsefive" data-bs-toggle="collapse">
                              Experience
                            </Link>
                          </h4>
                          <div id="collapsefive" className=" collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="experience" />
                                    <span className="checkmark"></span>
                                    1-5 Years
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="experience" />
                                    <span className="checkmark"></span>
                                    5+ Years
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}

                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapsesix" data-bs-toggle="collapse">
                              Online Consultation
                            </Link>
                          </h4>
                          <div id="collapsesix" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <i className="feather-video online-icon"></i>{" "}
                                    Video Call
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <i className="feather-mic online-icon"></i>{" "}
                                    Audio Call
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <i className="feather-message-square online-icon"></i>{" "}
                                    Chat
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <i className="feather-users online-icon"></i>{" "}
                                    Instant Consulting
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid -->/ */}

                        {/* <!-- Filter Grid --/> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapseseven" data-bs-toggle="collapse">
                              By Rating
                            </Link>
                          </h4>
                          <div id="collapseseven" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <div className="custom_check rating_custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <span className="rating-count">(40)</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="custom_check rating_custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                      <span className="rating-count">(35)</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="custom_check rating_custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <span className="rating-count">(20)</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="custom_check rating_custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <span className="rating-count">(10)</span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="custom_check rating_custom_check d-inline-flex">
                                    <input type="checkbox" name="online" />
                                    <span className="checkmark"></span>
                                    <div className="rating">
                                      <i className="fas fa-star filled"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <span className="rating-count">(05)</span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}

                        {/* <!-- Filter Grid --> */}
                        <div className="filter-grid">
                          <h4>
                            <Link to="#collapseeight" data-bs-toggle="collapse">
                              Languages
                            </Link>
                          </h4>
                          <div id="collapseeight" className="collapse show">
                            <div className="filter-collapse">
                              <ul>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="language" />
                                    <span className="checkmark"></span>
                                    English
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="language" />
                                    <span className="checkmark"></span>
                                    French
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="language" />
                                    <span className="checkmark"></span>
                                    Spanish
                                  </label>
                                </li>
                                <li>
                                  <label className="custom_check d-inline-flex">
                                    <input type="checkbox" name="language" />
                                    <span className="checkmark"></span>
                                    German
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Grid --> */}

                        {/* <!-- Filter Btn --> */}
                        <div className="filter-btn apply-btn">
                          <div className="row">
                            <div className="col-6">
                              <Link className="btn btn-primary">Apply</Link>
                            </div>
                            <div className="col-6">
                              <Link to="#" className="btn btn-outline-primary">
                                Reset
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Filter Btn --> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="doctor-filter-info">
                      <div className="doctor-filter-inner">
                        <div>
                          <div className="Hospitals-found">
                            <p>
                              <span>100 Hospitals found for:</span> Dentist in
                              San francisco, California
                            </p>
                          </div>
                          <div className="doctor-filter-availability">
                            <p>Availability</p>
                            <div className="status-toggle status-tog">
                              <input
                                type="checkbox"
                                id="status_6"
                                className="check"
                              />
                              <label htmlFor="status_6" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="doctor-filter-option">
                          <div className="doctor-filter-sort">
                            <p>Sort</p>
                            <div className="doctor-filter-select">
                              <select className="select">
                                <option>A to Z</option>
                                <option>B to Z</option>
                                <option>C to Z</option>
                                <option>D to Z</option>
                                <option>E to Z</option>
                              </select>
                            </div>
                          </div>
                          <div className="doctor-filter-sort">
                            <p className="filter-today d-flex align-items-center">
                              <i className="feather-calendar"></i> Today 10 Aug
                              to 20 Aug
                            </p>
                          </div>
                          <div className="doctor-filter-sort">
                            <ul className="nav">
                              <li>
                                <Link to="#" id="map-list">
                                  <i className="feather-map-pin"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="doctor-search-grid">
                                  <i className="feather-grid"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="search-2" className="active">
                                  <i className="feather-list"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {HospitalState?.map((e, i) => {
                      return (
                        <>
                          <div className="card doctor-card" key={i}>
                            <div className="card-body">
                              <div className="doctor-widget-one">
                                <div className="doc-info-left">
                                  <div className="doctor-img">
                                    <Link to={`/hospital-profile/${e?._id}`}>
                                      <img
                                        src={`${baseUrl}hospital/${e.hospitallogo}`}
                                        className="img-fluid"
                                        alt="John Doe"
                                      />
                                    </Link>
                                    <div className="favourite-btn">
                                      <Link to="#" className="favourite-icon">
                                        <i className="fas fa-heart"></i>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="doc-info-cont">
                                    <h4 className="doc-name">
                                      <Link to={`/hospital-profile/${e?._id}`}>
                                        {e?.hospitalname}
                                      </Link>
                                      <i className="fas fa-circle-check"></i>
                                    </h4>
                                    <p className="doc-speciality">
                                      MBBS, Dentist
                                    </p>
                                    <div className="clinic-details">
                                      <p className="doc-location">
                                        <i className="feather-map-pin"></i>
                                        <span>0.9</span> mi - Newyork, USA{" "}
                                        <Link to="#">Get Direction</Link>
                                      </p>
                                      <p className="doc-location">
                                        <i className="feather-award"></i>{" "}
                                        <span>20</span> Years Old
                                      </p>
                                    </div>
                                    <div className="reviews-ratings">
                                      <p>
                                        <span>
                                          <i className="fas fa-star"></i> 4.5
                                        </span>{" "}
                                        (35 Reviews)
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
                                        <i className="feather-thumbs-up available-icon"></i>{" "}
                                        98%{" "}
                                        <span className="votes">
                                          (252 Votes)
                                        </span>
                                      </li>
                                      <li>
                                        <i className="feather-dollar-sign available-icon"></i>{" "}
                                        $1500{" "}
                                        <i className="feather-info available-info-icon"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="clinic-booking book-appoint">
                                    <Link
                                      className="btn btn-primary"
                                      to={`/hospital-profile/${e?._id}`}
                                    >
                                      View Profile
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="blog-pagination rev-page">
                          <nav>
                            <ul className="pagination justify-content-center">
                              <li className="page-item disabled">
                                <Link
                                  className="page-link page-prev"
                                  to="#"
                                  tabIndex="-1"
                                >
                                  <i className="feather-chevrons-left me-1"></i>{" "}
                                  PREV
                                </Link>
                              </li>
                              <li className="page-item active">
                                <Link className="page-link" to="#">
                                  1
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  2
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  ...
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link" to="#">
                                  10
                                </Link>
                              </li>
                              <li className="page-item">
                                <Link className="page-link page-next" to="#">
                                  NEXT{" "}
                                  <i className="feather-chevrons-right ms-1"></i>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
                <div id="map" className="map-listing"></div>
              </div>
            </div>
            {/* <!-- /Doctor Search List --> */}
          </div>
        </div>
        {/* <!-- /Page Content -->	 */}

        {/* <!-- Cursor --> */}
        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
        {/* <!-- /Cursor --> */}
      </div>
    </div>
  );
};

export default HospitalList;
