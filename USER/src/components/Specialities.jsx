import React, { useEffect, useState } from 'react'
import { allDoctorCategory } from '../features/dCategory/dCategorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from "antd";
import { baseUrl } from '../utils/baseUrl';
import { Link } from 'react-router-dom';

const Specialities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(allDoctorCategory());

    }, []);
  const Category = useSelector((state) => state.dCategory?.dCategories);
//   const speciality = Category?.splice(0, 5)  

  console.log(Category);


  const handleSlideChange = (index) => {
    const totalSlides = 5; // Update this based on the actual number of slides

    if (index === 0 && currentSlide === totalSlides - 1) {
      // If going from the last slide to the first, don't pull from the next-to-last slide
      setCurrentSlide(index);
    } else {
      // Update the current slide normally
      setCurrentSlide(index);
    }
    console.log("currentSlide", currentSlide);
  };

  return (
    <>
      <section className="specialities-section-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Specialities</h2>
              </div>
            </div>

            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-1 text-end nav-control">
                <button
                  className="owl-prev"
                  onClick={() => handleSlideChange(currentSlide - 1)}
                >
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <button
                  className="owl-next"
                  onClick={() => handleSlideChange(currentSlide + 1)}
                >
                  <i className="fas fa-chevron-right custom-arrow"></i>
                </button>
              </div>

              <div className="owl-nav slide-nav-1 text-end nav-control"></div>
            </div>
          </div>
          <Carousel 
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch={false}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100 / 4}
            selectedItem={currentSlide}
            onChange={handleSlideChange}
            wrapAround={true}
            interval={1000}
            showIndicators={false}
            className="specialities-slider-one"
          >
            {
                Category?.map((e,i)=>{
                    return (
                      <>
                        <div className="item" key={i}>
                          <div className="specialities-item">
                            <div className="specialities-img">
                              <span>
                                <img
                                  src={`${baseUrl}doctorcategory/${e.image}`}
                                  alt="heart-image"
                                />
                              </span>
                            </div>
                            <p> {e.name}</p>
                          </div>
                        </div>
                      </>
                    );
                })
            }

          </Carousel>
          <div className="specialities-btn aos" data-aos="fade-up">
            <Link to={'#'} className="btn">
              See All Specialities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Specialities