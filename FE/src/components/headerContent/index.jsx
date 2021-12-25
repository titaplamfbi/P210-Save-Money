import React from "react";
import PropTypes from "prop-types";
import "../header/header.scss";
import "../../main.scss";
import imgHeader from "../../assets/img/header-card.png";
import iconHeaderImg from "../../assets/img/image-528.png";
import { Link } from "react-router-dom";
HeaderContent.propTypes = {};

function HeaderContent(props) {
  return (
    <div style={{ backgroundColor: "#e3fdfd" }}>
      <div class="container">
        <div class="header-content">
          <div class="header-banner">
            <div class="box-content">
              <h2 class="box-title">
                Banking <span>more</span> smart
              </h2>
              <p class="box-text">
                <span>Meet the only spend management</span>platform and
                corporate card.
              </p>
              <Link to="/send" class="btn">
                Save Now
              </Link>
            </div>
            <img src={imgHeader} alt="" class="header-banner-img" />
          </div>
          <div class="header__info">
            <div class="header__info-box-hot">
              <p class="header__info-box-hot--text">
                Hot 🔥 <span>deals for you</span>
              </p>
              <p class="header__info-box-hot--text-des">
                Online shopping for retail sales
                <span>direct to consumers</span>
              </p>
            </div>
            <div class="header-info-item">
              <div class="box-item">
                <img src={iconHeaderImg} alt="" class="box-item--img" />
                <h4 class="box-item--title">1.5% cashback</h4>
                <p class="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
              <div class="box-item">
                <img src={iconHeaderImg} alt="" class="box-item--img" />
                <h4 class="box-item--title">30-day terms</h4>
                <p class="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
              <div class="box-item">
                <img src={iconHeaderImg} alt="" class="box-item--img" />
                <h4 class="box-item--title">Save Money</h4>
                <p class="header__info-box-hot--text-des">
                  Online shopping for retail
                  <span>sales direct to consumers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
