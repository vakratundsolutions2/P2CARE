import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import React, { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../utils/baseUrl";
import {
  BOOKNOW,
  getADoctor,
  resetState,
} from "../../features/doctor/doctorSlice";
import { Rate } from "antd";
import { GetAavailablity } from "../../features/availablity/availablitySlice";
import Slider from "react-slick";

import axios from "axios";

import noResult from "../../assets/images/download.svg";
import dayjs from "dayjs";
import Seo from "../../components/seo/SEO";
1;
const BookAppointment = () => {
  const ID = location.pathname.split("/")[2];
  var crtDate = new Date();
  const [TIME, setTIME] = useState("");

  const [NEWDATE, setNEWDATE] = useState(
    crtDate.getFullYear() +
      "-" +
      (crtDate.getMonth() + 1) +
      "-" +
      crtDate.getDate()
  );

  const [currentDate, setCurrentDate] = useState(""); // State for the current date
  const [availableSchedule, setavailableSchedule] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ID !== undefined) {
      dispatch(getADoctor(ID));
      dispatch(GetAavailablity({ id: ID, date: NEWDATE }));
    } else {
      dispatch(resetState());
    }
  }, []);

  const DoctorState = useSelector((state) => state.doctor);
  const { SingleData } = DoctorState;
  const { AvailableByID } = useSelector((state) => state?.available);
  const { user } = useSelector((state) => state.auth);

  const [currentPosition, changeCurrentPosition] = useState(0);
  const [schedule, changeSchedule] = useState([]);
  const [scheduleWiseDate, changeScheduleWiseDate] = useState([]);
  const [Speciality, setSpeciality] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}available/searchdoctortime/${ID}?date=${NEWDATE}`)
      .then((res) => {
        setavailableSchedule(
          res.data.responseData.bookingavailabilityInformation[0]?.bookingtime
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [NEWDATE, currentPosition, ID]);

  // console.log("NEWDATE", NEWDATE);
  // console.log("availableSchedule", availableSchedule);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // >>>>>>> 88f733e5a2b78db3feb35d8044d4bde51f621b29
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    var date = new Date();
    var setSchedule = [];
    var setScheduleDateWise = [];
    for (let i = 0; i < 15; i++) {
      setSchedule.push(
        weekday[date.getDay()] +
          ", " +
          date.getDate() +
          " " +
          month[date.getMonth()]
      ); //try
      setScheduleDateWise.push(
        date.getFullYear() +
          "-" +
          (date.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          date.getDate().toString().padStart(2, "0")
      );
      date.setDate(date.getDate() + 1);
    }
    changeScheduleWiseDate(setScheduleDateWise);
    changeSchedule(setSchedule);
  }, []);

  const handlePrev = () => {
    if (currentPosition != -1) {
      changeCurrentPosition(currentPosition - 1);
      setNEWDATE(scheduleWiseDate[currentPosition - 1]);
    }
  };

  const handleNext = () => {
    if (currentPosition <= 13) {
      changeCurrentPosition(currentPosition + 1);
      setNEWDATE(scheduleWiseDate[currentPosition + 1]);
    }
  };

  // const sliderRef = React.createRef();
  const sliderRef2 = React.createRef();

  const handleTestimonialPrevClick = async () => {
    // await sliderRef.current.slickPrev();
    await sliderRef2.current.slickPrev();
    handlePrev();
  };

  const handleTestimonialNextClick = async () => {
    // await sliderRef.current.slickNext();
    await sliderRef2.current.slickNext();
    handleNext();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
  };

  console.log(currentDate);
  console.log(NEWDATE);

  const handlePOS = (e, i) => {
    setNEWDATE(e);
    changeCurrentPosition(i);
  };
  return (
    <>
      <Seo metaTitle={"Book Appoinment - P2CARE"} />

      <div className="main-wrapper">
        <BreadCrum
          location={"Book An Appoinment "}
          heading={"Book Appoinment"}
        />

        {/* <!-- Page Content --> */}
        <form>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="booking-doc-info d-flex">
                        <div className="col-md-9">
                          <Link
                            to={`/doctor-profile/${SingleData?._id}`}
                            className="booking-doc-img"
                          >
                            <img
                              src={`${baseUrl}doctor/${SingleData?.image}`}
                              alt={SingleData?.doctorName}
                            />
                          </Link>
                          <div className="booking-info">
                            <h4>
                              <Link to={`/doctor-profile/${SingleData?._id}`}>
                                {SingleData?.doctorName}
                              </Link>
                            </h4>
                            <div className="rating">
                              <span className="review-count rating">
                                <Rate
                                  style={{ color: "#f2b600" }}
                                  disabled
                                  value={SingleData?.totalratings}
                                />
                              </span>

                              <span className="d-inline-block px-3 bg-primary rounded-pill mx-3 average-rating">
                                ({SingleData?.ratings.length})
                              </span>
                            </div>
                            <p className="text-muted mb-0">
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {SingleData?.location}
                            </p>
                            <div className="d-flex gap-3 mt-3">
                              {SingleData?.experties?.map((el, i) => {
                                return (
                                  <>
                                    <button
                                      className="btn-sm btn btn-primary"
                                      key={i}
                                    >
                                      {el}
                                    </button>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <select
                            name="category"
                            className="form-select"
                            onChange={(e) => setSpeciality(e.target.value)}
                            value={Speciality}
                            required={true}
                          >
                            <option value="">Please Select Speciality</option>
                            {SingleData?.experties?.map((el) => {
                              return (
                                <>
                                  {" "}
                                  <option value={el}>{el} </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <section className=" bg-white">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="owl-nav slide-nav-1 text-end nav-control d-flex justify-content-between">
                            <button
                              type="button"
                              className="owl-prev"
                              onClick={handleTestimonialPrevClick}
                              disabled={currentPosition === 0 ? true : false}
                            >
                              <i className="fas fa-chevron-left custom-arrow"></i>
                            </button>
                            <div className=" w-75">
                              <div className="row d-flex flex-nowrap  m-2">
                                <Slider ref={sliderRef2} {...settings2}>
                                  {schedule.map((val, index) => {
                                    return (
                                      <>
                                        <div className="col-12 px-0 text-center m-0">
                                          <div className="p-2">
                                            {index == 0 || index == 1 ? (
                                              index == 0 ? (
                                                <span
                                                  type="button"
                                                  onClick={(e) =>
                                                    handlePOS(val, index)
                                                  }
                                                  className="nav-link text-center"
                                                >
                                                  Today
                                                </span>
                                              ) : index == 1 ? (
                                                <>
                                                  <span
                                                    type="button"
                                                    onClick={(e) =>
                                                      handlePOS(val, index)
                                                    }
                                                    className="nav-link text-center"
                                                  >
                                                    Tomorrow
                                                  </span>
                                                </>
                                              ) : (
                                                ""
                                              )
                                            ) : (
                                              <span
                                                type="button"
                                                onClick={(e) =>
                                                  handlePOS(
                                                    e.target.innerHTML,
                                                    index
                                                  )
                                                }
                                                className="nav-link text-center"
                                              >
                                                {val}
                                              </span>
                                            )}
                                          </div>

                                          <div
                                            className={
                                              currentPosition == index
                                                ? "py-1 bg-primary"
                                                : "py-1"
                                            }
                                          ></div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </Slider>
                              </div>
                            </div>
                            <button
                              className="owl-next"
                              type="button"
                              onClick={handleTestimonialNextClick}
                              disabled={currentPosition === 14 ? true : false}
                            >
                              <i className="fas fa-chevron-right custom-arrow"></i>
                            </button>
                          </div>

                          <div className="testimonial-slider-container">
                            <div>
                              <div className="row d-flex   m-2">
                                <div className="col-12 p-2">
                                  <div className="card p-4 m-0 border-dark">
                                    <div>
                                      {dayjs(NEWDATE)?.format("ddd , DD MMM")}
                                    </div>
                                    <hr />
                                    <div>
                                      <div className="schedule-cont">
                                        <div className="row">
                                          <div className="col-md-12">
                                            {/* <!-- Time Slot --> */}

                                            <div className="time-slot">
                                              <ul className="clearfix ">
                                                {availableSchedule?.length ===
                                                  0 ||
                                                availableSchedule ===
                                                  undefined ? (
                                                  <div className="d-flex flex-column justify-content-center  ">
                                                    <div className=" mb-3 m-auto">
                                                      <img
                                                        src={noResult}
                                                        alt="No Slots Available"
                                                        className="imf-fluid"
                                                      />
                                                    </div>
                                                    No Slots available for{" "}
                                                  </div>
                                                ) : (
                                                  availableSchedule?.map(
                                                    (el, i) => {
                                                      return (
                                                        <>
                                                          <div
                                                            className="form-check-inline visits  "
                                                            key={i}
                                                          >
                                                            <label className="visit-btns">
                                                              <input
                                                                type="radio"
                                                                name="time"
                                                                required={true}
                                                                className="form-check-input"
                                                                id=""
                                                                onChange={(
                                                                  e
                                                                ) => {
                                                                  setTIME(
                                                                    e.target
                                                                      .value
                                                                  );
                                                                }}
                                                                value={el}
                                                              />
                                                              <span
                                                                className="visit-rsn"
                                                                data-bs-toggle="tooltip"
                                                              >
                                                                {el}
                                                              </span>{" "}
                                                            </label>
                                                          </div>
                                                        </>
                                                      );
                                                    }
                                                  )
                                                )}
                                              </ul>
                                            </div>

                                            {/* <!-- /Time Slot --> */}
                                          </div>
                                        </div>
                                      </div>
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

                  {/* <Appointment /> */}

                  {/* <!-- Submit Section --> */}
                  <div className="submit-section proceed-btn text-end">
                    <button
                      type="submit"
                      className="outline-none border-0 p-0 bg-transprent"
                    >
                      <Link
                        onClick={() =>
                          dispatch(
                            BOOKNOW({
                              doctor: SingleData?._id,
                              date: NEWDATE,
                              time: TIME,
                              Speciality: Speciality,
                            })
                          )
                        }
                        to={user ? `/checkout` : `/login`}
                        className="btn btn-primary submit-btn"
                      >
                        Proceed to Pay
                      </Link>
                    </button>
                  </div>
                  {/* <!-- /Submit Section --> */}
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <!-- /Page Content --> */}
      </div>
    </>
  );
};

export default BookAppointment;
