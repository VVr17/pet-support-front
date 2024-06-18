/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import PetCard from "@/components/Pets/PetCard";
import Section from "@/components/Section";
import { useCategories } from "@/hooks/useQuery/useCategories";
import { useNotices } from "@/hooks/useQuery/useNotices";
import { ROUTES } from "@/utils/constants/routes";
import { sliceNotices } from "@/utils/sliceNotices";

import { navButtonStyles, paginationStyles } from "./styles";

const LookingHome = () => {
  const swiperRef = useRef<any>(null);

  const { data: categoriesData, isLoading: categoriesLoading } =
    useCategories();
  const { data: noticesData, isLoading: noticesLoading } = useNotices({
    categoryId: categoriesData?.data?.find(
      (category) => category.slug === "in-good-hands"
    )?.id,
  });

  const slicedNotices = sliceNotices(noticesData?.data);
  const isLoading = categoriesLoading || noticesLoading;

  const renderPaginationBullets = (_index: number, className: string) => {
    return `<div class="${className}"><div class="bullet-line"></div></div>`;
  };

  return (
    <Section bgcolor="background.secondary" textAlign="center">
      <Typography variant="h2" textAlign="center" mb={5}>
        Our friends who are
        <br />
        looking for a home
      </Typography>

      {/* Slider */}
      {!isLoading && slicedNotices.length > 0 && (
        <Box
          component={Swiper}
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
            renderBullet: renderPaginationBullets,
          }}
          spaceBetween={32}
          effect="fade"
          className="pets-swiper"
          grabCursor={true}
          mb={5}
          sx={{ maxWidth: "100%" }}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
        >
          {categoriesData?.data &&
            slicedNotices &&
            slicedNotices.map((notice) => (
              <SwiperSlide key={notice.id}>
                <PetCard pet={notice} />
              </SwiperSlide>
            ))}

          {/* Navigation */}
          <Box
            display="flex"
            gap={{ xs: 1, md: 3 }}
            maxWidth={420}
            width="100%"
            mx="auto"
            justifyContent="space-between"
            mt={{ xs: 5, md: 7.5 }}
          >
            <IconButton
              className="custom-swiper-button-prev"
              sx={navButtonStyles}
            >
              <WestIcon sx={{ color: "white" }} />
            </IconButton>
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              className="swiper-custom-pagination"
              sx={paginationStyles}
            ></Box>
            <IconButton
              className="custom-swiper-button-next"
              sx={navButtonStyles}
            >
              <EastIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      )}

      <Button
        variant="contained"
        component={Link}
        to={ROUTES.pets}
        sx={{ width: 300, maxWidth: "100%" }}
      >
        Get to know the rest
      </Button>
    </Section>
  );
};

export default LookingHome;
