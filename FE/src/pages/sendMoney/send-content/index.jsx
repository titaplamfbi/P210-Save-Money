import React from "react";
import PropTypes from "prop-types";
import "../form/sendMoney.scss";
import sendContent1 from "../../../assets/img/checking.png";
import sendContent2 from "../../../assets/img/savings.png";
import sendContent3 from "../../../assets/img/business.png";

SendContent.propTypes = {};

function SendContent(props) {
  return (
    <div class="send-content">
      <div class="container">
        <div class="send-content-flex">
          <div class="send-content-box">
            <img src={sendContent1} alt="" class="send-content-box__img" />
            <h4 class="send-content-box__title">Checking Account</h4>
            <p class="send-content-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quod enim dignissimos error quasi quis iste officiis inventore
              blanditiis quae pariatur quas animi aut assumenda incidunt saepe
              alias, quisquam quos.
            </p>
          </div>
          <div class="send-content-box">
            <img src={sendContent2} alt="" class="send-content-box__img" />
            <h4 class="send-content-box__title">Saving Money</h4>
            <p class="send-content-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quod enim dignissimos error quasi quis iste officiis inventore
              blanditiis quae pariatur quas animi aut assumenda incidunt saepe
              alias, quisquam quos.
            </p>
          </div>
          <div class="send-content-box">
            <img src={sendContent3} alt="" class="send-content-box__img" />
            <h4 class="send-content-box__title">More And More</h4>
            <p class="send-content-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quod enim dignissimos error quasi quis iste officiis inventore
              blanditiis quae pariatur quas animi aut assumenda incidunt saepe
              alias, quisquam quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendContent;
