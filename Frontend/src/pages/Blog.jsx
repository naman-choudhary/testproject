import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import BlogList from "../components/BlogList";
import "../styles/contact.css";
import Animate from "../Animate";

const GetBlogs = () => {
	return (
		<Animate>
		<Helmet title="Blogs">
			<CommonSection title="Blogs" />
			<section>
				<Container>
					<Row>
						<BlogList />
					</Row>
				</Container>
			</section>
		</Helmet>
		</Animate>
	);
};

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

const PostBlogs = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState("");
	const [quote, setQuote] = useState("");

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", title);
		formData.append("author", author);
		formData.append("image", image);
		formData.append("description", description);
		formData.append("quote", quote);

		try {
			const response = await axios.post(
				"http://localhost:8000/blogs",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			console.log(response);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Helmet title="Contact">
			<CommonSection title="Write a Blog" />
			<section>
				<Container>
					<Row>
						<Col lg="7" md="7">
							<h6 className="fw-bold mb-4">Write about your experience</h6>

							<Form onSubmit={onSubmitHandler}>
								<FormGroup className="contact__form">
									<Input
										placeholder="Your Blog's Title"
										type="text"
										id="title"
										onChange={(e) => setTitle(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="contact__form">
									<Input
										placeholder="Your Name"
										type="text"
										id="author"
										onChange={(e) => setAuthor(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="contact__form">
									<Input
										placeholder="Upload Image"
										type="file"
										id="image"
										onChange={(e) => setImage(e.target.files[0])}
									/>
								</FormGroup>
								<FormGroup className="contact__form">
									<textarea
										rows="5"
										placeholder="Description"
										className="textarea"
										id="description"
										onChange={(e) => setDescription(e.target.value)}
									/>
								</FormGroup>
								<FormGroup className="contact__form">
									<Input
										placeholder="Quote"
										type="text"
										id="quote"
										onChange={(e) => setQuote(e.target.value)}
									/>
								</FormGroup>

								<button className=" contact__btn" type="submit">
									Upload Blog
								</button>
							</Form>
						</Col>

						<Col lg="5" md="5">
							<div className="contact__info">
								<h6 className="fw-bold">Contact Information</h6>
								<p className="section__description mb-0">
									IIIT, Lucknow, India
								</p>
								<div className=" d-flex align-items-center gap-2">
									<h6 className="fs-6 mb-0">Phone:</h6>
									<p className="section__description mb-0">1234567890</p>
								</div>

								<div className=" d-flex align-items-center gap-2">
									<h6 className="mb-0 fs-6">Email:</h6>
									<p className="section__description mb-0">sat@iiitl.ac.in</p>
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

const Blog = () => {
	return (
		<>
			<GetBlogs />
			<PostBlogs />
		</>
	);
};

export default Blog;
