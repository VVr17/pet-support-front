import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "@/components/ui-kit/Logo";
import { useUser } from "@/hooks/useQuery/useUser";
import { useUserStore } from "@/store/useUserStore";
import { mainNavigation, ROUTES } from "@/utils/constants/routes";

import {
  closeIconButtonStyles,
  linkListStyles,
  mobileMenuDrawerStyles,
  mobileMenuLinkStyles,
  mobileMenuLinkTextStyles,
} from "./styles";
import UserMenu from "./UserMenu";

interface IMobileNavProps {
  type: "dark" | "light";
}

const MobileNav: React.FC<IMobileNavProps> = ({ type }) => {
  const { user } = useUserStore();
  const { isPending } = useUser();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Logo type={type === "light" ? "dark" : "light"} onClick={() => {}} />
        </Box>
        <Box display="flex" gap={3}>
          {/* Show User menu if user is logged in */}
          {!isPending && user && <UserMenu />}

          {/* Burger menu button */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
            sx={{ color: type === "light" ? "text.primary" : "primary.main" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile nav menu */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: false,
        }}
        anchor="right"
        sx={mobileMenuDrawerStyles}
      >
        <IconButton
          aria-label="close"
          onClick={toggleDrawer(false)}
          sx={closeIconButtonStyles}
        >
          <CloseIcon />
        </IconButton>

        <List sx={linkListStyles}>
          {mainNavigation.map(({ href, label }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton
                onClick={toggleDrawer(false)}
                component={NavLink}
                to={href}
                sx={mobileMenuLinkStyles}
              >
                <ListItemText primary={label} sx={mobileMenuLinkTextStyles} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Show log in button if user isn't logged in */}
        {!isPending && !user && (
          <Button
            onClick={toggleDrawer(false)}
            variant="contained"
            sx={{ width: 240, mx: "auto" }}
            component={Link}
            to={ROUTES.login}
          >
            Log in
          </Button>
        )}
      </Drawer>
    </>
  );
};

export default MobileNav;
