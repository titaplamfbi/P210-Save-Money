import React from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "../components/header";
import SideNav from "../components/SideNav";
import FooterAdmin from "../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AddUserForm from "./form";
AddUser.propTypes = {};

function AddUser(props) {
  const navigate = useNavigate();
  const url = "http://localhost:5000/user/register";
  const handleAddUserFormSubmit = async (value) => {
    const newValue = {
      role: 0,
      ...value,
    };
    console.log("form submit", newValue);
    axios
      .post(url, newValue)
      .then((res) => {
       
        toast.success(res.data.msg);
        navigate(0);
      })
      .catch((err) => {

        toast.error(err.response.data.msg);
      });
  };
  return (
    <>
      <HeaderAdmin />
      <AddUserForm onSubmit={handleAddUserFormSubmit}></AddUserForm>
      <SideNav />
      <FooterAdmin />
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

export default AddUser;
