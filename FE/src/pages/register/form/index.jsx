import React from "react";
import PropTypes from "prop-types";
import "./register.scss";
import registerImg from "../../../assets/img/group-card.png";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import DatePickerCustom from "../../../components/datePicker";
import RadioGroupCustom from "../../../components/radioGroup";
import InputPasswordField from "../../../components/passwordInput";
import TextareaCustom from "../../../components/textarea";
import SelectCustom from "../../../components/select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Moment from "react-moment";

import "moment-timezone";
import { Link } from "react-router-dom";
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  let time = new Date();
  const schema = yup
    .object({
      username: yup.string().required("Please enter Username"),

      email: yup
        .string()
        .email("Invalid email format")
        .required("Please enter your email"),
      password: yup
        .string()
        .matches(/^.*(?=.{6,})/, "Password must contain at least 6 symbols")
        .required("Please enter your password"),
      rePassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      name: yup
        .string()
        .required("Please enter fullname")
        .test(
          "should has at least two words",
          "Please enter at least two words",
          (value) => value.split(" ").length >= 2
        ),
      gender: yup.string().required(),
      dob: yup
        .date()
        .max(
          new Date(Date.now() - 567648000000),
          "You must be at least 18 years"
        )
        .required("Required"),
      phonenumber: yup
        .string()
        .required("Please enter your phone number")
        .matches(/^[0-9]+$/, "Must be only digits"),
      nationalid: yup
        .string()
        .required("Please enter your ID number")
        .matches(/^[0-9]+$/, "Must be only digits"),
      creditcard: yup
        .string()
        .required("Please enter your card number")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(16, "Please enter full number")
        .max(19, "Wrong card number"),
      carddate: yup.date().min(
        new Date(Date.now() + 7889400), //ít nhất 3 tháng
        "You must be at least 18 years"
      ),
      creditcardbrand: yup.string().required("Please enter issued"),
      passportid: yup
        .string()
        .required("Please enter your passport number")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(8, "Please enter full number")
        .max(8, "Wrong passport number"),
      nationality: yup.string().required(),
      address: yup.string().required("Please enter address"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
      rePassword: "",
      gender: "",
      dob: time,
      phonenumber: "",
      nationalid: "",
      creditcard: "",
      carddate: time,
      creditcardbrand: "",
      passportid: "",
      nationality: "",
      address: "",
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
            <img src={registerImg} alt="" className="register-img" />
            <h1 className="login-content__title">
              <span>Save money, </span>don’t you want to live A
              <span>more enjoyable life?</span>
            </h1>
          </div>
          <div className="register-box">
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <p className="login__title">Register</p>
              <p className="login__desc text-center">
                Register and start managing your bank!
              </p>
              <div className="flex-box">
                <InputField
                  name="username"
                  label="Username"
                  form={form}
                  required
                />
                <InputField name="email" label="Email" form={form} required />
              </div>
              <div className="flex-box">
                <InputPasswordField
                  name="password"
                  label="Password"
                  form={form}
                  required
                />
                <InputPasswordField
                  name="rePassword"
                  label="Re-password"
                  form={form}
                  required
                />
              </div>
              <div className="flex-box">
                <InputField
                  name="name"
                  label="Full Name"
                  form={form}
                  required
                />
                <div className="gender-box">
                  <p>Gender:</p>
                  <RadioGroupCustom name="gender" form={form} />
                </div>
              </div>

              <div className="flex-box">
                <div className="date-box ">
                  <p className="date-box-text">Date of birth:</p>
                  <DatePickerCustom name="dob" form={form} />
                </div>
                <InputField
                  name="phonenumber"
                  label="Phone Number"
                  form={form}
                  required
                />
              </div>

              <div className="flex-box">
                <InputField
                  name="nationalid"
                  label="ID Card"
                  form={form}
                  required
                />
                <InputField
                  name="creditcard"
                  label="Card Number"
                  form={form}
                  required
                />
              </div>
              <div className="flex-box">
                <InputField
                  name="creditcardbrand"
                  label="Issued by"
                  form={form}
                  required
                />
                <div className="date-box">
                  <p className="date-box-text ml-20">Date for card:</p>
                  <DatePickerCustom
                    name="carddate"
                    dateFormat={"MM/yyyy"}
                    form={form}
                  />
                </div>
              </div>
              <div className="flex-box">
                <InputField
                  name="passportid"
                  label="Passport"
                  form={form}
                  required
                />
                <div className="flex-box">
                  <p className="date-box-text">Nationality</p>
                  <SelectCustom name="nationality" form={form} />
                </div>
              </div>
              <TextareaCustom
                name="address"
                label="Address"
                form={form}
                required
              />
              <button
                type="submit"
                className="btn btn-sb-login mt-10"
                id="btn-login-submit"
              >
                Register
              </button>
              <p className="register-link">
                Already have account? <Link to="/login">Login Now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
