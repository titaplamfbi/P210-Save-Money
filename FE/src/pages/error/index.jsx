import React from "react";
import PropTypes from "prop-types";
import "./error.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

ErrorPage.propTypes = {};

function ErrorPage(props) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div class="container">
        <div class="error">
          <p class="error-number">404</p>
          <p class="error-title">Oops! Something wrong…</p>
          <p class="error-desc">
            Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            faucibus mollis interdum.
          </p>
        </div>
        <div class="button-box">
          <button class="btn btn-back" onClick={() => navigate(-1)}>
            GO BACK
          </button>
          <Link to="/home" class="btn">
            HOMEPAGE
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
