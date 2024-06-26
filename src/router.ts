import { createBrowserRouter } from 'react-router-dom';

import AccountLayout from './layouts/AccountLayout';
import MainLayout from './layouts/MainLayout';
import { ROUTES } from './utils/constants/routes';
import PublicLayout from './layouts/PublicLayout';
import PrivateRoute from './routes/PrivateRoute';
import RestrictedRoute from './routes/RestrictedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      // Public layout with opened pages
      {
        path: '',
        Component: PublicLayout,
        children: [
          {
            index: true,
            lazy: async () => {
              const Home = await import('./pages/Home');
              return { Component: Home.default };
            },
          },

          {
            path: ROUTES.pets,
            lazy: async () => {
              const Pets = await import('./pages/Pets');
              return { Component: Pets.default };
            },
          },
          {
            path: ROUTES.aboutUs,
            lazy: async () => {
              const AboutUs = await import('./pages/AboutUs');
              return { Component: AboutUs.default };
            },
          },
          {
            path: ROUTES.partners,
            lazy: async () => {
              const Partners = await import('./pages/Partners');
              return { Component: Partners.default };
            },
          },

          {
            path: ROUTES.signup,
            Component: RestrictedRoute,
            children: [
              {
                path: '',
                lazy: async () => {
                  const SignUp = await import('./pages/SignUp');
                  return { Component: SignUp.default };
                },
              },
            ],
          },

          {
            path: ROUTES.login,
            Component: RestrictedRoute,
            children: [
              {
                path: '',
                lazy: async () => {
                  const Login = await import('./pages/Login');
                  return { Component: Login.default };
                },
              },
            ],
          },
        ],
      },

      // Account layout - private route
      {
        path: ROUTES.account,
        Component: PrivateRoute,
        children: [
          {
            path: '',
            Component: AccountLayout,
            children: [
              {
                index: true,
                lazy: async () => {
                  const Profile = await import('./pages/Profile');
                  return { Component: Profile.default };
                },
              },
              {
                path: ROUTES.myNotices,
                lazy: async () => {
                  const MyNotices = await import('./pages/MyNotices');
                  return { Component: MyNotices.default };
                },
              },
              {
                path: ROUTES.myPets,
                lazy: async () => {
                  const MyPets = await import('./pages/MyPets');
                  return { Component: MyPets.default };
                },
              },
            ],
          },
        ],
      },

      // Notice form -private route
      {
        path: ROUTES.noticeForm,
        Component: PrivateRoute,
        children: [
          {
            path: '',
            lazy: async () => {
              const NoticeForm = await import('./pages/NoticeForm');
              return { Component: NoticeForm.default };
            },
          },
        ],
      },
    ],
  },
]);
