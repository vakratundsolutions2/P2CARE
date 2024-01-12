import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../utils/baseUrl";
import {
  GetAllAvailable,
  getAllDoctors,
  resetState,
} from "../../features/doctor/doctorSlice";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const BookAppointment = () => {
  const ID = location.pathname.split("/")[2];
  const [TIME, setTIME] = useState("");
  const [NEWDATE, setNEWDATE] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(resetState());
    dispatch(GetAllAvailable());
  }, []);
  const DoctorState = useSelector((state) => state.doctor);
  const { allDoctors, Available } = DoctorState;
  const user = useSelector((state) => state.auth?.user?.data?.user)
  console.log( user);
  const DOC = allDoctors?.filter((e) => {
    return e._id === ID;
  });

  const DRAvail = Available?.filter((e) => {
    return e?.doctorid === ID;
  });

  const newData = DRAvail?.map((e) => {
    return e?.bookingavailabilityInformation;
  });

  console.log(newData);

  console.log(TIME);

 

  const DOCTOR = DOC[0];

  const formData = {
    doctor: DOCTOR._id,
    date: NEWDATE,
    time: TIME,
  };
  console.log(formData);



  return (
    <div className="main-wrapper">
      <BreadCrum location={"Book An Appoinment "} heading={"Book Appoinment"} />

      {/* <!-- Page Content --> */}
      <form >
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="booking-doc-info">
                      <Link
                        to={`/doctor-profile/${DOCTOR._id}`}
                        className="booking-doc-img"
                      >
                        <img
                          src={`${baseUrl}doctor/${DOCTOR.image}`}
                          alt={DOCTOR.doctorName}
                        />
                      </Link>
                      <div className="booking-info">
                        <h4>
                          <Link to={`/doctor-profile/${DOCTOR._id}`}>
                            {DOCTOR?.doctorName}
                          </Link>
                        </h4>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">
                            35
                          </span>
                        </div>
                        <p className="text-muted mb-0">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {DOCTOR?.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">11 November 2023</h4>
                    <p className="text-muted">Monday</p>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-end">
                    {/* <div className="bookingrange btn btn-white btn-sm mb-3">
                    <i className="far fa-calendar-alt me-2"></i>
                    <span></span>
                    <i className="fas fa-chevron-down ms-2"></i>
                  </div> */}
                    {/* <DatePicker

                    format={""}
                    presets={[
                      {
                        label: "Yesterday",
                        value: dayjs().add(-1, "d"),
                      },
                      {
                        label: "Last Week",
                        value: dayjs().add(-7, "d"),
                      },
                      {
                        label: "Last Month",
                        value: dayjs().add(-1, "month"),
                      },
                    ]}
                    onChange={onChange}
                  />
                   */}
                    <input
                      type="date"
                      name="date"
                      id="date"
                      onChange={(e) => setNEWDATE(e.target.value)}
                    />
                  </div>
                </div>

                {/* <!-- Schedule Widget --> */}
                <div className="card booking-schedule schedule-widget">
                  {/* <!-- Schedule Header --> */}
                  <div className="schedule-header">
                    <div className="row">
                      <div className="col-md-12">
                        {/* <!-- Day Slot --> */}
                        {/* <ul className="d-flex flex-column">
                        <li className="d-flex  gap-4">
                          <div className="day">SUN</div>
                          <div className="time">11 11</div>
                          <div className="time">11 11</div>
                        </li>
                        <li className="d-flex">Mon</li>
                        <li className="d-flex">Wed</li>
                      </ul> */}
                        <div className="day-slot">
                          <ul>
                            {newData[0]?.map((day, index) => {
                              return (
                                <>
                                  <li key={index}>
                                    <span>{day.day}</span>
                                  </li>
                                </>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Schedule Content --> */}
                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        {/* <!-- Time Slot --> */}

                        <div className="time-slot">
                          <ul className="clearfix">
                            {newData &&
                              newData[0]?.map((time, i) => {
                                return (
                                  <>
                                    <li key={i}>
                                      {time?.bookingtime?.map((e, i) => {
                                        // NEWDATE.split(' ')
                                        return (
                                          <>
                                            <Link
                                              key={i}
                                              className="timing "
                                              onClick={(e) =>
                                                setTIME(e.target.innerHTML)
                                              }
                                            >
                                              {e}
                                            </Link>
                                          </>
                                        );
                                      })}
                                    </li>
                                  </>
                                );
                              })}
                          </ul>
                        </div>

                        {/* <!-- /Time Slot --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Schedule Content --> */}
                </div>
                {/* <!-- /Schedule Widget --> */}

                {/* <!-- Submit Section --> */}
                <div className="submit-section proceed-btn text-end">
                  <button
                    type="submit"
                    className="outline-none border-0 bg-transprent"
                  >
                    <Link
                      // to={`/checkout?doctor=${DOCTOR._id}&date=${NEWDATE}&time=${TIME}`}
                      to={user ? `/checkout?doctor=${DOCTOR._id}&date=${NEWDATE}&time=${TIME}`:`/login`}
                      
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
