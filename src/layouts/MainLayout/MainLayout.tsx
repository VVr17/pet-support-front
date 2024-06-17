import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Header />

      <Box component="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </QueryClientProvider>
  );
};

export default MainLayout;
