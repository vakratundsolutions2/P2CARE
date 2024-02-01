import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";

const PatientProfile = () => {
  return (
    <>
      <div className="main-wrapper">
      <BreadCrum location={"Profile "} heading={'Profile'} />


        {/* <!-- Page Content --> */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                {/* <!-- Profile Widget --> */}
                <div className="card widget-profile pat-widget-profile">
                  <div className="card-body">
                    <div className="pro-widget-content">
                      <div className="profile-info-widget">
                        <Link to="#" className="booking-doc-img">
                          <img
                            src="/src/assets/img/patients/patient.jpg"
                            alt="User Image"
                          />
                        </Link>
                        <div className="profile-det-info">
                          <h3>Richard Wilson</h3>

                          <div className="patient-details">
                            <h5>
                              <b>Patient ID :</b> PT0016
                            </h5>
                            <h5 className="mb-0">
                              <i className="fas fa-map-marker-alt"></i> Newyork,
                              United States
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="patient-info">
                      <ul>
                        <li>
                          Phone <span>+1 952 001 8563</span>
                        </li>
                        <li>
                          Age <span>38 Years, Male</span>
                        </li>
                        <li>
                          Blood Group <span>AB+</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- /Profile Widget --> */}

                {/* <!-- Last Booking --> */}
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Last Booking</h4>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="notify-block align-items-center d-flex">
                        <div className="me-3 flex-shrink-0">
                          <img
                            alt="Image placeholder"
                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                            className="avatar  rounded-circle"
                          />
                        </div>
                        <div className="media-body flex-grow-1">
                          <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                          <span className="d-block text-sm text-muted">
                            Dentist
                          </span>
                          <span className="d-block text-sm text-muted">
                            14 Nov 2023 5.00 PM
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="notify-block align-items-center d-flex">
                        <div className="me-3 flex-shrink-0">
                          <img
                            alt="Image placeholder"
                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                            className="avatar  rounded-circle"
                          />
                        </div>
                        <div className="media-body flex-grow-1">
                          <h5 className="d-block mb-0">Dr. Darren Elder </h5>
                          <span className="d-block text-sm text-muted">
                            Dentist
                          </span>
                          <span className="d-block text-sm text-muted">
                            12 Nov 2023 11.00 AM
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <!-- /Last Booking --> */}
              </div>

              <div className="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                <div className="card">
                  <div className="card-body pt-0">
                    <div className="user-tabs">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#pat_appointments"
                            data-bs-toggle="tab"
                          >
                            Appointments
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#pres"
                            data-bs-toggle="tab"
                          >
                            <span>Prescription</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#medical"
                            data-bs-toggle="tab"
                          >
                            <span className="med-records">Medical Records</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#billing"
                            data-bs-toggle="tab"
                          >
                            <span>Billing</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content">
                      {/* <!-- Appointment Tab --> */}
                      <div
                        id="pat_appointments"
                        className="tab-pane fade show active"
                      >
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Doctor</th>
                                    <th>Appt Date</th>
                                    <th>Booking Date</th>
                                    <th>Amount</th>
                                    <th>Follow Up</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      9 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        7.00 PM
                                      </span>
                                    </td>
                                    <td>8 Nov 2023</td>
                                    <td>$75</td>
                                    <td>11 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="far fa-edit"></i> Edit
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      8 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        9.00 AM
                                      </span>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>$175</td>
                                    <td>10 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-danger-light">
                                        Cancelled
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="far fa-edit"></i> Edit
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      8 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        6.00 PM
                                      </span>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>$450</td>
                                    <td>10 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-success-light">
                                        Confirm
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="far fa-edit"></i> Edit
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      7 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        9.00 PM
                                      </span>
                                    </td>
                                    <td>7 Nov 2023</td>
                                    <td>$275</td>
                                    <td>9 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-info-light">
                                        Completed
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="far fa-clock"></i>{" "}
                                          Reschedule
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      6 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        8.00 PM
                                      </span>
                                    </td>
                                    <td>4 Nov 2023</td>
                                    <td>$600</td>
                                    <td>8 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-info-light">
                                        Completed
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="far fa-clock"></i>{" "}
                                          Reschedule
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      5 Nov 2023{" "}
                                      <span className="d-block text-info">
                                        5.00 PM
                                      </span>
                                    </td>
                                    <td>1 Nov 2023</td>
                                    <td>$100</td>
                                    <td>7 Nov 2023</td>
                                    <td>
                                      <span className="badge rounded-pill bg-info-light">
                                        Completed
                                      </span>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="far fa-clock"></i>{" "}
                                          Reschedule
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Appointment Tab --> */}

                      {/* <!-- Prescription Tab --> */}
                      <div className="tab-pane fade" id="pres">
                        <div>
                          <Link
                            to="add-prescription.html"
                            className="add-new-btn"
                          >
                            Add Prescription
                          </Link>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Date </th>
                                    <th>Name</th>
                                    <th>Created by </th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>14 Nov 2023</td>
                                    <td>Prescription 1</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>13 Nov 2023</td>
                                    <td>Prescription 2</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                        <Link
                                          to="edit-prescription.html"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="fas fa-edit"></i> Edit
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light"
                                        >
                                          <i className="far fa-trash-alt"></i>{" "}
                                          Delete
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>12 Nov 2023</td>
                                    <td>Prescription 3</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>11 Nov 2023</td>
                                    <td>Prescription 4</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>10 Nov 2023</td>
                                    <td>Prescription 5</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>9 Nov 2023</td>
                                    <td>Prescription 6</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>8 Nov 2023</td>
                                    <td>Prescription 7</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>7 Nov 2023</td>
                                    <td>Prescription 8</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>6 Nov 2023</td>
                                    <td>Prescription 9</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5 Nov 2023</td>
                                    <td>Prescription 10</td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Prescription Tab --> */}

                      {/* <!-- Medical Records Tab --> */}
                      <div className="tab-pane fade" id="medical">
                        <div>
                          <Link
                            to="#"
                            className="add-new-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add_medical_records"
                          >
                            Add Medical Records
                          </Link>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Date </th>
                                    <th>Description</th>
                                    <th>Attachment</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0010
                                      </Link>
                                    </td>
                                    <td>14 Nov 2023</td>
                                    <td>Dental Filling</td>
                                    <td>
                                      <Link to="#">dental-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Ruby Perrin <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0009
                                      </Link>
                                    </td>
                                    <td>13 Nov 2023</td>
                                    <td>Teeth Cleaning</td>
                                    <td>
                                      <Link to="#">dental-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                        <Link
                                          to="edit-prescription.html"
                                          className="btn btn-sm bg-success-light"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add_medical_records"
                                        >
                                          <i className="fas fa-edit"></i> Edit
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light"
                                        >
                                          <i className="far fa-trash-alt"></i>{" "}
                                          Delete
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0008
                                      </Link>
                                    </td>
                                    <td>12 Nov 2023</td>
                                    <td>General Checkup</td>
                                    <td>
                                      <Link to="#">cardio-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0007
                                      </Link>
                                    </td>
                                    <td>11 Nov 2023</td>
                                    <td>General Test</td>
                                    <td>
                                      <Link to="#">general-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0006
                                      </Link>
                                    </td>
                                    <td>10 Nov 2023</td>
                                    <td>Eye Test</td>
                                    <td>
                                      <Link to="#">eye-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0005
                                      </Link>
                                    </td>
                                    <td>9 Nov 2023</td>
                                    <td>Leg Pain</td>
                                    <td>
                                      <Link to="#">ortho-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0004
                                      </Link>
                                    </td>
                                    <td>8 Nov 2023</td>
                                    <td>Head pain</td>
                                    <td>
                                      <Link to="#">neuro-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0003
                                      </Link>
                                    </td>
                                    <td>7 Nov 2023</td>
                                    <td>Skin Alergy</td>
                                    <td>
                                      <Link to="#">alergy-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0002
                                      </Link>
                                    </td>
                                    <td>6 Nov 2023</td>
                                    <td>Dental Removing</td>
                                    <td>
                                      <Link to="#">dental-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="javascript:void(0);">
                                        #MR-0001
                                      </Link>
                                    </td>
                                    <td>5 Nov 2023</td>
                                    <td>Dental Filling</td>
                                    <td>
                                      <Link to="#">dental-test.pdf</Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Olga Barlow <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Medical Records Tab --> */}

                      {/* <!-- Billing Tab --> */}
                      <div className="tab-pane" id="billing">
                        <div>
                          <Link className="add-new-btn" to="add-billing.html">
                            Add Billing
                          </Link>
                        </div>
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Invoice No</th>
                                    <th>Doctor</th>
                                    <th>Amount</th>
                                    <th>Paid On</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0010
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-01.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Ruby Perrin <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$450</td>
                                    <td>14 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0009
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-02.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Darren Elder <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$300</td>
                                    <td>13 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                        <Link
                                          to="edit-billing.html"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="fas fa-edit"></i> Edit
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light"
                                        >
                                          <i className="far fa-trash-alt"></i>{" "}
                                          Delete
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0008
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-03.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Deborah Angel{" "}
                                          <span>Cardiology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$150</td>
                                    <td>12 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0007
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-04.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Sofia Brient <span>Urology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$50</td>
                                    <td>11 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0006
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-05.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Marvin Campbell{" "}
                                          <span>Ophthalmology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$600</td>
                                    <td>10 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0005
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-06.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Katharine Berthold{" "}
                                          <span>Orthopaedics</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$200</td>
                                    <td>9 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0004
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-07.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Linda Tobin <span>Neurology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$100</td>
                                    <td>8 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0003
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-08.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Paul Richard{" "}
                                          <span>Dermatology</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$250</td>
                                    <td>7 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0002
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-09.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. John Gibbs <span>Dental</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$175</td>
                                    <td>6 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="invoice-view.html">
                                        #INV-0001
                                      </Link>
                                    </td>
                                    <td>
                                      <h2 className="table-avatar">
                                        <Link
                                          to="doctor-profile.html"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="/src/assets/img/doctors/doctor-thumb-10.jpg"
                                            alt="User Image"
                                          />
                                        </Link>
                                        <Link to="doctor-profile.html">
                                          Dr. Olga Barlow <span>#0010</span>
                                        </Link>
                                      </h2>
                                    </td>
                                    <td>$550</td>
                                    <td>5 Nov 2023</td>
                                    <td>
                                      <div className="table-action">
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-primary-light"
                                        >
                                          <i className="fas fa-print"></i> Print
                                        </Link>
                                        <Link
                                          to="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Billing Tab --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
    </>
  );
};

export default PatientProfile;
