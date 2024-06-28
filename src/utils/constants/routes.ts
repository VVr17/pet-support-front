import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import PetsIcon from '@mui/icons-material/Pets';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export const ROUTES = {
  pets: '/pets',
  partners: '/partners',
  aboutUs: '/about-us',

  login: '/login',
  signup: '/signup',

  account: '/account',
  myNotices: '/account/notices',
  myFavorites: '/account/favorites',
  myPets: '/account/pets',

  noticeForm: '/add-notice',
};

export const mainNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Find pet', href: ROUTES.pets },
  { label: 'About us', href: ROUTES.aboutUs },
  { label: 'Partners', href: ROUTES.partners },
];

export const accountNavigation = [
  { label: 'Profile', href: ROUTES.account, Icon: TextSnippetIcon },
  { label: 'My Notices', href: ROUTES.myNotices, Icon: MailIcon },
  { label: 'My Favorites', href: ROUTES.myFavorites, Icon: FavoriteIcon },
  { label: 'My Pets', href: ROUTES.myPets, Icon: PetsIcon },
];
