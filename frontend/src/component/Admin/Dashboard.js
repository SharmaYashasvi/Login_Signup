import React from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Bar } from "react-chartjs-2";
import MetaData from "../layout/MetaData";


const Dashboard = () => { 
  const labels = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const BarState = {
    labels: labels,
    datasets: [
      {
        label: "Sales Details",
        data: [65, 59, 80, 81, 56, 55, 40 , 67 , 88 , 45 , 89 , 93],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 0.5
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />
      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>
        <div className="dashboardSummary">
          <div className="dashboardSummaryBox2">
            <Link to="#">
              <p>SALES</p>
              <p>{34040}</p>
            </Link>
            <Link to="#">
              <p>REVENUE</p>
              <p>{47033}</p>
            </Link>
            <Link to="#">
              <p>Downloads</p>
              <p>{40016}</p>
            </Link>
            <Link to="#">
              <p>RETURNS</p>
              <p>{61344}</p>
            </Link>
          </div>
          <Typography component="h2">Purchases</Typography>
          <div>
            <p>
              Status <br /> {562}
            </p>
            <p>
               New Users <br /> {500}
            </p>
            <p>
              Chats <br /> {56}
            </p>
            <p>
              FeedBack <br /> {668}
            </p>
          </div>
        </div>

        <div className="lineChart">
          <Bar data={BarState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
