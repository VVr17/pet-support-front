import { Theme } from '@mui/material';

export const getToolbarStyles = (isTablet: boolean) => ({
  pl: {
    xs: '4px !important',
    sm: '12px !important',
    md: '20px !important',
  },
  pr: {
    xs: '4px !important',
    sm: '12px !important',
    md: '24px !important',
  },
  position: 'relative',
  ...(isTablet && {
    '&:after': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: '64px',
      width: '0.5px',
      height: '100%',
      bgcolor: (theme: Theme) => theme.palette.grey[300],
    },
  }),
});

export const desktopDrawerButtonStyles = {
  width: 48,
  height: 48,
  marginRight: 4,
  display: { xs: 'none', md: 'block', xl: 'none' },
  color: 'text.primary',
};

export const mobileDrawerButtonStyles = {
  width: 48,
  height: 48,
  marginRight: 1,
  display: { xs: 'block', md: 'none' },
};
