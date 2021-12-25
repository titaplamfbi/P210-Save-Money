import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/logo.png";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/userSlice/userSlice";

// import "../../main.scss";
Header.propTypes = {};

function Header(props) {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.email;
  const dispatch = useDispatch();
  const handleLogOut = () => {
    const action = logout();
    dispatch(action);
    navigate(0);
  };
  return (
    <header className="header header-pink">
      <div className="container">
        <div className="navbar">
          <Link className="navbar-logo" to="/home">
            <img src={logo} alt="" className="navbar-logo__img" />
            <p className="navbar-logo__text text-green">Save Money</p>
          </Link>
          <ul className="navbar__list">
            <li className="navbar__list-item">
              <Link to="/" className="list-item-link text-white">
                ABOUT
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link to="/" className="list-item-link text-white">
                HOW IT WORKS
              </Link>
            </li>
            <li className="navbar__list-item">
              <Link to="/" className="list-item-link text-white">
                CONTACT
              </Link>
            </li>
          </ul>
          {!isLoggedIn && (
            <div className="login-box">
              <Link to="/register" className="login-box__register text-green">
                Register Now
              </Link>
              <Link to="/login" className="btn btn-login bkg-green">
                LOGIN
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <div className="user-login">
              <p className="user-login__name text-green">{loggedInUser.name}</p>
              <i className="fas fa-sort-down user-login__icon text-green" />
              <div className="user-info">
                <Link to="/account" className="user-info__link">
                  My Account
                </Link>
                <Link to="/profit" className="user-info__link">
                  Check Profit
                </Link>
                <a onClick={handleLogOut} className="user-info__link">
                  Sign Out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
