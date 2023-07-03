import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import "../styles/contact.css";

const socialLinks = [
	{
		url: "#",
		icon: "ri-facebook-line",
	},
	{
		url: "#",
		icon: "ri-instagram-line",
	},
	{
		url: "#",
		icon: "ri-linkedin-line",
	},
	{
		url: "#",
		icon: "ri-twitter-line",
	},
];

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/contacts", {
				name: name,
				email: email,
				message: message,
			})
			.then((response) => {
				console.log(response);
				console.log(response.data);
			});
	};
	return (
		<Helmet title="Contact">
			<CommonSection title="Contact" />
			<section>
				<Container>
					<Row>
						<Col lg="7" md="7">
							<h6 className="fw-bold mb-4">Get In Touch</h6>

							<Form onSubmit={onSubmitHandler}>
								<FormGroup className="contact__form">
									<Input
										placeholder="Your Name"
										type="text"
										id="name"
										onChange={(e) => setName(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="contact__form">
									<Input
										placeholder="Email"
										type="email"
										id="email"
										onChange={(e) => setEmail(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="contact__form">
									<textarea
										rows="5"
										placeholder="Message"
										className="textarea"
										id="textarea"
										onChange={(e) => setMessage(e.target.value)}
									/>
								</FormGroup>

								<button className=" contact__btn" type="submit">
									Send Message
								</button>
							</Form>
						</Col>

						<Col lg="5" md="5">
							<div className="contact__info">
								<h6 className="fw-bold">Contact Information</h6>
								<p className="section__description mb-0">
									123 ZindaBazar, Sylhet, Bangladesh
								</p>
								<div className=" d-flex align-items-center gap-2">
									<h6 className="fs-6 mb-0">Phone:</h6>
									<p className="section__description mb-0">+88683896366</p>
								</div>

								<div className=" d-flex align-items-center gap-2">
									<h6 className="mb-0 fs-6">Email:</h6>
									<p className="section__description mb-0">example@gmail.com</p>
								</div>

								<h6 className="fw-bold mt-4">Follow Us</h6>

								<div className=" d-flex align-items-center gap-4 mt-3">
									{socialLinks.map((item, index) => (
										<Link
											to={item.url}
											key={index}
											className="social__link-icon"
										>
											<i className={item.icon}></i>
										</Link>
									))}
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Contact;
