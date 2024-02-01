import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AcceptedListAppoinment } from "../features/appoinment/appoinmentSlice";

const MyPatients = () => {
  const { user } = useSelector((state) => state.auth);
  const ID = user?.DRdata?._id;


  const dispatch = useDispatch()
  useEffect(() => { 
   const  data = {accpted:true,ID:ID}
 
    dispatch(AcceptedListAppoinment(data));

  }, [])
    const {  accepted } = useSelector((state) => state.appoinment);



  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"My Patients  "} heading={"My Patients "} />

        <div className="content ">
          <div className="container">
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row row-grid">
                {accepted?.map((el)=>{
                  return (
                    <>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="card widget-profile pat-widget-profile">
                          <div className="card-body">
                            <div className="pro-widget-content">
                              <div className="profile-info-widget">
                                {/* <Link
                                  to="patient-profile.html"
                                  className="booking-doc-img"
                                >
                                  <img src={} alt="User Image" />
                                </Link> */}
                                <div className="profile-det-info pt-2">
                                  <h3>
                                    <Link to="/doctor/patient-profile">
                                      {el?.name}
                                    </Link>
                                  </h3>

                                  <div className="patient-details">
                                    {/* <h5>
                                      <b>Patient ID :</b> P0016
                                    </h5> */}
                                    {/* <h5 className="mb-0">
                                      <i className="fas fa-map-marker-alt"></i>{" "}
                                      Alabama, USA
                                    </h5> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="patient-info">
                              <ul>
                                <li>
                                  Phone <span>{el?.user?.phoneNumber}</span>
                                </li>
                                <li>
                                  Email <span>{el?.email}</span>
                                </li>
                                <li>
                                  Gender <span>{el?.gender}</span>
                                </li>
                                <li>
                                  Disease <span>{el?.category}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
               
{/* 
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <Link to="#" className="booking-doc-img">
                            <img
                              src="/src/assets/img/patients/patient9.jpg"
                              alt="User Image"
                            />
                          </Link>
                          <div className="profile-det-info">
                            <h3>
                              <Link to="/doctor/patient-profile">
                                Walter Roberson
                              </Link>
                            </h3>
                            <div className="patient-details">
                              <h5>
                                <b>Patient ID :</b> PT0009
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                Florida, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="patient-info">
                        <ul>
                          <li>
                            Phone <span>+1 850 358 4445</span>
                          </li>
                          <li>
                            Age <span>28 Years, Male</span>
                          </li>
                          <li>
                            Blood Group <span>A+</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <Link to="#" className="booking-doc-img">
                            <img
                              src="/src/assets/img/patients/patient10.jpg"
                              alt="User Image"
                            />
                          </Link>
                          <div className="profile-det-info">
                            <h3>
                              <Link to="/doctor/patient-profile">
                                Robert Rhodes
                              </Link>
                            </h3>
                            <div className="patient-details">
                              <h5>
                                <b>Patient ID :</b> PT0010
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt"></i>
                                California, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="patient-info">
                        <ul>
                          <li>
                            Phone <span>+1 858 259 5285</span>
                          </li>
                          <li>
                            Age <span>19 Years, Male</span>
                          </li>
                          <li>
                            Blood Group <span>B+</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <Link to="#" className="booking-doc-img">
                            <img
                              src="/src/assets/img/patients/patient11.jpg"
                              alt="User Image"
                            />
                          </Link>
                          <div className="profile-det-info">
                            <h3>
                              <Link to="/doctor/patient-profile">
                                Harry Williams
                              </Link>
                            </h3>
                            <div className="patient-details">
                              <h5>
                                <b>Patient ID :</b> PT0011
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                Colorado, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="patient-info">
                        <ul>
                          <li>
                            Phone <span>+1 303 607 7075</span>
                          </li>
                          <li>
                            Age <span>9 Years, Male</span>
                          </li>
                          <li>
                            Blood Group <span>A-</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPatients;
