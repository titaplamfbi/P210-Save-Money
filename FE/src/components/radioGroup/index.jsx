import React from "react";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./style.scss";
import { Controller } from "react-hook-form";
RadioGroupCustom.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

function RadioGroupCustom(props) {
  const { form, name } = props;
  const { control } = form;
  return (
    <Controller
      render={({ field }) => (
        <RadioGroup aria-label="gender" {...field}>
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
        </RadioGroup>
      )}
      name={name}
      control={control}
    />
  );
}

export default RadioGroupCustom;
