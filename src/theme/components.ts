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
      },
    },
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          borderRadius: "100px",
          minWidth: "200px",
          color: palette.common.black,
          border: `2px solid ${palette.button.primary.main}`,
          backgroundColor: palette.button.primary.main,
          boxShadow: "none",

          ":hover": {
            color: palette.common.black,
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
            boxShadow: "none",
          },
          ":focus": {
            color: palette.common.black,
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
            outline: "none",
          },
          ":disabled": {
            color: palette.common.black,
            backgroundColor: "transparent",
            opacity: 0.5,
          },
        },
      },
      {
        props: { variant: "outlined", color: "primary" },
        style: {
          borderRadius: "100px",
          minWidth: "200px",
          color: palette.common.black,
          border: `2px solid ${palette.button.primary.main}`,
          backgroundColor: "transparent",
          ":hover": {
            color: palette.common.black,
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
          },
          ":focus": {
            color: palette.common.black,
            border: `2px solid ${palette.button.primary.light}`,
            backgroundColor: palette.button.primary.light,
            outline: "none",
          },
          ":disabled": {
            color: palette.common.black,
            backgroundColor: "transparent",
            opacity: 0.5,
          },
        },
      },
    ],
  },

  MuiLink: {
    styleOverrides: {
      root: {
        color: palette.grey[800],
        textDecoration: "none",
        "&:hover": {
          color: palette.primary.dark,
        },
        "&:focus": {
          color: palette.primary.dark,
        },
      },
    },
  },
};
