import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { useNavigate } from "react-router-dom"; 
import "../../styles/testimonial.css";
import useFetch from "../../hooks/useFetch";
import RentalItem from "./rentalItem";


const Testimonial = () => {
  const { data, loading, error } = useFetch(
    'https://wealth-novelty-car-shop.onrender.com/api/hotels?featured=true'
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
