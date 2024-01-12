import { Link } from "react-router-dom";
import BreadCrum from "../../components/BreadCrum";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDoctors, resetState } from "../../features/doctor/doctorSlice";
import { baseUrl } from "../../utils/baseUrl";
import { getPatients } from "../../features/patient/patientSlice";
import { useFormik } from "formik";
import axios from "axios";
const key = import.meta.env.TEST_ID;

import LOGO from "../../assets/images/P2CARE.png";
const CheckOut = () => {
  const data = location.search.split("?")[1];
  const date = data.split("&")[1].split("=")[1];
  const time = data.split("&")[2].split("=")[1];
  const doctorID = data.split("&")[0].split("=")[1];
  // console.log(date);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDoctors());
    dispatch(resetState());
    dispatch(getPatients());
  }, []);

  const DoctorState = useSelector((state) => state?.doctor?.allDoctors);
  const USERState = useSelector((state) => state.auth?.user?.data?.user);
  console.log(USERState);
  const DOC = DoctorState?.filter((e) => {
    return e?._id === doctorID;
  });

  console.log(DOC);
  const DOCTOR = DOC[0];

  console.log(DOCTOR);
  console.log(USERState);

  const formik = useFormik({
    initialValues: {
      doctor: DOCTOR?._id,
      date: date,
      time: time,
      user: USERState?._id,
      name: USERState?.Name,
      email: USERState?.Email,
      gender: "",
      transactionid:'',
      // Amount: DOCTOR?.price,
    },
    // validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      // dispatch(login(values));
    },
  });




// razorpay
    const checkoutHandler = async (amount) => {
      const {
        data: { order },
      } = await axios.post(`${baseUrl}payment/checkout`, {
        amount,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "P2CARE",
        description: "short description of p2care",
        image: LOGO,
        order_id: order.id,
        callback_url: `${baseUrl}payment/paymentverification`,
        prefill: {
          name: USERState?.Name,
          email: USERState?.Email,
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#09e5ab",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    };



  return (
    <div>
      <div className="main-wrapper">
        <BreadCrum location={"Checkout "} heading={"Checkout"} />

        {/* <!-- Page Content --> */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="card">
                  <div className="card-body">
                    {/* <!-- Checkout Form --> */}
                    <form onSubmit={formik.handleSubmit}>
                      {/* <!-- Personal Information --> */}
                      <div className="info-widget">
                        <h4 className="card-title">Personal Information</h4>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">First Name</label>
                              <input
                                className="form-control"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange("name")}
                                type="text"
                              />
                            </div>
                          </div>
                          {/* <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Last Name</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div> */}
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Email</label>
                              <input
                                className="form-control"
                                value={formik.values.email}
                                onChange={formik.handleChange("email")}
                                type="email"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Gender : </label>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="inlineRadio1"
                                  value="Male"
                                  onChange={formik.handleChange("gender")}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio1"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="inlineRadio2"
                                  onChange={formik.handleChange("gender")}
                                  value="Female"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio2"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* <div className="col-md-6 col-sm-12">
                            <div className="mb-3 card-label">
                              <label className="mb-2">Phone</label>
                              <input className="form-control" type="text" />
                            </div>
                          </div> */}
                        </div>
                        <div className="exist-customer">
                          Existing Customer?{" "}
                          <Link to="login">Click here to login</Link>
                        </div>
                      </div>
                      {/* <!-- /Personal Information --> */}

                      <div className="payment-widget">
                        <h4 className="card-title">Payment Method</h4>

                        {/* <!-- Credit Card Payment --> */}
                        {/* <div className="payment-list">
                          <label className="payment-radio credit-card-option">
                            <input type="radio" name="radio" checked />
                            <span className="checkmark"></span>
                            Credit card
                          </label>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3 card-label">
                                <label htmlFor="card_name">Name on Card</label>
                                <input
                                  className="form-control"
                                  id="card_name"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 card-label">
                                <label htmlFor="card_number">Card Number</label>
                                <input
                                  className="form-control"
                                  id="card_number"
                                  placeholder="1234 5678 9876 5432"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 card-label">
                                <label htmlFor="expiry_month">Expiry Month</label>
                                <input
                                  className="form-control"
                                  id="expiry_month"
                                  placeholder="MM"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 card-label">
                                <label htmlFor="expiry_year">Expiry Year</label>
                                <input
                                  className="form-control"
                                  id="expiry_year"
                                  placeholder="YY"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 card-label">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                  className="form-control"
                                  id="cvv"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="payment-list gap-2 ">
                          <label className="payment-radio paypal-option ">
                            <input type="radio" name="radio" className="mx-2" />
                            <span className="checkmark"></span>
                            Razerpay
                          </label>
                        </div>
                        {/* <!-- /Paypal Payment --> */}

                        {/* <!-- Terms Accept --> */}
                        <div className="terms-accept">
                          <div className="custom-checkbox">
                            <input type="checkbox" id="terms_accept" />
                            <label htmlFor="terms_accept">
                              I have read and accept{" "}
                              <a href="terms-condition.html">
                                Terms &amp; Conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        {/* <!-- /Terms Accept --> */}

                        {/* <!-- Submit Section --> */}
                        <div className="submit-section mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            onClick={() => checkoutHandler(DOCTOR.price)}
                          >
                            Confirm and Pay
                          </button>
                        </div>
                        {/* <!-- /Submit Section --> */}
                      </div>
                    </form>
                    {/* <!-- /Checkout Form --> */}
                  </div>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 theiaStickySidebar">
                {/* <!-- Booking Summary --> */}
                <div className="card booking-card">
                  <div className="card-header">
                    <h4 className="card-title">Booking Summary</h4>
                  </div>
                  <div className="card-body">
                    {/* <!-- Booking Doctor Info --> */}
                    <div className="booking-doc-info">
                      <a href="doctor-profile.html" className="booking-doc-img">
                        <img
                          src={`${baseUrl}doctor/${DOCTOR?.image}`}
                          alt="User Image"
                        />
                      </a>
                      <div className="booking-info">
                        <h4>
                          <a href="doctor-profile.html">{DOCTOR.doctorName}</a>
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
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {DOCTOR.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Booking Doctor Info --> */}

                    <div className="booking-summary">
                      <div className="booking-item-wrap">
                        <ul className="booking-date">
                          <li>
                            Date :<span> {date}</span>
                          </li>
                          <li>
                            Time :<span> {time}</span>
                          </li>
                        </ul>
                        <ul className="booking-fee">
                          <li>
                            Consulting Fee <span>{DOCTOR?.price}</span>
                          </li>
                          {/* <li>
                            Booking Fee <span>$10</span>
                          </li>
                          <li>
                            Video Call <span>$50</span>
                          </li> */}
                        </ul>
                        <div className="booking-total">
                          <ul className="booking-total-list">
                            <li>
                              <span>Total</span>
                              <span className="total-cost">
                                {DOCTOR?.price}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Booking Summary --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Page Content --> */}
      </div>
    </div>
  );
};

export default CheckOut;
