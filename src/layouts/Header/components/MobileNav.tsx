/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { mainNavigation } from "@/utils/constants/routes";
import Logo from "@/components/ui-kit/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";

interface IMobileNavProps {
  type: "dark" | "light";
}

const MobileNav: React.FC<IMobileNavProps> = ({ type }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
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
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: false,
        }}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "text.secondary",
            color: "white",
            position: "fixed",
            right: 0,
            width: "100%",
            maxWidth: 320,
            py: 10,
            px: 3,
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={toggleDrawer(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mb: 5,
          }}
        >
          {mainNavigation.map(({ href, label }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton
                onClick={toggleDrawer(false)}
                component={Link}
                to={href}
              >
                <ListItemText
                  primary={label}
                  sx={{
                    "& .MuiTypography-root": {
                      color: "text.light",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button
          onClick={toggleDrawer(false)}
          variant="contained"
          sx={{ width: 240, mx: "auto" }}
        >
          Log in
        </Button>
      </Drawer>
    </>
  );
};

export default MobileNav;
