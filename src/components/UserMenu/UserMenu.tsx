import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { authHeader } from '@/api/config';
import fallbackAvatarUrl from '@/assets/images/avatar.jpg';
import { useUserStore } from '@/store/useUserStore';
import { ROUTES } from '@/utils/constants/routes';
import { useUser } from '@/hooks/useQuery/useUser';

const UserMenu = () => {
  const { setUser, setToken } = useUserStore();
  const { data: user } = useUser();
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
    authHeader.deleteAuthToken();
    setUser(null);
    setToken(null);
    navigate(ROUTES.login);
    handleCloseUserMenu();
  };

  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Tooltip title="Open user menu">
          <IconButton
            aria-label="user menu"
            onClick={handleOpenUserMenu}
            sx={{ p: 0 }}
          >
            <Avatar
              alt="Avatar"
              src={user?.photoURL ? user?.photoURL : fallbackAvatarUrl}
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
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
    </>
  );
};

export default UserMenu;
