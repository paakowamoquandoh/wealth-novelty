import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const RentalItem = ({ item }) => {
  const { photos, model, name, transmission, engine, price, distance } = item;
  const imageUrl = photos.length > 0 ? photos[0] : 'default-image-url'; // Fallback to a default image if no photos are available

  return (
    
      <div className="car__item">
        <div className="car__img">
          <img src={imageUrl} alt={`${model} ${name}`} className="w-100" />
        </div>
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{`${model} ${name}`}</h4>
          <h6 className="rent__price text-center mt-">
            Ghc{price}<span>/ Day</span>
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {engine}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {transmission}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {distance}
            </span>
          </div>
          <button className="w-50 car__item-btn car__btn-rent">
            <Link to={`/cars`}>Buy now</Link>
          </button>
          <button className="w-50 car__item-btn car__btn-details">
            <Link to={`/cars`}>Details</Link>
          </button>
        </div>
      </div>
 
  );
};


export default RentalItem;
