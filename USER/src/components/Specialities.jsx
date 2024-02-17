import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allDoctorCategory } from "../features/dCategory/dCategorySlice";
import { baseUrl } from "../utils/baseUrl";
import { Link } from "react-router-dom";

const Specialities = () => {
  const [specilities, setSpecilities] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allDoctorCategory());
  }, []);

  const category = useSelector((state) => state.dCategory.dCategories);

  const handleSpecialitiesPrevClick = () => {
    setSpecilities(specilities - 1);
    sliderRef.current.slickPrev();
  };

  const handleSpecialitiesNextClick = () => {
    setSpecilities(specilities + 1);
    sliderRef.current.slickNext();
  };

  return (
    <section className="specialities-section-one">
      <div className="container">
        <div className="row">
          <div className="col-md-6 aos" data-aos="fade-up">
            <div className="section-header-one section-header-slider">
              <h2 className="section-title">Specialities</h2>
            </div>
          </div>

          <div className="col-md-6 aos">
            <div className="owl-nav slide-nav-1 text-end nav-control">
              <button
                className="owl-prev"
                onClick={handleSpecialitiesPrevClick}
              >
                <i className="fas fa-chevron-left custom-arrow"></i>
              </button>
              <button
                className="owl-next"
                onClick={handleSpecialitiesNextClick}
              >
                <i className="fas fa-chevron-right custom-arrow"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="specialities-carousel-wrapper aos img-set"
          data-aos="fade-up"
        >
          <Slider ref={sliderRef} {...settings}>
            {category.map((e, index) => (
              <Link
                to={`/doctor-list?category=${e.name}`}
                className="specialities-item"
                key={index}
              >
                <div className="specialities-img ">
                  <img
                    src={`${baseUrl}doctorcategory/${e.image}`}
                    alt={e.name}
                    className="img-fluid "
                    style={{ width: "5rem", height: "5rem", objectFit: "fill" }}
                  />
                </div>
                <p>{e.name}</p>
              </Link>
            ))}
          </Slider>
        </div>

        <div className="specialities-btn aos">
          <Link to={`/doctor-list`} className="btn">
            See All Specialities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
