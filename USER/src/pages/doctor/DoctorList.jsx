import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterDoctor,
  getAllDoctors,
  resetState,
} from "../../features/doctor/doctorSlice";
import { baseUrl } from "../../utils/baseUrl";
import BreadCrum from "../../components/BreadCrum";
import { allDoctorCategory } from "../../features/dCategory/dCategorySlice";
import { Pagination, Rate, Slider } from "antd";
import { GetAllAavailablity } from "../../features/availablity/availablitySlice";
import dayjs from "dayjs";
import Seo from "../../components/seo/Seo";

const DoctorList = () => {
  const nowdate = dayjs().format("YY-M-D");
  const sevenday = dayjs().add(7, "day").format("YYYY-M-D");
  const tomorrow = dayjs().add(1, "day").format("YYYY-M-D");
  const thirty = dayjs().add(30, "day").format("YYYY-M-D");
  const LOCATION = useLocation();

  const dispatch = useDispatch();
  const catHead = LOCATION.search.split("?")[1]?.split("=")[1];

  const [valuePrice, setvaluePrice] = useState([0, 2000]);
  const [category, setcategory] = useState("");
  const [gender, setgender] = useState("");
  const [avail, setavail] = useState([0, 1]);

  const [Sort, setSort] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState("");
  const [limit, setLimit] = useState("");
  const [star, setStar] = useState("");
  const [location, setLocaton] = useState("");

  // const query = location?.search?.split("&")[1];

  console.log("avail", avail);

  // const loc = query?.split('=')[1];
  // setLocaton(loc);
  useEffect(() => {
    if (catHead) setcategory(catHead);
  }, []);

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(GetAllAavailablity());
    dispatch(allDoctorCategory());
  }, [dispatch]);

  const Category = useSelector((state) => state.dCategory?.dCategories);
  useEffect(() => {
    if (
      name !== undefined ||
      category !== undefined ||
      valuePrice !== undefined ||
      Sort !== undefined ||
      page !== undefined ||
      limit !== undefined ||
      star !== undefined ||
      star !== "" ||
      gender !== undefined ||
      gender !== "" ||
      avail !== undefined ||
      location !== "" ||
      location !== undefined
    ) {
      dispatch(
        FilterDoctor({
          name,
          category,
          valuePrice,
          Sort,
          page,
          limit,
          star,
          gender,
          avail,
          location,
        })
      );
    } else {
      dispatch(getAllDoctors());
    }
  }, [
    dispatch,
    name,
    category,
    Sort,
    valuePrice,
    page,
    limit,
    star,
    gender,
    avail,
    location,
  ]);

  const { doctors, doctorsFilter } = useSelector((state) => state.doctor);

  const handleReset = () => {
    setStar("");
    setSort("");
    setPage("");
    setName("");
    setcategory("");
    setgender("");
    setavail([0, 1]);
    setvaluePrice([]);
    dispatch(resetState());
    setTimeout(() => {
      dispatch(getAllDoctors());
      dispatch(GetAllAavailablity());
      dispatch(allDoctorCategory());
    }, 400);
  };

  console.log("filter", {
    name,
    category,
    Sort,
    valuePrice,
    page,
    limit,
    star,
    gender,
    avail,
  });

  console.log("DoctorState", doctors);
  return (
    <>
      <Seo metaTitle={"All Doctors - P2CARE"} />

      <div className="main-wrapper">
        <BreadCrum location={"All Doctors "} heading={"All Doctors "} />

        {/* Main layout */}

        <div className="doctor-content content">
          <div className="container">
            {/* <!-- Doctor Search List --> */}
            <div className="row">
              <div className="col-xl-12 col-lg-12 map-view">
                <div className="row">
                  <form className="row">
                    <div className="col-lg-3  theiaStickySidebar">
                      <div className="filter-contents">
                        <div className="filter-header">
                          <h4 className="filter-title">Filter</h4>
                        </div>
                        <div className="filter-details">
                          {/* <!-- Filter Grid --> */}
                          <div className="filter-grid">
                            <h4>
                              <a href="#collapseone" data-bs-toggle="collapse">
                                Gender
                              </a>
                            </h4>
                            <div id="collapseone" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        onChange={() => setgender("Male")}
                                      />
                                      <span className="checkmark"></span>
                                      Male Gender
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        onChange={() => setgender("Female")}
                                      />
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
                              <a href="#collapsetwo" data-bs-toggle="collapse">
                                Availability
                              </a>
                            </h4>
                            <div id="collapsetwo" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="radio"
                                        name="availability"
                                        value={1}
                                        onChange={(e) =>
                                          setavail([nowdate, e.target.value])
                                        }
                                      />
                                      <span className="checkmark"></span>
                                      Available Today
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="radio"
                                        name="availability"
                                        value={1}
                                        onChange={(e) =>
                                          setavail([tomorrow, e.target.value])
                                        }
                                      />
                                      <span className="checkmark"></span>
                                      Available Tomorrow
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="radio"
                                        name="availability"
                                        value={7}
                                        onChange={(e) =>
                                          setavail([sevenday, e.target.value])
                                        }
                                      />
                                      <span className="checkmark"></span>
                                      Available in Next 7 Days
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="radio"
                                        name="availability"
                                        value={30}
                                        onChange={(e) =>
                                          setavail([thirty, e.target.value])
                                        }
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
                              <a
                                href="#collapsethree"
                                data-bs-toggle="collapse"
                              >
                                Consultation Fee{" "}
                              </a>
                            </h4>
                            <div id="collapsethree" className="collapse show">
                              <div className="filter-collapse">
                                <div className="filter-content filter-content-slider">
                                  <p>
                                    <Slider
                                      name="price"
                                      // value={'price'}
                                      // value={valuePrice}
                                      onChange={(e) => setvaluePrice(e)}
                                      range
                                      defaultValue={[0, 2000]}
                                      max={2000}
                                      min={0}
                                    />
                                    &#x20B9; {valuePrice[0]}{" "}
                                    <span>&#x20B9; {valuePrice[1]}</span>
                                  </p>
                                  <div className="slider-wrapper">
                                    <div id="price-range"></div>
                                  </div>
                                  {/* <div className="price-wrapper">
                                  <h6>
                                    Price:
                                    <span>
                                      $<span id="pricerangemin"></span>- $
                                      <span id="pricerangemax"></span>
                                    </span>
                                  </h6>
                                </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Grid --> */}
                          <div className="filter-grid">
                            <h4>
                              <Link
                                to="#collapsefour"
                                data-bs-toggle="collapse"
                              >
                                Speciality
                              </Link>
                            </h4>
                            <div id="collapsefour" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  {Category?.map((e, i) => {
                                    return (
                                      <>
                                        <li key={i}>
                                          <label className="custom_check d-inline-flex">
                                            <input
                                              type="radio"
                                              name="speciality"
                                              // checked={category}
                                              value={e.name}
                                              onChange={() =>
                                                setcategory(e.name)
                                              }
                                            />
                                            <span className="checkmark"></span>
                                            {e.name}
                                          </label>
                                        </li>
                                      </>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Grid --> */}
                          {/* <div className="filter-grid">
                            <h4>
                              <a href="#collapsefive" data-bs-toggle="collapse">
                                Experience
                              </a>
                            </h4>
                            <div id="collapsefive" className=" collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="experience"
                                      />
                                      <span className="checkmark"></span>
                                      1-5 Years
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_check d-inline-flex">
                                      <input
                                        type="checkbox"
                                        name="experience"
                                      />
                                      <span className="checkmark"></span>
                                      5+ Years
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div> */}
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Grid --> */}
                          {/* <div className="filter-grid">
                            <h4>
                              <a href="#collapsesix" data-bs-toggle="collapse">
                                Online Consultation
                              </a>
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
                          </div> */}

                          <div className="filter-grid">
                            <h4>
                              <a
                                href="#collapseseven"
                                data-bs-toggle="collapse"
                              >
                                By Rating
                              </a>
                            </h4>
                            <div id="collapseseven" className="collapse show">
                              <div className="filter-collapse">
                                <ul>
                                  <li>
                                    <Rate
                                      value={star}
                                      onChange={(e) => setStar(e)}
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* <div className="filter-grid">
                            <h4>
                              <a
                                href="#collapseeight"
                                data-bs-toggle="collapse"
                              >
                                Languages
                              </a>
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
                                      Hindi
                                    </label>
                                  </li>
                                  
                                </ul>
                              </div>
                            </div>
                          </div> */}
                          {/* <!-- /Filter Grid --> */}

                          {/* <!-- Filter Btn --> */}
                          <div className="filter-btn apply-btn">
                            <div className="row">
                              <div className="col-6">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => handleReset()}
                                >
                                  Reset
                                </button>
                              </div>
                              {/* <div className="col-6">
                                <button
                                  type="button"
                                  onClick={formik.resetForm}
                                  className="btn btn-outline-primary"
                                >
                                  Reset
                                </button>
                              </div> */}
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
                            <div className="doctors-found">
                              <p>
                                <span>
                                  {doctorsFilter?.total} Doctors found for:
                                </span>{" "}
                                {category} in San francisco, California
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
                                <label
                                  htmlFor="status_6"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="doctor-filter-option">
                            <div className="doctor-filter-sort">
                              <p>Sort By Name : </p>
                              <div className="doctor-filter-select">
                                <select
                                  className="form-select"
                                  name="sort"
                                  onChange={(e) => setSort(e.target.value)}
                                  // value={'sort'}
                                >
                                  <option value={"1"}>A to Z</option>
                                  <option value={"-1"}>Z to A</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="doctor-filter-option">
                            <input
                              type="text "
                              className="form-control "
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Search Doctors By name"
                            />
                          </div>
                        </div>
                      </div>
                      {doctorsFilter?.total === 0 ? (
                        <>
                          <div className="row justify-content-center py-5">
                            no data available
                          </div>
                        </>
                      ) : (
                        <>
                          {doctors?.map((e, i) => {
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
                                            <Link
                                              to={`/doctor-profile/${e._id}`}
                                            >
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
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="blog-pagination rev-page">
                            <nav className="d-flex justify-content-end w-full px-5">
                              <Pagination
                                current={page}
                                onChange={(e) => setPage(e)}
                                total={doctorsFilter?.total}
                                pageSize={doctorsFilter?.limit}
                              />
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-12 theiaStickySidebar map-right">
                <div id="map" className="map-listing"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
