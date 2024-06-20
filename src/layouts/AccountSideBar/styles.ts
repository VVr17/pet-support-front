export const mobileDrawerStyles = {
  display: { xs: "block", md: "none" },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
};

export const desktopDrawerStyles = {
  display: { xs: "none", md: "block" },

  "& .MuiPaper-root": {
    position: "static",
    bgcolor: { lg: "background.secondary" },
  },
};
