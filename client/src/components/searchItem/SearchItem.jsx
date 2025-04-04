import { Link } from "react-router-dom";
import React from "react";
import { Col } from "reactstrap";

const SearchItem = ({ item }) => {
  return (
       <Col lg="3" md="12" sm="12" className="mb-2">
            <div className="car__item">
              <div className="car__img">
                <img src={item.photos[0]} alt="" className="w-100" />
              </div>
      
              <div className="car__item-content mt-4">
                <h6 className="section__title text-center">{item.name}</h6>
                <h6 className="rent__price text-center mt-">
                  Ghc{item.cheapestPrice} <span>/ Day</span>
                </h6>
      
                <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                  <span className=" d-flex align-items-center gap-1">
                    <i class="ri-car-line"></i> {item.model}
                  </span>
                  <span className=" d-flex align-items-center gap-1">
                    <i class="ri-settings-2-line"></i> {item.transmission}
                  </span>
                  <span className=" d-flex align-items-center gap-1">
                    <i class="ri-timer-flash-line"></i> {item.distance}
                  </span>
                </div>
      
                <button className=" w-50 car__item-btn car__btn-rent">
                  <Link to={`/contact`}>Book now</Link>
                </button>
      
                <button className=" w-50 car__item-btn car__btn-details">
                  <Link to={`/hotels/${item._id}`}>
         Details
          </Link> 
                </button>
              </div>
            </div>
          </Col>
  );
};

export default SearchItem;