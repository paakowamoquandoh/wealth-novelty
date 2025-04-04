import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import useFetch from "../hooks/useFetch"; // <-- Make sure this path is correct
import { useNavigate } from "react-router-dom";

const CarListing = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8800/api/hotels?forSale=true'
  );
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading, please wait...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {data.map((item) => (
              <CarItem item={item} key={item._id || item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
