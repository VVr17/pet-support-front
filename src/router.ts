import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./utils/constants/routes";

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
        path: ROUTES.pets,
        lazy: async () => {
          const Pets = await import("./pages/Pets");
          return { Component: Pets.default };
        },
      },
      {
        path: ROUTES.aboutUs,
        lazy: async () => {
          const AboutUs = await import("./pages/AboutUs");
          return { Component: AboutUs.default };
        },
      },
      {
        path: ROUTES.partners,
        lazy: async () => {
          const Partners = await import("./pages/Partners");
          return { Component: Partners.default };
        },
      },
      {
        path: ROUTES.login,
        lazy: async () => {
          const Login = await import("./pages/Login");
          return { Component: Login.default };
        },
      },
      {
        path: ROUTES.account,
        lazy: async () => {
          const Account = await import("./pages/Account");
          return { Component: Account.default };
        },
      },
    ],
  },
]);
