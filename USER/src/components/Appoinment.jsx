import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { GetAllTestimonial, resetState } from "../features/testimonial/testimonialSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './Testimonial.css';

const Appoinment2 = () => {

  const { AvailableByID } = useSelector((state) => state?.available);

  const [currentPosition, changeCurrentPosition] = useState(0);
  const [schedule, changeSchedule] = useState([]);

  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    var date = new Date();
    var setSchedule = []
    for (let i = 0; i < 15; i++) {
      setSchedule.push(weekday[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()]);
      date.setDate(date.getDate() + 1);
    }
    changeSchedule(setSchedule);
  }, []);

  const handlePrev = () => {
    if (currentPosition != -1) {
      changeCurrentPosition(currentPosition - 1);
    }
  }

  const handleNext = () => {
    if (currentPosition <= 13) {
      changeCurrentPosition(currentPosition + 1);
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTestimonial());
    dispatch(resetState());
  }, []);

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false
  };

  return (
    <>
      <section className=" bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-nav slide-nav-1 text-end nav-control d-flex justify-content-between">
                <button className="owl-prev" onClick={handleTestimonialPrevClick} disabled={(currentPosition === 0) ? true : false}>
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <div className=" w-75">
                  <div className="row d-flex flex-nowrap overflow-auto m-2">
                    {/* {
                      schedule.map((val, index) => {
                        return (
                          <>
                            <div className="col-4 px-0 text-center m-0">
                              <div className="p-2">
                                {
                                  (index == 0 || index == 1)
                                    ? (index == 0) ? "Today" : (index == 1) ? "Tomorrow" : ""
                                    : val
                                }
                              </div>
                              <div className={(currentPosition == index) ? "py-1 bg-primary" : "py-1"}>
                              </div>
                            </div>
                          </>
                        )
                      })
                    } */}
                    <Slider ref={sliderRef2} {...settings2}>
                      {
                        schedule.map((val, index) => {
                          return (
                            <>
                              <div className="col-12 px-0 text-center m-0">
                                <div className="p-2">
                                  {
                                    (index == 0 || index == 1)
                                      ? (index == 0) ? "Today" : (index == 1) ? "Tomorrow" : ""
                                      : val
                                  }
                                </div>
                                <div className={(currentPosition == index) ? "py-1 bg-primary" : "py-1"}>
                                </div>
                              </div>
                            </>
                          )
                        })
                      }
                    </Slider>
                  </div>
                </div>
                <button className="owl-next" onClick={handleTestimonialNextClick} disabled={(currentPosition === 14) ? true : false}>
                  <i className="fas fa-chevron-right custom-arrow"></i>
                </button>
              </div>

              <div className="testimonial-slider-container">
                <div>
                  <div className="row d-flex flex-nowrap overflow-auto m-2">
                    <Slider ref={sliderRef} {...settings}>
                      {
                        schedule.map((val, index) => {
                          return (
                            <>
                              <div className="col-12 p-2">
                                <div className="card p-4 m-0 border-dark">
                                  <div>
                                    {
                                      (index == 0 || index == 1)
                                        ? (index == 0) ? "Today" : (index == 1) ? "Tomorrow" : ""
                                        : val
                                    }
                                  </div>
                                  <hr />
                                  <div>
                                    <div className="schedule-cont">
                                      <div className="row">
                                        <div className="col-md-12">
                                          {/* <!-- Time Slot --> */}

                                          <div className="time-slot">
                                            <ul className="clearfix">
                                              {AvailableByID?.bookingavailabilityInformation?.map(
                                                (days, index) => {
                                                  return val.slice(0, 3) ==
                                                    days.day ? (
                                                    <>
                                                      <li key={index}>
                                                        {days.bookingtime?.map((timeSlots) => {
                                                          return (
                                                            <>
                                                              <div
                                                                className="form-check-inline visits me-0"
                                                                key="{index}"
                                                              >
                                                                <label className="visit-btns">
                                                                  <input
                                                                    type="radio"
                                                                    name="time"
                                                                    className="form-check-input"
                                                                    id=""
                                                                    value={timeSlots}
                                                                  />
                                                                  <span
                                                                    className="visit-rsn"
                                                                    data-bs-toggle="tooltip"
                                                                  >
                                                                    {timeSlots}
                                                                  </span>{" "}
                                                                </label>
                                                              </div>
                                                            </>
                                                          );
                                                        })}
                                                      </li>
                                                      {
                                                        ((days.bookingtime).length === 0)
                                                          ?
                                                          <div>
                                                            <h4>
                                                              No Any Schedule Found !
                                                            </h4>
                                                          </div>
                                                          : ""
                                                      }
                                                    </>
                                                  ) : null;
                                                }
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
                            </>
                          )
                        })
                      }
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Appoinment2;
