import { useDispatch, useSelector } from "react-redux";
import BreadCrum from "../../components/BreadCrum";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { BookingDetails } from "../../features/doctor/doctorSlice";
import Seo from "../../components/seo/Seo";
import dayjs from "dayjs";

const BookingComplete = () => {
  const [paymentId, setPaymentId] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BookingDetails(paymentId.get("reference")));
  });
  const bookingDetails = useSelector((state) => state?.doctor?.BOOKSTATE);
  const doctorsDetails = useSelector((state) => state?.doctor?.DoctorsDetails);

  // var date = new Date(bookingDetails.date);
  // const month = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "Jun",
  //   "Jul",
  //   "Aug",
  //   "Sep",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];

  return (
    <>
      <Seo metaTitle={"Book Appoinment - P2CARE"} />

      <div className="main-wrapper">
        <BreadCrum location={"Booking"} heading={"Booking"} />

        {/* <!-- Page Content --> */}
        <div className="content success-page-cont">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                {/* <!-- Success Card --> */}
                <div className="card success-card">
                  <div className="card-body">
                    <div className="success-cont">
                      <i className="fas fa-check"></i>
                      <h3>Appointment booked Successfully!</h3>
                      {doctorsDetails && (
                        <p>
                          Appointment booked with{" "}
                          <strong>Dr. {doctorsDetails.doctorName}</strong>
                          <br /> on{" "}
                          <strong>
                            {dayjs(bookingDetails?.date).format("DD mmm YY")} at
                            {bookingDetails.time}
                          </strong>
                        </p>
                      )}
                      <p>
                        Appointment booked with{" "}
                        <strong>Dr. {doctorsDetails.doctorName}</strong>
                        <br /> on{" "}
                        <strong>
                          {/* {date.getDate(bookingDetails.date).format("DD mmm YY")}{" "} */}
                          {bookingDetails.time}
                        </strong>
                      </p>
                      <button className="btn btn-primary view-inv-btn">
                        View Invoice
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- /Success Card --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Page Content --> */}
      </div>
    </>
  );
};

export default BookingComplete;
