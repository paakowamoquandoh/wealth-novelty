import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { slug } = useParams();
  const { data, loading, error } = useFetch(
    "https://wealth-novelty-car-shop.onrender.com/api/hotels"
  );

  // Check if data is loaded before trying to find the item
  const item = data ? data.find((car) => car._id === slug) : null;

  useEffect(() => {
    if (item) {
      window.scrollTo(0, 0);
    }
  }, [item]);

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  if (!item) {
    return <p>Car details not found</p>;
  }

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <Helmet title={item.name}>
      <section>
        <Container>
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <Row>
            <Col lg="6">
              <img src={item.photos[0]} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="rentalCarName">
                  {item.model} {item.name}
                </h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({item.rating} ratings)
                  </span>
                  <span>
                    <h3>
                      Ghc {item.sellingPrice}
                    </h3>
                  </span>
                </div>

                <p className="section__description">{item.description}</p>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.location}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.transmission}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.mileage}
                  </span>
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-map-pin-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.engine}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.year}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="hotelImages">
                {item.photos?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Our Terms and Conditions</h5>
                <button
                  onClick={() =>
                    window.open(
                      `${process.env.PUBLIC_URL}/assets/WEALTH AUTO RENTAL AGREEMENT FORM.pdf`,
                      "_blank"
                    )
                  }
                  className="btn btn-primary mb-3"
                >
                  View Terms and Conditions
                </button>
              </div>
              <div>
              <button className="w-50 car__item-btn car__btn-rent">
                            <Link to={`/contact`}>Buy now</Link>
                          </button>
              </div>
            </Col>

            {/* <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
