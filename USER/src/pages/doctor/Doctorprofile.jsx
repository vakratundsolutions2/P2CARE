import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getADoctor,
  resetState,
  reviewDoctor,
} from "../../features/doctor/doctorSlice";
import { baseUrl } from "../../utils/baseUrl";
import { Rate, message } from "antd";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import relativeTime from "dayjs/plugin/relativeTime";
import * as yup from "yup";
import { FaUser } from "react-icons/fa";
let schema = yup.object().shape({
  // postedby: yup
  //   .string()

  //   .required("Login Required"),
  // doctorID: yup.string().required("Doctor is Required"),
  comment: yup.string().max(100),
});

function Doctorprofile() {
  dayjs.extend(relativeTime);
  const ID = location.pathname.split("/")[2];
  const [activeTab, setActiveTab] = useState("doc_overview");

  const dispatch = useDispatch();

  useEffect(() => {
    if (ID !== undefined) {
      dispatch(getADoctor(ID));
    } else {
      dispatch(resetState());
    }
  }, [ID]);

  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  const DoctorState = useSelector((state) => state?.doctor);
  const { SingleData, rating, isSuccess } = DoctorState;
  const user = useSelector((state) => state.auth?.user);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const DOCTOR = SingleData;

  const formik = useFormik({
    initialValues: {
      star: 3,
      comment: "",
      postedby: user?._id,
      doctorID: ID,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(reviewDoctor(values));
      setTimeout(() => {
        dispatch(getADoctor(ID));
        dispatch(resetState());
      }, 600);
    },
  });

  console.log("doctor", DOCTOR);
  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={`Doctor Profile`} heading={"Doctor Profile"} />

        <div className="content">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src={`${baseUrl}doctor/${DOCTOR?.image}`}
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">DR. {DOCTOR?.doctorName}</h4>
                      <p className="doc-speciality">
                        {DOCTOR?.educationInfo[0]}
                      </p>
                      <p className="doc-department ">
                        {/* <img
                          src="/src/assets/img/specialities/specialities-05.png"
                          className="img-fluid "
                          alt="Speciality"
                        /> */}
                        {DOCTOR?.specialities}{" "}
                      </p>
                      <div className="rating gap-2 d-flex rating-1 ">
                        <Rate disabled value={DOCTOR?.totalratings} />
                        <span className="d-inline-block average-rating">
                          ({DOCTOR?.ratings?.length})
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {DOCTOR?.location} - <Link to="">Get Directions</Link>
                        </p>
                      </div>
                      {/* <div className="clinic-services">
                        <span>Dental Fillings</span>
                        <span>Teeth Whitneing</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          {/* <i className="far fa-thumbs-up"></i> 99% */}
                        </li>
                        <li>
                          <i className="far fa-comment"></i>{" "}
                          {DOCTOR?.ratings?.length} Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          {DOCTOR?.location}
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> &#x20B9;{" "}
                          {DOCTOR?.price} hour{" "}
                        </li>
                      </ul>
                    </div>
                    {/* <div className="doctor-action">
                      <Link className="btn btn-white fav-btn">
                        <i className="far fa-bookmark"></i>
                      </Link>
                      <Link to="#" className="btn btn-white msg-btn">
                        <i className="far fa-comment-alt"></i>
                      </Link>
                      <Link
                        className="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="fas fa-phone"></i>
                      </Link>
                      <Link
                        className="btn btn-white call-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <i className="fas fa-video"></i>
                      </Link>
                    </div> */}
                    <div className="clinic-booking">
                      <Link
                        className="apt-btn"
                        to={`/bookappointment/${DOCTOR?._id}`}
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body pt-0">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          activeTab === "doc_overview" ? "active" : ""
                        }`}
                        to="#doc_overview"
                        onClick={() => handleTabClick("doc_overview")}
                      >
                        Overview
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          activeTab === "doc_locations" ? "active" : ""
                        }`}
                        to="#doc_locations"
                        onClick={() => handleTabClick("doc_locations")}
                      >
                        Hospitals ({DOCTOR?.assign?.length})
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${
                          activeTab === "doc_reviews" ? "active" : ""
                        }`}
                        to="#doc_reviews"
                        onClick={() => handleTabClick("doc_reviews")}
                      >
                        Reviews
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="tab-content pt-0">
                  <div
                    role="tabpanel"
                    id="doc_overview"
                    className={`tab-pane fade ${
                      activeTab === "doc_overview" ? "show active" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-md-12 col-lg-9">
                        <div className="widget about-widget">
                          <h4 className="widget-title">About Me</h4>
                          <p
                            className="px-4"
                            dangerouslySetInnerHTML={{
                              __html: DOCTOR?.description,
                            }}
                          ></p>
                        </div>

                        <div className="widget education-widget">
                          <h4 className="widget-title">Education</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              {DOCTOR?.educationInfo?.map((e, i) => {
                                console.log(e);
                                return (
                                  <>
                                    <li key={i}>
                                      <div className="experience-user">
                                        <div className="before-circle"></div>
                                      </div>
                                      <div className="experience-content">
                                        <div className="timeline-content">
                                          <a className="name">{e}</a>
                                        </div>
                                      </div>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </div>

                        <div className="widget experience-widget">
                          <h4 className="widget-title">Work & Experience</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              {DOCTOR?.experienceInfo.map((e, i) => {
                                return (
                                  <>
                                    <li key={i}>
                                      <div className="experience-user">
                                        <div className="before-circle"></div>
                                      </div>
                                      <div className="experience-content">
                                        <div className="timeline-content">
                                          <Link className="name">{e} </Link>
                                        </div>
                                      </div>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </div>

                        <div className="widget awards-widget">
                          <h4 className="widget-title">Awards</h4>
                          <div className="experience-box">
                            <ul className="experience-list">
                              {DOCTOR?.awardAndAchivementsInfo?.map((e, i) => {
                                return (
                                  <>
                                    <li key={i}>
                                      <div className="experience-user">
                                        <div className="before-circle"></div>
                                      </div>
                                      <div className="experience-content">
                                        <div className="timeline-content">
                                          {/* <p className="exp-year">July 2023</p> */}
                                          <h4 className="exp-title">{e} </h4>
                                          {/* <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Proin
                                          Link ipsum tellus. Interdum et
                                          malesuadLink fames ac ante ipsum
                                          primis in faucibus.
                                        </p> */}
                                        </div>
                                      </div>
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </div>
                        </div>

                        <div className="service-list">
                          <h4>Services</h4>
                          <ul className="clearfix">
                            {DOCTOR?.experties?.map((e, i) => {
                              return (
                                <>
                                  <li key={i}>{e}</li>
                                </>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="service-list">
                          <h4>Specializations</h4>
                          <ul className="clearfix">
                            <li>{DOCTOR?.specialities}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_locations"
                    className={`tab-pane fade ${
                      activeTab === "doc_locations" ? "show active" : ""
                    }`}
                  >
                    {DOCTOR?.assign?.map((e, i) => {
                      return (
                        <>
                          <div className="location-list" key={i}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="clinic-content">
                                  <div className="doctor-img my-3">
                                    <img
                                      src={`${baseUrl}hospital/${e?.hospitals?.hospitallogo}`}
                                      className="img-fluid"
                                      alt="User Image"
                                    />
                                  </div>
                                  <h4 className="clinic-name">
                                    <Link
                                      to={`/hospital-profile/${e?.hospitals?._id}`}
                                    >
                                      {e?.hospitals.hospitalname}
                                    </Link>
                                  </h4>
                                  <p className="doc-speciality">
                                    {e?.hospitals.service}
                                  </p>
                                  <div className="rating">
                                    <Rate
                                      style={{ color: "#f2b600" }}
                                      disabled
                                      value={e.hospitals.totalratings}
                                    />
                                    <span className="d-inline-block average-rating">
                                      ({e?.hospitals?.ratings?.length})
                                    </span>
                                  </div>
                                  <div className="clinic-details mb-0">
                                    <h5 className="clinic-direction">
                                      {" "}
                                      <i className="fas fa-map-marker-alt"></i>{" "}
                                      {e?.hospitals?.hospitaladdress} <br />
                                      <Link to="">Get Directions</Link>
                                    </h5>

                                    <ul>
                                      {e?.hospitals?.category?.map((el, i) => (
                                        <>
                                          <li key={i}>
                                            <button className="btn-sm btn btn-primary">
                                              {el}
                                            </button>
                                          </li>
                                        </>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-4">
                                <div className="clinic-timing">
                                  <div>
                                    <p className="timings-days">
                                      <span> Mon - Sun </span>
                                    </p>
                                    <p className="timings-times">
                                      <span>
                                        {e.hospitals.openingtime} -{" "}
                                        {e.hospitals.closingtime}
                                      </span>
                                      {/* <span>4:00 PM - 9:00 PM</span> */}
                                    </p>
                                  </div>

                                  {/* <div>
                                    <p className="timings-days">
                                      <span>Sun</span>
                                    </p>
                                    <p className="timings-times">
                                      <span>10:00 AM - 2:00 PM</span>
                                    </p>
                                  </div>
                                   */}
                                </div>
                              </div>

                              <div className="col-md-2">
                                <div className="consult-price">
                                  &#x20B9; {e?.amount}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div
                    role="tabpanel"
                    id="doc_reviews"
                    className={`tab-pane fade ${
                      activeTab === "doc_reviews" ? "show active" : ""
                    }`}
                  >
                    <div className="widget review-listing">
                      <ul className="comments-list">
                        <li>
                          {DOCTOR?.ratings?.map((e, i) => {
                            const dt = e.date;
                            const comentTime = dayjs(dt).fromNow();

                            return (
                              <>
                                <div className="comment" key={i}>
                                  <div className="d-flex w-25 flex-column">
                                    {e?.postedby?.Profile ? (
                                      <>
                                        <img
                                          className="avatar avatar-sm rounded-circle"
                                          alt={e?.postedby?.Profile}
                                          src={`${baseUrl}user/${e?.postedby?.Profile}`}
                                        />
                                      </>
                                    ) : (
                                      <>
                                        {" "}
                                        <FaUser className="fs-4 rounded-circle" />
                                      </>
                                    )}

                                    <span className="review-count rating d-flex rating-1 ">
                                      <Rate
                                        style={{ color: "#f2b600" }}
                                        disabled
                                        value={e.star}
                                      />
                                    </span>
                                  </div>

                                  <div className="comment-body">
                                    <div className="meta-data">
                                      <span className="comment-author">
                                        {e?.postedby?.Username}
                                      </span>
                                      <span className="comment-date">
                                        {comentTime}
                                      </span>
                                    </div>
                                    {/* <p className="recommended">
                                      <i className="far fa-thumbs-up"></i> I
                                      recommend the doctor
                                    </p> */}
                                    <p className="comment-content ">
                                      {e?.comment}
                                    </p>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </li>
                      </ul>

                      <div className="all-feedback text-center">
                        <Link to="#" className="btn btn-primary btn-sm">
                          Show all feedback{" "}
                          <strong>({DOCTOR?.ratings?.length})</strong>
                        </Link>
                      </div>
                    </div>

                    <div className="write-review">
                      <h4>
                        Write Link review for{" "}
                        <strong>Dr. {DOCTOR?.doctorName}</strong>
                      </h4>

                      <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                          <label className="mb-2">Rate</label>
                          <div className="star-rating ">
                            <Rate
                              style={{ color: "#f2b600" }}
                              character={({ index = 0 }) =>
                                customIcons[index + 1]
                              }
                              disabled={user ? false : true}
                              name="star"
                              onChange={(e) => formik.setFieldValue("star", e)}
                              defaultValue={formik.values.star}
                            />
                          </div>
                        </div>
                        <div className="mb-3 ">
                          <label className="mb-2">Write Your review</label>
                          <textarea
                            id="review_desc"
                            maxLength="100"
                            className="form-control"
                            type="text"
                            label="review "
                            name="comment"
                            disabled={user ? false : true}
                            onChange={formik.handleChange("comment")}
                            value={formik.values.comment}
                          ></textarea>
                          <div className="text-danger">
                            {formik.touched.comment && formik.errors.comment}
                          </div>
                          <div className="d-flex justify-content-between mt-3"></div>
                        </div>
                        <div className="mb-3">
                          <div className="terms-accept">
                            <div className="custom-checkbox"></div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button
                            type="submit"
                            // disabled={user ? false : true}
                            className="btn btn-primary submit-btn"
                          >
                            <Link to={user ? "" : "/login"}>
                              {user ? "Add Review" : "Login to Review"}
                            </Link>
                          </button>
                        </div>
                      </form>
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
}

export default Doctorprofile;
