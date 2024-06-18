import { Theme } from "@mui/material";

export const getPaginationStyles = (theme: Theme) => ({
  "& .MuiPagination-ul": {
    display: "flex",
    gap: { xs: 1, lg: 2 },
  },
  "& .MuiPaginationItem-root": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  "& .MuiPaginationItem-root.Mui-disabled": {
    border: `2px solid ${theme.palette.action.disabled}`,
  },
});
