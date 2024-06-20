import { Divider, Drawer, Toolbar } from "@mui/material";
import * as React from "react";

import AccountNav from "@/components/Navigation/AccountNav";
import useResponsive from "@/hooks/useResponsive";

import { DesktopDrawerStyled } from "./AccountSideBar.styled";
import { desktopDrawerStyles, mobileDrawerStyles } from "./styles";

interface ISideBarProps {
  desktopOpen: boolean;
  mobileOpen: boolean;
  drawerWidth: number;
  handleMobileDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

const AccountSideBar: React.FC<ISideBarProps> = ({
  desktopOpen,
  drawerWidth,
  handleMobileDrawerClose,
  mobileOpen,
  handleDrawerTransitionEnd,
}) => {
  const isLargeDesktop = useResponsive("up", "lg");

  return (
    <>
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleMobileDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={mobileDrawerStyles}
      >
        <Toolbar />
        <Divider />
        <AccountNav />
      </Drawer>

      {/* Desktop  drawer*/}
      <DesktopDrawerStyled
        variant="permanent"
        open={!isLargeDesktop ? desktopOpen : true}
        sx={desktopDrawerStyles}
        drawerwidth={drawerWidth}
      >
        <AccountNav desktopOpen={desktopOpen} />
      </DesktopDrawerStyled>
    </>
  );
};

export default AccountSideBar;
