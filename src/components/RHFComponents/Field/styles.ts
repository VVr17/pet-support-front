import { Theme } from "@mui/material";

export const inputStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e5e5e5",
      borderRadius: "12px",
    },
    "& input": {
      borderRadius: "12px",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingTop: "12px",
      paddingBottom: "12px",
    },
    "& input::placeholder": {
      color: (theme: Theme) => theme.palette.grey[400],
      opacity: 1,
    },
  },
};
