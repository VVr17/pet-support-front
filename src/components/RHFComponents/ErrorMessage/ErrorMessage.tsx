import { FormHelperText } from "@mui/material";
import React from "react";

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return (
    <FormHelperText
      sx={{
        position: "absolute",
        bottom: "-16px",
        left: 0,
        zIndex: 50,
        fontSize: "0.625rem",
        color: "#D32F2F",
      }}
    >
      {message}
    </FormHelperText>
  );
};

export default ErrorMessage;
