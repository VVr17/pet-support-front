import { createTheme } from "@mui/material";

import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";

interface CustomShadowOptions {
  primary: string;
  secondary: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

export const theme = createTheme({
  palette,
  typography,
  customShadows: {
    primary: "0 24px 48px -12px rgba(93,97,104,.1)", // L shadow
    secondary: "0 32px 64px -12px rgba(16,24,40,.14)", // XL shadow
  },
  components,
});
