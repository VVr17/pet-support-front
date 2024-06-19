/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

import useResponsive from "@/hooks/useResponsive";

import ErrorMessage from "../ErrorMessage";
import { TextareaAutosize } from "./TextareaAutosize.styled";

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const TextArea: React.FC<IProp> = ({ control, name, placeholder }) => {
  const isMobile = useResponsive("down", "md");
  const isTablet = useResponsive("between", "md", "lg");

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
            minRows={isMobile ? 5 : isTablet ? 6 : 8}
            maxRows={isTablet ? 6 : 8}
            style={{
              fontSize: `${isMobile ? "1rem" : "1.125rem"}`,
            }}
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
