import React from "react";
import PropTypes from "prop-types";
import subcribeCard from "../../../assets/img/Visa card.png";
import subcribeLogo from "../../../assets/img/text.png";
import "./subcribe.scss";
Subcirbe.propTypes = {};

function Subcirbe(props) {
  return (
    <section class="subcribe">
      <div class="container">
        <div class="subcribe-content">
          <div class="subcribe-box-left">
            <div class="subcribe-box-text">
              <p class="box-text-desc">
                <span>Subscribe</span> <span>to get updated</span> news
              </p>
              <img src={subcribeLogo} alt="" class="box-text-img" />
            </div>
            <div class="subcribe-box-btn">
              <p class="subcribe-box-btn__title">
                <span>Subscribe our</span>Newsletter
              </p>
              <a href="#" class="btn btn-sub">
                Subcribe
              </a>
            </div>
          </div>
          <img src={subcribeCard} alt="" class="subcribe-img" />
        </div>
      </div>
    </section>
  );
}

export default Subcirbe;
