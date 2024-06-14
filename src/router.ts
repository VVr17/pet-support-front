import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        lazy: async () => {
          const Home = await import("./pages/Home");
          return { Component: Home.default };
        },
      },
      {
        path: "/pets",
        lazy: async () => {
          const Solutions = await import("./pages/Pets");
          return { Component: Solutions.default };
        },
      },
    ],
  },
]);
