import { createBrowserRouter } from 'react-router-dom';

import AccountLayout from './layouts/AccountLayout';
import MainLayout from './layouts/MainLayout';
import { ROUTES } from './utils/constants/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
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
        lazy: async () => {
          const SignUp = await import('./pages/SignUp');
          return { Component: SignUp.default };
        },
      },
      {
        path: ROUTES.login,
        lazy: async () => {
          const Login = await import('./pages/Login');
          return { Component: Login.default };
        },
      },
    ],
  },

  {
    path: ROUTES.account,
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

  {
    path: ROUTES.noticeForm,
    lazy: async () => {
      const NoticeForm = await import('./pages/NoticeForm');
      return { Component: NoticeForm.default };
    },
  },
]);
