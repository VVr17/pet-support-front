// ------------- Desktop nav bar ---------------------
export const getDesktopNavLinkStyles = (type: "dark" | "light") => ({
  color: type === "light" ? "text.primary" : "text.light",
  pt: 2,
  pb: 2,
  position: "relative",
  transition: "color 0.3s ease, text-decoration-color 0.3s ease",
  "&:hover": {
    color: type === "light" ? "text.secondary" : "white",
  },
  "&:focus": {
    color: type === "light" ? "text.secondary" : "white",
  },
  "&.active": {
    color: type === "light" ? "text.secondary" : "white",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: "12px",
      width: "100%",
      height: "2px",
      backgroundColor: "primary.main",
    },
  },
});

// ----------- Mobile menu --------------------
export const mobileMenuDrawerStyles = {
  "& .MuiDrawer-paper": {
    backgroundColor: "text.secondary",
    color: "white",
    position: "fixed",
    right: 0,
    width: "100%",
    maxWidth: 320,
    py: 10,
    px: 3,
  },
};

export const closeIconButtonStyles = {
  position: "absolute",
  top: 8,
  right: 8,
  color: "white",
};

export const linkListStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  mb: 5,
};

export const mobileMenuLinkStyles = {
  color: "text.light",
  pt: 2,
  pb: 2,
  transition: "color 0.3s ease, text-decoration-color 0.3s ease",
  "&:hover": {
    color: "white",
  },
  "&:focus": {
    color: "white",
  },
  "&.active .MuiTypography-root": {
    color: "white",
    width: "fit-content",
    mx: "auto",
    position: "relative",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "primary.main",
    },
  },
};

export const mobileMenuLinkTextStyles = {
  "& .MuiTypography-root": {
    color: "inherit",
    fontSize: "1.75rem",
    textAlign: "center",
  },
};
