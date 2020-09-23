
import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";

export const FieldForm: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  label,
  type,
  field
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      {...field}
    />
  );
};