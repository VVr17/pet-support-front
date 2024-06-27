import { GlobalStyles, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { theme } from './theme';
import { globalStyles } from './theme/globalStyles';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  // React query client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <React.StrictMode>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <GlobalStyles styles={globalStyles} />
          </QueryClientProvider>
        </ThemeProvider>
      </GoogleOAuthProvider>
    </React.StrictMode>
  );
};

export default App;
