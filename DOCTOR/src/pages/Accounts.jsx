import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";

const Accounts = () => {
  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"Accounts  "} heading={"Accounts"} />

        <div className="col-md-7 col-lg-8 col-xl-9">
          <div className="row">
            <div className="col-lg-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-6">
                      <h3 className="card-title">Account</h3>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <Link
                          title="Edit Profile"
                          className="btn btn-primary btn-sm"
                          to="#account_modal"
                          data-bs-toggle="modal"
                        >
                          <i className="fas fa-pencil"></i> Edit Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="profile-view-bottom">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="info-list">
                          <div className="title">Bank Name</div>
                          <div className="text" id="bank_name">
                            Wells Fargo & Co
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="info-list">
                          <div className="title">Branch Name</div>
                          <div className="text" id="branch_name">
                            Lenexa
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="info-list">
                          <div className="title">Account Number</div>
                          <div className="text" id="account_no">
                            5396 5250 1908 3838
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="info-list">
                          <div className="title">Account Name</div>
                          <div className="text" id="account_name">
                            Dr. Darren Elder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="account-card bg-success-light">
                        <span>$90.48</span> Earned
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="account-card bg-warning-light">
                        <span>$0.00</span> Requested
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="account-card bg-purple-light">
                        <span>$90.48</span> Balance
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <Link
                        to="#payment_request_modal"
                        className="btn btn-primary request_btn"
                        data-bs-toggle="modal"
                      >
                        Payment Request
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body pt-0">
                  {/* <!-- Tab Menu --> */}
                  <nav className="user-tabs mb-4">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="#pat_accounts"
                          data-bs-toggle="tab"
                        >
                          Accounts
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#pat_refundrequest"
                          data-bs-toggle="tab"
                        >
                          Patients Refund Request
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- /Tab Menu --> */}

                  {/* <!-- Tab Content --> */}
                  <div className="tab-content pt-0">
                    {/* <!-- Accounts Tab --> */}
                    <div
                      id="pat_accounts"
                      className="tab-pane fade show active"
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Patient Name</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    11 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Richard Wilson <span>#PT0016</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$150</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    3 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      11.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient1.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Charlene Reed <span>#PT0001</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$200</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    1 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      1.00 PM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient2.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Travis Trimble <span>#PT0002</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$75</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    30 Oct 2023{" "}
                                    <span className="d-block text-info">
                                      9.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient3.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Carl Kelly <span>#PT0003</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$100</td>
                                  <td>
                                    <span className="badge rounded-pill bg-warning-light">
                                      Pending
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    28 Oct 2023{" "}
                                    <span className="d-block text-info">
                                      6.00 PM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient4.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Michelle Fairfax <span>#PT0004</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$350</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    27 Oct 2023{" "}
                                    <span className="d-block text-info">
                                      8.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient5.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Gina Moore <span>#PT0005</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$250</td>
                                  <td>
                                    <span className="badge rounded-pill bg-danger-light">
                                      Refunded
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
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
                    {/* <!-- /Accounts Tab --> */}

                    {/* <!-- Refund Request Tab --> */}
                    <div className="tab-pane fade" id="pat_refundrequest">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Patient Name</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    11 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Richard Wilson <span>#PT0016</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$150</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    3 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      11.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient1.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Charlene Reed <span>#PT0001</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$200</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    1 Nov 2023{" "}
                                    <span className="d-block text-info">
                                      1.00 PM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient2.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Travis Trimble <span>#PT0002</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$75</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    30 Oct 2023{" "}
                                    <span className="d-block text-info">
                                      9.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient3.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Carl Kelly <span>#PT0003</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$100</td>
                                  <td>
                                    <span className="badge rounded-pill bg-warning-light">
                                      Pending
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    28 Oct 2023{" "}
                                    <span className="d-block text-info">
                                      6.00 PM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient4.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Michelle Fairfax <span>#PT0004</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$350</td>
                                  <td>
                                    <span className="badge rounded-pill bg-success-light">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    27 Oct 2023{" "}
                                    <span className="d-block text-info">
                                      8.00 AM
                                    </span>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/doctor/patient-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="/src/assets/img/patients/patient5.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/doctor/patient-profile">
                                        Gina Moore <span>#PT0005</span>
                                      </Link>
                                    </h2>
                                  </td>
                                  <td>$250</td>
                                  <td>
                                    <span className="badge rounded-pill bg-danger-light">
                                      Refunded
                                    </span>
                                  </td>
                                  <td>
                                    <div className="table-action">
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </Link>

                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-success-light"
                                      >
                                        <i className="fas fa-check"></i> Accept
                                      </Link>
                                      <Link
                                        to="javascript:void(0);"
                                        className="btn btn-sm bg-danger-light"
                                      >
                                        <i className="fas fa-times"></i> Cancel
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
                    {/* <!-- /Refund Request Tab --> */}
                  </div>
                  {/* <!-- Tab Content --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
