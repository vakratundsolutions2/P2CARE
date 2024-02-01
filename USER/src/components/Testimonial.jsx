import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { GetAllTestimonial, resetState } from "../features/testimonial/testimonialSlice";
import { baseUrl } from "../utils/baseUrl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const testimonial = useSelector((state) => state.testimonial?.testimonials);
  const testimonialState = testimonial?.slice(0, 4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTestimonial());
    dispatch(resetState());
  }, []);

  const sliderRef = React.createRef();

  const handleTestimonialPrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleTestimonialNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-nav slide-nav-1 text-end nav-control">
                <button className="owl-prev" onClick={handleTestimonialPrevClick}>
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <button className="owl-next" onClick={handleTestimonialNextClick}>
                  <i className="fas fa-chevron-right custom-arrow"></i>
                </button>
              </div>

              <div className="testimonial-slider-container">
                <Slider ref={sliderRef} {...settings}>
                  {testimonialState?.map((e, i) => (
                    <div className="testimonial-grid" key={i}>
                      <div className="testimonial-info">
                        <div className="testimonial-img">
                          <img
                            src={`${baseUrl}testimonial/${e.image}`}
                            className="img-fluid thumbnail-testimonial"
                            alt={e.name}
                            // style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="testimonial-content text-center w-100">
                          <div className="section-header section-inner-header testimonial-header">
                            <h5>{e?.name}</h5>
                            <h2>What Our Client Says</h2>
                          </div>

                          <div className="testimonial-details">
                            <p>{e.description}.</p>
                            <h6>
                              <span>{e.designation}</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
