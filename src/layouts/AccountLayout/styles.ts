export const wrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

export const containerStyles = {
  padding: { md: '0px !important' },
  display: 'flex',
  height: '100%',
  maxWidth: '100%',
};

export const getMainContentStyles = (
  desktopOpen: boolean,
  drawerWidth: number,
) => ({
  maxWidth: '100%',
  width: desktopOpen ? `calc(100% - ${drawerWidth}px)` : 'auto',
  flexGrow: 1,
  px: { xs: 0, md: 3 },
  py: { xs: 2, md: 3 },
});
