import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Footer from '../Footer';
import Header from '../MainHeader';

const PublicLayout = () => {
  return (
    <>
      <Header />

      <Box component="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};

export default PublicLayout;
