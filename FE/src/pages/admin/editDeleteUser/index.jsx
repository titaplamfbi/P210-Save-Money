import React from "react";
import PropTypes from "prop-types";

import HeaderAdmin from "../components/header";
import SideNav from "../components/SideNav";
import FooterAdmin from "../components/footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import EditDeleteForm from "./user";
EditDeleteUser.propTypes = {};

function EditDeleteUser(props) {
  const navigate = useNavigate();

  const handleEditFormSubmit = async (value) => {
    const url = `http://localhost:5000/user/updateuser/${value._id}`;

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
    <>
      <HeaderAdmin />
      <EditDeleteForm onSubmit={handleEditFormSubmit}></EditDeleteForm>
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

export default EditDeleteUser;
