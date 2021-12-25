import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import SendMoneyForm from "./form";
import SendContent from "./send-content";
import Footer from "../../components/footer";

SendMoney.propTypes = {};

function SendMoney(props) {
  return (
    <div>
      <Header></Header>
      <SendMoneyForm></SendMoneyForm>
      <SendContent />
      <Footer />
    </div>
  );
}

export default SendMoney;
