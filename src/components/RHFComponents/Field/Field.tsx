/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

import ErrorMessage from "../ErrorMessage";
import { inputStyles } from "./styles";

interface IProp extends Omit<TextFieldProps, "name"> {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const Field: React.FC<IProp> = ({ control, name, placeholder, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FormControl
            component="label"
            error={!!fieldState.error}
            sx={{ position: "relative", width: "100%" }}
          >
            <TextField
              {...field}
              placeholder={placeholder}
              variant="outlined"
              sx={inputStyles}
              {...props}
            />
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default Field;
