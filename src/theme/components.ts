import { Components, Theme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

export const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        ...typography.button,
        borderRadius: "8px",
        textDecoration: "none",
        textTransform: "capitalize",
        fontSize: "1rem",
      },
    },
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          borderRadius: "100px",
          minWidth: "160px",
          border: `2px solid ${palette.button.primary.main}`,
          backgroundColor: palette.button.primary.main,
          boxShadow: "none",

          ":hover": {
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
            boxShadow: "none",
          },
          ":focus": {
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
            outline: "none",
          },
          ":disabled": {
            color: palette.text.primary,
            backgroundColor: "transparent",
            opacity: 0.5,
          },
        },
      },
      {
        props: { variant: "outlined", color: "primary" },
        style: {
          borderRadius: "100px",
          minWidth: "160px",
          color: palette.text.primary,
          border: `2px solid ${palette.button.primary.main}`,
          backgroundColor: "transparent",
          ":hover": {
            color: palette.text.primary,
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
          },
          ":focus": {
            color: palette.text.primary,
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
            outline: "none",
          },
          ":disabled": {
            color: palette.text.primary,
            backgroundColor: "transparent",
            opacity: 0.5,
          },
        },
      },
    ],
  },
};
