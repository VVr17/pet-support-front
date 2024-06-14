import { Suspense } from 'react';
import { Box } from '@mui/system';
import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = () => {
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

export default MainLayout;
