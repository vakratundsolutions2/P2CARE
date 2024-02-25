import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  RatingHospital,
  getAHospital,
  resetState,
} from "../../features/hospital/hospitalSlice";
import { baseUrl } from "../../utils/baseUrl";
import { Rate } from "antd";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import relativeTime from "dayjs/plugin/relativeTime";
import * as yup from "yup";
import { FaUser } from "react-icons/fa";
import Seo from "../../components/seo/Seo";
let schema = yup.object().shape({
  // postedby: yup
  //   .string()
  //   .required("Login Required"),
  // doctorID: yup.string().required("Doctor is Required"),
  comment: yup.string().max(100),
});

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

function Hospitalprofile() {
  dayjs.extend(relativeTime);
  const hospitalId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("doc_overview");

  useEffect(() => {
    if (hospitalId !== undefined || "") {
      // dispatch(resetState());
      dispatch(getAHospital(hospitalId));
    } else {
      dispatch(resetState());
    }
  }, [hospitalId, dispatch]);

  const hospitalState = useSelector((state) => state.hospital);
  const { SingleData } = hospitalState;
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  console.log(SingleData);
  const user = useSelector((state) => state.auth?.user);
  const formik = useFormik({
    initialValues: {
      star: 3,
      comment: "",
      postedby: user?._id,
      hospitalID: hospitalId,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(RatingHospital(values));
      setTimeout(() => {
        dispatch(getAHospital(hospitalId));
        dispatch(resetState());
      }, 600);
    },
  });

  return (
    <>
      <Seo metaTitle={`${SingleData?.hospitalname} - P2CARE`} />

      <div className="main-wrapper">
        <BreadCrum location={"Hospital "} heading={"Hospital "} />
      </div>

      <div className="content">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <img
                      src={`${baseUrl}hospital/${SingleData?.hospitallogo}`}
                      className="img-fluid"
                      alt="User Image"
                    />
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">{SingleData?.hospitalname}</h4>
                    <p className="doc-speciality">
                      BDS, MDS - Oral & Maxillofacial Surgery
                    </p>

                    <div className="rating">
                      <Rate
                        // style={{ color: "#f2b600" }}
                        disabled
                        value={SingleData?.totalratings}
                      />
                      <span className="d-inline-block average-rating">
                        ({SingleData?.ratings?.length})
                      </span>
                    </div>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {SingleData?.hospitaladdress}
                        <Link>Get Directions</Link>
                      </p>
                      <ul className="clinic-gallery">
                        {SingleData?.category?.map((el, i) => {
                          return (
                            <>
                              <li key={i}>
                                <button className="btn-sm btn btn-primary">
                                  {el}
                                </button>
                              </li>
                            </>
                          );
                        })}
                      </ul>
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
                        <i className="far fa-comment"></i>
                        {SingleData?.ratings?.length} Feedback
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        {SingleData?.hospitaladdress}
                      </li>
                    </ul>
                  </div>
                  {/* <div className="doctor-action">
                    <Link
                      to="#"
                      className="btn btn-white fav-btn"
                    >
                      <i className="far fa-bookmark"></i>
                    </Link>
                    <Link to="chat" className="btn btn-white msg-btn">
                      <i className="far fa-comment-alt"></i>
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-white call-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                    >
                      <i className="fas fa-phone"></i>
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-white call-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#video_call"
                    >
                      <i className="fas fa-video"></i>
                    </Link>
                  </div> */}
                  <div className="clinic-booking">
                    <Link className="apt-btn">Book hospital visit</Link>
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
                      Doctors ({SingleData?.assign?.length})
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
                        <h4 className="widget-title">About Hospital</h4>
                        <p
                          className="px-4"
                          dangerouslySetInnerHTML={{
                            __html: SingleData?.description,
                          }}
                        ></p>
                      </div>

                      {/* <div className="widget awards-widget">
                        <h4 className="widget-title">Awards</h4>
                        <div className="experience-box">
                          <ul className="experience-list">
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">July 2023</p>
                                  <h4 className="exp-title">
                                    Humanitarian Award
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin Link ipsum tellus.
                                    Interdum et malesuadLink fames ac ante ipsum
                                    primis in faucibus.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">March 2011</p>
                                  <h4 className="exp-title">
                                    Certificate for International Volunteer
                                    Service
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin Link ipsum tellus.
                                    Interdum et malesuadLink fames ac ante ipsum
                                    primis in faucibus.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="experience-user">
                                <div className="before-circle"></div>
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">May 2008</p>
                                  <h4 className="exp-title">
                                    The Dental Professional of The Year Award
                                  </h4>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin Link ipsum tellus.
                                    Interdum et malesuadLink fames ac ante ipsum
                                    primis in faucibus.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="service-list">
                        <h4>Services</h4>
                        <ul className="clearfix">
                          <li>Tooth cleaning </li>
                          <li>Root Canal Therapy</li>
                          <li>Implants</li>
                          <li>Composite Bonding</li>
                          <li>Fissure Sealants</li>
                          <li>Surgical Extractions</li>
                        </ul>
                      </div>

                      <div className="service-list">
                        <h4>Specializations</h4>
                        <ul className="clearfix">
                          <li>Children Care</li>
                          <li>Dental Care</li>
                          <li>Oral and Maxillofacial Surgery </li>
                          <li>Orthodontist</li>
                          <li>Periodontist</li>
                          <li>Prosthodontics</li>
                        </ul>
                      </div> */}
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
                  {SingleData?.assign.map((e, i) => {
                    console.log(e);
                    return (
                      <>
                        <div className="location-list " key={i}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="clinic-content">
                                <div className="doctor-img my-3">
                                  <img
                                    src={`${baseUrl}doctor/${e?.doctor?.image}`}
                                    className="img-fluid"
                                    alt="Doctor Image"
                                  />
                                </div>
                                <h4 className="clinic-name">
                                  <Link
                                    to={`/doctor-profile/${e?.doctor?._id}`}
                                  >
                                    {e?.doctor?.doctorName}
                                  </Link>
                                </h4>
                                <p className="doc-speciality">
                                  {e?.doctor.educationInfo}
                                </p>
                                <div className="rating">
                                  <Rate
                                    style={{ color: "#f2b600" }}
                                    disabled
                                    value={e.doctor?.totalratings}
                                  />
                                  <span className="d-inline-block average-rating">
                                    ({e?.doctor?.ratings?.length})
                                  </span>
                                </div>
                                <div className="clinic-details mb-0">
                                  <h5 className="clinic-direction">
                                    {" "}
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    {e.doctor.location}
                                    <br />
                                    <Link>Get Directions</Link>
                                  </h5>
                                  <ul>
                                    {e?.doctor?.experties?.map((el, i) => {
                                      return (
                                        <>
                                          <li key={i}>
                                            <button className="btn-sm btn btn-primary">
                                              {el}
                                            </button>
                                          </li>
                                        </>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-2">
                              <div className="consult-price">
                                {" "}
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
                        {SingleData?.ratings?.map((e, i) => {
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

                                  <span className="review-count rating">
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
                                  <p className="comment-content">
                                    {e?.comment}
                                  </p>
                                  <div className="comment-reply">
                                    <Link className="comment-btn" to="#">
                                      <i className="fas fa-reply"></i> Reply
                                    </Link>
                                    {/* <p className="recommend-btn">
                                        <span>Recommend?</span>
                                        <Link to="#" className="like-btn">
                                          <i className="far fa-thumbs-up"></i>{" "}
                                          Yes
                                        </Link>
                                        <Link to="#" className="dislike-btn">
                                          <i className="far fa-thumbs-down"></i>{" "}
                                          No
                                        </Link>
                                      </p> */}
                                  </div>
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
                        <strong>({SingleData?.ratings?.length})</strong>
                      </Link>
                    </div>
                  </div>

                  <div className="write-review">
                    <h4>
                      Write review for{" "}
                      <strong> {SingleData?.hospitalname}</strong>
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
    </>
  );
}

export default Hospitalprofile;
