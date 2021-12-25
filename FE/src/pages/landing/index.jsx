import React from "react";
import PropTypes from "prop-types";
import "../../main.scss";

import Footer from "../../components/footer";

import Social from "./social-info";
import Customer from "./customer";
import Dashboard from "./dashboard";
import Subcirbe from "./subcribe";
import Header from "../../components/header";
import HeaderContent from "../../components/headerContent";

LandingPage.propTypes = {};

function LandingPage(props) {
  return (
    <div>
      <Header></Header>
      <HeaderContent></HeaderContent>
      <Social></Social>
      <Customer></Customer>
      <Dashboard></Dashboard>
      <Subcirbe></Subcirbe>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
