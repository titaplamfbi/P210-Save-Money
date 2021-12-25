import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import LoginForm from "./form";
import Footer from "../../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import storageKeys from "../../constant/storage-keys";
import { useNavigate } from "react-router-dom";
import { login } from "../../feature/userSlice/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
Login.propTypes = {
  onSubmit: PropTypes.func,
};

function Login(props) {
  const navigate = useNavigate();
  const url = "http://localhost:5000/user/login";
  const handleOnSubmit = async (value) => {
    axios
      .post(url, value)
      .then((res) => {
        localStorage.setItem(storageKeys.TOKEN, res.data.accesstoken);
        localStorage.setItem(storageKeys.USER, JSON.stringify(res.data.ruser));
        navigate("/home");
        navigate(0);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  return (
    <div>
      <Header />
      <LoginForm onSubmit={handleOnSubmit}></LoginForm>
      <Footer />
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
    </div>
  );
}

export default Login;
