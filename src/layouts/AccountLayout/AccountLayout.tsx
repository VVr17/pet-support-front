import { Container } from '@mui/material';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router';

import { authHeader } from '@/api/config';
import { useUser } from '@/hooks/useQuery/useUser';
import { useUserStore } from '@/store/useUserStore';
import { drawerWidth } from '@/utils/constants/account';
import { JWT_TOKEN_KEY } from '@/utils/constants/localStorageKeys';

import AccountHeader from '../AccountHeader';
import AccountSideBar from '../AccountSideBar';
import Footer from '../Footer';
import { containerStyles, wrapperStyles } from './styles';

const AccountLayout = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { refetch } = useUser();
  const { setUser, setToken } = useUserStore();

  const toggleDesktopDrawer = () => {
    setDesktopOpen(prevState => !prevState);
  };

  const toggleMobileDrawer = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMobileDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  // Fetch current User is there is token and it is valid
  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem(JWT_TOKEN_KEY);

      if (storedToken) {
        const storedData = JSON.parse(storedToken);
        const token = storedData.state.token;

        if (token) {
          authHeader.setAuthToken(token); // Add Auth token to axios headers
        }
      }

      try {
        const user = await refetch();

        if (!user.data) {
          throw new Error('Invalid token');
        }
        setUser(user.data);
      } catch (error) {
        // If there is no User data (in case there is not Token or it is expired) delete Auth token from Axios Config and Local Storage
        console.error('Token is invalid or expired', error);
        localStorage.removeItem(JWT_TOKEN_KEY); // Remove token from Local Storage
        authHeader.deleteAuthToken(); // Delete Auth token from axios headers
        setUser(null);
        setToken(null);
      }
    };

    checkToken();
  }, [refetch, setUser, setToken]);

  return (
    <>
      <CssBaseline />
      <AccountHeader
        drawerWidth={drawerWidth}
        desktopOpen={desktopOpen}
        toggleMobileDrawer={toggleMobileDrawer}
        toggleDesktopDrawer={toggleDesktopDrawer}
      />
      <Divider sx={{ display: { xs: 'none', md: 'block' } }} />
      <Box bgcolor="background.secondary" sx={wrapperStyles}>
        <Container sx={containerStyles} maxWidth="xl">
          <AccountSideBar
            drawerWidth={drawerWidth}
            desktopOpen={desktopOpen}
            mobileOpen={mobileOpen}
            handleMobileDrawerClose={handleMobileDrawerClose}
            handleDrawerTransitionEnd={() => setIsClosing(false)}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: { xs: 0, md: 3 },
            }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AccountLayout;
