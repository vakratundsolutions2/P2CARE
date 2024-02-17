import { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as yup from "yup";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import noResult from "../assets/images/download.svg";

let schema = yup.object().shape({
  DATE: yup
    .date()
    // .email("Email should be valid")
    .required("Required"),
});
const AvailableTime = () => {
  const [availableSchedule, setavailableSchedule] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const ID = user?.DRdata?._id;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      DATE: "",
      ID: ID,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      axios
        .get(`${baseUrl}available/searchdoctortime/${ID}?date=${values?.DATE}`)
        .then((res) => {
          console.log(res.data);
          setavailableSchedule(
            res.data.responseData.bookingavailabilityInformation[0]?.bookingtime
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <div className="main-wrapper">
        <BreadCrum
          location={"Available Timings  "}
          heading={"Available Timings"}
        />

        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Schedule Timings</h4>
                <div className="profile-box">
                  <div className="row">
                    <div className="col-sm-6 col-12 avail-time">
                      <div className="mb-3">
                        <div className="schedule-calendar-col justify-content-start">
                          <form
                            className="d-flex"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="me-3 d-flex">
                              <span className="input-group-text me-3">
                                Date:
                              </span>
                              <input
                                type="date"
                                className="form-control"
                                name="schedule_date"
                                id="schedule_date"
                                value={formik.values.DATE}
                                onChange={formik.handleChange("DATE")}
                              />
                            </div>

                            <div className="text-danger">
                              {formik.touched.Email && formik.errors.Email}
                            </div>
                            <div className="search-time-mobile">
                              <input
                                type="submit"
                                name="submit"
                                value="Search"
                                className="btn btn-primary h-100"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="token-slot m-5 gap-3 d-flex">
                        {availableSchedule?.length === 0 ? (
                          <div className="d-flex flex-column justify-content-center  ">
                            <div className=" mb-3 m-auto">
                              <img
                                src={noResult}
                                alt="No Slots Available"
                                className="imf-fluid"
                              />
                            </div>
                            No Slots available
                          </div>
                        ) : (
                          availableSchedule?.map((el, i) => {
                            console.log(i);
                            return (
                              <>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      value="18"
                                    />
                                    <span
                                      className="visit-rsn"
                                      data-bs-toggle="tooltip"
                                      title="02:40 PM"
                                    >
                                      {el}
                                    </span>
                                  </label>
                                </div>
                              </>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableTime;
