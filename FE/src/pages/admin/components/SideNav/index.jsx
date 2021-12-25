import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import adminStorageKeys from "../../../../constant/admin-storage-keys";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avatar from "../../../../assets/img/avatar5.png";
import logo from "../../../../assets/img/AdminLTELogo.png";

SideNav.propTypes = {};

function SideNav(props) {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(adminStorageKeys.TOKEN);
    navigate(0);
  };
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ position: "fixed", left: 0 }}
    >
      <Link to="#" className="brand-link">
        <img
          src={logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={avatar}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Administrator
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink
                exact
                to="/admin/dashboard"
                activeClassName="active"
                className="nav-link "
              >
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>

            <li className="nav-item menu-is-opening menu-open">
              <NavLink
                exact
                activeClassName="active"
                to="/admin/allusers"
                className="nav-link"
              >
                <i className="nav-icon fas fa-th" />
                <p>
                  Users
                  <i class="right fas fa-angle-left"></i>
                </p>
              </NavLink>
              <ul className="nav nav-treeview" style={{ display: "block" }}>
                <li class="nav-item">
                  <Link
                    exact
                    to="/admin/allusers/add"
                    className="nav-link active"
                  >
                    <i class="nav-icon fas fa-user-plus"></i>
                    <p>Add User</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link exact to="/admin/allusers/edit" className="nav-link">
                    <i class="fas fa-edit nav-icon"></i>
                    <p>Edit/Delete User</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                exact
                to="/admin/profit"
                className="nav-link"
              >
                <i className="nav-icon fas fa-copy" />
                <p>Profit</p>
              </NavLink>
            </li>
          </ul>
          {/* log out */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <form>
              <Button variant="outlined" type="submit" onClick={logout}>
                Log out
              </Button>
            </form>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default SideNav;
