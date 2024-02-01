import docThumb2 from "../assets/img/doctors/doctor-thumb-02.jpg";
import { Link } from "react-router-dom";

const ProfileSetting = () => {
  return (
    <>
      <div className="main-wrapper">
        {/* <!-- Breadcrumb --> */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Profile Settings</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="index.html">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Profile Settings
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Breadcrumb --> */}

        {/* <!-- Page Content --> */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8 col-xl-9">
                {/* <!-- Basic Information --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic Information</h4>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="change-avatar">
                            <div className="profile-img">
                              <img src={docThumb2} alt="User Image" />
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <input type="file" className="upload" />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">
                            Username <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Phone Number</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Gender</label>
                          <select className="form-select form-control">
                            <option>Select</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-0">
                          <label className="mb-2">Date of Birth</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Basic Information --> */}

                {/* <!-- About Me --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">About Me</h4>
                    <div className="mb-0">
                      <label className="mb-2">Biography</label>
                      <textareLink
                        className="form-control"
                        rows="5"
                      ></textareLink>
                    </div>
                  </div>
                </div>
                {/* <!-- /About Me --> */}

                {/* <!-- Clinic Info --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Clinic Info</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Clinic Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Clinic Address</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="mb-2">Clinic Images</label>
                          <form action="#" className="dropzone"></form>
                        </div>
                        <div className="upload-wrap">
                          <div className="upload-images">
                            <img
                              src="assets/img/features/feature-01.jpg"
                              alt="Upload Image"
                            />
                            <Link
                              to="#"
                              className="btn btn-icon btn-danger btn-sm"
                            >
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                          <div className="upload-images">
                            <img
                              src="assets/img/features/feature-02.jpg"
                              alt="Upload Image"
                            />
                            <Link
                              to="#"
                              className="btn btn-icon btn-danger btn-sm"
                            >
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Clinic Info --> */}

                {/* <!-- Contact Details --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Contact Details</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="mb-2">Address Line 1</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="control-label">
                            Address Line 2
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="control-label">City</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="control-label">
                            State / Province
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="control-label">Country</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="control-label">Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Contact Details --> */}

                {/* <!-- Pricing --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Pricing</h4>

                    <div className="mb-0">
                      <div id="pricing_select">
                        <div className="custom-control form-check custom-control-inline">
                          <input
                            type="radio"
                            id="price_free"
                            name="rating_option"
                            className="form-check-input"
                            defaultValue="price_free"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="price_free"
                          >
                            Free
                          </label>
                        </div>
                        <div className="custom-control form-check custom-control-inline">
                          <input
                            type="radio"
                            id="price_custom"
                            name="rating_option"
                            defaultValue="custom_price"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="price_custom"
                          >
                            Custom Price (per hour)
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row custom_price_cont"
                      id="custom_price_cont"
                      style={{ display: "none" }}
                    >
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          id="custom_rating_input"
                          name="custom_rating_count"
                          defaultValue=""
                          placeholder="20"
                        />
                        <small className="form-text text-muted">
                          Custom price you can add
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Pricing --> */}

                {/* <!-- Services and Specialization --> */}
                <div className="card services-card">
                  <div className="card-body">
                    <h4 className="card-title">Services and Specialization</h4>
                    <div className="mb-3">
                      <label className="mb-2">Services</label>
                      <input
                        type="text"
                        data-role="tagsinput"
                        className="input-tags form-control"
                        placeholder="Enter Services"
                        name="services"
                        defaultValue="Tooth cleaning "
                        id="services"
                      />
                      <small className="form-text text-muted">
                        Note : Type & Press enter to add new services
                      </small>
                    </div>
                    <div className="mb-0">
                      <label className="mb-2">Specialization </label>
                      <input
                        className="input-tags form-control"
                        type="text"
                        data-role="tagsinput"
                        placeholder="Enter Specialization"
                        name="specialist"
                        defaultValue="Children Care,Dental Care"
                        id="specialist"
                      />
                      <small className="form-text text-muted">
                        Note : Type & Press enter to add new specialization
                      </small>
                    </div>
                  </div>
                </div>
                {/* <!-- /Services and Specialization --> */}

                {/* <!-- Education --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Education</h4>
                    <div className="education-info">
                      <div className="row education-cont">
                        <div className="col-12 col-md-10 col-lg-11">
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">Degree</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">
                                  College/Institute
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">
                                  Year of Completion
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-more">
                      <Link to="#" className="add-education">
                        <i className="fa fa-plus-circle"></i> Add More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- /Education --> */}

                {/* <!-- Experience --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Experience</h4>
                    <div className="experience-info">
                      <div className="row experience-cont">
                        <div className="col-12 col-md-10 col-lg-11">
                          <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">Hospital Name</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">From</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">To</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                              <div className="mb-3">
                                <label className="mb-2">Designation</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-more">
                      <Link to="#" className="add-experience">
                        <i className="fa fa-plus-circle"></i> Add More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- /Experience --> */}

                {/* <!-- Awards --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Awards</h4>
                    <div className="awards-info">
                      <div className="row awards-cont">
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">Awards</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">Year</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-more">
                      <Link to="#" className="add-award">
                        <i className="fa fa-plus-circle"></i> Add More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- /Awards --> */}

                {/* <!-- Memberships --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Memberships</h4>
                    <div className="membership-info">
                      <div className="row membership-cont">
                        <div className="col-12 col-md-10 col-lg-5">
                          <div className="mb-3">
                            <label className="mb-2">Memberships</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-more">
                      <Link to="#" className="add-membership">
                        <i className="fa fa-plus-circle"></i> Add More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- /Memberships --> */}

                {/* <!-- Registrations --> */}
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Registrations</h4>
                    <div className="registrations-info">
                      <div className="row reg-cont">
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">Registrations</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-12 col-md-5">
                          <div className="mb-3">
                            <label className="mb-2">Year</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-more">
                      <Link to="#" className="add-reg">
                        <i className="fa fa-plus-circle"></i> Add More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- /Registrations --> */}

                <div className="submit-section submit-btn-bottom">
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Page Content --> */}
      </div>
    </>
  );
};

export default ProfileSetting;
