
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import specialities01 from "../assets/img/specialities/specialities-01.svg";
import specialities02 from "../assets/img/specialities/specialities-02.svg";
import specialities03 from "../assets/img/specialities/specialities-03.svg";
import specialities04 from "../assets/img/specialities/specialities-04.svg";
import specialities05 from "../assets/img/specialities/specialities-05.svg";
import { useState, useRef } from 'react';

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
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

        <div className="specialities-carousel-wrapper aos" data-aos="fade-up">
          
        <Slider ref={sliderRef} {...settings}>
            <div className="specialities-item">
              <div className="specialities-img">
                <span><img src={specialities01} alt="Cardiology" /></span>
              </div>
              <p>Cardiology</p>
            </div>

            <div className="specialities-item">
              <div className="specialities-img">
                <span><img src={specialities02} alt="Neurology" /></span>
              </div>
              <p>Neurology</p>
            </div>

            <div className="specialities-item">
              <div className="specialities-img">
                <span><img src={specialities03} alt="Dentist" /></span>
              </div>
              <p>Dentist</p>
            </div>

            <div className="specialities-item">
              <div className="specialities-img">
                <span><img src={specialities04} alt="Opthamalogy" /></span>
              </div>
              <p>Opthamalogy</p>
            </div>

            <div className="specialities-item">
              <div className="specialities-img">
                <span><img src={specialities05} alt="Orthopedic" /></span>
              </div>
              <p>Orthopedic</p>
            </div>

          </Slider>
        </div>

        <div className="specialities-btn aos" data-aos="fade-up">
          <a href="search.html" className="btn">
            See All Specialities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
