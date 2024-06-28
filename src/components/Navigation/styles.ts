// ------------- Desktop nav bar ---------------------
export const getDesktopNavLinkStyles = (type: 'dark' | 'light') => ({
  position: 'relative',
  pt: 2,
  pb: 2,
  transition: 'color 0.3s ease, text-decoration-color 0.3s ease',
  color: type === 'light' ? 'text.primary' : 'text.light',

  '&:hover': {
    color: type === 'light' ? 'text.secondary' : 'white',
  },
  '&:focus': {
    color: type === 'light' ? 'text.secondary' : 'white',
  },
  '&.active': {
    color: type === 'light' ? 'text.secondary' : 'white',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: '12px',
      width: '100%',
      height: '2px',
      backgroundColor: 'primary.main',
    },
  },
});

// ----------- Mobile menu --------------------
export const mobileMenuDrawerStyles = {
  '& .MuiDrawer-paper': {
    position: 'fixed',
    right: 0,
    width: '100%',
    maxWidth: 320,
    py: 10,
    px: 3,
    backgroundColor: 'text.secondary',
    color: 'white',
  },
};

export const closeIconButtonStyles = {
  position: 'absolute',
  top: 8,
  right: 8,
  color: 'white',
};

export const linkListStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  mb: 5,
};

export const mobileMenuLinkStyles = {
  pt: 2,
  pb: 2,
  transition: 'color 0.3s ease, text-decoration-color 0.3s ease',
  color: 'text.light',

  '&:hover': {
    color: 'white',
  },
  '&:focus': {
    color: 'white',
  },
  '&.active .MuiTypography-root': {
    position: 'relative',
    width: 'fit-content',
    mx: 'auto',
    color: 'white',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '2px',
      backgroundColor: 'primary.main',
    },
  },
};

export const mobileMenuLinkTextStyles = {
  '& .MuiTypography-root': {
    color: 'inherit',
    fontSize: '1.75rem',
    textAlign: 'center',
  },
};

// ----------- Account side bar navigation --------------
export const getAccountNavStyles = (fullTextShown: boolean) => {
  return {
    linkStyles: {
      minHeight: 48,
      px: 2.5,
      justifyContent: fullTextShown ? 'initial' : 'center',
    },
    iconStyles: {
      minWidth: 0,
      mr: fullTextShown ? 3 : 'auto',
      justifyContent: 'center',
    },
    textStyles: {
      opacity: fullTextShown ? 1 : 0,
    },
  };
};
