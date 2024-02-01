import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../utils/baseUrl";
import { getADoctor, resetState } from "../../features/doctor/doctorSlice";
import { Rate } from "antd";
import { GetAavailablity } from "../../features/availablity/availablitySlice";
import Slider from "react-slick";

import { GetAllTestimonial } from "../../features/testimonial/testimonialSlice";
import axios from "axios";

const BookAppointment = () => {
  const ID = location.pathname.split("/")[2];
  var crtDate = new Date();
  const [TIME, setTIME] = useState("");
  // <<<<<<< HEAD
  const [NEWDATE, setNEWDATE] = useState(
    crtDate.getFullYear() +
      "-" +
      (crtDate.getMonth() + 1) +
      "-" +
      crtDate.getDate()
  );
  
//  =======
  // const [NEWDATE, setNEWDATE] = useState(
  //   crtDate.getFullYear() +
  //     "-" +
  //     (crtDate.getMonth() + 1) +
  //     "-" +
  //     crtDate.getDate()
  // );
  const [currentDate, setCurrentDate] = useState(""); // State for the current date
  const [availableSchedule, setavailableSchedule] = useState([]);

  // const handlePrev = () => {
  //   if (currentPosition != -1) {
  //     changeCurrentPosition(currentPosition - 1);
  //     setNEWDATE(scheduleWiseDate[currentPosition + 1]);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentPosition <= 13) {
  //     changeCurrentPosition(currentPosition + 1);
  //     setNEWDATE(scheduleWiseDate[currentPosition + 1]);
  //   }
  // };
  // >>>>>>> 88f733e5a2b78db3feb35d8044d4bde51f621b29

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

  // <<<<<<< HEAD

  // =======
  useEffect(() => {
    axios
      .get(`${baseUrl}available/searchdoctortime/${ID}?date=${NEWDATE}`)
      .then((res) => {
        console.log(res.data);
        setavailableSchedule(
          res.data.responseData.bookingavailabilityInformation[0]?.bookingtime
        );
      })
      .catch((err) => {
        console.log(err);
      })
    }, [NEWDATE, currentPosition, ID]);
    
    console.log("NEWDATE", NEWDATE);
    console.log("availableSchedule", availableSchedule);
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
      );//try
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

  // <<<<<<< HEAD
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

  // =======
  // >>>>>>> 88f733e5a2b78db3feb35d8044d4bde51f621b29
  const sliderRef = React.createRef();
  const sliderRef2 = React.createRef();

  const handleTestimonialPrevClick = async () => {
    await sliderRef.current.slickPrev();
    await sliderRef2.current.slickPrev();
    handlePrev();
  };

  const handleTestimonialNextClick = async () => {
    await sliderRef.current.slickNext();
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

  return (
    <div className="main-wrapper">
      <BreadCrum location={"Book An Appoinment "} heading={"Book Appoinment"} />

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
                            <div className="row d-flex flex-nowrap overflow-auto m-2">
                              <Slider ref={sliderRef2} {...settings2}>
                                {schedule.map((val, index) => {
                                  return (
                                    <>
                                      <div className="col-12 px-0 text-center m-0">
                                        <div className="p-2">
                                          {index == 0 || index == 1 ? (
                                            index == 0 ? (
                                              "Today"
                                            ) : index == 1 ? (
                                              <>
                                                <span>Tomorrow</span>
                                              </>
                                            ) : (
                                              ""
                                            )
                                          ) : (
                                            val
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
                            <div className="row d-flex flex-nowrap overflow-auto m-2">
                              <Slider ref={sliderRef} {...settings}>
                                {schedule.map((val, index) => {
                                  return (
                                    <>
                                      <div className="col-12 p-2">
                                        <div className="card p-4 m-0 border-dark">
                                          <div>
                                            {index == 0 || index == 1
                                              ? index == 0
                                                ? "Today"
                                                : index == 1
                                                ? "Tomorrow"
                                                : ""
                                              : val}
                                          </div>
                                          <hr />
                                          <div>
                                            <div className="schedule-cont">
                                              <div className="row">
                                                <div className="col-md-12">
                                                  {/* <!-- Time Slot --> */}

                                                  <div className="time-slot">
                                                    <ul className="clearfix">
                                                      {/* {AvailableByID?.bookingavailabilityInformation?.map(
                                                        (days, index) => {
                                                          return val.slice(
                                                            0,
                                                            3
                                                          ) == days.day ? (
                                                            <>
                                                              <li key={index}>
                                                                {days.bookingtime?.map(
                                                                  (
                                                                    timeSlots,
                                                                    i
                                                                  ) => {
                                                                    return (
                                                                      <>
                                                                        <div
                                                                          className="form-check-inline visits me-0"
                                                                          key={
                                                                            i
                                                                          }
                                                                        >
                                                                          <label className="visit-btns">
                                                                            <input
                                                                              type="radio"
                                                                              name="time"
                                                                              required={
                                                                                true
                                                                              }
                                                                              className="form-check-input"
                                                                              id=""
                                                                              onChange={(
                                                                                e
                                                                              ) => {
                                                                                setTIME(
                                                                                  e
                                                                                    .target
                                                                                    .value
                                                                                );
                                                                              }}
                                                                              value={
                                                                                timeSlots
                                                                              }
                                                                              // disabled={
                                                                              //   availableSchedule.includes(
                                                                              //     timeSlots
                                                                              //   )
                                                                              //     ? true
                                                                              //     : false
                                                                              // }
                                                                            />
                                                                            <span
                                                                              className="visit-rsn"
                                                                              data-bs-toggle="tooltip"
                                                                            >
                                                                              {
                                                                                timeSlots
                                                                              }
                                                                            </span>{" "}
                                                                          </label>
                                                                        </div>
                                                                      </>
                                                                    );
                                                                  }
                                                                )}
                                                              </li>
                                                              {days.bookingtime
                                                                .length ===
                                                              0 ? (
                                                                <div>
                                                                  <h4>
                                                                    No Any
                                                                    Schedule
                                                                    Found !
                                                                  </h4>
                                                                </div>
                                                              ) : (
                                                                ""
                                                              )}
                                                            </>
                                                          ) : null;
                                                        }
                                                      )} */}
                                                      {availableSchedule?.map((el,i)=>{
                                                       
                                                        return (
                                                          <>
                                                            <div
                                                              className="form-check-inline visits me-0"
                                                              key={i}
                                                            >
                                                              <label className="visit-btns">
                                                                <input
                                                                  type="radio"
                                                                  name="time"
                                                                  required={
                                                                    true
                                                                  }
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
                                                                  value={
                                                                    el
                                                                  }
                                                                  // disabled={
                                                                  //   availableSchedule.includes(
                                                                  //     timeSlots
                                                                  //   )
                                                                  //     ? true
                                                                  //     : false
                                                                  // }
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
                                                      })}
                                                    </ul>
                                                  </div>

                                                  {/* <!-- /Time Slot --> */}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                              </Slider>
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
                    className="outline-none border-0 bg-transprent"
                  >
                    <Link
                      // to={`/checkout?doctor=${DOCTOR._id}&date=${NEWDATE}&time=${TIME}`}
                      to={
                        user
                          ? `/checkout?doctor=${SingleData?._id}&date=${NEWDATE}&time=${TIME}&speciality=${Speciality}`
                          : `/login`
                      }
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
  );
};

export default BookAppointment;
