/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, FormControl, useTheme } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { MuiTelInput } from "mui-tel-input";

import ErrorMessage from "../ErrorMessage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IProp {
  control: Control<any>;
  name: string;
  placeholder: string;
}

const PhoneInput: React.FC<IProp> = ({ control, name, placeholder }) => {
  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { onChange, value, ...otherFields } = field;

        return (
          <FormControl
            component="label"
            error={!!fieldState.error}
            sx={{ position: "relative", width: "100%" }}
          >
            <MuiTelInput
              {...otherFields}
              value={value}
              onChange={(value) => {
                onChange(value);
              }}
              defaultCountry="US"
              sx={{
                "& .MuiTouchRipple-root": {
                  display: "none",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#e5e5e5",
                    borderRadius: "8px",
                  },
                  "& input": {
                    borderLeft: "1px solid #e5e5e5",
                  },
                  "& input::placeholder": {
                    color: theme.palette.grey[400],
                    opacity: 1,
                  },
                },

                "& .MuiPaper-root": {
                  maxHeight: "200px",
                  overflowY: "scroll",
                },

                "& .MuiInputBase-root": {
                  pl: 0,
                },
                "& .MuiIconButton-root": {
                  borderRadius: 0,
                  pr: 2.5,
                },
                "& .MuiIconButton-root:hover": {
                  borderRadius: 0,
                },

                "& .MuiTelInput-Flag": {
                  width: 24,
                  height: 24,
                  borderRadius: 100,
                  overflow: "hidden",
                },

                "& .MuiTelInput-Flag img": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
              }}
              placeholder={placeholder}
              inputProps={{
                style: {
                  padding: "12px",
                  fontSize: "1.125rem",
                  fontWeight: 500,
                  fontFamily: '"Mulish",sans-serif',
                },
              }}
            />
            <Box
              position="absolute"
              sx={{
                top: "50%",
                left: "32px",
                transform: "translateY(-50%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
              width={24}
              height={24}
            >
              <KeyboardArrowDownIcon />
            </Box>
            {fieldState.error?.message && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default PhoneInput;
