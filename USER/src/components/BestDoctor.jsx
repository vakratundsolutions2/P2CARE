import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { getAllDoctors } from '../features/doctor/doctorSlice';
import { baseUrl } from '../utils/baseUrl';
import Link from 'antd/es/typography/Link';

const BestDoctor = () => {
      const [doctorSlide, setDoctorSlide] = useState(0);
        const dispatch = useDispatch();


      const handleDoctorPrevClick = () => {
        setDoctorSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
      };

      const handleDoctorNextClick = () => {
        setDoctorSlide((prevSlide) => (prevSlide + 1) % 5);
      };

      useEffect(() => {
        dispatch(getAllDoctors());
        // dispatch(GetAllAvailable());
        // dispatch(allDoctorCategory());
      }, []);
        const Doctor = useSelector((state) => state.doctor?.allDoctors);
        const DoctorState = Doctor?.slice(0, 4);

        console.log(DoctorState);


  return (
    <>
      <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Best Doctors</h2>
              </div>
            </div>
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-2 text-end nav-control">
                <button className="owl-prev" onClick={handleDoctorPrevClick}>
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <button className="owl-next" onClick={handleDoctorNextClick}>
                  <i className="fas fa-chevron-right custom-arrow"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="doctor-aos" data-aos="fade-up">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              emulateTouch={true}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={100 / 4}
            //   renderArrowPrev={() => {}}
            //   renderArrowNext={() => {}}
              selectedItem={doctorSlide}
              showIndicators={false}
              className="doctor-aos "
            
              data-aos="fade-up"
            >
              {DoctorState?.map((e,i)=>{
                return (
                  <>
                    <div className="item" key={i}>
                      <div className="doctor-profile-widget">
                        <div className="doc-pro-img">
                          <Link to={`/doctor-profile/${e._id}`}>

                          <div className="doctor-profile-img">
                            <img
                              src={`${baseUrl}doctor/${e.image}`}
                              className="img-fluid"
                              alt={e.doctorName}
                            />
                          </div>
                          </ Link>
                          <div className="doctor-amount">
                            <span>&#x20B9; {e.price}</span>
                          </div>
                        </div>
                        <div className="doc-content">
                          <div className="doc-pro-info">
                            <div className="doc-pro-name">
                              <Link to={`/doctor-profile/${e._id}`}>
                                {e.doctorName}
                              </Link>
                              <p>{e.specialities}</p>
                            </div>
                            <div className="reviews-ratings">
                              <p>
                                <span>
                                  <i className="fas fa-star"></i> 4.5
                                </span>{" "}
                                (35)
                              </p>
                            </div>
                          </div>
                          <div className="doc-pro-location">
                            <p>
                              <i className="feather-map-pin"></i> {e.location}
                            </p>
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
      </section>
    </>
  );
}

export default BestDoctor