import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/cars-img/mercedes-offer.png";
import ava02 from "../../assets/all-images/cars-img/bmw-offer.png";
import ava03 from "../../assets/all-images/cars-img/nissan-offer.png";
import ava04 from "../../assets/all-images/cars-img/offer-toyota.png";

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
      
      <div className="car__item">
        <div className="car__img">
          <img src={ava01} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">Max</h4>
          <h6 className="rent__price text-center mt-">
            $24.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> new
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> automatic
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> 20km
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            {/* <Link to={`/cars/${carName}`}>Buy now</Link> */}
            <Link to={`/cars`}>Buy now</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars`}>Details</Link>
          </button>
        </div>
      </div>
      </div>

      <div className="testimonial py-4 px-3">
      <div className="car__item">
        <div className="car__img">
          <img src={ava02} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">Max</h4>
          <h6 className="rent__price text-center mt-">
            $24.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> new
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> automatic
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> 20km
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            {/* <Link to={`/cars/${carName}`}>Buy now</Link> */}
            <Link to={`/cars`}>Buy now</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars`}>Details</Link>
          </button>
        </div>
      </div>
      </div>

      <div className="testimonial py-4 px-3">
      <div className="car__item">
        <div className="car__img">
          <img src={ava03} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">Max</h4>
          <h6 className="rent__price text-center mt-">
            $24.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> new
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> automatic
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> 20km
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            {/* <Link to={`/cars/${carName}`}>Buy now</Link> */}
            <Link to={`/cars`}>Buy now</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars`}>Details</Link>
          </button>
        </div>
      </div>
      </div>

      <div className="testimonial py-4 px-3">
      <div className="car__item">
        <div className="car__img">
          <img src={ava04} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">Max</h4>
          <h6 className="rent__price text-center mt-">
            $24.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> new
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> automatic
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> 20km
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            {/* <Link to={`/cars/${carName}`}>Buy now</Link> */}
            <Link to={`/cars`}>Buy now</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars`}>Details</Link>
          </button>
        </div>
      </div>
      </div>

      <div className="testimonial py-4 px-3">
      <div className="car__item">
        <div className="car__img">
          <img src={ava04} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">Max</h4>
          <h6 className="rent__price text-center mt-">
            $24.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> new
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> automatic
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> 20km
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            {/* <Link to={`/cars/${carName}`}>Buy now</Link> */}
            <Link to={`/cars`}>Buy now</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars`}>Details</Link>
          </button>
        </div>
      </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
