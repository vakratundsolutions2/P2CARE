import { Link, NavLink } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { baseUrl } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAAvailablity,
  GetAllSlots,
  UpdateAvailablity,
} from "../features/availablity/availablitySlice";
import toast from "react-hot-toast";

const ScheduleTime = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { slots } = useSelector((state) => state.available);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllSlots());
    dispatch(GetAAvailablity(user?.DRdata?._id));
  }, []);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDayClick = async (day) => {
    setSelectedDay(day);
    setSelectedTimeSlots([]);
  };

  const handleTimeSlotToggle = (timeSlot) => {
    const updatedTimeSlots = [...selectedTimeSlots];
    if (updatedTimeSlots.includes(timeSlot)) {
      updatedTimeSlots.splice(updatedTimeSlots.indexOf(timeSlot), 1);
    } else {
      updatedTimeSlots.push(timeSlot);
    }
    setSelectedTimeSlots(updatedTimeSlots);
  };

  const handleSubmit = () => {
    console.log(selectedDay, selectedTimeSlots);
    if (selectedDay && selectedTimeSlots.length > 0) {
      setBookingData({
        day: selectedDay,
        available: true,
        bookingtime: selectedTimeSlots,
      });
      // console.log("Selected Data:", selectedData);
    } else {
      setBookingData({
        day: selectedDay,
        available: false,
        bookingtime: [],
      });
      toast.error("Please select both a day and at least one time slot.");
    }

    setTimeout(() => {
      console.log(bookingData);
    }, 5000);

    setTimeout(async () => {


        dispatch(
          UpdateAvailablity({
            id: user.DRdata?._id,
            formData:bookingData
          })
        );
      // const res = await fetch(
      //   `${baseUrl}available/updatetime/${user.DRdata._id}`,
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //       authorization: user.token,
      //     },
      //     body: JSON.stringify({
      //       bookingavailabilityInformation: [bookingData],
      //       doctorid: user.DRdata?._id,
      //     }),
      //   }
      // );
      // console.log(res);
    }, 500);
  };

  return (
    <>
      <div className="main-wrapper">
        <BreadCrum
          location={"Schedule Timings  "}
          heading={"Schedule Timings"}
        />
        <div className="col-md-7 col-lg-8 col-xl-10">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Schedule Timings</h4>
                  <div className="profile-box">
                    <div className="row mb-3">
                      <div className="col-lg-4">
                        <div className="m-3">
                          <label className="durations">
                            Timing Slot Duration
                          </label>
                          <select className="form-select form-control ">
                            <option>-</option>
                            <option>15 mins</option>
                            <option>30 mins</option>
                            <option>45 mins</option>
                            <option>1 Hour</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card schedule-widget mb-0">
                          <div className="schedule-header">
                            <div className="schedule-nav">
                              <ul className="nav nav-tabs nav-justified">
                                {weekdays.map((day, i) => {
                                  return (
                                    <>
                                      <div
                                        className="form-check-inline visits  "
                                        key={i}
                                      >
                                        <label className="visit-btns">
                                          <input
                                            type="radio"
                                            name="day"
                                            required={true}
                                            className="form-check-input"
                                            onClick={() => handleDayClick(day)}
                                            value={day}
                                          />
                                          <span
                                            className="visit-rsn"
                                            data-bs-toggle="tooltip"
                                          >
                                            {day}
                                          </span>{" "}
                                        </label>
                                      </div>
                                    </>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>

                          <div className="tab-content schedule-cont">
                            <div
                              id="slot_monday"
                              className="tab-pane fade show active"
                            >
                              <div className="doc-times mb-4">
                                {slots.map((time, i) => {
                                  return (
                                    <div
                                      className="form-check-inline visits  "
                                      key={i}
                                    >
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          name="time"
                                          required={true}
                                          className="form-check-input"
                                          onChange={() =>
                                            handleTimeSlotToggle(time.Time)
                                          }
                                          checked={selectedTimeSlots.includes(
                                            time.Time
                                          )}
                                          value={time.Time}
                                        />
                                        <span
                                          className="visit-rsn"
                                          data-bs-toggle="tooltip"
                                        >
                                          {time.Time}
                                        </span>{" "}
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="d-flex gap-3">
                                <button
                                  onClick={handleSubmit}
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
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
      </div>
    </>
  );
};

export default ScheduleTime;
