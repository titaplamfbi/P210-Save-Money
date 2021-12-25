import React from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "../header";
import HomeAdmin from "../home";
import SideNav from "../SideNav";
import FooterAdmin from "../footer";

AdminHomePage.propTypes = {};

function AdminHomePage(props) {
  return (
    <>
      <HeaderAdmin />
      <HomeAdmin />
      <SideNav />
      <FooterAdmin />
    </>
  );
}

export default AdminHomePage;
