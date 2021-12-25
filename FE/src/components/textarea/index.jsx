import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

TextareaCustom.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function TextareaCustom(props) {
  const { form, name, label, disabled } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <TextField
          margin="normal"
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disabled}
          margin="dense"
          className="textfield"
          fullWidth
          InputLabelProps={{ className: "textfield_label" }}
        />
      )}
    ></Controller>
  );
}

export default TextareaCustom;
