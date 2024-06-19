import { GlobalStyles, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { theme } from "./theme";
import { globalStyles } from "./theme/globalStyles";

const App = () => {
  // React query client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <GlobalStyles styles={globalStyles} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
