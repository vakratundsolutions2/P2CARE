import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import doc1 from "../assets/img/doctors/doctor-01.jpg";
import doc2 from "../assets/img/doctors/doctor-02.jpg";
import doc3 from "../assets/img/doctors/doctor-03.jpg";
import doc4 from "../assets/img/doctors/doctor-04.jpg";
import doc5 from "../assets/img/doctors/doctor-05.jpg";
import { useRef } from 'react';
import { useState } from 'react';

const BestDoctor = () => {
    const [activeSlide, setActiveSlide] = useState(0);
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
    const doctors = [
        { img: doc1, name: 'Dr. Ruby Perrin', speciality: 'Cardiology', amount: '$200', rating: '4.5', reviews: '35', location: 'Newyork, USA' },
        { img: doc2, name: 'Dr. Darren Elder', speciality: 'Neurology', amount: '$360', rating: '4.0', reviews: '20', location: 'Florida, USA' },
        { img: doc3, name: 'Dr. Sofia Brient', speciality: 'Urology', amount: '$450', rating: '4.5', reviews: '30', location: 'Georgia, USA' },
        { img: doc4, name: 'Dr. Paul Richard', speciality: 'Orthopedic', amount: '$570', rating: '4.3', reviews: '45', location: 'Michigan, USA' },
        { img: doc5, name: 'Dr. John Doe', speciality: 'Dentist', amount: '$880', rating: '4.4', reviews: '50', location: 'California, USA' },
    ];

    const handleBestDoctorPrevClick = () => {
        setActiveSlide((prevSlide) => (prevSlide - 1 + doctors.length) % doctors.length);
        sliderRef.current.slickPrev();
      };
    
      const handleBestDoctorNextClick = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % doctors.length);
        sliderRef.current.slickNext();
      };
    return (
        <div>
            <section className="doctors-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 aos" data-aos="fade-up">
                            <div className="section-header-one section-header-slider">
                                <h2 className="section-title">Best Doctors</h2>
                            </div>
                        </div>

                        <div className="col-md-6 aos">
            <div className="owl-nav slide-nav-1 text-end nav-control">
            <button className="owl-prev" onClick={handleBestDoctorPrevClick}>
                  <i className="fas fa-chevron-left custom-arrow"></i>
                </button>
                <button className="owl-next" onClick={handleBestDoctorNextClick}>
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
                                        <a href="doctor-profile.html">
                                            <div className="doctor-profile-img">
                                                <img src={doctor.img} className="img-fluid" alt={doctor.name} />
                                            </div>
                                        </a>
                                        <div className="doctor-amount">
                                            <span>{doctor.amount}</span>
                                        </div>
                                    </div>
                                    <div className="doc-content">
                                        <div className="doc-pro-info">
                                            <div className="doc-pro-name">
                                                <a href="doctor-profile.html">{doctor.name}</a>
                                                <p>{doctor.speciality}</p>
                                            </div>
                                            <div className="reviews-ratings">
                                                <p>
                                                    <span><i className="fas fa-star"></i> {doctor.rating}</span> ({doctor.reviews})
                                                </p>
                                            </div>
                                        </div>
                                        <div className="doc-pro-location">
                                            <p><i className="feather-map-pin"></i> {doctor.location}</p>
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
}

export default BestDoctor;
