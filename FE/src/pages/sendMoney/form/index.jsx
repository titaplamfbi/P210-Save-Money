import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "./sendMoney.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import SelectMonth from "../../../components/selectMonth";
import { Link } from "react-router-dom";
SendMoneyForm.propTypes = {};

function SendMoneyForm(props) {
  const [userName, setUserName] = useState("");
  const [Amount, setAmount] = useState("");
  const [Duaration, setDuation] = useState(30);

  const changeUserName = function (e) {
    setUserName(e.target.value);
  };

  const changeAmount = function (e) {
    setAmount(e.target.value);
  };

  const getMonth = function (e) {
    const value = e.target.value;
    const rsDuaration = +value * 30;
    setDuation(rsDuaration);
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));
  console.log("USER", currentUser);

  const saveData = async function () {
    const data = {
      userID: currentUser._id,
      duration: Duaration + "",
      balanced: Amount,
      accesstoken: currentUser.jwt,
    };

    const url = "http://localhost:5000/saving/";
    const response = await axios
      .post(url, data)
      .catch((err) => console.log(err));
    console.log(response);
    if (response) {
      console.log("RSDATA", response);
    }
    document.location.href = "/profit";
  };
  return (
    <div className="banner-send">
      <div className="container">
        <div className="send-contact">
          <h1 className="send-contact__title">
            <span>
              Look after the pennies
              <span> and the pounds </span>
              <span> will look after </span>
              themselves
            </span>
          </h1>
          <div className="send-box">
            <p className="send-box__title">How much do you want ?</p>
            <form>
              <div>
                <label for="name"> Name </label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={changeUserName}
                  className="input-sendMoney"
                />
              </div>
              <div>
                <label for="money"> Amount </label>
                <input
                  type="text"
                  id="money"
                  value={Amount}
                  onChange={changeAmount}
                  className="input-sendMoney"
                />
              </div>
              <p className="dropdown-title">How long for:</p>
              <select className="dropdown-select" onChange={getMonth}>
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
              </select>
              <button type="submit" onClick={saveData} className="btn-send">
                Confirm
              </button>
              {/* <SelectMonth /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoneyForm;
