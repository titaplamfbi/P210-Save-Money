import React from "react";
import PropTypes from "prop-types";
import dashboardImg from "../../../assets/img/card.png";
import "./dashboard.scss";
Dashboard.propTypes = {};

function Dashboard(props) {
  return (
    <section className="dashboard">
      <div className="container">
        <div className="dashboard-flex">
          <img src={dashboardImg} alt="" className="dashboard__img" />
          <div className="dashboard-content">
            <div className="dashboard-box-info">
              <h4 className="dashboard__title">
                Handoff your work <span>smarter now</span>
              </h4>
              <p className="dashboard__des">
                <span>Create documentation for the collaborators (i.e.</span>
                designers or devs) directly in your design file.
              </p>
            </div>
            <div className="dashboard-box-des">
              <div className="dashboard-box-des-info">
                <i className="fas fa-book box-des-info__icon"></i>
                <div className="box-des-info-text">
                  <p className="box-des-info-title">Stagetic</p>
                  <p className="box-des-info-desc">
                    <span>Suggests that the component spacing</span>between
                    cards and elements.
                  </p>
                </div>
              </div>
              <div className="dashboard-box-des-info">
                <i className="far fa-calendar-alt box-des-info__icon"></i>
                <div className="box-des-info-text">
                  <p className="box-des-info-title">Work schedule</p>
                  <p className="box-des-info-desc">
                    <span>work schedule is the time an employee is </span>
                    expected to be on the job
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
