import { Box, Pagination, useTheme } from "@mui/material";
import React from "react";

import useResponsive from "@/hooks/useResponsive";

import { getPaginationStyles } from "./styles";

interface PaginationProps {
  count: number;
  currentPage: number;
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  count,
  currentPage,
  handleChange,
}) => {
  const isDesktop = useResponsive("up", "lg");
  const theme = useTheme();

  return (
    <Box display="flex" justifyContent="center" mt={{ xs: 3, lg: 5 }}>
      <Pagination
        count={count}
        size={isDesktop ? "medium" : "small"}
        color="primary"
        defaultPage={1}
        siblingCount={0}
        page={currentPage}
        onChange={handleChange}
        sx={getPaginationStyles(theme)}
      />
    </Box>
  );
};

export default CustomPagination;
