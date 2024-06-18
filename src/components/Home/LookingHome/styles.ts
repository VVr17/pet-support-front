export const navButtonStyles = {
  bgcolor: "primary.main",
  width: 44,
  height: 44,
  "&:hover": {
    bgcolor: "primary.dark",
  },
  "&:focus": {
    bgcolor: "primary.dark",
  },
  "&:disabled": {
    bgcolor: "#D9D4D1",
    opacity: 0.3,
  },
};

export const paginationStyles = {
  mx: "auto",
  justifyContent: "center",

  "& .swiper-pagination-bullet": {
    bgcolor: "primary.main",
  },

  "& .swiper-pagination-bullet.swiper-pagination-bullet-active": {
    bgcolor: "primary.dark",
  },
};
