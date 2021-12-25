import React from "react";
import PropTypes from "prop-types";
import "./login.scss";
import card from "../../../assets/img/card1.png";
import { Link } from "react-router-dom";
import InputField from "../../../components/InputField";
import InputPasswordField from "../../../components/passwordInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

LoginForm.propTypes = {};

function LoginForm(props) {
  
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
    <div className="bkg-purple">
      <div className="container">
        <div className="login-content">
          <div className="login-content__img">
            <img src={card} alt="" className="login-img" />
            <h1 className="login-content__title">
              <span>It’s not about </span>how much money you make,
              <span>it’s how you much you</span>
              save it!
            </h1>
          </div>

          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <p className="login__title">Sign In</p>
            <p className="login__desc">Sign in and start managing your bank!</p>
            <div className="login-form">
              <div className="info-input-box">
                <InputField name="email" label="Email" form={form} required />
                <InputPasswordField
                  name="password"
                  label="Password"
                  form={form}
                  required
                />
              </div>
              <div className="remember-box">
                <div className="checkbox">
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-2"
                    type="checkbox"
                  />
                  <label for="styled-checkbox-2">Remember me</label>
                </div>
                <Link to="/" className="forgot-link">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn btn-sb-login"
                id="btn-login-submit"
              >
                Login
              </button>
              <p className="sign-up-link">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
