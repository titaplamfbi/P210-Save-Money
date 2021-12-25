import React from "react";
import PropTypes from "prop-types";
import "./adminLogin.scss";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/InputField";
import InputPasswordField from "../../../../components/passwordInput";
LoginFormAdmin.propTypes = {};

function LoginFormAdmin(props) {
  const schema = yup
    .object({
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup.string().required("Please enter your password"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
    }
    form.reset();
  };
  return (
    <div className="login-page">
      <div className="login-logo">
        <h4>
          <b>Admin</b>LTE
        </h4>
      </div>
      <div className="login-box-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="form-login">
            <InputField name="email" label="Email" form={form} required />
            <br />
            <InputPasswordField
              name="password"
              label="Password"
              form={form}
              required
            />
          </div>
          <div className="checkbox" style={{ marginTop: "20px" }}>
            <input
              className="styled-checkbox"
              id="styled-checkbox-2"
              type="checkbox"
            />
            <label for="styled-checkbox-2">Remember me</label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button variant="outlined" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormAdmin;
