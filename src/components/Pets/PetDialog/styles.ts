import { Theme } from "@mui/material";

export const dialogStyles = {
  "& .MuiDialogTitle-root": { py: 2, px: 3, fontSize: "1.5rem" },
  "& .MuiDialogContent-root": { p: 3 },
  "& .MuiDialog-paper": {
    maxWidth: 800,
    maxHeight: { xs: "100%", md: "90%" },
    boxSizing: "border-box",
  },
};

export const iconButtonStyles = {
  position: "absolute",
  right: 8,
  top: 8,
  color: (theme: Theme) => theme.palette.grey[500],
};

export const cardStyles = {
  boxShadow: "none",
  borderRadius: 0,
  color: "text.secondary",
  width: "100%",
  boxSizing: "border-box",
};

export const cardWrapperStyles = {
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: { xs: 4, lg: 2 },
  mb: 4,
};

export const imgStyles = {
  width: 300,
  height: 300,
  objectFit: "cover",
  mx: "auto",
};
