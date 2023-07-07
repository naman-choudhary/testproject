import React from "react";
import "../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../assets/all-images/ava-1.jpg";
import ava02 from "../assets/all-images/ava-2.jpg";
import ava03 from "../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "https://www.facebook.com/login/",
    instUrl: "https://www.instagram.com/accounts/login/",
    twitUrl: "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den",
    linkedinUrl: "https://www.linkedin.com/login",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "https://www.facebook.com/login/",
    instUrl: "https://www.instagram.com/accounts/login/",
    twitUrl: "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den",
    linkedinUrl: "https://www.linkedin.com/login",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "https://www.facebook.com/login/",
    instUrl: "https://www.instagram.com/accounts/login/",
    twitUrl: "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den",
    linkedinUrl: "https://www.linkedin.com/login",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "https://www.facebook.com/login/",
    instUrl: "https://www.instagram.com/accounts/login/",
    twitUrl: "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den",
    linkedinUrl: "https://www.linkedin.com/login",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <a href={item.fbUrl} target="_blank">
                  <i className="ri-facebook-line"></i>
                </a>
                <a href={item.twitUrl} target="_blank">
                  <i className="ri-twitter-line"></i>
                </a>

                <a href={item.linkedinUrl} target="_blank">
                  <i className="ri-linkedin-line"></i>
                </a>

                <a href={item.instUrl} target="_blank">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
