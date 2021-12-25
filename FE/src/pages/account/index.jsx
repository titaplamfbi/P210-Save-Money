import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import AccountForm from "./form";
import Footer from "../../components/footer";
import storageKeys from "../../constant/storage-keys";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Account.propTypes = {};

function Account(props) {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem(storageKeys.USER));
  const url = `http://localhost:5000/user/updateuser/${data._id}`;
  const handleAccountFormSubmit = (value) => {
    axios
      .put(url, value)
      .then((res) => {
        toast.success(res.data.msg);
        navigate(0);
      })
      .catch((err) => {
        toast.error("Something wrongs");
      });
  };
  return (
    <div>
      <Header></Header>
      <AccountForm onSubmit={handleAccountFormSubmit}></AccountForm>
      <Footer></Footer>
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

export default Account;
