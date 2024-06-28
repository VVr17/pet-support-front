import { Box, Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router';

import Loader from '@/components/ui-kit/Loader';
import { drawerWidth } from '@/utils/constants/account';

import AccountHeader from '../AccountHeader';
import AccountSideBar from '../AccountSideBar';
import Footer from '../Footer';
import { containerStyles, getMainContentStyles, wrapperStyles } from './styles';

const AccountLayout = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
            sx={getMainContentStyles(desktopOpen, drawerWidth)}
          >
            <Suspense fallback={<Loader open={true} />}>
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
