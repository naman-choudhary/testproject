import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import CarItem from "../components/CarItem";
import Animate from "../Animate";

const CarListing = () => {
	const url = "http://localhost:8000/cars";

	const [carData, setCarData] = useState([]);
	const [selectedSortOption, setSelectedSortOption] = useState("");
	const [sortedCarData, setSortedCarData] = useState([]);

	const fetchCars = async () => {
		try {
			const response = await axios.get(url);
			setCarData(response.data);
			setSortedCarData(response.data);
		} catch (error) {
			console.error("Error fetching car data:", error);
		}
	};

	useEffect(() => {
		fetchCars();
	}, []);

	if (!sortedCarData) {
		return <div>Loading...</div>;
	}

	const handleSortChange = (event) => {
		const sortOption = event.target.value;
		setSelectedSortOption(sortOption);

		let sortedData = [...carData];

		if (sortOption === "low") {
			sortedData.sort((a, b) => a.price - b.price);
		} else if (sortOption === "high") {
			sortedData.sort((a, b) => b.price - a.price);
		}

		setSortedCarData(sortedData);
	};

	return (
		<Animate>
		<Helmet title="Cars">
			<CommonSection title="Car Listing" />

			<section>
				<Container>
					<Row>
						<Col lg="12">
							<div className=" d-flex align-items-center gap-3 mb-5">
								<span className=" d-flex align-items-center gap-2">
									<i class="ri-sort-asc"></i> Sort By
								</span>

								<select value={selectedSortOption} onChange={handleSortChange}>
									<option>Select</option>
									<option value="low">Low to High</option>
									<option value="high">High to Low</option>
								</select>
							</div>
						</Col>

						{sortedCarData.map((item) => (
							<CarItem item={item} key={item.id} />
						))}
					</Row>
				</Container>
			</section>
		</Helmet>
		</Animate>
	);
};

export default CarListing;
