import React from "react";
import Slider from "react-slick";

import "../styles/testimonial.css";

import ava01 from "../assets/all-images/ava-1.jpg";
import ava02 from "../assets/all-images/ava-2.jpg";
import ava03 from "../assets/all-images/ava-3.jpg";
import ava04 from "../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a car from this service, and I couldn't be happier with the experience. The booking process was quick and easy, and the staff was friendly and professional. The vehicle was clean, well-maintained, and perfect for my needs. I highly recommend this car rental service for their excellent customer service and quality vehicles.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I had a fantastic experience with this car rental service. The pickup and drop-off process at the airport was seamless, and the staff was welcoming and helpful. The car I rented was in great condition and drove smoothly throughout my trip. I appreciated the unlimited mileage option, as it allowed me to explore without any worries. I will definitely be using this car rental service again in the future.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sarah</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I highly recommend this car rental service for their outstanding service and competitive rates. The entire process, from making the reservation online to returning the vehicle, was straightforward and convenient. The staff was professional, and the vehicle was spotless and well-maintained. I appreciated their flexibility in accommodating my specific needs. 
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Michael</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I recently rented a car from this service for a family vacation, and I was thoroughly impressed. The entire experience was seamless, starting from the easy online booking process to the friendly and helpful staff at the pickup location. The car was spacious, clean, and comfortable, making our long drive enjoyable. 
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Emily</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
