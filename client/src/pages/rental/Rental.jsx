
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Helmet from "../../components/Helmet/Helmet";
import "./rental.css";
import React from "react";
import CommonSection from "../../components/UI/CommonSection";
// import "../styles/find-car-form.css"
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../../components/UI/AboutSection";
import ServicesList from "../../components/UI/ServicesList";
import BecomeDriverSection from "../../components/UI/BecomeDriverSection";
import Testimonial from "../../components/UI/Testimonial";
import BlogList from "../../components/UI/BlogList";

const Rental = () => {
  return (
    <Helmet>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
      <CommonSection title="Rental" />
      <Header/>

        {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Wealth Novelty</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
      
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />


      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>

      <div className="homeContainer">
        <FeaturedProperties/>
      </div>
    </Helmet>
  );
};

export default Rental;
