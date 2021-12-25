import React from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "../components/header";
import SideNav from "../components/SideNav";
import FooterAdmin from "../components/footer";
import HistoryForm from "./form/index";
HistoryAllUser.propTypes = {};

function HistoryAllUser(props) {
  return (
    <>
      <HeaderAdmin />
      <HistoryForm />
      <SideNav />
      <FooterAdmin />
    </>
  );
}

export default HistoryAllUser;
