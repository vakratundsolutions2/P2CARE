import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { GetAllTestimonial, resetState } from "../features/testimonial/testimonialSlice";
import { baseUrl } from "../utils/baseUrl";

const Testimonial = () => {
      const [testimonialSlide, setTestimonialSlide] = useState(0);
      const testimonial = useSelector(
        (state) => state.testimonial?.AllTestimonials
      );
      const testimonialState = testimonial?.slice(0, 4);
      const dispatch = useDispatch();
      useEffect(() => {
           dispatch(GetAllTestimonial());
           dispatch(resetState());
      }, []);

  //testimonial-carousel
  const handleTestimonialPrevClick = () => {
    setTestimonialSlide(testimonialSlide - 1);
  };

  const handleTestimonialNextClick = () => {
    setTestimonialSlide(testimonialSlide + 1);
  };
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-nav slide-nav-1 text-end nav-control">
                <button
                  className="owl-prev"
                  onClick={handleTestimonialPrevClick}
                >
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <button
                  className="owl-next"
                  onClick={handleTestimonialNextClick}
                >
                  <i className="fas fa-chevron-right custom-arrow"></i>
                </button>
              </div>

              <div className="testimonial-slider-container">
                <div className="testimonial-slider slick">
                  <Carousel
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    selectedItem={testimonialSlide}
                    transitionDuration={1000}
                  >
                    {testimonialState?.map((e,i)=>{
                        return (
                          <>
                            <div className="testimonial-grid" key={i}>
                              <div className="testimonial-info">
                                <div className="testimonial-img">
                                  <img
                                    src={`${baseUrl}testimonial/${e.image}`}
                                    className="img-fluid"
                                    alt={e.name}
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
                          </>
                        );
                    })}
                    
                    
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial