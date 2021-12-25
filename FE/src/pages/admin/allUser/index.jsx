import React from "react";
import PropTypes from "prop-types";
import UserTable from "./user";
import HeaderAdmin from "../components/header";
import SideNav from "../components/SideNav";
import FooterAdmin from "../components/footer";
AllUsers.propTypes = {};

function AllUsers(props) {
  return (
    <>
      <HeaderAdmin />
      <UserTable />
      <SideNav />
      <FooterAdmin />
    </>
  );
}

export default AllUsers;
