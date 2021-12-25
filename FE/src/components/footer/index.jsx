import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
import IframeFB from "../facebookPage";
Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-menu">
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                ABOUT
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                HOW IT WORKS
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                CONTACT
              </a>
            </li>
          </ul>

          <IframeFB></IframeFB>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
