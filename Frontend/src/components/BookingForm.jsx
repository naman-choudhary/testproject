import React, { useState } from "react";
import "../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";

const BookingForm = () => {
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [person, setPerson] = useState("");
  const [luggage, setLuggage] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    axios
			.post("http://localhost:8000/bookings", {
				firstName: firstName,
        lastName: lastName,
        email: email,
				phoneNumber: phoneNumber,
				fromAddress: fromAddress,
				toAddress: toAddress,
				person: person,
				luggage: luggage,
				date: date,
				time: time,
				description: description,
			})
			.then((response) => {
				console.log(response);
				console.log(response.data);
			});
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" value={fromAddress} onChange={(event) => setFromAddress(event.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" value={toAddress} onChange={(event) => setToAddress(event.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="" value={person} onChange={(event) => setPerson(event.target.value)}>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="" value={luggage} onChange={(event) => setLuggage(event.target.value)}>
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" value={date} onChange={(event) => setDate(event.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </FormGroup>

      <div className="payment text-end mt-5">
        <button type="submit">Reserve Now</button>
      </div>

    </Form>
  );
};

export default BookingForm;