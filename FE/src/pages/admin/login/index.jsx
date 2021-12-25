import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LoginFormAdmin from "./form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import adminStorageKeys from "../../../constant/admin-storage-keys";
import AdminHomePage from "../components/homepage";
import { login } from "../../../feature/userSlice/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

LoginAdmin.propTypes = {};

function LoginAdmin(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const url = "http://localhost:5000/user/login";
  const handleOnSubmit = (value) => {
    axios
      .post(url, value)
      .then((res) => {
        //check role
        //role =1 (admin sẽ vào trang admin)
        if (res.data.ruser.role === 1) {
          localStorage.setItem(adminStorageKeys.TOKEN, res.data.accesstoken);
          toast.success("Welcome back Adminitrator");
          navigate(0);
        } else {
          toast.error("Access Denied");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  return (
    <>
      <LoginFormAdmin onSubmit={handleOnSubmit}></LoginFormAdmin>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default LoginAdmin;
