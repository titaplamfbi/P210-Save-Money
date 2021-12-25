import React from "react";
import PropTypes from "prop-types";
import "./account.scss";
import { useForm } from "react-hook-form";
import storageKeys from "../../../constant/storage-keys";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextAccField from "../../../components/textfield";
import DatePickerCustom from "../../../components/datePicker";
import InputPasswordField from "../../../components/passwordInput";

AccountForm.propTypes = {};

function AccountForm(props) {
  const data = JSON.parse(localStorage.getItem(storageKeys.USER));
  let check = false;
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Please enter your email"),
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
      carddate: yup.date(),
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
      email: data.email,
      newPassword: "",
      name: data.name,
      reNewPassword: "",
      gender: data.gender,
      dob: new Date(data.dob),
      phonenumber: data.phonenumber,
      nationalid: data.nationalid,
      creditcard: data.creditcard,
      carddate: new Date(data.carddate),
      creditcardbrand: data.creditcardbrand,
      passportid: data.passportid,
      nationality: data.nationality,
      address: data.address,
    },
    resolver: yupResolver(schema),
  });
  const showChangePass = () => {
    const boxChange = document.querySelector(".changepass-box");
    const textChange = document.querySelector("#pass-change");
    const textHide = document.querySelector("#pass-hide");
    boxChange.classList.remove("hide");
    textChange.classList.add("hide");
    textHide.classList.remove("hide");
    check = true;
  };
  const hideChangePass = () => {
    const boxChange = document.querySelector(".changepass-box");
    const textChange = document.querySelector("#pass-change");
    const textHide = document.querySelector("#pass-hide");
    boxChange.classList.add("hide");
    textChange.classList.remove("hide");
    textHide.classList.add("hide");
    check = false;
  };
  const handleSubmit = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      if (check === false) {
        //submit ko thay đổi password
        delete value.reNewPassword;
        delete value.newPassword;

        onSubmit(value);
      } else {
        //check pass
        if (
          value.newPassword.length >= 6 &&
          value.reNewPassword === value.newPassword
        ) {
          const password = value.newPassword;
          delete value.newPassword;
          delete value.reNewPassword;
          const newValue = {
            password: password,
            ...value,
          };

          onSubmit(newValue);
        }
      }
    }
    form.reset();
  };
  return (
    <div className="container">
      <h1 className="account-title">Account Infomation</h1>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="account">
          <div className="account-left">
            <form>
              <TextAccField name="name" label="FullName" form={form} required />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField name="gender" label="Gender" form={form} required />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <div className="date-box flex-center">
                <p className="date-box-text">Date of birth:</p>
                <DatePickerCustom name="dob" form={form} />
              </div>
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="email"
                label="Email"
                form={form}
                required
                type="email"
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>

              <TextAccField
                name="phonenumber"
                label="Phone"
                form={form}
                required
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="address"
                label="Address"
                form={form}
                required
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="creditcard"
                label="Card Number"
                form={form}
                required
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="creditcardbrand"
                label="Issued By"
                form={form}
                required
              />
            </form>
          </div>
          <div className="account-right">
            <form>
              <div className="date-box flex-center">
                <p className="date-box-text">Date for card:</p>
                <DatePickerCustom
                  name="carddate"
                  dateFormat={"MM/yyyy"}
                  form={form}
                />
              </div>
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="passportid"
                label="Passport"
                form={form}
                required
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="nationality"
                label="Nationally"
                form={form}
                required
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <TextAccField
                name="nationalid"
                label="ID Card"
                form={form}
                required
              />
              <div
                style={{
                  margin: "20px 0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#48df99",
                }}
              ></div>
              <label for="">Balanced</label>
              <input
                type="text"
                className="account-input"
                value={data.balanced}
                readonly=""
              ></input>
              <span
                className="pass-change"
                onClick={showChangePass}
                id="pass-change"
              >
                Change password
              </span>
              <span
                className="pass-change hide"
                id="pass-hide"
                onClick={hideChangePass}
              >
                Hide Change Password
              </span>
              <br />
              <div className="changepass-box hide">
                <InputPasswordField
                  name="newPassword"
                  label="New Password"
                  form={form}
                  required
                />
                <div
                  style={{
                    margin: "20px 0",
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#48df99",
                  }}
                ></div>
                <InputPasswordField
                  name="reNewPassword"
                  label="Retype New Password"
                  form={form}
                  required
                />
              </div>
            </form>
            <div className="account-box-submit">
              <button type="submit" className="btn-change">
                Save Change
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccountForm;
