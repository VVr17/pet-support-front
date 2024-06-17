import { useNotices } from "@/hooks/useQuery/useNotices";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCategories } from "@/hooks/useQuery/useCategories";
import Section from "@/components/Section";

const LookingHouse = () => {
  const { data: categoriesData } = useCategories();
  const { data: noticesData } = useNotices(
    categoriesData?.data?.find((category) => category.slug === "in-good-hands")
      ?.id
  );
  console.log("data", noticesData);

  return (
    <Section bgcolor="background.secondary">
      <Typography variant="h2">
        Our friends who are looking for a house
      </Typography>

      {/* Slider */}
      <Box
        component={Swiper}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={3}
        effect="fade"
        navigation
        className="pets-swiper"
        grabCursor={true}
      >
        {categoriesData?.data &&
          noticesData?.data &&
          noticesData?.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Box>
                <Box width="auto" height={200}>
                  <CardMedia
                    component="img"
                    src={item.photoURL}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography variant="h3">{item.name}</Typography>
              </Box>
            </SwiperSlide>
          ))}
      </Box>

      <Button variant="contained">Get to know the rest</Button>
    </Section>
  );
};

export default LookingHouse;
