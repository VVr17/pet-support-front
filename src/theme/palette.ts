import { alpha } from "@mui/material/styles";

export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

declare module "@mui/material/styles/createPalette" {
  interface Theme {
    button: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
      };
    };
  }
  interface TypeBackground {
    neutral: string;
  }
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

export const PRIMARY = {
  light: "#fddcc4",
  main: "#F1CDB3",
  dark: "#edc1a1",
};

export const SECONDARY = {
  light: "#7d6859",
  main: "#5B483A",
  dark: "#453529",
};

export const palette = {
  common: { black: "#000", white: "#fff" },

  primary: PRIMARY,
  secondary: SECONDARY,
  grey: GREY,

  text: {
    primary: "#545454", // dark-grey/ black color
    secondary: "#292929", // Grey color
    light: "#CDCDCD", // White color
    accent: "#F1CDB3",
  },

  background: {
    paper: "#fff",
    secondary: "#fafafa",
  },

  divider: alpha(GREY[500], 0.24),

  button: {
    primary: {
      light: PRIMARY.light,
      main: PRIMARY.main,
      dark: PRIMARY.dark,
    },
    secondary: {
      light: "#fcdc58",
      main: "#FFCC00",
      dark: "#d4ab08",
    },
  },

  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    active: GREY[600],
  },
};
