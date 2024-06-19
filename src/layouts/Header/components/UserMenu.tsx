import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

import fallbackAvatarUrl from "@/assets/images/avatar.jpg";
import { ROUTES } from "@/utils/constants/routes";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenAccount = () => {
    navigate(ROUTES.account);
    handleCloseUserMenu();
  };

  const signOut = () => {
    console.log("sign out");
    handleCloseUserMenu();
  };

  return (
    <Box>
      <Tooltip title="Open user menu">
        <IconButton
          aria-label="user menu"
          onClick={handleOpenUserMenu}
          sx={{ p: 0 }}
        >
          <Avatar alt="Avatar" src={fallbackAvatarUrl} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleOpenAccount}>
          <Typography textAlign="center">Account</Typography>
        </MenuItem>

        <MenuItem onClick={signOut}>
          <Typography textAlign="center">Sign Out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
