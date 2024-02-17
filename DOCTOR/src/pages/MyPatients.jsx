import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AcceptedListAppoinment } from "../features/appoinment/appoinmentSlice";

const MyPatients = () => {
  const { user } = useSelector((state) => state.auth);
  const ID = user?.DRdata?._id;

  const dispatch = useDispatch();
  useEffect(() => {
    const data = { accpted: true, ID: ID };

    dispatch(AcceptedListAppoinment(data));
  }, []);
  const { accepted } = useSelector((state) => state.appoinment);

  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"My Patients  "} heading={"My Patients "} />

        <div className="content ">
          {accepted?.length === 0 ? (
            <div className="row justify-content-center ">No data available</div>
          ) : (
            <div className="container">
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row row-grid">
                  {accepted?.length === 0 ? (
                    <div className="row justify-content-center px-5 py-3">
                      no data available
                    </div>
                  ) : (
                    accepted?.map((el) => {
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
                    })
                  )}

                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPatients;
