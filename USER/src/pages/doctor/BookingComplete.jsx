import BreadCrum from "../../components/BreadCrum";

const BookingComplete = () => {
  return (
    <div className="main-wrapper">
      <BreadCrum location={"Booking"}  heading = {'Booking'}/>

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
                    <p>
                      Appointment booked with <strong>Dr. Darren Elder</strong>
                      <br /> on <strong>12 Nov 2023 5:00PM to 6:00PM</strong>
                    </p>
                    <a
                      href="invoice-view.html"
                      className="btn btn-primary view-inv-btn"
                    >
                      View Invoice
                    </a>
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
  );
};

export default BookingComplete;
