
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles, ThemeProvider } from "@mui/material";

import { RouterProvider } from "react-router-dom";
import { globalStyles } from "./theme/globalStyles";
import { router } from "./router";
import { theme } from "./theme";
import "./theme/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
