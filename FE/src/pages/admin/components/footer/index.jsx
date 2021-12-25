import React from "react";
import PropTypes from "prop-types";

FooterAdmin.propTypes = {};

function FooterAdmin(props) {
  return (
    <footer className="main-footer">
      <strong>
        Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
      </strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0
      </div>
    </footer>
  );
}

export default FooterAdmin;
