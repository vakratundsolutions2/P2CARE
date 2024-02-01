import { Link, NavLink } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { baseUrl } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ScheduleTime = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(function () {
    const getTimeSlot = async function () {
      const res = await fetch(`${baseUrl}time/alltime`);
      const data = await res.json();
      setTimeSlots(data.data);
    };
    getTimeSlot();
  }, []);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDayClick = (day) => {
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
      const selectedData = {
        day: selectedDay,
        available: true,
        bookingtime: selectedTimeSlots,
      };
      setBookingData((prev) => [...prev, selectedData]);
      console.log("Selected Data:", selectedData);
    } else {
      const selectedData = {
        day: selectedDay,
        available: false,
        bookingtime: [],
      };
      setBookingData((prev) => [...prev, selectedData]);
      console.log("Please select both a day and at least one time slot.");
    }
  };

  const confirmTimeSlot = async () => {
    console.log(bookingData);
    const res = await fetch(
      `${baseUrl}available/updatetime/${user.DRdata._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: user.token,
        },
        body: JSON.stringify({

          bookingavailabilityInformation: bookingData,
        }),
      }
    );
    console.log(res);
    if (!res.ok) {
      const res = await fetch(`${baseUrl}available/time`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: user.token,
        },
        body: JSON.stringify({
          doctorid: user._id,
          bookingavailabilityInformation: bookingData,
        }),
      });
      console.log(res);
    }
  };

  return (
    <>
      <div className="main-wrapper">
        <BreadCrum
          location={"Schedule Timings  "}
          heading={"Schedule Timings"}
        />
        <div className="col-md-7 col-lg-8 col-xl-9">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Schedule Timings</h4>
                  <div className="profile-box">
                    <div className="row">
                      <div className="col-lg-4">
                        {/* <div className="mb-3">
                          <label className="durations">
                            Timing Slot Duration
                          </label>
                          <select className="form-select form-control">
                            <option>-</option>
                            <option>15 mins</option>
                            <option selected="selected">30 mins</option>
                            <option>45 mins</option>
                            <option>1 Hour</option>
                          </select>
                        </div> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card schedule-widget mb-0">
                          {/* <!-- Schedule Header --> */}
                          <div className="schedule-header">
                            {/* <!-- Schedule Nav --> */}
                            <div className="schedule-nav">
                              <ul className="nav nav-tabs nav-justified">
                                {weekdays.map((day, i) => {
                                  return (
                                    <li className="nav-item" key={i}>
                                      <Link
                                        className="nav-link"
                                        // data-bs-toggle="tab"
                                        to={`#slot_${day}`}
                                        onClick={() => handleDayClick(day)}
                                      >
                                        {day}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            {/* <!-- /Schedule Nav --> */}
                          </div>
                          {/* <!-- /Schedule Header --> */}

                          {/* <!-- Schedule Content --> */}
                          <div className="tab-content schedule-cont">
                            {/* <!-- Sunday Slot --> */}
                            <div id="slot_sunday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </Link>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                            {/* <!-- /Sunday Slot --> */}

                            {/* <!-- Monday Slot --> */}
                            <div
                              id="slot_monday"
                              className="tab-pane fade show active"
                            >
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#edit_time_slot"
                                >
                                  <i className="fa fa-edit me-1"></i>Edit
                                </Link>
                              </h4>

                              {/* <!-- Slot List --> */}
                              <div className="doc-times mb-4">
                                {timeSlots.map((time, i) => {
                                  return (
                                    <div className="doc-slot-list" key={i}>
                                      <input
                                        type="checkbox"
                                        name="time-slot"
                                        value={time.Time}
                                        checked={selectedTimeSlots.includes(
                                          time.Time
                                        )}
                                        onChange={() =>
                                          handleTimeSlotToggle(time.Time)
                                        }
                                      />
                                      {time.Time}
                                    </div>
                                  );
                                })}
                              </div>
                              <button onClick={handleSubmit}>Submit</button>
                              <button onClick={confirmTimeSlot}>Confirm</button>
                              {/* <!-- /Slot List --> */}
                            </div>
                            {/* <!-- /Monday Slot --> */}

                            {/* <!-- Tuesday Slot --> */}
                            <div id="slot_tuesday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </Link>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                            {/* <!-- /Tuesday Slot --> */}

                            {/* <!-- Wednesday Slot --> */}
                            <div id="slot_wednesday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </Link>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                            {/* <!-- /Wednesday Slot --> */}

                            {/* <!-- Thursday Slot --> */}
                            <div id="slot_thursday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </Link>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                            {/* <!-- /Thursday Slot --> */}

                            {/* <!-- Friday Slot --> */}
                            <div id="slot_friday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </Link>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                            {/* <!-- /Friday Slot --> */}

                            {/* <!-- Saturday Slot --> */}
                            <div id="slot_saturday" className="tab-pane fade">
                              <h4 className="card-title d-flex justify-content-between">
                                <span>Time Slots</span>
                                <Link
                                  className="edit-link"
                                  data-bs-toggle="modal"
                                  to="#add_time_slot"
                                >
                                  <i className="fa fa-plus-circle"></i> Add Slot
                                </Link>
                              </h4>
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                            {/* <!-- /Saturday Slot --> */}
                          </div>
                          {/* <!-- /Schedule Content --> */}
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
