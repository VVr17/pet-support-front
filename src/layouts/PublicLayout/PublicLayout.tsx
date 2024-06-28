import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Loader from '@/components/ui-kit/Loader';

import Footer from '../Footer';
import Header from '../MainHeader';

const PublicLayout = () => {
  return (
    <>
      <Header />

      <Box component="main">
        <Suspense fallback={<Loader open={true} />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};

export default PublicLayout;
