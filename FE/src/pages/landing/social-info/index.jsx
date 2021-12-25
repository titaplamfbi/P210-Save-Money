import React from "react";
import PropTypes from "prop-types";
import "./social.scss";
import GreenCircle from "../../../assets/img/Ellipse 711.png";
Social.propTypes = {};

function Social(props) {
  return (
    <section className="social-info">
      <div className="social-info-box">
        <h4 className="social-info--title">
          <span>We Building </span>Social uniqueness
        </h4>
        <p className="social-info--des">
          <span>The marketing strategy lays out</span> target markets and the
          value.
        </p>
      </div>
      <div className="social-info-box">
        <h4 className="social-info--title">
          <span>Social Media </span>beyond probability
        </h4>
        <p className="social-info--des">
          <span>Essentially a formula for how a</span> business is going to
          compete, value.
        </p>
      </div>
      <img src={GreenCircle} alt="" className="circle-green" />
    </section>
  );
}

export default Social;
