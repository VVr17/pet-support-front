/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

import ErrorMessage from "../ErrorMessage";
import { TextareaAutosize } from "./TextareaAutosize.styled";

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const TextArea: React.FC<IProp> = ({ control, name, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          component="label"
          error={!!fieldState.error}
          sx={{ position: "relative", width: "100%" }}
        >
          <TextareaAutosize
            {...field}
            placeholder={placeholder}
            aria-label={placeholder}
            minRows={6}
            maxRows={8}
          />
          {fieldState.error?.message && (
            <ErrorMessage message={fieldState.error.message} />
          )}
        </FormControl>
      )}
    />
  );
};

export default TextArea;
