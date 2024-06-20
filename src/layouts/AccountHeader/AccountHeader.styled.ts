import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: number;
}

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  maxWidth: "1200px",
  height: "fit-content",
  background: "white",
  boxShadow: "none",
  color: "text.primary",

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerwidth - 64.5,
      width: `calc(100% - ${drawerwidth - 64.5}px)`,
    },

    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "100%",
    },

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
