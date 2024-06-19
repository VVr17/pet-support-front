import { Theme } from "@mui/material";

export const getInputStyles = (theme: Theme) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e5e5e5",
      borderRadius: "8px",
    },
    "& input::placeholder": {
      color: theme.palette.grey[400],
      opacity: 1,
    },
  },
});
