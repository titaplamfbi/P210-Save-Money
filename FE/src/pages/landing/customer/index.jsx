import React from "react";
import PropTypes from "prop-types";
import "./customer.scss";
Customer.propTypes = {};

function Customer(props) {
  return (
    <section className="customer">
      <div className="container">
        <div className="customer-content">
          <h2 className="customer-title">
            <span>1000+</span> Customer
          </h2>
          <p className="customer-des">
            Analyze any Business or Creator account—including your
            competitors—to find the imagery, visuals, and captions that drive
            audience engagement. Get social calendars planned faster and spend
            less time testing content strategies.
          </p>
        </div>
        <div className="customer-number">
          <div className="customer-number-list">
            <p className="customer-number-list--title">Product</p>
            <p className="customer-number-list-number">10,0000+</p>
          </div>
          <div className="customer-number-list">
            <p className="customer-number-list--title">Likes</p>
            <p className="customer-number-list-number">45600</p>
          </div>
          <div className="customer-number-list">
            <p className="customer-number-list--title">Sale</p>
            <p className="customer-number-list-number">576864</p>
          </div>
          <div className="customer-number-list">
            <p className="customer-number-list--title">Customers</p>
            <p className="customer-number-list-number">947444</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
