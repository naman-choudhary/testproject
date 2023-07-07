import React from "react";

import HeroSlider from "../components/HeroSlider";
import Helmet from "../components/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/FindCarForm";
import AboutSection from "../components/AboutSection";
import ServicesList from "../components/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/CarItem";
import BecomeDriverSection from "../components/BecomeDriverSection";
import Testimonial from "../components/Testimonial";
import ProductList from "../components/ProductList";
import Animate from "../Animate";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

import BlogList from "../components/BlogList";



const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[]);
  return (
    <Animate>
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

      {/*<div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
  </div>*/}
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
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

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
      <ProductList />
    </Helmet>
    </Animate>
  );
};

export default Home;
