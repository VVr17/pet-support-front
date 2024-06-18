import { createTheme } from "@mui/material";

import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";

interface CustomShadowOptions {
  primary: string;
  secondary: string;
  card: string;
  resources: string;
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
    card: "0 8px 8px -4px rgba(16,24,40,.03),0 0 24px -4px rgba(16,24,40,.08)", // benefit card
    resources:
      "0 3.743859052658081px 3.743859052658081px -1.8719295263290405px rgba(16,24,40,.03),0 9.359647750854492px 11.231576919555664px -1.8719295263290405px rgba(16,24,40,.08)", // resources about-us card
  },
  components,
});
