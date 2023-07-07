import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about-section.css";
import aboutImg from "../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              We are delighted to have you as our valued customer and extend a warm welcome to you. Whether you're traveling for business or pleasure, we aim to provide you with a seamless and enjoyable car rental experience.At our car rental service, we understand the importance of convenience, reliability, and exceptional customer service. Our fleet of well-maintained vehicles offers a wide range of options to suit your needs and preferences. From compact cars to spacious SUVs, we have the perfect vehicle to enhance your journey.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> we strive to make your experience hassle-free
                  amet.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> flexible rental options
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> convenient pickup and drop-off locations 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> our friendly customer support team
                 
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
