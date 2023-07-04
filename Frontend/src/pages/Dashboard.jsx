import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";
import SingleCard from "../components/SingleCard";
import axios from "axios";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const BASE_URL = "http://localhost:8000/api/v1";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "OWNER") {
      navigate("/");
    }
    // loadAllOrders();
  }, []);
  
  const carObj = {
    title: "Total Cars",
    totalNumber: 750,
    icon: "ri-police-car-line",
  };
  
  const tripObj = {
    title: "Daily Trips",
    totalNumber: 1697,
    icon: "ri-steering-2-line",
  };
  
  const clientObj = {
    title: "Clients Annually",
    totalNumber: "85k",
    icon: "ri-user-line",
  };
  
  const distanceObj = {
    title: "Kilometers Daily",
    totalNumber: 2167,
    icon: "ri-timer-flash-line",
  };
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;