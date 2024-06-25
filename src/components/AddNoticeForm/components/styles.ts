export const appBarStyles = {
  background: 'white',
  border: 'none',
  boxShadow: 'none',
  zIndex: 100,
};

export const getToolbarStyles = (formIsInProgress: boolean) => ({
  display: 'flex',
  justifyContent: formIsInProgress ? 'space-between' : 'center',
  alignItems: 'center',
  color: 'text.primary',
});

export const labelStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const confirmationCardStyles = {
  '& .MuiAvatar-root': {
    width: { xs: 24, md: 32 },
    height: { xs: 24, md: 32 },
    transform: 'translateY(2px)',
  },
};
