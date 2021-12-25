import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Controller } from "react-hook-form";
import "./style.scss";

function SelectMonth(props) {
  return (
    <div className="full-Width">
      <Controller
        render={({ field }) => {
          return (
            <Select
              options={[
                { value: "afghan", label: "1 Month" },
                { value: "albanian", label: "3 Months" },
                { value: "algerian", label: "6 Months" },
                { value: "algerian", label: "12 Months" },
                { value: "algerian", label: "Unlimited deposit" },
              ]}
              onChange={({ value }) => {
                field.onChange(value);
              }}
              value={{ value: field.value, label: field.value }}
              autosize={false}
              menuPlacement="auto"
              menuPosition="fixed"
            />
          );
        }}
      />
    </div>
  );
}

export default SelectMonth;
