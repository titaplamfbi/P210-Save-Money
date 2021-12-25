import React from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "../components/header";
import ProfitForm from "./form";
import SideNav from "../components/SideNav";
import FooterAdmin from "../components/footer";

Profit.propTypes = {};

function Profit(props) {
  return (
    <>
      <HeaderAdmin />
      <ProfitForm />
      <SideNav />
      <FooterAdmin />
    </>
  );
}

export default Profit;
