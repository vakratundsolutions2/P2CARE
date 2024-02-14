import { useDispatch, useSelector } from "react-redux";
import BreadCrum from "../components/BreadCrum";
import { AddInquiry } from "../features/inquary/inquarySlice";
import { GetContact } from "../features/content/ContentSlice";
import { useEffect } from "react";

function Contact() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    dispatch(AddInquiry(new FormData(event.target)));
    event.target.reset();
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(GetContact());
  }, []);
  const { contact } = useSelector((state) => state.content);

  return (
    <>
      <div className="main-wrapper">
        <BreadCrum location={"Contact"} heading={"Contact Us"} />
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="section-inner-header contact-inner-header">
                  <h6>Get in touch</h6>
                  <h2>Have Any Question?</h2>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="fa-solid fa-map-pin"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Address</h4>
                      <p>{contact?.address}</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Phone Number</h4>
                      <p>{contact?.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="card contact-card">
                  <div className="card-body">
                    <div className="contact-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="contact-details">
                      <h4>Email Address</h4>
                      <p>{contact?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 d-flex">
                <div className="card contact-form-card w-100">
                  <div className="card-body">
                    <form action="#" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Name"
                              name="name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Email Address"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="mb-2">Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              name="mobileNo"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="mb-2">Message</label>
                            <textarea
                              className="form-control"
                              placeholder="Enter your comments"
                              name="message"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group-btn mb-0">
                            <button
                              type="submit"
                              className="btn btn-primary prime-btn"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="contact-map d-flex">
          <iframe
            src={contact?.map}
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
