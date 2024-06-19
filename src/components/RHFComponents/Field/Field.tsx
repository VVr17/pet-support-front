/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, TextField, useTheme } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

import useResponsive from "@/hooks/useResponsive";

import ErrorMessage from "../ErrorMessage";
import { getInputStyles } from "./styles";

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const Field: React.FC<IProp> = ({ control, name, placeholder }) => {
  const isMobile = useResponsive("down", "md");
  const theme = useTheme();

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
              inputProps={{
                style: {
                  padding: "12px",
                  fontSize: `${isMobile ? "1rem" : "1.125rem"}`,
                  fontWeight: 500,
                },
              }}
              sx={getInputStyles(theme)}
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
