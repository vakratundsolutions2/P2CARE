import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestDoctor.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../features/doctor/doctorSlice";
import { baseUrl } from "../utils/baseUrl";
import { Link } from "react-router-dom";

const BestDoctor = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const doctors = useSelector((state) => state.doctor?.doctors);

  const handleBestDoctorPrevClick = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + doctors.length) % doctors.length
    );
    sliderRef.current.slickPrev();
  };

  const handleBestDoctorNextClick = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % doctors?.length);
    sliderRef?.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="mb-3">
      <section className="doctors-section1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Best Doctors</h2>
              </div>
            </div>

            <div className="col-md-6 aos">
              <div className="owl-nav slide-nav-1 text-end nav-control">
                <button
                  className="owl-prev"
                  onClick={handleBestDoctorPrevClick}
                >
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <button
                  className="owl-next"
                  onClick={handleBestDoctorNextClick}
                >
                  <i className="fas fa-chevron-right custom-arrow"></i>
                </button>
              </div>
            </div>
          </div>
          <Slider ref={sliderRef} {...settings} initialSlide={activeSlide}>
            {doctors.map((doctor, index) => (
              <div key={index} className="item">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to={`/doctor-profile/${doctor._id}`}>
                      <div className="doctor-profile-img">
                        <img
                          src={`${baseUrl}doctor/${doctor.image}`}
                          className="img-fluid doc-img"
                          alt={doctor.name}
                          // style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span> &#x20B9; {doctor?.price}</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to={`/doctor-profile/${doctor._id}`}>
                          {doctor.doctorName}
                        </Link>
                        <p>{doctor.specialities}</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span className="d-flex ">
                            <i className="fas fa-star ">
                              {doctor?.totalratings}
                            </i>
                          </span>{" "}
                          ({doctor.ratings?.length})
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="fa fa-location"></i> {doctor.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default BestDoctor;
