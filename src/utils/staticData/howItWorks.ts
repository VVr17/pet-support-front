import administration_url from '@/assets/images/howItWorks/administration.png';
import fill_out_form_url from '@/assets/images/howItWorks/fill-out-form.png';
import notices_url from '@/assets/images/howItWorks/notices.png';
import register_url from '@/assets/images/howItWorks/register.png';

import { ROUTES } from '../constants/routes';

export const howItWorksData: HowItWorksCard[] = [
  {
    imageUrl: register_url,
    title: 'Register  on the website',
    details: [
      'Sign up using email or Google authentication',
      'Complete additional profile fields',
      'Add a contact phone number',
    ],
    description:
      'This step ensures that your account is set up correctly, allowing you to proceed with creating and managing ads.',
    button: {
      title: 'Log in',
      path: ROUTES.login,
    },
  },
  {
    imageUrl: fill_out_form_url,
    title: 'Fill out the ad creation form',
    details: [
      'Provide details about the animal',
      'Select the appropriate category',
      'Upload photos of the animal',
    ],
    description:
      'This step collects all the necessary information about the animal to create a comprehensive ad that attracts potential adopters or finders.',
    button: {
      title: 'Add new notice',
      path: ROUTES.noticeForm,
    },
  },
  {
    imageUrl: administration_url,
    title: 'Admin data verification and ad posting',
    details: [
      'Admin reviews the submitted information',
      'Ad is approved and posted to the site',
      'Ad is categorized correctly',
    ],
    description:
      'Our team ensures that all ads meet the required standards and are accurately categorized to reach the right audience.',
    button: null,
  },
  {
    imageUrl: notices_url,
    title: 'Users view your ad and contact you',
    details: [
      'Ad displays animal details and contact information',
      'Interested users reach out to discuss further',
      'Facilitate connections between parties',
    ],
    description:
      'Once your ad is live, users can view the details and contact you directly to discuss adoption or finding the animal.',
    button: {
      title: 'Find pet',
      path: `${ROUTES.pets}?sort=createdAt&sortType=DESC&category=in-good-hands`,
    },
  },
];
