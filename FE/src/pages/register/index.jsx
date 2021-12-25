import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import RegisterForm from "./form";
import Footer from "../../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Register.propTypes = {
  onSubmit: PropTypes.func,
};

function Register(props) {
  const url = "http://localhost:5000/user/register";
  const handleRegisterFormSubmit = async (value) => {
    const newValue = {
      role: 0,
      ...value,
    };
    axios
      .post(url, newValue)
      .then((res) => {
        toast.success(res.data.msg);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  return (
    <div>
      <Header />
      <RegisterForm onSubmit={handleRegisterFormSubmit}></RegisterForm>
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

export default Register;
