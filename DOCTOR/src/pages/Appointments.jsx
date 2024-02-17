import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect, useState } from "react";
import {
  AcceptAppoinment,
  AcceptedListAppoinment,
  GetAllAppoinments,
  GetAppoinment,
  ResetState,
  UpdateAppoinment,
} from "../features/appoinment/appoinmentSlice";
import dayjs from "dayjs";
import { Modal } from "antd";
import { useFormik } from "formik";
import { GetAlvailablity } from "../features/availablity/availablitySlice";
import { baseUrl } from "../utils/baseUrl";

const Appointments = () => {
  const { user } = useSelector((state) => state.auth);
  const ID = user?.DRdata?._id;
  const dispatch = useDispatch();
  useEffect(() => {
    const data = { accpted: false, ID: ID };

    dispatch(AcceptedListAppoinment(data));
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [AppoinmentID, setAppoinmentID] = useState("");
  const [DATE, setDATE] = useState(Date.now());
  const [TIME, setTIME] = useState("");

  const showModal = (e) => {
    setAppoinmentID(e);
    setIsModalOpen(true);
  };

  useEffect(() => {
    dispatch(GetAppoinment(AppoinmentID));
  }, [AppoinmentID]);

  const DATA = { DATE, ID };
  useEffect(() => {
    dispatch(GetAlvailablity(DATA));
  }, [DATE]);

  const DATA2 = { id: AppoinmentID, formData: { TIME, DATE } };

  const handleOk = () => {
    dispatch(UpdateAppoinment(DATA2));
    setIsModalOpen(false);
    setTimeout(() => {
      dispatch(ResetState());
      dispatch(GetAllAppoinments(ID));
    }, 300);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { appoinments, appoinment, accepted } = useSelector(
    (state) => state.appoinment
  );
  const { availablity } = useSelector((state) => state.available);

  const formik = useFormik({
    initialValues: {
      date: appoinment?.date,
      time: appoinment?.time,
      doctor: ID,
    },
    enableReinitialize: true,
  });

  const handleAccept = async (e) => {
    console.log(e);
    // e.preventDefault()
    const data = {
      doctor: ID,
      user: e?.userid,
      id: e?.id,
      Accepted: true,
    };
    dispatch(AcceptAppoinment(data));
  };

  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"Appointments  "} heading={"Appointments"} />

        {/* <!-- Page Content --> */}
        <div className="content ">
          {accepted?.length === 0 ? (
            <div className="row justify-content-center ">
              No data available
              {/* <img src="" alt="ff" /> */}
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <div
                  className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"
                  style={{ width: "4%" }}
                ></div>
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="appointments">
                    {accepted?.map((el, i) => {
                      const newDATE = dayjs(el?.date).format("M / D / YYYY");
                      return (
                        <>
                          <div className="appointment-list" key={i}>
                            <div className="profile-info-widget ">
                              <Link
                                // to="/doctor/patient-profile"
                                className="booking-doc-img w-100 h-100 "
                              >
                                <img
                                  src={`${baseUrl}user/${el?.user?.Profile}`}
                                  alt={el?.name}
                                />
                              </Link>
                              <div className="profile-det-info">
                                <h3>
                                  <Link to="/doctor/patient-profile">
                                    {el?.name}
                                  </Link>
                                </h3>
                                <div className="patient-details">
                                  <h5>
                                    <i className="far fa-clock"></i> {newDATE}
                                  </h5>
                                  <h5>
                                    <i className="fas fa-clock"></i> {el?.time}
                                  </h5>
                                  <h5>
                                    <i className="fas fa-envelope"></i>{" "}
                                    <Link
                                      to="/cdn-cgi/l/email-protection"
                                      className="__cf_email__"
                                    >
                                      {el?.email}
                                    </Link>
                                  </h5>
                                  <h5 className="mb-0">
                                    <i className="fas fa-phone"></i>{" "}
                                    {el?.user?.phoneNumber}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="appointment-action">
                              {/* <Link
                              to="#"
                              className="btn btn-sm bg-info-light"
                              data-bs-toggle="modal"
                              data-bs-target="#appt_details"
                            >
                              <i className="far fa-eye"></i> View
                            </Link> */}
                              <Link
                                className="btn btn-sm bg-success-light"
                                onClick={() =>
                                  handleAccept({
                                    id: el?._id,
                                    userid: el.user._id,
                                  })
                                }
                              >
                                <i className="fas fa-check"></i> Accept
                              </Link>
                              <Link
                                className="btn btn-sm bg-danger-light"
                                onClick={() => showModal(el?._id)}
                              >
                                <i className="fas fa-times"></i> Re-Schedule
                              </Link>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <Modal
                    title="Re-Schedule Appointment"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <form
                      className="d-flex flex-column"
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="me-3 d-flex">
                        <span className="input-group-text me-3">Date:</span>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          id="schedule_date"
                          value={DATE}
                          onChange={(e) => setDATE(e.target.value)}
                        />
                      </div>

                      <div className="  m-3 align-items-center d-flex flex-column gap-2">
                        {availablity?.bookingtime?.map((el, i) => {
                          console.log(el);
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
                                    required={true}
                                    className="form-check-input"
                                    id=""
                                    onChange={(e) => {
                                      setTIME(e.target.value);
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
                              </div>{" "}
                            </>
                          );
                        })}
                      </div>

                      <div className="text-danger">
                        {formik.touched.date && formik.errors.date}
                      </div>
                    </form>
                  </Modal>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
};

export default Appointments;
