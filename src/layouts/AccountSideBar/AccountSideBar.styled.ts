import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { CSSObject, styled, Theme } from "@mui/material/styles";

interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
  drawerwidth: number;
}

const openedMixin = (theme: Theme, drawerwidth: number): CSSObject => ({
  width: drawerwidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DesktopDrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open, drawerwidth }) => ({
  width: drawerwidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, drawerwidth),
    "& .MuiDrawer-paper": openedMixin(theme, drawerwidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
