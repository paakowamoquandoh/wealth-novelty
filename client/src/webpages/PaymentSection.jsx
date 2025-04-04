import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import { Form, FormGroup } from "reactstrap";

const PaymentSection = () => {
    const submitHandler = (event) => {
        event.preventDefault();
      };
  return (
    <Helmet title="Payment">
      <CommonSection title="Payment" />
      <section>
        <Container>
          <Row>
          <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Username" />
      </FormGroup>
      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup> */}
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <label>Mobile Money</label>
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
    </Form>
       <button className="rButton">
          Reserve Now!
        </button>  
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default PaymentSection;
