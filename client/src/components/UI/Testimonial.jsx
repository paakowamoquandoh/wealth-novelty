import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useNavigate } from "react-router-dom"; 
import "../../styles/testimonial.css";
import useFetch from "../../hooks/useFetch";
import RentalItem from "./rentalItem";
import ava01 from "../../assets/all-images/cars-img/mercedes-offer.png";
import ava02 from "../../assets/all-images/cars-img/bmw-offer.png";
import ava03 from "../../assets/all-images/cars-img/nissan-offer.png";
import ava04 from "../../assets/all-images/cars-img/offer-toyota.png";

const Testimonial = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8800/api/hotels?featured=true'
  );
  const navigate = useNavigate(); // Initialize navigate function

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

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
    {data.map((car, index) => (
      <div className="testimonial py-4 px-3" key={index}>
        <RentalItem item={car} />
      </div>
    ))}
  </Slider>
  );
};

export default Testimonial;
