import React from "react";
import "./sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import ColorLensIcon from '@material-ui/icons/ColorLens';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import DashboardIcon from "@material-ui/icons/Dashboard";
import RateReviewIcon from "@material-ui/icons/RateReview";
import PeopleIcon from "@material-ui/icons/People";
import StarsIcon from '@material-ui/icons/Stars';

import FormatLineSpacingIcon from '@material-ui/icons/FormatLineSpacing';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        {/* <img src={logo} alt="Your Logo" /> */}
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <ColorLensIcon/>
          Ui Elements
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <FormatListNumberedIcon />
          Forms
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DonutSmallIcon /> Chart
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <FormatLineSpacingIcon/> Table
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <StarsIcon /> Icons
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <RateReviewIcon />
            Documents
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
